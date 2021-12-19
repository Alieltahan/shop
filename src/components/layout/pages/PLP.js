import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../../http/graphql';
import Products from '../../Products';

const PLP = () => {
  const { data, loading } = useQuery(QUERY_ALL_PRODUCTS);

  if (loading)
    return (
      <h3 style={{ display: 'flex', justifyContent: 'center' }}>Loading....</h3>
    );
  return <Products data={data} />;
};

export default PLP;
