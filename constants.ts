import {
  faBinoculars,
  faBuildingColumns,
  faChartLine,
  faChartSimple,
  faGear,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

export const SideBarData = [
  {
    heading: "APP DATASETS",
    navLink: [
      { label: "Overview", icon: faBinoculars, href: "/dashboard/overview" },
      {
        label: "Edu. Institutes",
        icon: faBuildingColumns,
        href: "/dashboard/edu-institutes",
      },
    ],
  },
  {
    heading: "APP CONFIG",
    navLink: [
      {
        label: "Listing Settings",
        icon: faSliders,
        href: "/dashboard/listing-settings",
      },
      {
        label: "General Settings",
        icon: faGear,
        href: "/dashboard/general-settings",
      },
    ],
  },
  {
    heading: "STATS",
    navLink: [
      {
        label: "User Stats",
        icon: faChartSimple,
        href: "/dashboard/user-stats",
      },
      {
        label: "Platform Stats",
        icon: faChartLine,
        href: "/dashboard/platform-stats",
      },
    ],
  },
];


export const data = [
  { name: "Helsinki", website: "helsinki.edu", address: "address", status: "undefined", dateTime: "20 Dec, 2023 - 13:41:13" },
  { name: "Helsinki", website: "helsinki.edu", address: "address", status: "undefined", dateTime: "20 Dec, 2023 - 13:41:13" },
];


