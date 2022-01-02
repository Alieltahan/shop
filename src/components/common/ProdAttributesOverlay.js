import ProductAttributes from './ProductAttributes';
import '../../styles/ProdAttributesOverlay.scss';

const ProductAttributesOverlay = ({
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

export default ProductAttributesOverlay;
