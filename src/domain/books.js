export const mostExpensiveHighlyRatedBookInEachCategory = (categories) => {
  const byPrice = (a, b) => b.price - a.price
  const highlyRated = book => book.rating > 4.0
  const hasTitle = book => !!book.title
  const categoryAndTitle = (book) =>
    ({ category: book.category, title: book.title })

  return categories.flatMap(category =>
    category.books
      .filter(hasTitle)
      .filter(highlyRated)
      .sort(byPrice)
      .map(categoryAndTitle)
      .slice(0, 1))
}

export const mostExpensiveHighlyRatedBookInEachCategory = (categories) =>
  categories.flatMap(category =>
    category.books
      .filter(book => !!book.title)
      .filter(book => book.rating > 4.0)
      .sort((a, b) => b.price - a.price)
      .map((book) =>
        ({ category: book.category, title: book.title }))
      .slice(0, 1))
