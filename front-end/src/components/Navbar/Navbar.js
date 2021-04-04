import styles from "./Navbar.module.css";

const Navbar = () => {
  return ( 
    <nav className={styles.navbar}>
      <h1 className={styles.navbarTitle}>Mission Mars Project</h1>
      <div className={styles.links}>
        <a className={styles.link} href="/">Home</a>
        <a className={styles.link} href="/create">New Article</a>
        <a className={styles.link} href="/login">Log In / Sign </a>
      </div>
    </nav>
   );
}
 
export default Navbar;