import React from 'react';

function Sidemenu(props) {
  return (
    <div>
      <i className={props.sidemenu.icon}></i>
      <span>{props.sidemenu.title}</span>
    </div>
  );
}

export default Sidemenu;
