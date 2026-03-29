import { Component, inject } from '@angular/core';
import { Logo } from '../logo/logo';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../service/api-service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegisterResponse } from '../../models/response/register-response';

@Component({
  selector: 'app-auth-register',
  imports: [Logo, RouterLink, ReactiveFormsModule],
  templateUrl: './auth-register.html',
})
export class AuthRegister {
  private apiService: ApiService = inject(ApiService);
  private router: Router = inject(Router);

  registerForm = new FormGroup({
    username: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
  });

  onSubmit() {
    this.apiService
      .registerUser({
        nome: this.registerForm.getRawValue().username,
        email: this.registerForm.getRawValue().email,
        senha: this.registerForm.getRawValue().password,
        role: 'ADMIN',
      })
      .subscribe({
        next: () => {
          console.log("Cadastro realizado com sucesso")
          this.router.navigate([""])
    },
        error: () => {
          console.log("Não foi possível concluir o registro de conta")
        }
      });
  }
}
