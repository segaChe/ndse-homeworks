const { v4: uuid } = require('uuid');

export default class Book {
    constructor (
        {
            title,
            authors,
            description = '',
            favorite = '',
            fileCover = '',
            fileName = '',
        },
        id = uuid(),
    ) {
        this.id          = id;
        this.title       = title;
        this.description = description;
        this.authors     = authors;
        this.favorite    = favorite;
        this.fileCover   = fileCover;
        this.fileName    = fileName;

    }
}
