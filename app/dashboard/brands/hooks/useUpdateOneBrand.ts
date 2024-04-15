import { gql, useMutation } from "@apollo/client";

export const UPDATE_BRAND_DOCUMENT = gql`
  mutation Mutation($where: BrandWhereUniqueInput!, $data: BrandUpdateInput!) {
    updateOneBrand(where: $where, data: $data) {
      id
    }
  }
`;

export const useUpdateOneBrand = () => {
  const [updateOneBrand, { data, loading, error }] = useMutation(
    UPDATE_BRAND_DOCUMENT
  );
  return { updateOneBrand, data };
};
