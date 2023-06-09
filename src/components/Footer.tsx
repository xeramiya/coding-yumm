import Link from "next/link";

import packageJson from "../../package.json";

export const Footer = () => {
  return (
    <footer className="">
      <div className="">
        <Link
          href="https://github.com/xeramiya/coding-yumm"
          target="_blank"
          rel="noopener noreferrer"
        >
          リポジトリはこちら
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
