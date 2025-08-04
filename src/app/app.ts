import { Component, signal } from '@angular/core';
import { Header } from "./componentes/header/header";
import { Footer } from "./componentes/footer/footer";
import { ListBooks } from './componentes/list-books/list-books';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, ListBooks],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('organo');
}
