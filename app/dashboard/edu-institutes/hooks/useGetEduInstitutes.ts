import { gql, useQuery } from "@apollo/client";

export const EDU_INSTITUTES_DOCUMENT = gql`
  query EduInstitutes(
    $skip: Int
    $orderBy: [EduInstituteOrderByWithRelationInput!]
    $where: EduInstituteWhereInput
    $take: Int
  ) {
    eduInstitutes(skip: $skip, orderBy: $orderBy, where: $where, take: $take) {
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

export const useGetEduInstitute = (searchTerm: string, skip: number) => {
  let variables: { orderBy: any[]; where?: any; skip: number; take: number } = {
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
    skip: skip,
    take: 10,
  };

  if (searchTerm.trim() !== "") {
    variables.where = {
      name: {
        contains: searchTerm.trim(),
      },
    };
  }

  const response = useQuery(EDU_INSTITUTES_DOCUMENT, {
    variables,
  });

  return response;
};
