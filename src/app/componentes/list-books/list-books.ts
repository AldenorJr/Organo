import { Component, OnInit } from '@angular/core';
import { books } from '../../mock-books';
import { BookInterface, literaryGenreInterface } from '../book/bookInterfaces';
import { LiteraryGenre } from '../literary-genre/literary-genre';

@Component({
  selector: 'app-list-books',
  imports: [LiteraryGenre],
  templateUrl: './list-books.html',
  styleUrl: './list-books.scss'
})
export class ListBooks implements OnInit {
  genres: literaryGenreInterface[] = [];
  booksPerGenre: Map<string, BookInterface[]> = new Map();

  ngOnInit(): void {
    this.booksPerGenre = new Map();
    books.forEach((book: BookInterface) => {
      const generoId = book.genre.id;
      if (!this.booksPerGenre.has(generoId)) {
        this.booksPerGenre.set(generoId, []);
      }
      this.booksPerGenre.get(generoId)?.push(book);
    });
    this.genres = Array.from(this.booksPerGenre.keys()).map(id => {
      return {
        id: id,
        value: this.booksPerGenre.get(id)?.[0].genre.value || '',
        books: this.booksPerGenre.get(id) || []
      };
    });
  }

}
