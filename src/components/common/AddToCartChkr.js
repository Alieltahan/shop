export default function AddToCartChkr(product) {
  // 1- selectedOption isn't found to Product Object
  // 2- SelectedOptions is an Empty Array
  // Return False.
  if (
    product?.selectedOptions === undefined ||
    product.selectedOptions.length === 0
  )
    return false;
  // 1- If Product doesn't have attributes to be selected, return true (to be added in Cart)
  // OR
  // 2- All attributes are selected, return true (to be added in Cart)
  else if (
    product?.attributes?.length === 0 ||
    product?.attributes?.length ===
      product?.selectedOptions[0].attributes?.length
  )
    return true;
  else return false;
}
