import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'library_auth_token';
  token = signal<string | null>(localStorage.getItem(this.TOKEN_KEY));

  constructor() {
    effect(() => {
      const currentToken = this.token();
      if (currentToken) {
        localStorage.setItem(this.TOKEN_KEY, currentToken);
      } else {
        localStorage.removeItem(this.TOKEN_KEY);
      }
    });
  }

  loginToken(token: string) {
    this.token.set(token);
  }

  logoutToken() {
    this.token.set(null);
  }

  isAuthenticated() {
    return !!this.token();
  }

  getToken() {
    return this.token;
  }
}
