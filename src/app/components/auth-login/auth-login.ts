import { Component, inject } from '@angular/core';
import { Logo } from '../logo/logo';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../service/api-service';
import { AuthService } from '../../service/auth-service';

@Component({
  selector: 'app-auth-login',
  imports: [Logo, RouterLink, ReactiveFormsModule],
  templateUrl: './auth-login.html',
})
export class AuthLogin {
  private apiService: ApiService = inject(ApiService);
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  loginForm = new FormGroup({
    email: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
  });

  onSubmit() {
    this.apiService
      .login({
        email: this.loginForm.getRawValue().email,
        senha: this.loginForm.getRawValue().password}
      )
      .subscribe({
        next: (response) => {
          this.authService.loginToken(response.token);
          this.authService.storeIdUsuario(response.idUsuario)
          console.log('Login Realizado com sucesso');
          this.router.navigate(['/home']);
        },
        error: () => {
          console.log('Não foi possível realizar o login');
        },
      });
  }
}
