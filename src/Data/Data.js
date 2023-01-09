import { HiHome } from 'react-icons/hi';
import { GoMail } from 'react-icons/go';
import { HiOutlineChat } from 'react-icons/hi';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';


export const SidebarData = [
    {
      icon: HiHome,
      heading: "Dashboard",
    },
    {
      icon: GoMail,
      heading: "Messages",
    },
    {
      icon: HiOutlineChat,
      heading: "Chats",
    },
    {
      icon: AiOutlineUser,
      heading: 'Profile'
    },
    {
      icon: AiOutlineCloudUpload,
      heading: 'Upload'
    },
    {
        icon: FiSettings,
        heading: 'Settings'
    },
    
  ];

// Recent Card Data
export const cardsData = [
  {
    title: "Niketa William",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    place:"Paris",
    
  },
  {
    title: "Trisha Louis",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    place:"London",
  },
  {
    title: "Ana Tomas",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    place:"USA",
  },
];