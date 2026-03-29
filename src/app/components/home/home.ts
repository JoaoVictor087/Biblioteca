import { Component } from '@angular/core';
import { Livro } from '../livro/livro';
import { Reservedsbooks } from '../reservedsbooks/reservedsbooks';

@Component({
  selector: 'app-home',
  imports: [Livro, Reservedsbooks],
  templateUrl: './home.html',
})
export class Home {}
