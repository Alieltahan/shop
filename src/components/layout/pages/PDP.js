import { useParams } from 'react-router';
import { ProductDescription } from '../../ProductDescription';

export const PDP = () => {
  const { id } = useParams();
  return <ProductDescription id={id} />;
};
