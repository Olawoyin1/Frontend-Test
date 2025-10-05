// import React from "react";
// import { MdOutlineArrowBackIos , MdOutlineArrowForwardIos} from "react-icons/md";


// interface Testimonial {
//   id: number;
//   title: string;
//   text: string;
//   name: string;
//   image: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     title: "Best User Experience",
//     text: "Because the rock was laid down in layers, there is a variation in the hardness of the rock formed. When water runoff trickles across the rock, some areas erode rapidly whereas others hold firm. This variation in erosion speed causes the formation of pinnacles, or “hoodoos” of stable rock.",
//     name: "Derek Dunn",
//     image: "../../Images/test1.png",
//   },
//   {
//     id: 2,
//     title: "Friendly Staff",
//     text: "Whether it’s a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation. It’s also big tour business and there are many options.",
//     name: "Derek Dunn",
//     image: "../../Images/test2.png",
//   },
// ];

// const Testimonials: React.FC = () => {
//   return (
//     <section className="w-full px-4 md:px-0 py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          
//           {/* Left box - No background */}
//           <div className="flex flex-col p-7 md:p-0  md:justify-between">
            
//               <p className="uppercase text-sm tracking-widest text-gray-500 mb-8 md:mb-0">
//                 Testimonials
//               </p>
//               <h2 className="max-w-md text-5xl font-bold ">
//                 What <br /> customers <span className="text-[#FF5200]"> <br /> say about us.</span>
//               </h2>
            

//             {/* Arrows */}
//             <div className="hidden md:flex items-center w-fit bg-white gap-4 mt-8">
//               <button className="w-10 h-10 flex items-center justify-center  border-gray-300  hover:bg-gray-200 transition">
//                 <MdOutlineArrowBackIos />
//               </button>
//               /
//               <button className="w-10 h-10 flex items-center justify-center  border-gray-300  hover:bg-gray-200 transition">
//                 <MdOutlineArrowForwardIos />
            
//               </button>
//             </div>
//           </div>

//           {/* Middle & Right boxes */}
//           {testimonials.map((t) => (
//             <div
//               key={t.id}
//               className="bg-white shadow-sm p-8 flex flex-col justify-between"
//             >
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                   {t.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed text-[15px]">{t.text}</p>
//               </div>

//               {/* Footer: Image + Name */}
//               <div className="flex items-center gap-3 mt-8">
//                 <img
//                   src={t.image}
//                   alt={t.name}
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//                 <div>
//                   <p className="font-semibold text-gray-800">{t.name}</p>
//                 </div>
//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;



import React, { useRef } from "react";
import Slider from "react-slick";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

interface Testimonial {
  id: number;
  title: string;
  text: string;
  name: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    title: "Best User Experience",
    text: "Because the rock was laid down in layers, there is a variation in the hardness of the rock formed. When water runoff trickles across the rock, some areas erode rapidly whereas others hold firm. This variation in erosion speed causes the formation of pinnacles, or “hoodoos” of stable rock.",
    name: "Derek Dunn",
    image: "../../Images/test1.png",
  },
  {
    id: 2,
    title: "Friendly Staff",
    text: "Whether it’s a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation. It’s also big tour business and there are many options.",
    name: "Derek Dunn",
    image: "../../Images/test2.png",
  },
  {
    id: 3,
    title: "Amazing Service",
    text: "They went above and beyond to ensure my satisfaction. I will definitely recommend them to friends and family.",
    name: "Sarah Lee",
    image: "../../Images/test1.png",
  },
];

const Testimonials: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 600,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   arrows: false, // we'll use custom arrows
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };

  const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false, // we'll use custom arrows
  responsive: [
    {
      breakpoint: 1024, // tablets and below
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // mobile landscape and below
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // small mobile screens
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false, // optional
      },
    },
  ],
};


  return (
    <section className="w-full px-4 md:px-0 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {/* Left box */}




          <div className="flex flex-col p-7 md:p-0  md:justify-between">
            
              <p className="uppercase text-sm tracking-widest text-gray-500 mb-8 md:mb-0">
                Testimonials
              </p>
              <h2 className="max-w-md text-5xl font-bold ">
                What <br /> customers <span className="text-[#FF5200]"> <br /> say about us.</span>
              </h2>
            

            {/* Arrows */}
            <div className="hidden md:flex items-center w-fit bg-white gap-4 mt-8">
              <button onClick={() => sliderRef.current?.slickPrev()} className="w-10 h-10 flex items-center justify-center  border-gray-300  hover:bg-gray-200 transition">
                <MdOutlineArrowBackIos />
              </button>
              /
              <button onClick={() => sliderRef.current?.slickNext()} className="w-10 h-10 flex items-center justify-center  border-gray-300  hover:bg-gray-200 transition">
                <MdOutlineArrowForwardIos />
            
              </button>
            </div>
          </div>


          {/* Slider */}
          <div className="md:col-span-2 ">
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((t) => (
                <div key={t.id} className="px-4">
                  <div 
                  className="bg-white shadow-sm border border-gray-200 min-h-[370px]  p-8 flex  flex-col  justify-between"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        {t.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-[15px]">
                        {t.text}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-8">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-800">{t.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
