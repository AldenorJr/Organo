import { Component, input } from '@angular/core';
import { literaryGenreInterface } from '../book/bookInterfaces';
import { Book } from '../book/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-literary-genre',
  imports: [Book, CommonModule],
  templateUrl: './literary-genre.html',
  styleUrl: './literary-genre.scss'
})
export class LiteraryGenre {
  genre = input.required<literaryGenreInterface>();
}
