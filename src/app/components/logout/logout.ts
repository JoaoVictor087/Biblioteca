import { Component, inject } from '@angular/core';
import { ApiService } from '../../service/api-service';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
})
export class Logout {
  private router = inject(Router);
  private readonly authService = inject(AuthService);

  onLogout() {
    this.authService.logout();

    this.router.navigate(['/login']);

    console.log('Usuário deslogado com sucesso');
  }
}
