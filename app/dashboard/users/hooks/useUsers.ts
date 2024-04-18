import { gql, useQuery } from "@apollo/client";

export const USERS_DOCUMENT = gql(`query Users {
    users {
        firstName
        lastName
        email
        createdAt
        phoneNumberVerified
    }
  }`);

export const useUsers = () => {
  const response = useQuery(USERS_DOCUMENT);
  return response;
};
