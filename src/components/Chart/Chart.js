import React from 'react';
import Topic from './Topic';
import Value from './Value';

export default ({ data, clickEvent, value }) => {
  return (
    <section className="Chart__parent">
      {
        data.map( ( topic, index ) => (
          <Topic key={ `topic-${ index }` } data={ topic } clickEvent={ clickEvent } />
        ))
      }

      <Value value={ value } />
    </section>
  )
}