import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'lib_token_key';
  private readonly USERID_KEY = 'lib_userid';
  token = signal<string | null>(localStorage.getItem(this.TOKEN_KEY));
  idUsuario = signal<number | null>(
    localStorage.getItem(this.USERID_KEY) ? Number(localStorage.getItem(this.USERID_KEY)) : null,
  );

  constructor() {
    effect(() => {
      const t = this.token();
      const id = this.idUsuario();

      if (t) localStorage.setItem(this.TOKEN_KEY, t);
      else localStorage.removeItem(this.TOKEN_KEY);

      if (id) localStorage.setItem(this.USERID_KEY, id.toString());
      else localStorage.removeItem(this.USERID_KEY);
    });
  }

  storeIdUsuario(id: number) {
    this.idUsuario.set(id);
  }
  getIdUsuario() {
    return this.idUsuario;
  }

  loginToken(token: string) {
    this.token.set(token);
  }

  logout() {
    this.token.set(null);
    this.idUsuario.set(null);
  }

  isAuthenticated() {
    return !!this.token();
  }
}
