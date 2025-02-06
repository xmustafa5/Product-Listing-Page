'use server'

interface Product {
  id: number
  title: string
  price: number
  description: string
  image: string
}

const mockProducts: Product[] = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  title: `Product ${index + 1}`,
  price: Math.floor(Math.random() * 1000) + 1,
  description: `Description for product ${index + 1}. This is a mock product description.`,
  image: `https://picsum.photos/seed/${index + 1}/400/400`,
}))

export async function fetchProducts(page: number = 1, limit: number = 12) {
  // Simulate server delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const start = (page - 1) * limit
  const end = start + limit
  const paginatedProducts = mockProducts.slice(start, end)

  return {
    products: paginatedProducts,
    hasMore: end < mockProducts.length,
    total: mockProducts.length
  }
}