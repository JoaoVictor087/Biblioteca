import { Component } from '@angular/core';
import { Livro } from '../livro/livro';

@Component({
  selector: 'app-home',
  imports: [Livro],
  templateUrl: './home.html',
})
export class Home {}
