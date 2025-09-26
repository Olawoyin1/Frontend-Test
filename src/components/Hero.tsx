import { useState } from "react";

const Hero = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const options = [
    "A weekend",
    "A week",
    "A month",
    "A few days, specify.",
  ];

  const handleCheckboxChange = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <section className="w-full ">
      <div className="max-w-7xl mx-auto px-4 md:px-0 pt-9 md:pt-16 pb-8 ">
        {/* Heading */}
        <h1 className="text-4xl max-w-sm md:text-7xl font-bold text-gray-900 mb-10">
          Find An <br /> Experience
        </h1>

        {/* Paragraph */}
        <p className="text-sm max-w-[450px] text-gray-600 mb-14">To find you the best experiences, we will ask you a few questions to and show you experiences basd on your preferences.
        </p>

        {/* Question */}
        <div className="">
          <p className=" text-gray-800 mb-3">
            How much time do you have?
          </p>

          <form className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 text-left">
  {options.map((option) => (
    <label
      key={option}
      className="flex items-center space-x-3 cursor-pointer group"
    >
      <input
        type="checkbox"
        checked={selectedOptions.includes(option)}
        onChange={() => handleCheckboxChange(option)}
        className="w-5 h-5 accent-[#FF5200] cursor-pointer"
      />
      <p className="text-sm text-gray-700 group-hover:text-[#FF5200] transition">
        {option}
      </p>
    </label>
  ))}
</form>

        </div>
      </div>
    </section>
  );
};

export default Hero;
