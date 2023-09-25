import { Link } from "react-router-dom";
import "./styles.css";
import { components } from "../../utils/componentDataList";
const Sidebar = () => {
  return (
    <>
      <div className="container">
        <nav className="sidebar">
          <ul>
            {components.map(({ name, url }) => (
              <li key={url}>
                <Link to={url}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Sidebar;
