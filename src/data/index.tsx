import React from "react";
import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";

export type LinkType = {
  label: string;
  icon: React.JSX.Element;
  url: string;
};

export interface SUBLINKS {
  page: string;
  links: LinkType[];
}

export const sublinks: SUBLINKS[] = [
  {
    page: "products",
    links: [
      { label: "payment", icon: <FaCreditCard />, url: "/products" },
      { label: "terminal", icon: <FaCreditCard />, url: "/products" },
      { label: "connect", icon: <FaCreditCard />, url: "/products" },
    ],
  },
  {
    page: "developers",
    links: [
      { label: "plugins", icon: <FaBook />, url: "/products" },
      { label: "libraries", icon: <FaBook />, url: "/products" },
      { label: "help", icon: <FaBook />, url: "/products" },
      { label: "billing", icon: <FaBook />, url: "/products" },
    ],
  },
  {
    page: "company",
    links: [
      { label: "about", icon: <FaBriefcase />, url: "/products" },
      { label: "customers", icon: <FaBriefcase />, url: "/products" },
    ],
  },
];
