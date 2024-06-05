"use client";

import Menu from "./menu/MenuStyle";
import { MenuList } from "./type/menu";

export default function HeaderStyle() {
  const menu: MenuList = [{ title: "menu1", url: "/menu1" }];

  return (
    <div>
      <Menu menu={menu} />
    </div>
  );
}
