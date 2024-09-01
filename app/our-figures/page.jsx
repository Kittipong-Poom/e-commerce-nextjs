'use client'
import { client } from "@/app/lib/sanity";
import FiguresCategories from "@/components/FiguresCategories";
import { useEffect } from "react";
const getData = async () => {
  const query = `*[_type == 'product' ] {
    _id,
    name,
    description,
    images,
    price,
    price_id ,
    "slug": slug.current,
    "categories": categories[]-> {name}
  }`;

  const data = await client.fetch(query);
  return data;
};

const OurFigures = async () => {
  useEffect(() => {
    document.title = "Our Figures";
  }, []);
  const figures = await getData();
  return (
    <div>
      <FiguresCategories figures={figures} />
    </div>
  );
};

export default OurFigures;
