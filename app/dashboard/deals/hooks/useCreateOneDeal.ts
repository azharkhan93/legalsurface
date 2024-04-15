import { gql, useMutation } from "@apollo/client";

export const CREATE_DEALS_DOCUMENT = gql`
mutation CreateOneDeal($data: DealCreateInput!) {
    createOneDeal(data: $data) {
      id
    }
  }
`;

export const useCreateOneDeal = () => {
  const [createOneDeal, { data, loading, error }] = useMutation(
    CREATE_DEALS_DOCUMENT
  );
  return {
    createOneDeal,
    data,
  };
};