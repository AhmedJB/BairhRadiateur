/* ./components/productdetail/Product.tsx */
"use client";
import React, {
  Component,
  RefObject,
  createRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import DetailsThumb from "./DetailsThumb";
import styles from "../../../styles/modular/ProductDetails/ProductDetails.module.css";
import Container from "../../General/Container";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCartPlus, BsArrowReturnRight } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { GiReturnArrow } from 'react-icons/gi';
import QuantityInput from "./QuantityInput";
import StarReview from "./StarReview";
import HeartCheckboxComponent from "../../General/HeartCheckboxComponent";
import Radiator from "../../../assets/home/radiator.png"
import { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { api } from "../../../server/utils/api";
import { generalProuctInfotT } from "../../../types/general";
import { formatImage } from "../../../Helpers/helpers";
import { CartContext } from "../../../contexts/CartContext";
import { orderColumns } from "@tanstack/react-table";

interface Product {
  _id: string;
  title: string;
  src: string[];
  description: string;
  price: string;
  colors: string[];
  count: number;
  delivery: string;
}

interface AppState {
  products: Product[];
  index: number;
}

interface ProductDetailsT {
  id: number;
  title: string;
  subtitle :  string;
  src: StaticImageData[];
  description: string;
  price: number;
  colors: string[];
  rating : number;
  minDays: number;
  maxDays: number;
}

type Props = {};

const ProductDetails = ({}: Props) => {
  const [product, setProduct]: [ProductDetailsT, any] = useState({
    id: 1,
    title: "Radiateur Covere Ford Ranger",
    subtitle : "tube cuivre",
    src: [Radiator,Radiator,Radiator],
    description: `this is a product descriptionPourquoi l'utiliser
    On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes)`,
    price: 45.5,
    rating: 4.3,
    colors: ["red", "black", "crimson", "teal"],
    minDays: 5,
    maxDays: 10,
  });

  const [productId,setProductId] = useState("-1");
  const {data : productData,status} = api.authHandler.fetchProducts.useQuery();

  const [filtered  ,setFiltered] = useState<generalProuctInfotT>()
  const router=  useRouter();

  const [quantity, setQuantity] = useState(1);

  const [index, setIndex] = useState(0);

  const myRef : RefObject<HTMLDivElement> = useRef(null);
  const [openDescription, setOpenDescription] = useState(false);

  const cartState = useContext(CartContext);

  useEffect(() => {
    if (router.isReady){
      console.log(router.query)
      setProductId(router.query.id as string);
    }
  },[router.isReady])

  useEffect(() => {
    if (status === "success" && productId !== '-1') {
      const temp = (productData as generalProuctInfotT[]).filter(e => e.info && e.info.id === productId )
      
      setFiltered(temp[0])
    }
  },[productId,status,productData])

  /* useEffect(() => {
    const images = myRef.current!.children;
    if (images && images[index]) {
      images[index]!.className = "active";
    }
  }, [myRef]); */

  const handleTab = (index_: number) => {
    setIndex(index_);
    const images = myRef.current?.children;
    if (images) {
      for (let i = 0; i < images.length; i++) {
        images[i]!.className = images[i]!.className.replace("active", "");
      }
      images[index_]!.className = "active";
    }
  };

  const formatDelivery = (minDays: number, maxDays: number) => {
    return `${minDays} - ${maxDays} business days`;
  };

  const handleStep = (step : number) => {
      const newQuantity = quantity + step;
      if (step < 0  ) {
        if (newQuantity <= 0) {
          setQuantity(1);
        }else {
          setQuantity(newQuantity)
        }
      }else{
        if (newQuantity > 10){
          setQuantity(10);
        }else{
          setQuantity(newQuantity)
        }
      }
  }


  const handleAddToCart = () => {
 
    let data = cartState?.cartData ? cartState.cartData : [];
    if (cartState  && filtered){
      let temp = [...data];
      let index = -1;
      let old = temp.filter((e,i) => {
        if (e?.product?.info?.id === productId){
          index = i;
          return true;
        }
      } );
      if (old.length === 0){
        const data = {
          product : filtered,
          quantity
        }
        temp.push(data);
      }else if ( old[0] ){
        temp.splice(index,1);
        old[0].quantity = quantity
        temp.push(old[0])
      }
      cartState.setCartData(temp);
    }
    
  }

  const orderDirectly = () => {
    handleAddToCart();
    router.push("/confirm")
  }

  return (
    <>
      <Container>
        <div className={`mx-auto ${styles.app as string} max-w-[1100px] my-16`}>
          <div className={"flex gap-11 "}>
            <div className={"flex flex-col items-center ml-4"} key={product.id}>
              <div className={ `${styles["big-img"] as string} relative`}>
                <img src={formatImage(filtered?.serverInfo.images[index]?.image)} alt="" />
                
                  <HeartCheckboxComponent pid={filtered && filtered.info ? filtered.info.id : ""}  className="absolute top-2  right-1 "  size="text-sm" />
                
              </div>
              <DetailsThumb
                images={filtered?.serverInfo.images}
                tab={handleTab}
                myRef={myRef}
              />
            </div>
            <div className={"flex flex-col gap-3 pt-12"}>
              <div className="">
                <h2 className="text-2xl font-semibold text-mainBlack mt-3 inter">
                  {filtered?.info?.name}
                </h2>
                <h3 className="text-lighterGray  text-lg font-medium">{filtered?.serverInfo.ptype}</h3>
                <StarReview rating={product.rating} />
                <p className="text-mainBlack text-3xl font-semibold p-2 my-4">
                  {filtered?.info?.price} MAD
                </p>
              </div>

              <QuantityInput quantity={quantity} updateQuantity={handleStep} />

              <div className="flex items-center gap-3">
                <button
                  className={
                    "w-[250px] bg-blue py-3 px-8 text-white font-semibold rounded-md text-xl"
                  }
                  onClick={orderDirectly}
                >
                  Commander 
                                  </button>
                <FaCartPlus className="text-4xl text-mainBlack cursor-pointer transition-all hover:text-orange hover:scale-105" onClick={handleAddToCart} />
              </div>

              <button
                onClick={() => setOpenDescription(!openDescription)}
                className="flex items-center gap-3 text-mainBlack text-lg font-medium mt-5 mb-2"
              >
                Description{" "}
                {openDescription ? (
                  <HiOutlineChevronUp className="text-lg text-mainBlack" />
                ) : (
                  <HiOutlineChevronDown className="text-lg text-mainBlack" />
                )}{" "}
              </button>
              {openDescription && (
                <p className="text-mainBlack md:w-[550px] w-full mx-2 text-md font-normal p-1 opacity-80 mb-5 max-h-[200px] overflow-y-auto">
                  {product.description}





                </p>
              )}

              <div className={`flex items-center ${openDescription ? "" : "mt-6"}`}>
                <TbTruckDelivery className="text-5xl text-mainBlack " />
                <p className="text-lg text-mainBlack font-medium mx-2 w-[300px]">Delivery </p>
                <span className={"text-lg font-medium text-red"}>
                  {filtered?.info && formatDelivery(filtered?.info?.minShipping, filtered?.info?.maxShipping)}
                </span>
              </div>
              <div className={"flex items-center mb-4"}>
              <GiReturnArrow className="text-5xl text-mainBlack scale-x-[-1] " />
                <p className="text-lg text-mainBlack font-medium mx-2 w-[300px]">Product Exchange and Return  </p>
                <span className={"text-lg font-medium text-red"}>
                Terms & Conditions
                </span>
                
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};


export default ProductDetails;
