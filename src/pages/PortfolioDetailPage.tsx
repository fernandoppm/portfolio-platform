import { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { PortfolioContext } from "../contexts/PortfolioContext";
import styles from './PortfolioDetailPage.module.css';
import { FaArrowLeft, FaTrash, FaLink, FaEdit } from "react-icons/fa"; 

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween" as const,
  ease: "anticipate" as const,
  duration: 0.5,
};

function PortfolioDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const context = useContext(PortfolioContext);

  if (!context) throw new Error("Component must be used within a PortfolioProvider");
  
  const { getPortfolioById, deletePortfolio } = context;
  const portfolio = getPortfolioById(id!);

  const handleDelete = () => {
    if (window.confirm("Tem certeza que deseja excluir este portfólio?")) {
        deletePortfolio(id!);
        navigate('/');
    }
  }

  if (!portfolio) {
    return <div><h2>Portfólio não encontrado</h2></div>;
  }

  return (
    <motion.div
      className={styles.detailsContainer}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className={styles.header}>
        <Link to="/" className={styles.backLink}>
          <FaArrowLeft style={{ marginRight: '8px' }} />
          Voltar
        </Link>
        {/* <-- NOVO: Div para agrupar os botões de ação */}
        <div className={styles.actions}>
            <Link to={`/edit/${portfolio.id}`} className={styles.editButton}>
                <FaEdit style={{ marginRight: '8px' }} />
                Editar
            </Link>
            <button onClick={handleDelete} className={styles.deleteButton}>
              <FaTrash style={{ marginRight: '8px' }} />
              Excluir
            </button>
        </div>
      </div>

      <h1>{portfolio.name}</h1>
      <h2>{portfolio.title}</h2>
      
      <div className={styles.section}>
        <h3>Habilidades</h3>
        <ul className={styles.skillsList}>
            {portfolio.skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </div>

      <div className={styles.section}>
        <h3>Experiências Profissionais</h3>
        {portfolio.experiences.map(exp => (
            <div key={exp.id} className={styles.itemCard}>
                <h4>{exp.title}</h4>
                <p>{exp.company} ({exp.years})</p>
            </div>
        ))}
      </div>

      <div className={styles.section}>
        <h3>Projetos</h3>
        {portfolio.projects.map(proj => (
            <div key={proj.id} className={styles.itemCard}>
                <h4>{proj.title}</h4>
                <p>{proj.description}</p>
                {proj.link && <a href={proj.link} target="_blank" rel="noopener noreferrer"><FaLink style={{ marginRight: '8px' }} />Ver projeto</a>}
            </div>
        ))}
      </div>
    </motion.div>
  );
}

export default PortfolioDetailPage;