import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">useState</Link>
          </li>
          <li>
            <Link to="/use-effect">useEffect</Link>
          </li>
          <li>
            <Link to="/use-memo">useMemo</Link>
          </li>
          <li>
            <Link to="/use-ref">useRef</Link>
          </li>
          <li>
            <Link to="/use-context">useContext</Link>
          </li>
          <li>
            <Link to="/use-reducer">useReducer</Link>
          </li>
          <li>
            <Link to="/use-callback">useCallback</Link>
          </li>
        </ul>
      </nav>

      <div className="continer"><Outlet /></div>
    </>
  )
};

export default Layout;