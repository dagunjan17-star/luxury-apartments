"use client";

import { createContext, useContext, useState } from "react";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
const [totalItems, setTotalItems] = useState(0);
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 102;

  const getProjectByCity = async (page = 1) => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        `https://gurgaon-backend.onrender.com/api/getHighValueProjects?page=${page}&limit=100`
      );

      const data = await res.json();

      if (data.success) {
  setProjects(data.data || []);
  setTotalItems(data.totalProjects || 0);
  setCurrentPage(page);

      } else {
        setProjects([]);
        setError("No Properties Found");
      }
    } catch (err) {
      console.log(err);
      setProjects([]);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Backend pagination ke liye
  const paginatedProjects = projects;

  // Agar backend total count bhej raha hai to use karo


  return (
    <ProjectContext.Provider
       value={{
    projects,
    paginatedProjects,

    loading,
    error,

    currentPage,
    setCurrentPage,

    itemsPerPage,
    totalItems,

    getProjectByCity,
  }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => useContext(ProjectContext);