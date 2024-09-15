import Link from "next/link";

interface NavbarListItemProps {
  href: string;
  text: string;
  onItemClick?: () => void;
}

const NavbarListItem = ({ href, text, onItemClick }: NavbarListItemProps) => {
  const itemClass = `text-xl border-b border-transparent hover:border-b-gray-200 ml-10`;

  return (
    <Link href={href}>
      <li className={itemClass} onClick={onItemClick}>
        {text}
      </li>
    </Link>
  );
};

export default NavbarListItem;
