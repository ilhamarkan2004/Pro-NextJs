import Link from "next/link";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">blog</Link>
        </li>
        <li>
          <Link href="/users">users</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
