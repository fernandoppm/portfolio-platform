import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, anticipate } from 'framer-motion';
import { PortfolioContext } from "../contexts/PortfolioContext";
import type { Portfolio, Experience, Project } from "../types/portfolio";
import styles from "./Form.module.css";


const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween' as const,
  ease: anticipate,
  duration: 0.5,
};

function PortfolioFormPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>(); 
  const context = useContext(PortfolioContext);

  const [isEditMode, setIsEditMode] = useState(false);
  const [portfolioData, setPortfolioData] = useState<Omit<Portfolio, "id">>({
    name: "", title: "", skills: [], experiences: [], projects: [],
  });
  
  const [currentSkill, setCurrentSkill] = useState("");
  const [currentExperience, setCurrentExperience] = useState<Omit<Experience, "id">>({ title: "", company: "", years: "" });
  const [currentProject, setCurrentProject] = useState<Omit<Project, "id">>({ title: "", description: "", link: "" });

  useEffect(() => {
    if (id && context) {
      const existingPortfolio = context.getPortfolioById(id);
      if (existingPortfolio) {
        setPortfolioData(existingPortfolio);
        setIsEditMode(true);
      }
    }
  }, [id, context]);

  if (!context) {
    throw new Error("Component must be used within a PortfolioProvider");
  }

  const handleAddSkill = () => {
    if (currentSkill && !portfolioData.skills.includes(currentSkill)) {
      setPortfolioData({ ...portfolioData, skills: [...portfolioData.skills, currentSkill] });
      setCurrentSkill("");
    }
  };

  const handleAddExperience = () => {
    if (currentExperience.title && currentExperience.company) {
      setPortfolioData({ ...portfolioData, experiences: [...portfolioData.experiences, { ...currentExperience, id: crypto.randomUUID() }] });
      setCurrentExperience({ title: "", company: "", years: "" });
    }
  };

  const handleAddProject = () => {
     if (currentProject.title && currentProject.description) {
      setPortfolioData({ ...portfolioData, projects: [...portfolioData.projects, { ...currentProject, id: crypto.randomUUID() }] });
      setCurrentProject({ title: "", description: "", link: "" });
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (portfolioData.name && portfolioData.title) {
      if (isEditMode && id) {
        context.updatePortfolio(id, portfolioData);
      } else {
        context.addPortfolio(portfolioData);
      }
      navigate("/"); 
    } else {
      alert("Por favor, preencha pelo menos o Nome e o Cargo.");
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className={styles.formContainer}>
        <h2>{isEditMode ? "Editar Portfólio" : "Criar Novo Portfólio"}</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome Completo</label>
            <input type="text" id="name" value={portfolioData.name} onChange={(e) => setPortfolioData({...portfolioData, name: e.target.value})} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="title">Cargo/Título</label>
            <input type="text" id="title" value={portfolioData.title} onChange={(e) => setPortfolioData({...portfolioData, title: e.target.value})} required />
          </div>

          <hr className={styles.divider} />

          <div className={styles.formSection}>
            <h3>Habilidades</h3>
            <ul className={styles.itemList}>
              {portfolioData.skills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
            <div className={styles.addSection}>
              <input type="text" placeholder="Ex: React" value={currentSkill} onChange={(e) => setCurrentSkill(e.target.value)} />
              <button type="button" onClick={handleAddSkill}>Adicionar Habilidade</button>
            </div>
          </div>

          <hr className={styles.divider} />

          <div className={styles.formSection}>
            <h3>Experiências</h3>
            <ul className={styles.itemList}>
              {portfolioData.experiences.map(exp => <li key={exp.id}>{exp.title} em {exp.company}</li>)}
            </ul>
            <div className={styles.addSection}>
              <input type="text" placeholder="Cargo" value={currentExperience.title} onChange={(e) => setCurrentExperience({...currentExperience, title: e.target.value})} />
              <input type="text" placeholder="Empresa" value={currentExperience.company} onChange={(e) => setCurrentExperience({...currentExperience, company: e.target.value})} />
              <input type="text" placeholder="Período (Ex: 2022-2024)" value={currentExperience.years} onChange={(e) => setCurrentExperience({...currentExperience, years: e.target.value})} />
              <button type="button" onClick={handleAddExperience}>Adicionar Experiência</button>
            </div>
          </div>

          <hr className={styles.divider} />

          <div className={styles.formSection}>
              <h3>Projetos</h3>
              <ul className={styles.itemList}>
                  {portfolioData.projects.map(proj => <li key={proj.id}>{proj.title}</li>)}
              </ul>
              <div className={styles.addSection}>
                  <input type="text" placeholder="Título do Projeto" value={currentProject.title} onChange={(e) => setCurrentProject({...currentProject, title: e.target.value})}/>
                  <textarea placeholder="Descrição do Projeto" value={currentProject.description} onChange={(e) => setCurrentProject({...currentProject, description: e.target.value})}/>
                  <input type="text" placeholder="Link do Projeto" value={currentProject.link} onChange={(e) => setCurrentProject({...currentProject, link: e.target.value})}/>
                  <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
              </div>
          </div>
          
          <motion.button 
            type="submit" 
            className={styles.submitButton}
            whileTap={{ scale: 0.95 }} 
          >
            Salvar Portfólio
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}

export default PortfolioFormPage;