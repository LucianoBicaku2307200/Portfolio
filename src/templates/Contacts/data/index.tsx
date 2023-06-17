import { FaGithub, FaTelegramPlane } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BiCode } from "react-icons/bi";

import { ContactType } from "../types";

export const contactsData: ContactType[] = [
  {
    icon: <FaTelegramPlane size={20} />,
    href: "https://t.me/LucioDev",
    label: "Telegram",
    handle: "@LucioDev",
  },
  {
    icon: <CiMail size={20} />,
    href: "mailto:luciano.bicaku2307@gmail.com",
    label: "E-mail",
    handle: "luciano.bicaku2307@gmail.com",
  },
  {
    icon: <FaGithub size={20} />,
    href: "https://github.com/LucianoBicaku2307200",
    label: "Github",
    handle: "LucianoBicaku2307200",
  },
  {
    icon: <BiCode size={20} />,
    href: "https://leetcode.com/LucianoBicaku2307200/",
    label: "LeetCode",
    handle: "LucianoBicaku2307200",
  },
];
