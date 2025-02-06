# Product Showcase Application Documentation

## Overview

A modern product showcase application built with Next.js, featuring infinite scrolling, real-time search, and responsive design. The application demonstrates efficient data handling with React Query and modern UI/UX practices.

## Architecture

### Key Components

1. **Landing Page** (`app/page.tsx`)

   - Modern welcome screen with animated background
   - Direct link to product showcase
   - Responsive design with dark mode support

2. **Product List** (`app/product-task/WrapperProducts.tsx`)

   - Infinite scrolling implementation
   - Real-time search functionality
   - Responsive grid layout
   - Loading states with skeletons

3. **Header Component** (`app/_components/shared/HeaderPage.tsx`)
   - Persistent navigation
   - Dark mode toggle
   - Responsive design

### Data Flow

1. **Initial Data Loading**

   - Server-side initial product fetch
   - Data passed to client component as initial state
   - React Query handles subsequent data fetching

2. **Search Implementation**
   - Debounced search input
   - Client-side filtering
   - Real-time updates

## Features

### 1. Infinite Scrolling

```typescript
const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
  queryKey: ["products", debouncedSearch],
  queryFn: ({ pageParam }) => fetchProducts(pageParam),
  // ... configuration
});
```

### 2. Real-time Search

```typescript
const debouncedSearch = useDebounce(searchQuery, 300);
// Filter products based on search query
const filteredProducts = data?.pages
  .flatMap((page) => page.products)
  .filter((product) =>
    product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );
```

### 3. Responsive Design

- Grid layout adapts to screen size:

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
```

### 4. Loading States

- Skeleton loading for better user experience:

```typescript
{
  isFetchingNextPage &&
    Array.from({ length: 6 }).map((_, i) => (
      <ProductSkeleton key={`skeleton-${i}`} />
    ));
}
```

## UI Components

1. **Product Card**

   - Image with loading state
   - Title with line clamping
   - Price display
   - Responsive layout

2. **Search Bar**

   - Sticky positioning
   - Real-time input handling
   - Clear visual feedback

3. **Navigation**
   - Back button
   - Dark mode toggle
   - Consistent styling

## Performance Considerations

1. **Image Optimization**

   - Next.js Image component for optimal loading
   - Lazy loading implementation
   - Proper sizing and formats

2. **Data Fetching**

   - Server-side initial data
   - Efficient pagination
   - Debounced search queries

3. **UI Performance**
   - Skeleton loading states
   - Smooth animations
   - Optimized re-renders

## Styling

The application uses a combination of:

- Tailwind CSS for utility-first styling
- CSS variables for theming
- Custom animations for enhanced UX
- Dark mode support

## Future Improvements

1. **Potential Enhancements**

   - Advanced filtering options
   - Sort functionality
   - Product details page
   - Shopping cart integration

2. **Performance Optimizations**
   - Image caching strategies
   - Advanced prefetching
   - Bundle size optimization

## Conclusion

This product showcase application demonstrates modern web development practices with Next.js, combining efficient data handling with an engaging user interface. The architecture ensures scalability and maintainability while providing a smooth user experience.
