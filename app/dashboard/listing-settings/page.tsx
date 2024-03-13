"use client";
import { CenterBox, Text } from "@/components";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  return (
    <CenterBox width={"100%"} height={"100%"} bg={"greyLight"}>
      <CenterBox width={"250px"} height={"250px"} bg="primary">
        <Text color="white">{pathname}</Text>
      </CenterBox>
    </CenterBox>
  );
}
