import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export function ProductSkeleton() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <Skeleton className="w-full h-48 rounded-lg" />
        <Skeleton className="h-4 w-3/4 mt-4" />
      </CardHeader>
      <CardContent className="flex-1">
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-1/2" />
      </CardContent>
    </Card>
  );
}

const ProductCard = ({ product }: { product: Product }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="relative w-full h-48">
          {isLoading && <Skeleton className="absolute inset-0 rounded-lg" />}
          <Image
            src={product.image}
            alt={product.title}
            fill
            loading="lazy"
            className={`object-contain transition-opacity duration-300 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoadingComplete={() => setIsLoading(false)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardTitle className="text-lg line-clamp-2">{product.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-gray-600 line-clamp-3 mb-4">{product.description}</p>
        <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
