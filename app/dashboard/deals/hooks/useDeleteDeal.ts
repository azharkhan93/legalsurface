import { gql, useMutation } from "@apollo/client";

export const DELETE_DEAlS_DOCUMENT = gql`
mutation DeleteOneDeal($where: DealWhereUniqueInput!) {
    deleteOneDeal(where: $where) {
      id
    }
  }
`;

export const useDeleteDeal = () => {
  const [deleteOneEDeal, { data, loading, error }] = useMutation(
    DELETE_DEAlS_DOCUMENT
  );

  return {
    deleteOneEDeal,
    data,
    loading,
  };
};
