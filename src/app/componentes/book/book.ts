import { Component, input } from '@angular/core';
import { BookInterface } from './bookInterfaces';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-book',
    imports: [CommonModule],
    templateUrl: './book.html',
    styleUrl: './book.scss'
})
export class Book {

    book = input.required<BookInterface>();

    changeFavorite() {
        this.book().favorite = !this.book().favorite;
    }

}
