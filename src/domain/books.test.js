

const books = [
  {
    "category": "Science Fiction",
    "books": [
      { "title": "Book A", "price": 15.99, "rating": 4.5 },
      { "title": "Book B", "price": 18.99, "rating": 3.8 }
    ]
  },
  {
    "category": "Romance",
    "books": [
      { "title": "Shlock A", "price": 19.99, "rating": 3.0}
    ]
  },
  {
    "category": "Fantasy",
    "books": [
      { "title": "Book C", "price": 20.99, "rating": 4.9 },
      { "title": "Book D", "price": 24.99, "rating": 4.2 }
    ]
  },
  {
    "category": "Non-Fiction",
    "books": [
      { "title": "Book E", "price": 29.99, "rating": 4.6 },
      { "title": "Book F", "price": 9.99, "rating": 3.5 }
    ]
  }
];

const OKmostExpensiveHighlyRatedBookInEachCategory = (books) => {
  const result = books.flatMap(category => {
    return category.books
      .filter(book => book.rating > 4.0)
      .sort((a, b) => b.price - a.price)
      .find(() => true)
      .map(book => ({ category: category.category, title: book.title
      }));
  }).filter(result => result.title !== null);
  return result
}

const mostExpensiveHighlyRatedBookInEachCategory = books => {
  const byPrice = (a, b) => b.price - a.price
  const highlyRated = book => book.rating > 4.0
  const hasTitle = book => book.title !== null
  // const hasTitle = book => {
  //   if (book.title !== null) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  const categoryAndTitle = (book, category) =>
    ({ category: category.category, title: book.title })
  const firstOrDefault = (arr, defaultValue) => (arr.length > 0 ? arr[0] : defaultValue)

  return books.flatMap(category =>
    firstOrDefault(category.books
        .filter(highlyRated)
        .sort(byPrice)
        .map(book => categoryAndTitle(book, category)),
      []))
    .filter(hasTitle)
}

describe('average price', () => {
  it('x', () => {
    expect(mostExpensiveHighlyRatedBookInEachCategory(books)).toEqual([
      { 'category': 'Science Fiction', 'title': 'Book A' },
      { 'category': 'Fantasy', 'title': 'Book D' },
      { 'category': 'Non-Fiction', 'title': 'Book E' }]
    )
  })
})