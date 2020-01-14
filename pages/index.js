import Link from 'next/link'

function Index() {
  return (
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
  )
}

export default Index