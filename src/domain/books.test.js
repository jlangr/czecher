import { mostExpensiveHighlyRatedBookInEachCategory } from './books.js'

describe('mostExpensiveHighlyRatedBookInEachCategory', () => {
  it('returns the most expensive highly rated book from each category', () => {
    const categories = [
      {
        category: 'Fiction',
        books: [
          { title: 'Book A', price: 20, rating: 4.5, category: 'Fiction' },
          { title: 'Book B', price: 25, rating: 4.6, category: 'Fiction' }
        ]
      },
      {
        category: 'Non-Fiction',
        books: [
          { title: 'Book C', price: 30, rating: 4.1, category: 'Non-Fiction' },
          { title: 'Book D', price: 35, rating: 4.8, category: 'Non-Fiction' }
        ]
      }
    ]

    const result = mostExpensiveHighlyRatedBookInEachCategory(categories)

    expect(result).toEqual([
      { category: 'Fiction', title: 'Book B', category: 'Fiction' },
      { category: 'Non-Fiction', title: 'Book D', category: 'Non-Fiction' }
    ])
  })

  it('excludes categories with no highly rated books', () => {
    const books = [
      {
        category: 'Fiction',
        books: [
          { title: 'Book A', price: 15, rating: 3.9, category: 'Fiction' },
          { title: 'Book B', price: 18, rating: 3.5, category: 'Fiction' }
        ]
      }
    ]

    const result = mostExpensiveHighlyRatedBookInEachCategory(books)

    expect(result).toEqual([])
  })

  it('handles categories with books having the same price and rating', () => {
    const books = [
      {
        category: 'Fiction',
        books: [
          { title: 'Book A', price: 20, rating: 4.5, category: 'Fiction' },
          { title: 'Book B', price: 20, rating: 4.5, category: 'Fiction' }
        ]
      }
    ]

    const result = mostExpensiveHighlyRatedBookInEachCategory(books)

    expect(result).toEqual([
      { category: 'Fiction', title: 'Book A' }
    ])
  })

  it('returns empty array if no books meet the criteria', () => {
    const books = [
      {
        category: 'Fiction',
        books: []
      }
    ]
    expect(mostExpensiveHighlyRatedBookInEachCategory(books)).toEqual([])
  })

  it('filters out books without titles', () => {
    const books = [
      {
        category: 'Fiction',
        books: [
          { price: 30, rating: 4.5, category: 'Fiction' },
          { title: 'Book B', price: 25, rating: 4.6, category: 'Fiction' }
        ]
      }
    ]

    const result = mostExpensiveHighlyRatedBookInEachCategory(books)

    expect(result).toEqual([{ category: 'Fiction', title: 'Book B' }])
  })
})
