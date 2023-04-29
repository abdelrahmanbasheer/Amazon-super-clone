import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../slices/filterSlice";
import { useRouter } from "next/router";
import Link from "next/link";
import { selectItems } from "../slices/basketSlice";
const Header = () => {
  const fill = useSelector((state) => state.filter.filter);
  const dispatch = useDispatch();
  const router = useRouter();
  const items=useSelector(selectItems);
  return (
    <header>
      <nav className="flex items-center bg-amazon_blue p-1 flex-grow py-2 ">
        <figure className="mt-2 mr-6 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            className=" cursor-pointer "
          ></Image>
        </figure>
        <div className="hidden sm:flex items-center h-10 flex-grow">
          <input
            type="text"
            name=""
            className="rounded-l-md p-2 h-[42px] w-6 flex-grow focus:outline-none px-4 "
          />
          <SearchIcon className=" h-[42px] p-4 bg-yellow-400 hover:bg-yellow-500 cursor-pointer rounded-r-md" />
        </div>
        <div className=" text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="  link">
            <p>hello Mr Potato</p>
            <p className="font-extrabold  md:text-sm">Account & Lists</p>
          </div>
          <div className=" link ">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <Link href={"/checkout"}>
          <div className="link relative flex items-center ">
            <span className=" absolute top-0 left-8 h-4 w-4 bg-yellow-400 rounded-full text-center  text-black font-bold">
              {items?.length}
            </span>
            <ShoppingCartIcon className="h-10"></ShoppingCartIcon>
          </div>
          </Link>
        </div>
      </nav>

      {/* bottom container */}
    
      <div className="flex items-center bg-amazon_blue-light p-2 pl-6 text-white text-sm space-x-3">
        <p
          className="link flex items-center"
          onClick={() => window.location.reload()}
        >
          <MenuIcon className="h-6 mr-1 "></MenuIcon>
          All Items
        </p>
        <a
          href="https://www.primevideo.com/"
          target={"_blank"}
          className="link"
        >
          Prime Videos
        </a>
        <p className="link">Amazon Business</p>
        <p className="link">Today's deals</p>
        <a
          href="#feed"
          className="link hidden lg:inline-flex"
          onClick={() => dispatch(changeFilter("electronics"))}
        >
          Electronics
        </a>
        <a
          href="#feed"
          className="link hidden lg:inline-flex"
          onClick={() => dispatch(changeFilter("women's clothing"))}
        >
          women's clothing
        </a>
        <a
          href="#feed"
          className="link hidden lg:inline-flex"
          onClick={() => dispatch(changeFilter("men's clothing"))}
        >
          men's clothing
        </a>
      </div>
    </header>
  );
};

export default Header;
