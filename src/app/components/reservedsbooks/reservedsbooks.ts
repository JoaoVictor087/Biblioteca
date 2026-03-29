import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ApiService } from '../../service/api-service';
import { AuthService } from '../../service/auth-service';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { ReservaResponse } from '../../models/response/reserva';

@Component({
  selector: 'app-reservedsbooks',
  imports: [NgOptimizedImage, DatePipe],
  templateUrl: './reservedsbooks.html',
})
export class Reservedsbooks {
  private readonly apiService = inject(ApiService);
  private readonly authService = inject(AuthService);

  reservedBooks = toSignal(
    this.apiService.getReservedBooks(Number(this.authService.getIdUsuario()())),
    { initialValue: [] as ReservaResponse[] },
  );

  devolverLivro(idReserva: number, reserva: ReservaResponse) {
    return this.apiService
      .devolverLivro(idReserva, reserva)
      .subscribe({
        next: () => alert('Livro devolvido!'),
        error: (err) => console.error('Reserva falhou', err),
      });
  }
}
