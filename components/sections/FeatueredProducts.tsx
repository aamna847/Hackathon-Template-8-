import React from 'react'
import ProductCard from '../ui/ProductCard'
import { inter } from '@/app/fonts'
import { ProductCards, ProductsSectionProps } from '@/typing'
import {client} from '@/sanity/lib/client'


const FeatueredProducts = async ({ limit }: ProductsSectionProps) => {

  const query = `*[_type == "products"]{
    price,
    image,
    slug,
    title,
  }`
  const products = await client.fetch(query);
  console.log(products);

  const displayedProducts = limit ? products.slice(0, limit) : products;
  console.log(displayedProducts);
  return (
    <section className={`${inter.className} pt-16`}>
    <h2 className='heading text-center px-2 xl:text-left xl:px-0'>Featured Products</h2>
    <div className='grid grid-cols-1 sm:grid-cols-[auto,auto] md:grid-cols-[auto,auto,auto] lg:grid-cols-[auto,auto,auto,auto] px-10 xl:px-0 gap-5'>
        {/* Map over products and pass each product to ProductCard */}
        {displayedProducts.map((product: ProductCards, index: number) => (
          <ProductCard key={index} product={product} />
        ))}

    </div>
    </section>
  )
}

export default FeatueredProducts