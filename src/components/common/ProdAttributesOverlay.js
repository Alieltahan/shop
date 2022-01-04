import { ProductAttributes } from './ProductAttributes';
import '../../styles/ProdAttributesOverlay.scss';

/**
 * @param {Product} Object
 * @param {handleAttributes} Function to handle adding Selected Attributes of a Products
 * @param {productOptionSelected} Array for selected Attributes of a Product
 */
export const ProductAttributesOverlay = ({
  Product,
  handleAttributes,
  productOptionSelected = [],
}) => {
  return (
    <div className="overlay">
      <ProductAttributes
        handleAttributes={handleAttributes}
        productOptionSelected={productOptionSelected}
        Product={Product}
      />
    </div>
  );
};
