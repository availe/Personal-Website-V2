import Link from "next/link";

interface NavbarListItemProps {
  href: string;
  text: string;
  isCurrent: boolean;
  onItemClick?: () => void;
}

const NavbarListItem = ({ href, text, isCurrent, onItemClick }: NavbarListItemProps) => {
  const itemClass = `text-xl ml-10 ${isCurrent ? 'border-b' : 'hover:border-b'}`;

  return (
    <Link href={href}>
      <li className={itemClass} onClick={onItemClick}>
        {text}
      </li>
    </Link>
  );
};

export default NavbarListItem;
