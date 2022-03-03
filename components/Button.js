import React from "react";

function Button(props) {
  return (
    <div>
      <a className="flex flex-row justify-center items-center py-1.5 px-3 relative bg-white rounded-md text-black uppercase text-sans text-xs leading-4 font-500 bg-opacity-20 duration-500 hover:bg-opacity-70 tracking-widest">
        {props.children}
      </a>
    </div>
  );
}

export default Button;
