import React from "react";

const PriceCard = ({ title, skill, price, duration, reach, hours, onClick }) => {
  return (
    <>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> */}
        <div className="group">
            {/* Header */}
            <p className="flex items-center justify-center text-xl font-semibold h-20 bg-[#616161] lg:bg-[#414141] lg:group-hover:bg-[#616161] transition">
                {title}
            </p>

            {/* Features */}
            <p className="flex items-center justify-center text-base text-black h-14 border-b bg-[#ebebeb] lg:bg-[#919191] lg:group-hover:bg-[#ebebeb] transition">
                {skill}
            </p>

            {/* Reach  */}
            <p className="flex items-center justify-center text-base text-black h-14 border-b bg-[#ebebeb] lg:bg-[#919191] lg:group-hover:bg-[#ebebeb] transition">
                {reach}
            </p>

            {/* Reach  */}
            <p className="flex items-center justify-center text-base text-black h-14 border-b bg-[#ebebeb] lg:bg-[#919191] lg:group-hover:bg-[#ebebeb] transition">
                {hours}
            </p>

            {/* Price */}
            <div
                className="flex flex-col items-center justify-center text-black h-20 border-b bg-[#ebebeb] lg:bg-[#919191] lg:group-hover:bg-[#ebebeb] transition">
                <p className="text-lg">{price}</p>
                <p>{duration}</p>
            </div>

            {/* Button area */}
            <div className="flex justify-center items-center h-20 bg-[#ababab] lg:bg-[#818181] lg:group-hover:bg-[#ababab] transition">
                <button 
                    className="text-black text-sm px-6 py-3 bg-[#919191] hover:bg-black hover:text-white transition cursor-pointer"
                    onClick={onClick}
                >
                Sign up
                </button>
            </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default PriceCard;
