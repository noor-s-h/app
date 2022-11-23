import data from 'data/navdata'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'

export default function Header() {
  return (
    <header className="border-b bg-white">
      <nav className="container flex h-16 items-center justify-between">
        <Logo />
        <MobileMenu {...data} />
        <DesktopMenu {...data} />
      </nav>
    </header>
  )
}
