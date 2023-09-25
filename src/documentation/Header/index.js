import { useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { components } from "../../utils/componentDataList";
const Header = () => {
  const [state, setState] = useState("");
  const navigate = useNavigate();
  // on change handler
  const handleChange = (e) => {
    setState(e.target.value);
  };
  // search handler
  const handleSearch = (e) => {
    e.preventDefault();
    const findComponents = components.find(
      (ele) => ele.name.toLowerCase() === state.toLowerCase()
    );
    if (findComponents) {
      navigate(`${findComponents.url}`);
      setState("");
    } else {
      alert("Component not found");
    }
  };
  return (
    <>
      <header>
        <div class="brand">
          <img src="/Logo.png" alt="Brand Logo" />
          <Link to="/">Beautify</Link>
        </div>
        <div class="search-box">
          <input
            type="text"
            class="search-input"
            placeholder="Search"
            value={state}
            onChange={handleChange}
          />
          <button class="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div class="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/components">Components</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
export default Header;
