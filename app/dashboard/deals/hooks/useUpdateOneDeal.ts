import { gql, useMutation } from "@apollo/client";

export const UPDATE_DEALS_DOCUMENT = gql`
  mutation UpdateOneDeal(
    $data: DealUpdateInput!
    $where: DealWhereUniqueInput!
  ) {
    updateOneDeal(data: $data, where: $where) {
      id
      selectedEduInstitutes {
        label
        value
      }
    }
  }
`;

export const useUpdateOneDeal = () => {
  const [updateOneDeal, { data, loading, error }] = useMutation(
    UPDATE_DEALS_DOCUMENT
  );
  return { updateOneDeal, data };
};
