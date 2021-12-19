import { useQuery } from '@apollo/client';
import { QUERY_SPECIFIC_CATEGORY_PRODUCTS } from '../../http/graphql';
import Products from '../../Products';

const SpecificCategory = ({ category }) => {
  const { data, loading, error } = useQuery(QUERY_SPECIFIC_CATEGORY_PRODUCTS, {
    variables: { category: `${category}` },
  });
  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error.message}</h3>;
  return <Products data={data} />;
};

export default SpecificCategory;
