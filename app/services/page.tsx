"use client"

import { OurServices, TopBar } from "@/components";

export default function Page() {
  return (
    <>
    <TopBar
        backgroundImage={"/images/pd.jpg"}
        aboutText={"Services"}
        whoWeAreText={"Explore Our Services"}
      />
     <OurServices />
    </>
  );
}

// const handleNavbarDropdownToggle = (index: number) => {
//   setNavbarDropdownOpen(prev => (prev === index ? null : index));
// };

// const [navbarDropdownOpen, setNavbarDropdownOpen] = useState<number | null>(null);
