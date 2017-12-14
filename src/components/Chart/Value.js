import React from 'react';

export default ({ value }) => {
  return (
    <section className="Value__parent">
      <span>${ value }</span>
    </section>
  )
}