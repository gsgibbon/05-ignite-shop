import logoImg from '@/assets/logo.svg';

import { Handbag } from '@phosphor-icons/react';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';

import { useContext } from 'react';
import { ShoppingContext } from '@/context/shoppingContext';

import { HeaderContainer, ButtonShoppingContainer } from '@/styles/components/header';

export default function Header() {
  const { productList, setOpenCart } = useContext(ShoppingContext);
  const {pathname} = useRouter();

  const isSuccess = pathname === "/success";
  return (
    <HeaderContainer isSuccessPage={isSuccess}>
      <Link href='/'>
        <Image src={logoImg} alt=""/>
      </Link>

      {pathname !== "/success" &&
        <ButtonShoppingContainer onClick={() => setOpenCart(true)}>
          <Handbag size={24} weight="bold"/>
          {productList.length > 0 && 
            <span>{productList.length}</span>
          }
        </ButtonShoppingContainer>
      }
    </HeaderContainer>
  )
}