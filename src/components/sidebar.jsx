import React from 'react';
import Sidemenu from './sidemenu';

function Sidebar(props) {
  return (
    <div>
      {props.sidemenus.map((sidemenu) => {
        return <Sidemenu key={sidemenu.id} sidemenu={sidemenu}></Sidemenu>;
      })}
    </div>
  );
}

export default Sidebar;
