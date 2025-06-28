
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { PortfolioContext } from "../contexts/PortfolioContext";
import { PortfolioCard } from "../components/PortfolioCard";
import styles from "./HomePage.module.css";
import { FaSearch } from "react-icons/fa";

const pageVariants = {
  initial: { opacity: 0 },
  in: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1 
    }
  },
  out: { opacity: 0 },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
};

function HomePage() {
  const context = useContext(PortfolioContext);
  const [searchTerm, setSearchTerm] = useState("");

  if (!context) {
    throw new Error("HomePage must be used within a PortfolioProvider");
  }

  const { portfolios } = context;

  const filteredPortfolios = portfolios.filter(portfolio =>
    portfolio.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    portfolio.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <motion.div variants={itemVariants}>
        <div className={styles.hero}>
          <h1>Sua Vitrine de Talentos Criativos</h1>
          <p>Crie, personalize e compartilhe seus portfólios de forma elegante e profissional.</p>
          <Link to="/create" className={styles.createButton}>
            Começar Agora
          </Link>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="search"
            placeholder="Buscar por nome ou cargo..."
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className={styles.sectionTitle}>
        <h2>Portfólios Existentes</h2>
      </motion.div>

      <div className={styles.grid}>
        {filteredPortfolios.length > 0 ? (
          filteredPortfolios.map((p) => (
              <PortfolioCard key={p.id} portfolio={p} />
          ))
        ) : (
          <motion.p variants={itemVariants}>
            {searchTerm 
              ? `Nenhum portfólio encontrado com o termo "${searchTerm}".` 
              : "Nenhum portfólio criado ainda. Comece criando o seu!"
            }
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}

export default HomePage;