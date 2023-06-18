import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <nav>
        <div className="homelink">
          <Link href="./">
            <Image
              src="favicon/favicon.svg"
              width="24"
              height="24"
              alt="Ridge Runner"
              className="homeicon"
            />
          </Link>
          <h1>都道府県別人口推移表示システム</h1>
        </div>
      </nav>
    </header>
  );
};

export default Header;
