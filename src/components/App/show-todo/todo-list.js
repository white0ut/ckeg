import React from 'react'
import _ from 'lodash'

export default (props) => {
  return (
    <ul>
      {
        _.map(props.todos, (item) => <li key={item.id}>{item.name}</li>)
      }
    </ul>
  )
}