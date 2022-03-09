import React from "react";
import { HiX } from "react-icons/hi";

import NavLink from "../links/NavLink";

const Menu = ({ close }) => {
  return (
    <div className="menu">
      <div className="site py-8">
        <div className=" text-white cursor-pointer" onClick={close}>
          <HiX size={30} />
        </div>
      </div>
      <div className="site md:grid grid-cols-7">
        <div className="col-span-2"></div>
        <div className="py-32 col-span-4">
          <NavLink label="WELCOME" link="/#welcome" close={close} />
          <NavLink label="MY WORK" link="/#mywork" close={close} />
          <NavLink label="CONTACT ME" link="/#contactme" close={close} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
