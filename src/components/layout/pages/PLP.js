import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../../http/graphql';
import SingleProduct from '../../SingleProduct';

const PLP = () => {
  const { data, loading } = useQuery(QUERY_ALL_PRODUCTS);
  //   console.log(data?.categories[0]?.products[0], '@Data');
  if (loading)
    return (
      <h3 style={{ display: 'flex', justifyContent: 'center' }}>Loading....</h3>
    );
  return <SingleProduct product={data} />;
};

export default PLP;
