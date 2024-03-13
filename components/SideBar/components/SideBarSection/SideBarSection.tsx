import { Column } from "@/components";
import { SideBarHeading } from "../SideBarHeading";
import { SideBarNavLink } from "../SideBarNavLink";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type NavItem = {
  label: string;
  icon: IconProp;
  href: string;
};

type SideBarSection = {
  heading: string;
  navLinks: NavItem[];
};

export const SideBarSection: React.FC<SideBarSection> = ({
  heading,
  navLinks,
}) => {
  return (
    <Column gap={"m"}>
      <SideBarHeading heading={heading} />
      <Column gap={""}>
        {navLinks.map((link, index) => (
          <SideBarNavLink
            key={index}
            icon={link.icon}
            label={link.label}
            href={link.href}
          />
        ))}
      </Column>
    </Column>
  );
};
