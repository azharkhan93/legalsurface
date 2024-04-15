import { gql, useMutation } from "@apollo/client";

export const CREATE_BRAND_DOCUMENT = gql`
mutation CreateOneBrand($data: BrandCreateInput!) {
    createOneBrand(data: $data) {
      id
    }
  }
`;

export const useCreateOneBrand = () => {
  const [createOneBrand, { data, loading, error }] = useMutation(
    CREATE_BRAND_DOCUMENT
  );
  return {
    createOneBrand,
    data,
  };
};