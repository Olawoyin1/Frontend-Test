



import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";

interface GalleryItem {
  id: number;
  image: string;
  text: string;
}

const initialGalleryData: GalleryItem[] = [
  { id: 1, image: "../../Images/one.png", text: "Rafting" },
  { id: 2, image: "../../Images/two.png", text: "Nature Walk" },
  { id: 3, image: "../../Images/three.png", text: "Bike Riding" },
  { id: 4, image: "../../Images/four.png", text: "Bungee Jumping" },
  { id: 5, image: "../../Images/five.png", text: "Wine Tasting" },
  { id: 6, image: "../../Images/six.png", text: "Coffee Tasting" },
  { id: 7, image: "../../Images/seven.png", text: "Farm Visit" },
  { id: 8, image: "../../Images/eight.png", text: "Camping" },
  { id: 9, image: "../../Images/nine.png", text: "Kibera Tour" },
];

const Gallery: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([2, 7, 8]);

  const toggleCheck = (id: number) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full px-4 pb-12">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm mb-7">What are your interests?</p>

        {/* ✅ Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Row 1 */}
          <GalleryCard
            item={initialGalleryData[0]}
            span="lg:col-span-2"
            checked={checkedItems.includes(1)}
            onClick={() => toggleCheck(1)}
          />
          <GalleryCard
            item={initialGalleryData[1]}
            checked={checkedItems.includes(2)}
            onClick={() => toggleCheck(2)}
          />

          {/* Row 2 */}
          <GalleryCard
            item={initialGalleryData[2]}
            checked={checkedItems.includes(3)}
            onClick={() => toggleCheck(3)}
          />
          <GalleryCard
            item={initialGalleryData[3]}
            checked={checkedItems.includes(4)}
            onClick={() => toggleCheck(4)}
          />
          <GalleryCard
            item={initialGalleryData[4]}
            checked={checkedItems.includes(5)}
            onClick={() => toggleCheck(5)}
          />

          {/* Row 3 */}
          <GalleryCard
            item={initialGalleryData[5]}
            checked={checkedItems.includes(6)}
            onClick={() => toggleCheck(6)}
          />
          <GalleryCard
            item={initialGalleryData[6]}
            span="lg:col-span-2"
            checked={checkedItems.includes(7)}
            onClick={() => toggleCheck(7)}
          />

          {/* Row 4 */}
          <GalleryCard
            item={initialGalleryData[7]}
            span="lg:col-span-2"
            checked={checkedItems.includes(8)}
            onClick={() => toggleCheck(8)}
          />
          <GalleryCard
            item={initialGalleryData[8]}
            checked={checkedItems.includes(9)}
            onClick={() => toggleCheck(9)}
          />
        </div>
      <button className="px-15 my-10 py-2 bg-[#FF5200] text-white flex items-center gap-2  hover:bg-blue-700 transition cursor-pointer">
                  
                  Set
                </button>
      </div>

    </section>
  );
};

export default Gallery;

interface CardProps {
  item: GalleryItem;
  span?: string;
  checked: boolean;
  onClick: () => void;
}

const GalleryCard: React.FC<CardProps> = ({ item, span, checked, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer overflow-hidden h-64 transition transform group ${
        span || ""
      }`}
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.text}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 hover:scale-[1.02] "
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 transition-colors duration-300 ${
          checked ? "bg-[#FF5200]/70" : "bg-black/30 hover:bg-black/50"
        }`}
      ></div>

      {/* ✅ Always show text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        {checked && (
          <div className=" p-2 ">
            <FiCheck className="w-6 h-6 text-white" />
          </div>
        )}
        <h6 className="text-lg font-semibold">{item.text}</h6>
      </div>

      
    </div>
  );
};
