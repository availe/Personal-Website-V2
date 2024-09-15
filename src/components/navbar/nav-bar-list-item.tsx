import Link from "next/link";
import { memo } from "react";

interface NavbarListItemProps {
  href: string;
  text: string;
  onItemClick?: () => void;
}

const NavbarListItem = ({ href, text, onItemClick }: NavbarListItemProps) => {
  const itemClass = `text-xl border-b border-transparent hover:border-b-gray-200 ml-10`;

  return (
    <li className={itemClass} onClick={onItemClick}>
      <Link href={href}>{text}</Link>
    </li>
  );
};

export default memo(NavbarListItem);
