import Link from "next/link";

type NavbarLinkProps = {
  href: string;
  link: string;
};

const NavbarLink = ({ href, link }: NavbarLinkProps) => {
  return (
    <Link href={href}>
      <a className="p-2 mx-2 rounded-md hover:bg-slate-100">{link}</a>
    </Link>
  );
};

export default NavbarLink;
