import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image height={140} width={200} src="/download.jpeg" alt="" />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <Link href="/ninjas">
        <a>All Users</a>
      </Link>
    </nav>
  );
};

export default Navbar;
