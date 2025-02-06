"use client";

import { useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import ProductCard from "./ProductCard";
import { useInView } from "react-intersection-observer";
import { useDebounce } from "@/hooks/use-debounce";
import { fetchProducts } from "@/action/product";
import { ProductSkeleton } from "./ProductCard";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

function WrapperProducts({ products }: { products: Product[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 300);
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["products", debouncedSearch],
      queryFn: ({ pageParam }) => fetchProducts(pageParam),
      initialPageParam: 1,
      initialData: {
        pages: [{ products, hasMore: true, total: 100 }],
        pageParams: [1],
      },
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.hasMore ? allPages.length + 1 : undefined;
      },
    });

  const filteredProducts =
    data?.pages
      .flatMap((page) => page.products)
      .filter((product) =>
        product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
      ) || [];

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Input
          type="search"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts && filteredProducts.length > 0 ? (
          <>
            {filteredProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {isFetchingNextPage &&
              Array.from({ length: 6 }).map((_, i) => (
                <ProductSkeleton key={`skeleton-${i}`} />
              ))}
          </>
        ) : (
          <div>No products found</div>
        )}
      </div>

      <div ref={ref} className="h-1" />
    </div>
  );
}

export default WrapperProducts;
