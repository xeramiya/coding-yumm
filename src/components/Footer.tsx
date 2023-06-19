import Link from "next/link";

/**
 * フッター
 */
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
