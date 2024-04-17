import { gql, useQuery } from "@apollo/client";

export const PRODUCT_CATEGORIES_DOCUMENT = gql`
  query ProductCategories {
    productCategories {
      id
      name
      image
      parentId
      featured {
        status
        image
      }
      preferredGender
      createdAt
      updatedAt
      active
      shippable
    }
  }
`;

export const useGetProductCategories = () => {
  const response = useQuery(PRODUCT_CATEGORIES_DOCUMENT);
  return response;
};
