import React from 'react';

export default ({ data, clickEvent }) => {
  return (
    <div className="Topic__parent">
      <h1>{ data.title }</h1>

      <div className="row-0">
        <div className="cell-empty" />
        <div className="cell-level">
          <span>Level 0</span>
        </div>
        <div className="cell-level">
          <span>Level 1</span>
        </div>
        <div className="cell-level">
          <span>Level 2</span>
        </div>
        <div className="cell-level cell-right-end">
          <span>Level 3</span>
        </div>
      </div>

      {
        data.sub_topics.map( ( sub_topic, sub_index ) => (
          <div className="row-dynamic" key={ `row-dynamic-${ sub_index }` }>
            <div className={ data.sub_topics.length - 1 === sub_index ? 'cell-topic cell-bottom-end' : 'cell-topic' }>
              <span>{ sub_topic.title }</span>
            </div>

            {
              sub_topic.levels.map( ( level, level_index ) => (
                <div  className={ sub_topic.levels.length - 1 === level_index ? 'cell-details cell-right-end' : 'cell-details' } 
                      key={ `cell-dynamic-${ level_index } ` }
                      id={ data.sub_topics.length - 1 === sub_index ? 'cell-bottom-end' : null }
                      onClick={ () => clickEvent( sub_topic.levels, level_index ) }>
                  <span>{ level.text }</span>
                  {
                    level.selected
                    ?
                      <div className="cell-selected-mask" />
                    :
                      null
                  }
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}