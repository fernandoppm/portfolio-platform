import { Outlet, Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import styles from "./App.module.css";
import { ThemeToggleButton } from "./components/ThemeToggleButton"; 

function App() {
  const location = useLocation();

  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <Link to="/" className={styles.logoLink}>
            <h1>Plataforma de Portfólios</h1>
        </Link>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/create" className={styles.navLink}>Criar Portfólio</Link>
          {/* Adicione o botão de tema aqui */}
          <ThemeToggleButton />
        </nav>
      </header>
      <main>
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;