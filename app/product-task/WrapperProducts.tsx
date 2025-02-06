"use client";

import { useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import ProductCard from "./ProductCard";
import { useInView } from "react-intersection-observer";
import { useDebounce } from "@/hooks/use-debounce";
import { fetchProducts } from "@/action/product";
import { ProductSkeleton } from "./ProductCard";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } =
    useInfiniteQuery({
      queryKey: ["products", debouncedSearch],
      queryFn: ({ pageParam = 1 }) =>
        fetchProducts(pageParam, 10, debouncedSearch),
      initialPageParam: 1,
      initialData: {
        pages: [{ products, hasMore: true, total: 100 }],
        pageParams: [1],
      },
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.hasMore ? allPages.length + 1 : undefined;
      },
    });

  useEffect(() => {
    setTimeout(() => {
      refetch();
    }, 10);
  }, [debouncedSearch, refetch]);

  const filteredProducts = data?.pages.flatMap((page) => page.products) || [];

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <div className="h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center px-4 gap-4">
          <Link
            href="/"
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <Input
            type="search"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md"
          />
          <ModeToggle />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
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
