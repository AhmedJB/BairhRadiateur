import React from 'react'

type Props = {}

function Loader({}: Props) {
  return (
    <div className="lds-grid">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

export default Loader