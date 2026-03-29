import { Component, inject } from '@angular/core';
import { required } from '@angular/forms/signals';
import { ApiService } from '../../service/api-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-livro',
  imports: [NgOptimizedImage],
  templateUrl: './livro.html',
})
export class Livro {
  private apiService = inject(ApiService);

  books = toSignal(this.apiService.getAllBooks(), { initialValue: [] });
}
