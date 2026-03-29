import { Component, inject } from '@angular/core';
import { ApiService } from '../../service/api-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgOptimizedImage } from '@angular/common';
import { AuthService } from '../../service/auth-service';
import { Reserva } from '../../models/request/reserva';


@Component({
  selector: 'app-livro',
  imports: [NgOptimizedImage],
  templateUrl: './livro.html',
})
export class Livro {
  private apiService = inject(ApiService);
  private authService = inject(AuthService);

  books = toSignal(this.apiService.getAllBooks(), { initialValue: [] });

  reserveBook(idBook: number) {
    const date = new Date()
    date.setDate(date.getDate() + 7);
    const reserva: Reserva = {
      usuarioId: this.authService.idUsuario()?.valueOf(),
      livroId: idBook,
      dataDevolucao: date,
    };
    return this.apiService.reserveBook(reserva).subscribe({
      next: () => alert('Livro reservado com sucesso!'),
      error: (err) => console.error('Reserva falhou', date),
    });
  }
}
