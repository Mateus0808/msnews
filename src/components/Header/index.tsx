import Image from "next/image";
import logoImage from "../../../public/images/logo.svg";
import Link from "next/link";
import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image height={88} width={88} src={logoImage} alt="ms.news" />
        <nav>
          <Link href="/">
            <a className={styles.active}>Home</a>
          </Link>
          <Link href="/posts">
            <a href="">Posts</a>
          </Link>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
