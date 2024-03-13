import { Column } from "@/components";
import { SideBarHeading } from "../SideBarHeading";
import { SideBarNavLink } from "../SideBarNavLink";

type NavItem = {
  label: string;
  icon: string;
  href: string;
};

type SideBarSection = {
  heading: string;
  navLinkData: NavItem[];
};

export const SideBarSection: React.FC<SideBarSection> = ({
  heading,
  navLinkData,
}) => {
  return (
    <Column gap={"xl"}>
      <SideBarHeading heading={heading} />
      <Column gap={""}>
        {navLinkData.map((data, index) => (
          <SideBarNavLink icon={data.icon} label={data.label} />
        ))}
      </Column>
    </Column>
  );
};
