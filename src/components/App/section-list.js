import React from 'react';
import _ from 'lodash'

export default (props) => {
  return (
    <ul>
      {
        _.map(props.sections, (section) => 
          <li onClick={props.onClick.bind(this, section.id)}
              key={section.id}>{section.name}</li>)
      }
    </ul>
  )
}