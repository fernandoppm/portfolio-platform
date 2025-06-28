import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import styles from './ThemeToggleButton.module.css';

export function ThemeToggleButton() {
  const context = useContext(ThemeContext);

  if (!context) return null;

  const { theme, toggleTheme } = context;

  return (
    <button className={styles.toggleButton} onClick={toggleTheme}>
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  );
}