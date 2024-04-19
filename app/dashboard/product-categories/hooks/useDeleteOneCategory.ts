import { gql, useMutation } from "@apollo/client";

export const DELETE_CATEGORY_DOCUMENT = gql`
mutation DeleteOneProductCategory($where: ProductCategoryWhereUniqueInput!) {
    deleteOneProductCategory(where: $where) {
      id
    }
  }
`;

export const useDeleteCategory = () => {
  const [deleteOneProductCategory, { data, loading, error }] = useMutation(
    DELETE_CATEGORY_DOCUMENT
  );

  return {
    deleteOneProductCategory,
    data,
    loading,
  };
};