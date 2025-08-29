import { createContext, useState, ReactNode, useEffect } from "react";
import type { Portfolio } from "../types/portfolio"; 

const API_URL = "http://localhost:3000/portfolios";

interface PortfolioContextData {
  portfolios: Portfolio[];
  loading: boolean; 
  addPortfolio: (portfolio: Omit<Portfolio, "id">) => Promise<void>;
  updatePortfolio: (id: string, updatedData: Partial<Portfolio>) => Promise<void>;
  deletePortfolio: (id: string) => Promise<void>;
  getPortfolioById: (id:string) => Portfolio | undefined;
}

export const PortfolioContext = createContext<PortfolioContextData | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPortfolios(data);
      } catch (error) {
        console.error("Erro ao buscar portfólios:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchPortfolios();
  }, []); 

  const getPortfolioById = (id: string) => {
    return portfolios.find((p) => p.id === id);
  };
  

  const addPortfolio = async (newPortfolioData: Omit<Portfolio, "id">) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPortfolioData),
      });
      const createdPortfolio = await response.json();
      setPortfolios(prevPortfolios => [...prevPortfolios, createdPortfolio]);
    } catch (error) {
      console.error("Erro ao criar portfólio:", error);
    }
  };

  const updatePortfolio = async (id: string, updatedData: Partial<Portfolio>) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
      });
      const updatedPortfolioFromServer = await response.json();
      setPortfolios(prevPortfolios => 
        prevPortfolios.map(p => p.id === id ? updatedPortfolioFromServer : p)
      );
    } catch (error) {
        console.error("Erro ao atualizar portfólio:", error);
    }
  };

  const deletePortfolio = async (id: string) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      setPortfolios(prevPortfolios => prevPortfolios.filter(p => p.id !== id));
    } catch(error) {
        console.error("Erro ao deletar portfólio:", error);
    }
  };

  const contextValue = {
    portfolios,
    loading,
    addPortfolio,
    updatePortfolio,
    deletePortfolio,
    getPortfolioById,
  };

  return (
    <PortfolioContext.Provider value={contextValue}>
      {children}
    </PortfolioContext.Provider>
  );
}