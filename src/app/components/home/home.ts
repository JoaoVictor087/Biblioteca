import { Component } from '@angular/core';
import { Livro } from '../livro/livro';
import { Reservedsbooks } from '../reservedsbooks/reservedsbooks';
import { Logout } from '../logout/logout';

@Component({
  selector: 'app-home',
  imports: [Livro, Reservedsbooks, Logout],
  templateUrl: './home.html',
})
export class Home {}
