// Icons
import { CaretLeft, CaretRight, Handbag } from "@phosphor-icons/react";
// Function
import { GetStaticProps } from "next";
// Keen Slider
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from "keen-slider/react";
// Stripe
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
// Components Nextjs
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
// Context
import { ShoppingContext } from "@/context/shoppingContext";
// components HTLM
import { ScrollLeft, ScrollRight } from "@/styles/components/scrollButton";
// Styles
import { HomeContainer, Product } from "@/styles/pages/home";
// Hook
import { UpdateNumberCurrency } from "@/hooks/updateNumberCurrency";

interface ProductTypes {
  id: string
  name: string
  imageUrl: string
  price: number
  description: string
  defaultPriceId: string
  quantity: number
};

interface HomeProps {
  products: ProductTypes[]
};

export default function Home({ products }: HomeProps) {
  const [currentSlider, setCurrentSlider] = useState(0);

  const { addToCart } = useContext(ShoppingContext);

  const [sliderRef, instanceRef] = useKeenSlider({
    mode: 'free-snap',
    breakpoints: {
      "(min-width: 400px)": {
        slides: {
          origin: 'center',
          perView: 1,
          spacing: 8},
      },
      "(min-width: 1000px)": {
        slides: {
          origin: 'center',
          perView: 3, 
          spacing: 48
        },
      },
      "(min-width: 1400px)": {
        slides: {
          origin: 'center',
          perView: 3,
          spacing: 48
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlider(slider.track.details.rel);
    },
  });

  function handleAddToCart (e: React.MouseEvent<HTMLButtonElement>, product: ProductTypes) { 
    e.preventDefault();

    addToCart(product);
  };

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {currentSlider !== 0 &&
          <ScrollLeft 
            onClick={() => instanceRef.current?.prev()}
          >
            <CaretLeft size={48} />
          </ScrollLeft>
        }
          {products.map(product => {
            return (
              <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
                <Product className="keen-slider__slide">
                  <Image src={product.imageUrl} width={520} height={480} alt=""/>
                  
                  <footer>
                    <div>
                      <strong>{product.name}</strong>
                      <span>{ UpdateNumberCurrency(product.price) }</span>
                    </div>
                    <button onClick={(e) => handleAddToCart(e, product)}>
                      <Handbag size={32} weight='bold'/>
                    </button>
                  </footer>
                </Product>
              </Link>
            )
          })}
          
          {currentSlider !== instanceRef.current?.track.details.maxIdx && 
            <ScrollRight 
              onClick={() => instanceRef.current?.next()}
            >
              <CaretRight size={48} />
          </ScrollRight>
          }
          
      </HomeContainer> 
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return { 
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount! / 100,
      description: product.description,
      defaultPriceId: price.id,
    };
  });

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2,
  };
};
