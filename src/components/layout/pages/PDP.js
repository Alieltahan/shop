import { useParams } from 'react-router';
import ProductDescription from '../../ProductDescription';

const PDP = () => {
  const { id } = useParams();
  return <ProductDescription id={id} />;
};

export default PDP;
