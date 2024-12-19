import { createContext, ReactNode, useState } from "react";

export interface ProductTypes {
    id: string
    name: string
    imageUrl: string
    price: number
    description: string
    defaultPriceId: string
    quantity: number
};

interface cartAmountTotalTypes {
  totalPrice: number
  totalItems: number
}

interface ShoppingContextType {
  addToCart: (product: ProductTypes) => void
  cartAmountTotal: cartAmountTotalTypes
  setCartAmountTotal: (cartAmountTotal: cartAmountTotalTypes) => void
  productList: ProductTypes[],
  setProductList: (productList: ProductTypes[]) => void
  openCart: boolean
  setOpenCart: (openCart: boolean) => void
  removeFromCart: (product: ProductTypes) => void
  updateCartQuantity: (product: ProductTypes, operationValue: string) => void
};

export const ShoppingContext = createContext({} as ShoppingContextType)

interface ShoppingProviderProps {
  children: ReactNode
};

export function ShoppingProvider ({ children }: ShoppingProviderProps) {
  const [cartAmountTotal, setCartAmountTotal] = useState<cartAmountTotalTypes>({
    totalItems: 0,
    totalPrice: 0,
  });
  const [productList, setProductList] = useState<ProductTypes[]>([]);
  const [openCart, setOpenCart] = useState(false);

  function addToCart( product: ProductTypes ) {
    const findProduct = productList.find(item => item.id === product.id);

    const newProductCart = {
      ...product,
      quantity: 1
    };

    if( productList.length === 0 ) {
      setProductList([ newProductCart ]);
      setCartAmountTotal({
        totalItems: 1,
        totalPrice: product.price
      })
      return;
    } else if( findProduct ) {
      setProductList(( prevList: ProductTypes[] ) => {
        return prevList.map(( item ) => {
          if(item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          };
          return item;
        });
      });
      setCartAmountTotal({
        totalItems: cartAmountTotal!.totalItems + 1, 
        totalPrice: cartAmountTotal!.totalPrice + product.price
      })
      return;
    } else {
      setProductList(( prevList ) => [ newProductCart, ...prevList ]);
      setCartAmountTotal({ 
        totalItems: cartAmountTotal!.totalItems + 1, 
        totalPrice: cartAmountTotal!.totalPrice + product.price 
      })
    };
  };
  
  function removeFromCart(product: ProductTypes) {
    const filterRemove = productList.filter(item => item.id !== product.id)
    
    setCartAmountTotal({
      totalItems: cartAmountTotal.totalItems - product.quantity,
      totalPrice: cartAmountTotal.totalPrice - (product.price * product.quantity),
    })
    setProductList(filterRemove);
  };

  function updateCartQuantity(product: ProductTypes, operationValue: string) {
    if(operationValue === "decrement" && product.quantity - 1 <= 0) {
      return removeFromCart(product)
    }; 

    const updateQuantity = productList.map(item => {
      if(item.id === product.id) {
        if(operationValue === 'increment') {
          setCartAmountTotal({
            totalItems: cartAmountTotal.totalItems + 1,
            totalPrice: cartAmountTotal.totalPrice + item.price
          })
          return {
            ...item,
            quantity: item.quantity + 1
          };
        } else {
          setCartAmountTotal({
            totalItems: cartAmountTotal.totalItems - 1,
            totalPrice: cartAmountTotal.totalPrice - item.price
          })
          return {
            ...item, 
            quantity: item.quantity - 1
          };
        };
      };
      return item;
    });

    setProductList(updateQuantity);
  };

  return (
    <ShoppingContext.Provider value={{
        addToCart, // função para adicionar produto no carrinho
        cartAmountTotal,
        setCartAmountTotal,
        productList, // lista de produtos no carinho
        setProductList,
        openCart, // carrinho aberto ou fechado
        setOpenCart,
        removeFromCart,// remove produto do carrinho
        updateCartQuantity, // atualiza quantidade do mesmo produto no carrinho
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};