import { gql, useQuery } from "@apollo/client";

export const EDU_INSTITUTES_DOCUMENT = gql`
  query EduInstitutes(
    $skip: Int
    $orderBy: [EduInstituteOrderByWithRelationInput!]
    $where: EduInstituteWhereInput
  ) {
    eduInstitutes(skip: $skip, orderBy: $orderBy, where: $where) {
      id
      name
      domain
      logo
      city
      state
      address
      zip
      createdAt
      updatedAt
    }
  }
`;

export const useGetEduInstitute = (searchTerm: string) => {
  const response = useQuery(EDU_INSTITUTES_DOCUMENT, {
    skip: false,
    variables: {
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
      where: {
        name: {
          contains: searchTerm.trim(),
        },
      },
    },
  });
  return response;
};
