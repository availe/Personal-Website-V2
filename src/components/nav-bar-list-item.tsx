import Link from "next/link";

interface NavbarListItemProps {
  href: string;
  text: string;
  isMobileMenu?: boolean;
  isActive: boolean;
  onItemClick?: () => void;
}

const NavbarListItem = ({
  href,
  text,
  isActive,
  onItemClick,
}: NavbarListItemProps) => {
  const itemClass = `text-xl hover:border-b`

  return (
    <li className={itemClass} onClick={onItemClick}>
      <Link href={href}>
        {text}
      </Link>
    </li>
  );
};

export default NavbarListItem;