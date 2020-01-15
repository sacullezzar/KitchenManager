import NavMenu from '../components/NavMenu'

const Index = (props) => {
  return (
    <div>
      <h1>Kitchen Manager</h1>
      <NavMenu />
    </div>
  )
}

Index.getInitialProps = async () => {
  // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  // const data = await res.json()
  // return {
  //   areas: data.map(entry => entry.score)
  // }
  return {
    data: null
  }
}

export default Index