export interface BookInterface {
    title: string;
    author: string;
    favorite: boolean;
    image: string;
    genre: literaryGenreInterface;
}

export interface literaryGenreInterface {
    id: string;
    value: string;
    books: BookInterface[];
}