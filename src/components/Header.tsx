import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <Link href="./">
            Ridge Runner
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
