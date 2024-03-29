import { gql, useQuery } from "@apollo/client";

export const EDU_INSTITUTES_DOCUMENT = gql`
  query Query($orderBy: [EduInstituteOrderByWithRelationInput!]) {
    eduInstitutes(orderBy: $orderBy) {
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

export const useGetEduInstitute = () => {
  const response = useQuery(EDU_INSTITUTES_DOCUMENT, {
    skip: false,
    variables: {
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
    },
  });
  return response;
};
