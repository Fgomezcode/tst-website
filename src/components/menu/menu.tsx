import React from "react";

interface  MenuProps {
    label: string;
  }

  const Menu: React.FC<MenuProps> = ({ 
    label,
   }) => {
       // TODO: Add images and more navigation
    return (
        <>
            <h1>Hello Welcome to, {label}</h1>
        </>
    );
  }

  export default Menu