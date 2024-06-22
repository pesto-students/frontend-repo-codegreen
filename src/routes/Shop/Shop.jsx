import React from "react";
import Coupon from "./Coupon";
import { useUser } from "../../store/UserContext";

function Shop() {
  const coupons = [
    {
      title: "GreenEarth Cleaners",
      description: "20% off eco-friendly cleaning products",
      offer: "20% OFF",
      coinsNeeded: 50,
      code: "GE20CLEAN",
      url: "https://greenearthcleaners.com",
      image:
        "https://res.cloudinary.com/dda6ipage/image/upload/v1718848967/sample%20logos/GreenEarth_tcqujp.jpg",
    },
    {
      title: "EcoDrive Motors",
      description: "Get $1000 off on your next electric vehicle purchase",
      offer: "$1000 OFF",
      coinsNeeded: 1000,
      code: "ECODRIVE1K",
      url: "https://ecodrivemotors.com",
      image:
        "https://res.cloudinary.com/dda6ipage/image/upload/v1718848967/sample%20logos/ecodrive_l7ghqe.jpg",
    },
    {
      title: "SolarSolutions",
      description: "Save 10% on solar panel installations",
      offer: "10% OFF",
      coinsNeeded: 200,
      code: "SOLAR10",
      url: "https://solarsolutions.com",
      image:
        "https://res.cloudinary.com/dda6ipage/image/upload/v1718848967/sample%20logos/solar_solutions_vzhitu.jpg",
    },
    {
      title: "ReLeaf Paper",
      description: "Buy one get one free on all recycled paper products",
      offer: "BOGO",
      coinsNeeded: 30,
      code: "RELEAFBOGO",
      url: "https://releafpaper.com",
      image:
        "https://res.cloudinary.com/dda6ipage/image/upload/v1718848967/sample%20logos/releaf_paper_vtt48w.jpg",
    },
    {
      title: "AquaPure Filters",
      description: "15% off sustainable water filtration systems",
      offer: "15% OFF",
      coinsNeeded: 75,
      code: "AQUA15",
      url: "https://aquapurefilters.com",
      image:
        "https://res.cloudinary.com/dda6ipage/image/upload/v1718848967/sample%20logos/aquapure_filters_hngogi.jpg",
    },
    {
      title: "BioWear Fashion",
      description: "25% off your first order of sustainable clothing",
      offer: "25% OFF",
      coinsNeeded: 40,
      code: "BIO25",
      url: "https://biowearfashion.com",
      image:
        "https://res.cloudinary.com/dda6ipage/image/upload/v1718848967/sample%20logos/biowear_fashion_lq2kwf.jpg",
    },
  ];
  
  const { user } = useUser();
  return (
    <div className="flex flex-col w-full pt-[8%] md:pt-[5%] gap-10">
      <h1 className="font-semibold mt-5 ">
        {`Planting trees is rewarding! Grab your favourite coupons. You have ${ user.coins } 
        coins.`}
      </h1>
      <div className="md:grid grid-cols-3 gap-10">
        {coupons.map((coupon, index) => (
          <Coupon coupon={coupon} key={`coupon-${index}`} user={user}/>
        ))}
      </div>
    </div>
  );
}

export default Shop;
