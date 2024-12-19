import { stripe } from "@/lib/stripe";
import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
//import Stripe from "stripe";

interface SuccessProps {
    customerName: string,
    products: {
        id: string,
        imageUrl: string,
    }[],
    totalQuantity: number,
};

export default function Success({ customerName, products, totalQuantity }: SuccessProps) {
    return(
        <>
          <Head>
            <title>Compra efetuada | Ignite Shop</title>

            <meta name="robots" content="noindex" />
          </Head>

          <SuccessContainer>
            <ImageContainer>
                {products.map(item => (
                    <div key={item.id}> 
                        <Image src={item.imageUrl} width={120} height={110} alt=""/>            
                    </div>
                ))}
            </ImageContainer>

            <h1>Compra efetuada!</h1>

            <p>
              Uhuul <strong>{customerName}</strong>, sua compra 
              de {totalQuantity} produtos já está a caminho da sua casa.
            </p>

            <Link href="/">Voltar ao catálogo</Link>
          </SuccessContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    if (!query.session_id) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        };
    };

    const sessionId = String(query.session_id)

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    });

    const customerName = session.customer_details!.name;

    const products = session.line_items!.data.map(item => {
        const product = item.price!.product as Stripe.Product;
        
        return {
            imageUrl: product.images[0],
            id: product.id
        };
    });

    const totalQuantity = session.line_items!.data.reduce((sum, item) => {
      return sum + item.quantity!
    }, 0)

    return {
        props: {
            customerName,
            products,
            totalQuantity
        }
    };
};