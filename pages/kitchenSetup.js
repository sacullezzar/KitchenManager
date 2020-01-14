import { Component } from 'react'
import fetch from 'isomorphic-unfetch'

export default class kitchenSetup extends Component {
  constructor() {
    super()
    this.state = {
      areaName: '',
      savedAreas: []
    }
  }

  getInitialProps = async () => {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    fetch('/api/addArea', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          areaName:this.state.areaName
        })
      })
      .then(res => res.text())
      .then(data => console.log(`Successfully added ${data}`))
      .catch(err => console.log(err))
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          name='areaName'
          type='text'
          id='areaName'
          value={this.state.areaName}
          onChange={this.handleChange}>
        </input>
        <input type='submit'/>
      </form>
    )
  }
}