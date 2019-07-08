import React from 'react'
const Properties = props => {
  const {id, properties} = props.feature
  return (
    <li>{`${id} : ${properties.place} : ${properties.mag} : ${
      properties.magType
    }`}</li>
  )
}
export default Properties
