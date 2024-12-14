import { ShoppingContext } from "@/context/shoppingContext";
import { ButtonShoppingContainer } from "@/styles/components/buttonShopping";
import { Handbag } from "@phosphor-icons/react";
import { useContext } from "react";

export default function ButtonShopping() {
  const { productList } = useContext(ShoppingContext)

  return (
    <div>
      <ButtonShoppingContainer>
        <Handbag size={24} weight="bold"/>
        {productList.length > 0 && 
          <span>{productList.length}</span>
        }
      </ButtonShoppingContainer> 
    </div>
     
  )
}