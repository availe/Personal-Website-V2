interface NavbarSocialListItemProps {
  href: string;
  label: string;
  icon: React.ElementType;
  onItemClick?: () => void;
}

const NavbarSocialListItem = ({
  href,
  icon: Icon,
  label,
  onItemClick,
}: NavbarSocialListItemProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center ml-10 gap-1 border-b border-transparent hover:border-b-gray-200"
      onClick={onItemClick}
    >
      <Icon className="w-8 h-8" />
      <span>{label}</span>
    </a>
  );
};

export default NavbarSocialListItem;
