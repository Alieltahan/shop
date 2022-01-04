import { useDispatch } from 'react-redux';
import { addProduct } from '../store/cart';

export function AddToCart(
  Product,
  productOptionSelected,
  currency,
  clearProductAtt
) {
  const dispatch = useDispatch();
  const handleAddToCart = (Product, productOptionSelected) => {
    dispatch(
      addProduct({
        ...Product,
        /* Making a unique ID for each product based on the attributes combined so user can get quantity of each specific attributes. */
        id: `${Product.id},${productOptionSelected[0]?.attributes
          .map((opt) => Object.values(opt))
          .join('-')}`,
        selectedOptions: productOptionSelected,
        currency,
        quantity: 1,
      })
    );
    clearProductAtt();
  };
  return {
    handleAddToCart,
  };
}
