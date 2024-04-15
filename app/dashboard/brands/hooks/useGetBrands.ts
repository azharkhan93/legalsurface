import { gql, useQuery } from "@apollo/client";

export const BRANDS_DOCUMENT = gql`
query Brands($orderBy: [BrandOrderByWithRelationInput!]) {
    brands(orderBy: $orderBy) {
      id
      name
      active
      createdAt
      updatedAt
      image
      featured
      _count {
        products
      }
    }
  }
  `

  export const useGetBrands = () => {
    const response = useQuery(BRANDS_DOCUMENT, {
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