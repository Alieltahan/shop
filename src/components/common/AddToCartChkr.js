/**@param {product} Object */
/**@returns boolean */

export function AddToCartChkr(product) {
  const { attributes, selectedOptions } = product;
  // 1- If Product doesn't have attributes to be selected, return true (to be added in Cart)
  if (attributes?.length === 0) return true;
  // 1- selectedOption isn't found to Product Object
  // 2- SelectedOptions is an Empty Array
  // Return False.
  if (selectedOptions === undefined || selectedOptions.length === 0)
    return false;
  // OR
  // - All attributes are selected, return true (to be added in Cart)
  else if (attributes?.length === selectedOptions[0].attributes?.length)
    return true;
  else return false;
}
