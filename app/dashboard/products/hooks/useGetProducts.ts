import { gql, useQuery } from "@apollo/client";

export const PRODUCTS_DOCUMENT = gql(`
query Products($where: ProductWhereInput, $skip: Int, $take: Int, $orderBy: [ProductOrderByWithRelationInput!]) {
    products(where: $where, skip: $skip, take: $take, orderBy: $orderBy) {
      title
      type
      price
      createdAt
    }
  }
`);

export const useGetProducts = (searchTerm: string, skip: number) => {
  let variables: {
    orderBy: any[];
    where?: any;
    skip: number;
    take: number;
  } = {
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
      title: {
        contains: searchTerm.trim(),
      },
    };
  }
  const response = useQuery(PRODUCTS_DOCUMENT, { variables });
  return response;
};
