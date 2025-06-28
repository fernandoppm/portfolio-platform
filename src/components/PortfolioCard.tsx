import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import type { Portfolio } from "../types/portfolio";
import styles from "./PortfolioCard.module.css";

interface PortfolioCardProps {
  portfolio: Portfolio;
}

export function PortfolioCard({ portfolio }: PortfolioCardProps) {
  return (
    <motion.div 
      className={styles.card}
      whileHover={{ scale: 1.03, y: -5 }}
      layout
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <h3>{portfolio.name}</h3>
      <p>{portfolio.title}</p>
      <Link to={`/portfolio/${portfolio.id}`} className={styles.detailsButton}>
        Ver Detalhes
      </Link>
    </motion.div>
  );
}