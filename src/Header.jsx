import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1>Bienvenue {props.person.name}</h1>
      <p>Sexe: {props.gender}</p>
      <p>Job: {props.person.job}</p>
    </div>
  );
};

export default Header;

/*
function Header() {
  return <header>My header</header>;
}

export default Header;
*/
