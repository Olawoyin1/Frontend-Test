import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
// import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";

const Footer = () => {



  const countries = [
  { name: "United States", code: "en-US", flag: "https://flagcdn.com/us.svg" },
  { name: "United Kingdom", code: "en-GB", flag: "https://flagcdn.com/gb.svg" },
  { name: "Germany", code: "de-DE", flag: "https://flagcdn.com/de.svg" },
  { name: "Kenya", code: "sw-KE", flag: "https://flagcdn.com/ke.svg" },
  { name: "India", code: "hi-IN", flag: "https://flagcdn.com/in.svg" },
];

const currencies = ["KES", "USD", "EUR", "GBP", "INR"];


  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedCurrency, setSelectedCurrency] = useState("KES");
  return (
    <footer className="pt-16 pb-8">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-4 pb-9">
        {/* 1️⃣ Help & Contact */}
        <div>
          <p className=" font-bold  mb-4">
            Need Travelsy Help?
          </p>
          <p className="mb-3 text-gray-600 text-sm">Got Questions? Call us 24/7!</p>
          <p className="font-semibold text-gray-600 text-sm">Call Us: +254 716909 815</p>
          <p className="mb-4 text-gray-600 text-sm">Email Us: info@travelsy.com</p>

          <p className="font-bold mt-6 mb-2">Contact Info:</p>
          <p className="text-sm text-gray-600">
            2nd Floor, Fedha Plaza, <br />
            Westlands, <br /> Nairobi, Kenya. <br /> <br />
            P.O Box 7231-00300<br /> Nairobi, Kenya.
          </p>

          <div className="flex gap-4 mt-6 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-[#FF5200]">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-[#FF5200]">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#FF5200]">
              <AiFillInstagram />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-[#FF5200]">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* 2️⃣ Company */}
        <div>
          <p className="font-bold mb-4">Company</p>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-[#FF5200]">About Us</a></li>
            <li><a href="#" className="hover:text-[#FF5200]">Careers</a></li>
            <li><a href="#" className="hover:text-[#FF5200]">Terms Of Use</a></li>
            <li><a href="#" className="hover:text-[#FF5200]">Privacy Statement</a></li>
            <li><a href="#" className="hover:text-[#FF5200]">Give Us Feedback</a></li>
            <li><a href="#" className="hover:text-[#FF5200]">Partner With Us</a></li>
          </ul>
        </div>

        {/* 3️⃣ Other Services */}
        <div>
          <p className="font-bold mb-4">
            Other Services & <br /> Support
          </p>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-[#FF5200]">Rewards Program</a></li>
            <li><a href="#" className="hover:text-[#FF5200]">Partners</a></li>
            <li><a href="#" className="hover:text-[#FF5200]">Legal</a></li>
            <li><a href="#" className="hover:text-[#FF5200]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#FF5200]">Customer Service Help</a></li>
          </ul>
        </div>

        {/* 4️⃣ Quick Links */}
        <div>
          <p className="font-bold mb-4">Quick Links</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-[#FF5200]">Your Account</a></li>
            <li><a href="#" className="hover:text-[#FF5200]">Camping Locations</a></li>
            <li><a href="#" className="hover:text-[#FF5200]">Activities</a></li>
            <li><a href="#" className="hover:text-[#FF5200]">Hire Equipment</a></li>
            <li><a href="#" className="hover:text-[#FF5200]">Blogs</a></li>
          </ul>
        </div>

        {/* 5️⃣ Mailing List */}
        <div className="lg:col-span-2">
          <p className="font-bold  mb-4">Mailing List</p>
          <p className="mb-4 text-sm text-gray-600">
            Sign up for our mailing list and get the latest offers and promotions
            straight in your inbox.
          </p>

          <form className="text-sm flex flex-col sm:flex-row ">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-2 border mb-2 md:mb-0 border-gray-200 text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#FF5200]"
            />
            <button
              type="submit"
              className="px-6 py-2 cursor-pointer bg-[#FF5200] text-white font-semibold  hover:bg-yellow-900 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>









     {/* 🌍 Bottom selectors section */}
      <div className="w-full border-y border-gray-200 py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* LEFT: Logo */}
          <div className="text-2xl font-semibold text-[#30797C]">Travelsy</div>

          {/* RIGHT: Payment + Selectors */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* 💳 Payment Logos */}
            <div className="flex flex-wrap justify-center items-center gap-6">
              <img src="../../Images/mpesa.png" alt="MPesa" className="h-6 object-contain" />
              <img src="../../Images/discover.png" alt="discover" className="h-6 object-contain" />
              <img src="../../Images/visa.png" alt="visa" className="h-6 object-contain" />
              <img src="../../Images/paypal.png" alt="paypal" className="h-6 object-contain" />
              <img src="../../Images/mastercard.png" alt="Mastercard" className="h-6 object-contain" />
            </div>

            {/* 🌍 Language Selector */}
            <div className="relative flex items-center gap-2 border border-gray-300 px-3 py-2  cursor-pointer hover:border-gray-500 transition min-w-[220px]">
              <img
                src={selectedCountry.flag}
                alt={selectedCountry.name}
                className="w-5 h-5 rounded-full object-cover"
              />
              <select
                value={selectedCountry.code}
                onChange={(e) =>
                  setSelectedCountry(countries.find((c) => c.code === e.target.value)!)
                }
                className="appearance-non bg-transparent text-sm text-gray-700 w-full cursor-pointer focus:outline-none"
              >
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 💱 Currency Selector */}
            <div className="relative flex items-center gap-2 border border-gray-300 px-3 py-2  cursor-pointer hover:border-gray-500 transition min-w-[100px]">
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className="appearance-noe bg-transparent text-sm text-gray-700 w-full cursor-pointer focus:outline-none"
              >
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>


      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-0 pt-10 flex flex-col md:flex-row items-center justify-between text-sm  gap-4">
        <div className="flex items-center gap-4">
          <p>Copyright © 2019 Travelsy Ltd. All rights reserved</p>
          
        </div>

        <div className="text-center md:text-right">
          <p>Made in Kenya by Ralak</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
