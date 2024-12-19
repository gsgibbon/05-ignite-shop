import { ShoppingContext } from '@/context/shoppingContext'
import { UpdateNumberCurrency } from '@/hooks/updateNumberCurrency'
import { ButtonCartContainer, CartShoppingContainer, DetailsCart, ListProductContainer, Product } from '@/styles/components/cartShopping'
import { X } from '@phosphor-icons/react'
import axios from 'axios'
import Image from 'next/image'
import { useContext, useState } from 'react'

export default function CartShopping() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  const { 
    productList, 
    openCart, 
    setOpenCart, 
    cartAmountTotal,
    removeFromCart,
    updateCartQuantity
  } = useContext(ShoppingContext);

  async function handleBuyCart() {
    setIsCreatingCheckoutSession(true);
    try {
      
      const response = await axios.post('/api/checkout', {
        items: productList.map(item => ({
          priceId: item.defaultPriceId,
          quantity: item.quantity
        }))
      });
      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      setIsCreatingCheckoutSession(false);
      alert('Falha ao direcionar ao checkout!');
      console.error(error)
    }
  }

  return (
    <>
      {openCart && 
        <CartShoppingContainer> 
          <ListProductContainer>
            <X size={24} weight='bold' onClick={() => setOpenCart(false)}/>     
            <h2>Sacola de compras</h2>

            {productList.length > 0 ? (
                productList.map((product) => (
                    <Product key={product.id}>
                      <Image src={product.imageUrl} width={102} height={93} alt="" />
                      <div>
                        <div>
                          <p>{product.name}</p>
                          <strong>
                            {UpdateNumberCurrency(product.price * product.quantity)}
                          </strong>
                        </div>

                        <ButtonCartContainer>
                          <button onClick={() =>removeFromCart(product)}>
                            Remover
                          </button>

                          <div>
                            <button onClick={() => updateCartQuantity(product, 'decrement')}>-</button>
                            <span>{product.quantity}</span>
                            <button onClick={() => updateCartQuantity(product, 'increment')}>+</button>
                          </div>                       
                        </ButtonCartContainer>
                      </div>
                    </Product>
                  )
                )
              ) : (
                <p>Seu carrinho está vazio!</p>
              )
            }
          </ListProductContainer>

          <DetailsCart>
            <div> 
              <p> Quantidade <span>{cartAmountTotal.totalItems} itens</span></p>
              <strong>
                Valor total 
                <span>
                  {UpdateNumberCurrency(cartAmountTotal.totalPrice)}
                </span>
              </strong>
            </div>
            
            <button 
              disabled={cartAmountTotal.totalItems === 0 || isCreatingCheckoutSession}
              onClick={handleBuyCart}
            > 
              Finalizar compra 
            </button>
          </DetailsCart>
        </CartShoppingContainer>
      }
    </>
  )
}