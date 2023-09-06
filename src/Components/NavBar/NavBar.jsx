import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./NavBar.css";
import tab from "../../assets/tab.png"
import X from "../../assets/X.png"
import { useEffect, useRef, useState } from "react";
export default function NavBar() {

  const [showTab, setShowTab] = useState(false);
  const ulRef = useRef();

  useEffect(() => {
    let hadnler = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowTab(false)
      }
    }
    document.addEventListener("mousedown", hadnler)

    return () => {
      document.removeEventListener("mousedown", hadnler);
    }
  })

  return (
    <nav className="nav-container">
      <h1>
        <Link to="/">Mher Kevorkian</Link>
      </h1>

      <ul ref={ulRef} className={showTab === false ? "desktop-tab-links" : "desktop-tab-links active"}>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/projects">Projects</CustomLink>
        <CustomLink to="/skills">Skills</CustomLink>
        <CustomLink to="/achievments">Achievments</CustomLink>
      </ul>
      <div onClick={(e) => {
        e.preventDefault();
        setShowTab(!showTab)
      }}
        className="nav-tab-btn">
        {showTab === false ? <img src={tab} /> : <img ref={ulRef} style={{ width: '40px', height: "30px" }} src={X} />}
      </div>

    </nav>
  );
}

function CustomLink({ to, children, props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? 'active' : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
