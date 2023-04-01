import React from 'react';

function footer(){
  const cuurYear = new Date().getFullYear();
  return <footer>
  <p>
    Copyright © {cuurYear}
  </p>
  </footer>
}

export default footer;