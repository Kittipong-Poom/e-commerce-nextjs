'use client'

import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import AddToCartBtn from "@/components/AddToCartBtn";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BaggageClaim,
  Clock,
  PackageCheck,
  RefreshCw,
  ChevronLeft,
} from "lucide-react";

// Fetch product data based on slug
const getData = async (slug) => {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0] {
    _id,
    images,
    price,
    price_id,
    name,
    description,
    "slug": slug.current,
    "category": categories->{name}
  }`;
  const data = await client.fetch(query);
  return data;
};

const ProductDetails = ({ params }) => {
  const [figure, setFigure] = useState(null);

  useEffect(() => {
    // Fetch data and update the document title
    const fetchData = async () => {
      const data = await getData(params.slug);
      setFigure(data);
      if (data?.name) {
        document.title = data.name; // Set document title to the product name
      }
    };

    fetchData();
  }, [params.slug]);

  if (!figure) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }

  return (
    <section className="pt-24 pb-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-14">
          {/* img */}
          <div
            className="xl:flex-1 h-[460px] bg-primary/5 xl:w-[700px] xl:h-[540px]
          flex justify-center items-center"
          >
            <Image
              src={urlFor(figure.images[0]).url()}
              width={473}
              height={290}
              priority
              alt={figure.name} // Set alt text to the product name
            />
          </div>
          {/* text */}
          <div
            className="flex-1 flex flex-col 
          justify-center items-start gap-10"
          >
            <Link href="/our-figures" className="flex items-center gap-2 font-semibold">
              <ChevronLeft size={20} />
              Back to Our Figures
            </Link>
            <div className="flex flex-col gap-6 items-start">
              <div>
                <h3>{figure.name}</h3>
                <p className="text-lg font-semibold">${figure.price}</p>
              </div>
              <p>{figure.description}</p>
              <AddToCartBtn
                price_id={figure.price_id}
                name={figure.name}
                currency="USD"
                description={figure.description}
                images={figure.images}
                price={figure.price}
                text="Add to cart"
                btnStyles="btn btn-accent"
              />
            </div>
            {/* info */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <PackageCheck size={20} className="text-accent" />
                <p>Free shipping on orders over $130</p>
              </div>
              <div className="flex gap-2">
                <RefreshCw size={20} className="text-accent" />
                <p>Free return for 30 days</p>
              </div>
              <div className="flex gap-2">
              <BaggageClaim  size={20} className="text-accent" />
                <p>
                Figures are part of the spiritual value.
                </p>
              </div>
              <div className="flex gap-2">
                <Clock size={20} className="text-accent" />
                <p>Fast delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;