import { gql, useMutation } from "@apollo/client";

export const UPDATE_CATEGORY_DOCUMENT = gql`
  mutation Mutation(
    $data: ProductCategoryUpdateInput!
    $where: ProductCategoryWhereUniqueInput!
  ) {
    updateOneProductCategory(data: $data, where: $where) {
      id
    }
  }
`;

export const useUpdateOneCategory = () => {
    const [updateOneProductCategory,
    {
       loading, error,  
    }] = useMutation(UPDATE_CATEGORY_DOCUMENT)
    return {
        updateOneProductCategory,
        loading,
        error
    }
}