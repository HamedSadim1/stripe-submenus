import React from "react";
import { LinkType } from "../data";

const LinkItem: React.FC<LinkType> = ({ label, icon, url }) => {
  return (
    <a href={url}>
      {icon}
      {label}
    </a>
  );
};

export default LinkItem;
