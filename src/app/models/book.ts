export class Book {

    constructor (
        public bookId: number,
        public bookTitle: string,
        public author: string,
        public genres: Array<string>,
        public haveRead: boolean,
        public series: string
    ) {}
}
