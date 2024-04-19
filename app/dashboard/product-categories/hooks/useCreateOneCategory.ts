import { gql, useMutation } from "@apollo/client";

export const CREATE_CATEGORY_DOCUMENT = gql`
  mutation CreateOneProductCategory($data: ProductCategoryCreateInput!) {
    createOneProductCategory(data: $data) {
      id
    }
  }
`;

export const useCreateOneCategory = () => {
  const [createOneProductCategory, { loading, error }] = useMutation(
    CREATE_CATEGORY_DOCUMENT
  );
  return {
    createOneProductCategory,
    loading,
    error,
  };
};
