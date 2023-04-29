import { useQuery } from "@tanstack/react-query";
import React from "react";
import Header from "../../components/Header";
import ReactLoading from "react-loading";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../slices/basketSlice";
import { useRouter } from "next/router";
import { StarIcon } from "@heroicons/react/solid";
import Link from "next/link";
const SingleProduct = () => {
  const router = useRouter();
  const { id } = router.query;
  const { isLoading, error, data } = useQuery({
    queryKey: ["getProduct"],
    queryFn: () =>
      fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
        res.json()
      ),
  });
  const similarQuery = useQuery({
    queryKey: ["getSimilar"],
    queryFn: () =>
      fetch(`https://fakestoreapi.com/products/category/${data.category}`).then((res) =>
        res.json()
      ),
  });
  console.log(similarQuery.data)
  const dispatch = useDispatch();
  if (isLoading)
    return (
      <div>
        <Header></Header>
        <img
          src="https://m.media-amazon.com/images/I/3107ZnVUguL.jpg"
          alt=""
          className="items-center mx-auto p-4"
        />
        <ReactLoading
          type="spin"
          color="#0D203A"
          className="mx-auto"
        ></ReactLoading>
      </div>
    );
  if (error) {
    <h1>{error}</h1>;
  }

  return (
    <div className="bg-gray-100 h-full">
      <Header></Header>
      <img
        src="https://m.media-amazon.com/images/I/3107ZnVUguL.jpg"
        alt=""
        className="items-center mx-auto p-4"
      />
      <main className="max-w-2xl">
        <div className="flex m-8 p-10">
          <img
            src={data?.image}
            width={300}
            height={300}
            alt="B"
            className="bg-transparent"
          />
          <div className="flex flex-col p-10">
            <h4 className="font-semibold text-3xl mt-2">{data?.title}</h4>
            <div className=" my-2 flex border-b">
              <StarIcon className="h-5 text-yellow-400"></StarIcon>
              <StarIcon className="h-5 text-yellow-400"></StarIcon>
              <StarIcon className="h-5 text-yellow-400"></StarIcon>
              <StarIcon className="h-5 text-yellow-400"></StarIcon>
              <StarIcon className="h-5 text-gray-400"></StarIcon>
            </div>
            <h1 className="font-semibold text-3xl">{data?.price}$</h1>
            <p className="my-2">{data?.description}</p>
            
          </div>
          <div className="float-right ">
          <h1 className="font-semibold text-3xl ">{data?.price}$</h1>
          <h1 className="text-green-500 ">In Stock</h1>
          <button className="button font-semibold rounded-full mt-2" onClick={()=>dispatch(addToBasket(data))}>Add to basket</button>
          </div>
        </div>
      </main>
      <h1 className="text-3xl border-b capitalize m-5">other Items you might like : </h1>
        <div className="flex items-center">
        {
            similarQuery.isLoading &&
            <ReactLoading
            type="spin"
            color="#0D203A"
            className="mx-auto"
          ></ReactLoading>
        }
        {
            similarQuery.data?.map((item)=>
            <div className="mx-6">
                <Link href={`${item.id}`}>
                <img src={item.image} width={100} height={100} alt="" />
                <h1>{item.title.slice(0,20)}..</h1>
                <h1>{item.price}$</h1>
                <div className=" my-2 flex">
              <StarIcon className="h-5 text-yellow-400"></StarIcon>
              <StarIcon className="h-5 text-yellow-400"></StarIcon>
              <StarIcon className="h-5 text-yellow-400"></StarIcon>
              <StarIcon className="h-5 text-yellow-400"></StarIcon>
              <StarIcon className="h-5 text-gray-400"></StarIcon>
            </div>
            </Link>
            </div>
            )
        }
        </div>
    </div>
  );
};

export default SingleProduct;
