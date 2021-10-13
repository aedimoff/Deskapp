import React from 'react';
import ReactDOM from 'react-dom';
import Widgets from './widgets'
// import "bootstrap/dist/css/bootstrap.min.css"


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Widgets/>, root);
});
