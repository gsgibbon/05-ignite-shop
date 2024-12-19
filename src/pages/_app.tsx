import type { AppProps } from "next/app";
import { ShoppingProvider } from "@/context/shoppingContext";

import CartShopping from "@/components/cartShopping";

import { Container } from "@/styles/pages/app";
import { globalStyles } from "@/styles/global";
import Header from "@/components/header";
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingProvider>
      <Container>
        <Header />

        <CartShopping />
        
        <Component {...pageProps} />
      </Container>
    </ShoppingProvider>
  )
}
