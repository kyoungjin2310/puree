import Link from "next/link";
import { MenuList, MenuListItem } from "../type/menu";

interface Props {
  menu: MenuList;
}

export default function Menu({ menu }: Props) {
  return (
    <div>
      <ul>
        {menu.map((list: MenuListItem, key: number) => {
          return (
            <li key={key}>
              <Link href={list.url}>{list.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
