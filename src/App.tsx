import { useState } from "react"; 
import { Outlet, Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa"; 
import styles from "./App.module.css";
import { ThemeToggleButton } from "./components/ThemeToggleButton";

function App() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <Link to="/" className={styles.logoLink} onClick={closeMenu}>
            <h1>Plataforma de Portfólios</h1>
        </Link>

        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/create" className={styles.navLink}>Criar Portfólio</Link>
          <ThemeToggleButton />
        </nav>

        <button className={styles.hamburgerButton} onClick={() => setIsMenuOpen(true)}>
          <FaBars />
        </button>
      </header>

      <nav className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
       
        <button className={styles.closeButton} onClick={() => setIsMenuOpen(false)}>
            <FaTimes />
        </button>
        
       
        <Link to="/" className={styles.navLink} onClick={closeMenu}>Home</Link>
        <Link to="/create" className={styles.navLink} onClick={closeMenu}>Criar Portfólio</Link>
        <ThemeToggleButton />
      </nav>

      <main>
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;