"use client";
import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import Figure from "./Figure";

const FiguresCategories = ({ figures }) => {
  const [category, setCategory] = useState("all");
  const [filteredfigs, setFilteredFigs] = useState([]);
  const [price, setPrice] = useState(150);

  useEffect(() => {
    const filtered = figures.filter((figure) => {
      const categoryMatch =
        category === "all"
          ? true
          : figure.categories && figure.categories.some((categ) => categ.name === category);
      const priceMatch = figure.price <= price;
      return categoryMatch && priceMatch;
    });
   
    setFilteredFigs(filtered);
  }, [category, price, figures]);

  return (
    <section className="min-h-[1200px] py-10">
      <div className="container mx-auto">
        <div className="flex flex-col">
          {/* sidebar */}
          <aside className=" w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed">
            <RadioGroup
              defaultValue="all"
              className="flex flex-col gap-6 mb-12"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="all"
                  id="all"
                  onClick={() => setCategory("all")}
                />
                <label htmlFor="all">All</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="anime"
                  id="anime"
                  onClick={() => setCategory("anime")}
                />
                <label htmlFor="road">Anime</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="rapper"
                  id="rapper"
                  onClick={() => setCategory("rapper")}
                />
                <label htmlFor="rapper">Rapper</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="marvel comic"
                  id="marvel comic"
                  onClick={() => setCategory("marvel comic")}
                />
                <label htmlFor="marvel comic">Marvel comic</label>
              </div>
            </RadioGroup>
            {/* price slider */}
            <div className="max-w-56">
              <div className="text-lg mb-4 font-medium">
                Max Price:{" "}
                <span className="text-accent font-semibold ml-2">${price}</span>
                <span className="ml-2">
                  ({filteredfigs.length > 1
                    ? `${filteredfigs.length} items`
                    : filteredfigs.length === 0
                    ? `${filteredfigs.length} items`
                    : `${filteredfigs.length} item`})
                </span>
              </div>
              <Slider
                defaultValue={[150]}
                max={150}
                step={1}
                onValueChange={(val) => setPrice(val[0])}
              />
            </div>
          </aside>
          {/* figure list */}
          <div className=" w-full xl:w-[1050px] ml-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
              {filteredfigs.map((figure) => {
                return <Figure figure={figure} key={figure.price_id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiguresCategories;
