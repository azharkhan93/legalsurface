import { gql, useQuery } from "@apollo/client";

export const DEALS_DOCUMENT = gql`
  query Deals($orderBy: [DealOrderByWithRelationInput!]) {
    deals(orderBy: $orderBy) {
      id
      name
      active
      createdAt
      updatedAt
      image
      selectedEduInstitutes {
        label
        value
      }
      business {
        name
        address
        logo
      }
      content {
        heading
        paragraph
        pointers
      }
      url
      type
      couponCode
      validity {
        startDate
        endDate
      }
    }
  }
`;



export const useGetDeals = () => {
  const response = useQuery(DEALS_DOCUMENT, {
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
