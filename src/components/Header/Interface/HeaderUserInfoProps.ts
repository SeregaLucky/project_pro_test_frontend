interface HeaderUserInfoProps {
  isOpen?: boolean;
  isMobile: boolean;
  name: string;
  handleClick?: () => void;
  auth: boolean;
  handleSignOut: () => void;
}

export default HeaderUserInfoProps;