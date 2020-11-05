import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SlidbarData = [
  {
    title: "Home",
    path: "/",
    icons: <AiIcons.AiFillHome />,
    className: "nav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    icons: <IoIcons.IoIosPaper />,
    className: "nav-text",
  },
  {
    title: "Products",
    path: "/prodcts",
    icons: <FaIcons.FaCartPlus />,
    className: "nav-text",
  },
  {
    title: "Team",
    path: "/team",
    icons: <IoIcons.IoMdPeople />,
    className: "nav-text",
  },
  {
    title: "Messages",
    path: "/messages",
    icons: <FaIcons.FaEnvelopeOpenText />,
    className: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icons: <IoIcons.IoMdHelpCircle />,
    className: "nav-text",
  },
];
