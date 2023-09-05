/* buscando dados Array */

const booksByCategory = [
    {
        category: "riqueza",
        books: [
            {
                title: "os segredos da mente milionária",
                author: "T.Harv Eker",
            },
            {
                title: "o homem mais ricp da babilônia",
                author: "George S. Clason",
            },
            {
                title: "pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            }
        ],
    },
    {
        category: "Inteligência emocional",
        books:[
            {
                title: "você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            }
        ],
    }
];

const totalCategorias = booksByCategory.length

for(let category of booksByCategory) {
    console.log("total de livros da categoria:", category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];
    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log("total de autores", authors.length)
}

countAuthors();

function booksOfAuthor(author) {
    let books = [];
    
    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }

    console.log(`livro de autor ${author}: ${books.join(", ")} `)
}

booksOfAuthor('George S. Clason')