import Breadcrumbs from "../components/Breadcrumbs.jsx";
import natCap from "../assets/images/natcat.webp";
import startupDay from "../assets/images/us_tw_startup_day.png"
import yosemite from "../assets/images/yosemite.png"
import leed from "../assets/images/LEED_GreenAssociate.png"
import sdgs from "../assets/images/SDGs.png"


export default function About() {
  return (
    <section className="px-10 md:px-16 pt-6">
      {/* Breadcrumbs */}
      <div className="text-2xl font-bold mb-10">
        <Breadcrumbs />
      </div>

      {/* Page Title */}
      <div className="text-2xl font-semibold mb-10">
        About Me <span className="text-gray-500">| Life Outside Work</span>
      </div>
      
      {/* Description */}
     <div className="flex flex-col mb-8 mx-0 md:mx-12 lg:mx-36">
       
        {/* First Section */}
        <div className="mb-6 mt-8">
        <p className="text-lg font-semibold underline decoration-wavy decoration-2 underline-offset-4 decoration-yellow-500 hover:decoration-yellow-400 pb-6">Community Work & Outdoor Adventures</p>
        In my free time, I enjoy volunteering to support science outreach events and to help foster warm, welcoming local communities. I also love nature and enjoy exploring national parks, learning about local wildlife, and observing animals thriving in their natural habitats. Every encounter with wildlife brings me genuine joy and leaves a lasting impression.

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
    
            <img
              src={natCap}
              alt="Natural Capital Symposium"
              className="w-full h-auto object-cover rounded-xl"
            />
            <img
              src={yosemite}
              alt="Yosemite National Park"
              className="w-full h-auto object-cover rounded-xl"
            />
            <img
              src={startupDay}
              alt="U.S Taiwan Startup Day"
              className="w-full h-auto object-cover rounded-xl"
            />
        </div>
        </div>

        {/* Second Section */}
        <div className="mt-16">
            <p className="text-lg font-semibold underline decoration-wavy decoration-2 underline-offset-4 decoration-lime-500 hover:decoration-lime-400 pb-6">Sustainability Advocate</p>
            As an advocate for sustainable living, I promote green growth, responsible consumption, and green architecture that harmonizes with nature. 
                
            To contribute to United Nations' Sustainable Development Goals, I earned certifications (ISO 14064 & ISO 14067) as a <span className="font-semibold underline decoration-solid decoration-2 underline-offset-4 decoration-lime-800 hover:decoration-lime-700 text-lime-800">Greenhouse Gas Accounting and Verification Specialist </span> and a <a href="https://www.usgbc.org/credentials/leed-green-associate" target="_blank" className="font-semibold underline decoration-solid decoration-2 underline-offset-4 decoration-lime-800 hover:decoration-lime-700 text-lime-800">LEED Green Associate</a>, equipping me to support organizations in their low-carbon transition journeys. Each year, whenever possible, I volunteer as a reviewer for the Taiwan Institute for Sustainable Energy (TAISE), assessing the quality of corporate sustainability reports and offering recommendations that help companies strengthen their sustainability practices.

        <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
            <img
              src={sdgs}
              alt="THE 17 GOALS | Sustainable Development"
              className="w-full h-auto object-cover rounded-xl"
            />
            <img
              src={leed}
              alt="LEED Green Associate"
              className="w-full h-auto object-cover rounded-xl"
            />
        </div>

        </div>

     </div>



    </section>
  );
}
