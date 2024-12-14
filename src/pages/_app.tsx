import type { AppProps } from "next/app";
import { globalStyles } from "@/styles/global";

import logoImg from "@/assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";

import Image from "next/image";

import { ShoppingProvider } from "@/context/shoppingContext";
import ButtonShopping from "@/components/buttonShopping";
import Link from "next/link";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingProvider>
      <Container>
        <Header>
          <Link href='/'>
            <Image src={logoImg} alt="" />
          </Link>
          <ButtonShopping />
        </Header>

        <Component {...pageProps} />
      </Container>
    </ShoppingProvider>
  )
}
