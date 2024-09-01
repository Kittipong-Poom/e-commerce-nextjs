import { client } from "@/app/lib/sanity";
import Link from "next/link";
import PopularFigureCarousel from "./PopularFigureCarousel";
//get data

const getData = async () => {
  const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'popular']._id, categories)] {
    _id,
    name,
    description,
    images,
    price,
    price_id ,
    "slug": slug.current,
    "categories": categories[]->{
    name
    }
}`;
  const data = await client.fetch(query);
  return data;
};
const PopularFigure = async () => {
  const figures = await getData();
 
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-center">Most Popular Figures</h2>
        <p className="text-center mb-[30px]">
          The World's Premium Brands In one Destination
        </p>
        <PopularFigureCarousel figures={figures} />
        <Link href="/our-figures">
          <button className="btn btn-accent mx-auto">See all Figures</button>
        </Link>
      </div>
    </section>
  );
};

export default PopularFigure;
