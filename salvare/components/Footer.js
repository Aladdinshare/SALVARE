import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="fixed-footer">
      <nav>
        <ul>
          <li>
            <Link href="/nft">
              NFT
            </Link>
          </li>
          <li>
            <Link href="/">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/mypage">
              MyPage
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
