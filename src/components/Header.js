import React from "react";
// the Header component renders an h1 with a title prop, contained in a div. 
const Header = (props) => {
  return (
    <div>
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};
// a style object is defined and passed as inline styling to the h1 in the header. 
const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
};
// Header is made public
export default Header;
