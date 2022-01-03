/* Custom Hook to handle the Products Attributes */
import produce from 'immer';
import { useState } from 'react';

export default function useForm() {
  const [productOptionSelected, setProductOptionSelected] = useState([]);

  const handleAttributes = (ProductId, att, option) => {
    const attId = att.id;
    const optionId = option.id;
    const existingProductIndex = productOptionSelected.findIndex(
      (product) => product.id === `${ProductId}`
    );
    // If product exist
    if (existingProductIndex >= 0) {
      const existingAttIndex = productOptionSelected[
        existingProductIndex
      ].attributes.findIndex((att) => att.id === `${attId}`);
      // If Product's Attribute is selected and going to change
      if (existingAttIndex >= 0) {
        setProductOptionSelected(
          produce((draft) => {
            draft[existingProductIndex].attributes[existingAttIndex].option =
              optionId;
          })
        );
        // New Attribute of existing Product going to be added ( as capacity/color).
      } else {
        setProductOptionSelected(
          produce((draft) => {
            draft[existingProductIndex].attributes.push({
              id: attId,
              option: optionId,
            });
          })
        );
      }
      // New Product to select its Attribute
    } else {
      setProductOptionSelected(
        produce((draft) => {
          draft.push({
            id: ProductId,
            attributes: [{ id: attId, option: optionId }],
          });
        })
      );
    }
  };
  // TODO
  const clearProductAtt = () => {
    setProductOptionSelected(
      produce((draft) => {
        draft.pop();
      })
    );
  };
  return {
    handleAttributes,
    clearProductAtt,
    productOptionSelected,
  };
}
