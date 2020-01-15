const AreaManager = (props) => {
  return (
    <div>
      <form onSubmit={props.areaNameSubmit}>
        <input
          name='areaName'
          type='text'
          id='areaName'
          value={props.areaName}
          onChange={props.areaNameChange} />
        <input type='submit'/>
      </form>
      {props.areas}
    </div>
  )
}

export default AreaManager