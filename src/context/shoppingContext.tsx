import { createContext, ReactNode, useState } from "react";

interface ProductTypes {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
    quantity: number
};


interface ShoppingContextType {
  addToCart: (product: ProductTypes) => void
  shoppingQuantity: number
  setShoppingQuantity: (shoppingQuantity: number) => void
  productList: ProductTypes[],
  setProductList: (productList: ProductTypes[]) => void
};

export const ShoppingContext = createContext({} as ShoppingContextType)

interface ShoppingProviderProps {
  children: ReactNode
};

export function ShoppingProvider ({ children }: ShoppingProviderProps) {
  const [shoppingQuantity, setShoppingQuantity] = useState(0);
  const [productList, setProductList] = useState<ProductTypes[]>([])

  function addToCart( product: ProductTypes ) {
    const findProduct = productList.find(item => item.id === product.id)

    const newProductCart = {
      ...product,
      quantity: 1
    };

    if( productList.length <= 0 ) {
      return setProductList([newProductCart]);

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
      return;
    } else {
      setProductList(( prevList ) => [ newProductCart, ...prevList ]);
    };
  };

  return (
    <ShoppingContext.Provider value={{
        addToCart,
        shoppingQuantity, 
        setShoppingQuantity,
        productList,
        setProductList,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};