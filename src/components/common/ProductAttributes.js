import '../../styles/ProductAttributes.scss';

/**
 * @param {Product} Object
 * @param {handleAttributes} Function to handle adding Selected Attributes of Products
 * @param {productOptionSelected} Array for selected Attributes of a Product
 */

export const ProductAttributes = ({
  Product,
  handleAttributes,
  productOptionSelected = [],
}) => {
  return (
    <>
      <div className="product__details__attribute">
        {Product.attributes.map((att) => (
          <div key={att.id}>
            <p className="product__details__attribute-text">{att.id}:</p>
            {att.type !== 'swatch'
              ? att.items.map((option2) => (
                  <span
                    onClick={() => handleAttributes(Product.id, att, option2)}
                    key={option2.id}
                    className={
                      productOptionSelected
                        .filter((prod) => prod.id === Product.id)
                        .map((slctd) =>
                          slctd.attributes.filter(
                            (slctdAtt) => slctdAtt?.id === att.id
                          )
                        )
                        .some((opt) => opt[0]?.option === option2.id)
                        ? 'product__details__attribute-boxes product__details__attribute-boxes-slctd'
                        : 'product__details__attribute-boxes'
                    }
                  >
                    <p>{option2.value}</p>
                  </span>
                ))
              : att.items.map((option) => (
                  <span
                    onClick={() => {
                      handleAttributes(Product.id, att, option);
                    }}
                    key={option.id}
                    // data-color={option.value}
                    style={{ backgroundColor: `${option.value}` }}
                    className={
                      productOptionSelected
                        .filter((prod) => prod.id === Product.id)
                        .map((prodSlctd) =>
                          prodSlctd.attributes.filter(
                            (slctdAtt) => slctdAtt?.id === att.id
                          )
                        )
                        .some(
                          (slctdOption) => slctdOption[0]?.option === option.id
                        )
                        ? 'product__details__attribute-boxes product__details__attribute-boxes-color product__details__attribute-boxes-slctdColor'
                        : 'product__details__attribute-boxes product__details__attribute-boxes-color'
                    }
                  ></span>
                ))}
          </div>
        ))}
      </div>
    </>
  );
};
