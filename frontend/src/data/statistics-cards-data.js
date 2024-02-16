import {
  BanknotesIcon,
  UserPlusIcon,
  UserMinusIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: UserMinusIcon,
    title: "This Month's Layoffs",
    value: "53k",
    footer: {
      color: "text-red-500",
      value: "-55%",
      label: "than last week",
    },
  },
  {
    color: "gray",
    icon: UserMinusIcon,
    title: "Q1 Layoffs",
    value: "2,300",
    footer: {
      color: "text-red-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "gray",
    icon: UserPlusIcon,
    title: "Q1 Hiring",
    value: "3,462",
    footer: {
      color: "text-green-500",
      value: "+2%",
      label: "than yesterday",
    },
  },
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Monthly Hiring",
    value: "13,430",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;
