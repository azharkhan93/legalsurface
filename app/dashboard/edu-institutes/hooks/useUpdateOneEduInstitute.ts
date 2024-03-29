import { gql, useMutation } from "@apollo/client";

export const UPDATE_EDU_INSTITUTE_DOCUMENT = gql`
  mutation Mutation(
    $data: EduInstituteUpdateInput!
    $where: EduInstituteWhereUniqueInput!
  ) {
    updateOneEduInstitute(data: $data, where: $where) {
      id
    }
  }
`;

export const useUpdateOneEduInsitute = () => {
  const [updateOneEduInstitute, { data, loading, error }] = useMutation(
    UPDATE_EDU_INSTITUTE_DOCUMENT
  );
  return { updateOneEduInstitute, data };
};
