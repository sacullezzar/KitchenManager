import { Component } from 'react'
import NavMenu from '../components/NavMenu'
import AreaManager from '../components/AreaManager'
import fetch from 'isomorphic-unfetch'

export default class kitchenSetup extends Component {
  constructor() {
    super()
    this.state = {
      areaName: '',
      savedAreas: []
    }
  }

  areaNameChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  areaNameSubmit = evt => {
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
      <div>
        <NavMenu/>
        <AreaManager 
          areaName={this.state.areaName}
          areaNameChange={this.areaNameChange}
          areaNameSubmit={this.areaNameSubmit}
          areas={this.state.areas}/>
      </div>
    )
  }
}