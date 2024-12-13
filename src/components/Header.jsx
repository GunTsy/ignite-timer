import Style from './Header.module.css'

import igniteLogo from '../assets/Ignite-logo.svg'

export function Header() {
  return (
  <header className={Style.header}>
    <img src={igniteLogo} alt="Logotipo do ignite" />
  </header>
  )
}