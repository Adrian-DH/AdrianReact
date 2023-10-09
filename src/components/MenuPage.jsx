import { useState } from "react";
const terms = ["Fall", "Winter", "Spring"];

const MenuButton = ({term, selection, setSelection}) => (
  <div>
    <input type="radio" id={term} className="btn-check" checked={term === selection} autoComplete="off"
      onChange={() => setSelection(term)} />
    <label className="btn btn-success mb-1 p-2" htmlFor={term}>
    { term }
    </label>
  </div>
);

const MenuSelector = ({selection, setSelection}) => (
  <div className="btn-group">
    { 
      terms.map(term => <MenuButton key={term} term={term} selection={selection} setSelection={setSelection} />)
    }
  </div>
);

const Menu = ({selection}) => (
  <div className="card" >
  { terms[selection] }
  </div>
);

const MenuPage = ({selection, setSelection}) => {
  console.log(selection);
  return (
    <div>
      <MenuSelector selection={selection} setSelection={setSelection} />
      <Menu selection={selection} />
    </div>
  );
}

export default MenuPage;