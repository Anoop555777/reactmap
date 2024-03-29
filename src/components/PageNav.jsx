import styles from "./PageNav.module.css";
import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";
const PageNav = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">product</NavLink>
        </li>
        <li>
          <Link to="/login" className="cta">
            login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
