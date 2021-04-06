import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <nav className={styles.navbar}>
      <h1 className={styles.navbarTitle}>Mission Mars Project</h1>
      <div className={styles.links}>
        <Link className={styles.link} to="/">Home</Link>
        <Link className={styles.link} to="/create">New Article</Link>
        <Link className={styles.link} to="/login">Log In / Sign </Link>
      </div>
    </nav>
   );
}
 
export default Navbar;