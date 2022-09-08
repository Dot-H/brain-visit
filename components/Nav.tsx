import Image from "next/image";
import Link from "next/link";
import Logo from "../components/Logo";
import GithubLogo from "../public/assets/icons/github-logo.svg";
import LinkedinLogo from "../public/assets/icons/linkedin-logo.svg";

const Nav = () => (
  <nav className="text-primary flex items-center justify-between py-2.5">
    <Link href="/">
      <a className="flex items-center">
        <Logo />
      </a>
    </Link>
    <div className="flex space-x-2">
      <a
        href="https://www.linkedin.com/in/alexandre-bernard-ek/"
        target="_blank"
        rel="noreferrer"
      >
        <Image alt="linkedin logo" width={30} height={30} src={LinkedinLogo} />
      </a>
      <a
        href="https://github.com/Dot-H/website"
        target="_blank"
        rel="noreferrer"
      >
        <Image alt="github logo" width={30} height={30} src={GithubLogo} />
      </a>
    </div>
  </nav>
);

export default Nav;
