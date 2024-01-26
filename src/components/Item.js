
import React from "react";

const Item = ({ Links, title }) => {
  return (
    <div>
    <ul>
      <h1 className="mb-2 font-bold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className=" hover:text-teal-400 duration-300
            text-3 cursor-pointer leading-6  " 
            href={link.link}
            >
            {link.name}
          </a>
        </li>
      ))}
     
    </ul>
    
    </div>
  );
};

export default Item;
