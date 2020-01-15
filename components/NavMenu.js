import Link from 'next/link'

const NavMenu = () => {
  return (
    <div>
          <ul>
          <li>
            <Link href="/">
              <a>Index</a>
            </Link>
          </li>
          <li>
            <Link href="/kitchenSetup">
              <a>Kitchen Setup</a>
            </Link>
          </li>
        </ul>
      </div>
  )
}

export default NavMenu