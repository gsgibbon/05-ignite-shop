export const UpdateNumberCurrency = ( price: number ) => {
   const stringPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
 
   return stringPrice;
};