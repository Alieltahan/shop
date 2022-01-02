export default function AddToCartChkr(product) {
  console.log(product, '@Chker');

  // 1- If Product doesn't have attributes to be selected, return true (to be added in Cart)
  // OR
  // 2- All attributes are selected, return true (to be added in Cart)

  if (
    product?.attributes?.length === 0 ||
    product?.attributes?.length ===
      product?.selectedOptions[0]?.attributes?.length
  )
    return true;
  else return false;
}
