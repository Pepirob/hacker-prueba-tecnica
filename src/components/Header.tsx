import hackerNewLogo from '../../public/y18.svg'
import { header, image, link } from './Header.css'
function Header () {
  return (
    <nav className={header}>
      <img className={image} src={hackerNewLogo} alt='Logo of Hacker News' />
      <a className={link} href='/'>Hacker News</a>
    </nav>
  )
}

export default Header
