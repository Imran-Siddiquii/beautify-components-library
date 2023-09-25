import { Link } from "react-router-dom";
import "./styles.css";
import { components } from "../../utils/componentDataList";
const Components = () => {
  return (
    <>
      <div className="components-page">
        <h2 className="component-headings">All Components</h2>
        <div className="component-grid">
          {components.map((component, index) => (
            <div className="component-box" key={index}>
              <Link to={component.url}>
                <div className="component-content">
                  <h4>{component.name}</h4>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Components;
