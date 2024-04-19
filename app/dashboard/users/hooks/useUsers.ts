import { gql, useQuery } from "@apollo/client";

export const USERS_DOCUMENT =
  gql(`query Users($where: UserWhereInput, $orderBy: [UserOrderByWithRelationInput!], $skip: Int, $take: Int) {
    users(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
      firstName
      lastName
      email
      createdAt
      phoneNumberVerified
    }
  }`);

export const useUsers = (searchTerm: string, skip: number) => {
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
      firstName: {
        contains: searchTerm.trim(),
      },
    };
  }

  const response = useQuery(USERS_DOCUMENT, { variables });
  return response;
};
