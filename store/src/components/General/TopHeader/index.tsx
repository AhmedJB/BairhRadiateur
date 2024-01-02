import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/router";

type Props = {};

const TopHeader = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const submitSearch = (e : React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();
	const old_path = router.pathname;
	router.push(`/products?s=${searchTerm}`).then(() => {
		if (old_path === "/products"){
			router.reload();
		}
	})
	
  };

  return (
    <div className="w-full bg-lightWhite">
      <div className="mx-auto flex w-full items-center justify-between px-4 xl:container ">
        <div className="hidden items-center p-4 lg:flex">
          <div className="promoBG -rotate-3 px-4 text-lg font-semibold text-white">
            5%
          </div>
          <span className="text-md mx-2 font-semibold tracking-widest text-mainBlack">
            500dh*
          </span>
          <span className="text-md font-light">Coupon Code :</span>
          <span className="text-md mx-2 font-semibold tracking-widest text-mainBlack">
            BAIRHRAD
          </span>
        </div>
        <form onSubmit={submitSearch}>
          <div className="mx-auto flex w-[400px] items-center rounded-[15px] border-2 border-gray bg-white lg:mx-0">
            <input
              type="text"
              className="w-full rounded-xl  py-1 px-2 text-[0.9em] font-light text-mainBlack outline-none"
              onChange={handleInputChange}
              value={searchTerm}
            />
            <AiOutlineSearch className="mx-3 text-lg" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TopHeader;
