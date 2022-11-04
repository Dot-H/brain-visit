// Components
import DarkModeToggle from "components/DarkModeToggle";
import Link from "next/link";
import Logo from "components/Logo";

// Icons
import GithubLogo from "components/svgs/GithubLogo";
import LinkedinLogo from "components/svgs/LinkedinLogo";

const Nav = () => (
  <nav className="text-primary flex items-center justify-between py-2.5">
    <Link href="/">
      <a className="flex items-center">
        <Logo />
      </a>
    </Link>
    <div className="flex items-center space-x-2">
      <a
        href="https://github.com/Dot-H/brain-visit"
        target="_blank"
        rel="noreferrer"
      >
        <GithubLogo />
      </a>
      <a
        href="https://www.linkedin.com/in/alexandre-bernard-ek/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinLogo />
      </a>
      <DarkModeToggle />
    </div>
  </nav>
);

export default Nav;
