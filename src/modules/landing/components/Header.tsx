import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
  <>
  
  <header className="app-header">
    <div className="header-inner">
      <Link href="/" aria-label="Tasky home" className="brand">
        <Image src="/logo.png" alt="Tasky" width={2172} height={724} priority />
      </Link>
      <span className="header-note">A little focus, every day.</span>
    </div>
  </header>
  </>
  );
}
