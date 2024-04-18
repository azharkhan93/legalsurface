"use client";
import { UpdateProductCategories } from "../dashboard/product-categories/components";

const onActionComplete = () => {
  return null;
};
export default function Page() {
  return <UpdateProductCategories onActionComplete={onActionComplete} />;
}
