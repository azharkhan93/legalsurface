import { gql, useMutation } from "@apollo/client";

export const DELETE_EDU_INSTITUTE_DOCUMENT = gql`
  mutation Mutation($where: EduInstituteWhereUniqueInput!) {
    deleteOneEduInstitute(where: $where) {
      id
    }
  }
`;

export const useDeleteEduInstitute = () => {
  const [deleteOneEduInstitute, { data, loading, error }] = useMutation(
    DELETE_EDU_INSTITUTE_DOCUMENT
  );

  return {
    deleteOneEduInstitute,
    data,
    loading,
  };
};
