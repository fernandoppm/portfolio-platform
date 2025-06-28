import { createContext, useState, type ReactNode, useEffect } from "react";
import type { Portfolio } from "../types/portfolio";

interface PortfolioContextData {
  portfolios: Portfolio[];
  addPortfolio: (portfolio: Omit<Portfolio, "id">) => void;
  getPortfolioById: (id: string) => Portfolio | undefined;
  deletePortfolio: (id: string) => void;
  updatePortfolio: (id: string, updatedData: Partial<Portfolio>) => void; 
}

export const PortfolioContext = createContext<PortfolioContextData | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [portfolios, setPortfolios] = useState<Portfolio[]>(() => {
    const storedPortfolios = localStorage.getItem("portfolios");
    return storedPortfolios ? JSON.parse(storedPortfolios) : [];
  });

  useEffect(() => {
    localStorage.setItem("portfolios", JSON.stringify(portfolios));
  }, [portfolios]);

  const addPortfolio = (newPortfolioData: Omit<Portfolio, "id">) => {
    const newPortfolio: Portfolio = {
      ...newPortfolioData,
      id: crypto.randomUUID(),
    };
    setPortfolios((prev) => [...prev, newPortfolio]);
  };

  const getPortfolioById = (id: string) => {
    return portfolios.find((p) => p.id === id);
  };

  const deletePortfolio = (id: string) => {
    setPortfolios((prev) => prev.filter((p) => p.id !== id));
  };
  
  const updatePortfolio = (id: string, updatedData: Partial<Portfolio>) => {
    setPortfolios((prevPortfolios) =>
      prevPortfolios.map((portfolio) =>
      
        portfolio.id === id 
          ? { ...portfolio, ...updatedData } 
          : portfolio
      )
    );
  };

  const contextValue = { 
    portfolios, 
    addPortfolio, 
    getPortfolioById, 
    deletePortfolio, 
    updatePortfolio 
  };

  return (
    <PortfolioContext.Provider value={contextValue}>
      {children}
    </PortfolioContext.Provider>
  );
}