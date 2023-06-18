import Link from "next/link";

import packageJson from "../../package.json";

export const Footer = () => {
  return (
    <footer>
      <Link
        href="https://github.com/xeramiya/coding-yumm"
        target="_blank"
        rel="noopener noreferrer"
        className="repolink"
      >
        リポジトリはこちら
      </Link>
    </footer>
  );
};

export default Footer;
