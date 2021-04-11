import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import RotatingMars from "./mars_rotate.gif";
import useToken from "../../common/useToken";

const Navbar = () => {
  const { token } = useToken();

  return (
    <nav className={styles.navbar}>
      <Link to='/'>
        <h1 className={styles.navbarTitle}>Mission Mars Project</h1>
      </Link>
      <div className={styles.links}>
        <Link className={styles.link} to='/'>
          H<img src={RotatingMars} alt='' />me
        </Link>
        <Link className={styles.link} to='/create'>
          New Article
        </Link>
        {token ? (
          <Link className={styles.link} to='/logout'>
            Log Out
          </Link>
        ) : (
          <Link className={styles.link} to='/login'>
            Log In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
