import { gql, useMutation } from "@apollo/client";

export const CREATE_EDU_INSTITUTE_DOCUMENT = gql`
  mutation Mutation($data: EduInstituteCreateInput!) {
    createOneEduInstitute(data: $data) {
      id
    }
  }
`;

export const useCreateOneEduInstitute = () => {
  const [createOneEduInstitute, { data, loading, error }] = useMutation(
    CREATE_EDU_INSTITUTE_DOCUMENT
  );
  return {
    createOneEduInstitute,
    data,
  };
};
