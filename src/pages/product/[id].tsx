import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import { stripe } from "@/lib/stripe"
import Stripe from "stripe"
import Image from "next/image"
import Head from "next/head"
import { useContext } from "react"
import { ShoppingContext } from "@/context/shoppingContext"

interface ProductProps {
    product: {
        id: string
        name: string
        imageUrl: string
        price: string
        description: string
        defaultPriceId: string
    }
};

export default function Product({ product }: ProductProps) {
    const { addToCart } = useContext(ShoppingContext);

    function addProduct() {
        const { id, name, imageUrl, price, description, defaultPriceId } = product;

        const numberPrice = Number(
            price.replace(/\s/g, '').replace('R$', '').replace(/\./g, '').replace(',', '.')
        );
 
        const newProduct = {
            id,
            name,
            imageUrl,
            price: numberPrice,
            description,
            defaultPriceId,
            quantity: 1
        };

        return addToCart(newProduct);
    };

    return (
        <>
          <Head>
            <title>{product.name} | Ignite Shop</title>
          </Head>
        
          <ProductContainer>
            <ImageContainer>
              <Image src={product.imageUrl} width={520} height={480} alt=""/>
            </ImageContainer>

            <ProductDetails>
              <h1>{product.name}</h1>
                <span>{product.price}</span>

                <p>{product.description}</p>

                <button onClick={() => addProduct()}>
                  Colocar na sacola
                </button>
            </ProductDetails>
          </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id:  'prod_RMyRMNOhbhJKdG'} } 
        ],
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps<ProductProps, {id: string}> = async ({ params }) => {
   const productId = params!.id

   const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
   })

   const price = product.default_price as Stripe.Price

   return {
    props: {
        product: {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            price: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(price.unit_amount! / 100),
            description: product.description || "Descrição indisponível",
            defaultPriceId: price.id,
        }
    },
    revalidate: 60 * 60 * 1, // 1 hour
   }
}