import { gql, useMutation } from "@apollo/client";

export const DELETE_BRAND_DOCUMENT = gql`
  mutation Mutation($where: BrandWhereUniqueInput!) {
    deleteOneBrand(where: $where) {
      id
    }
  }
`;

export const useDeleteBrand = () => {
  const [deleteOneBrand, { data, loading, error }] = useMutation(
    DELETE_BRAND_DOCUMENT
  );

  return {
    deleteOneBrand,
    data,
    loading,
  };
};
