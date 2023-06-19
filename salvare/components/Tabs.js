import Link from 'next/link';

const Tabs = () => {
  return (
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
  );
};

export default Tabs;
