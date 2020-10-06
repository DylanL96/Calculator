import React from 'react'

const Display = (props) => {
  // console.log(props)
  return (
    <div id="display">
      {props.value}
    </div>
  )
}

export default Display