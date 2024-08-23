import { createContext, useState } from 'react';

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [previousCategory, setPreviousCategory] = useState('/'); // Por defecto a la raíz

  const setCategory = (category) => {
    setPreviousCategory(category);
  };

  return (
    <CategoryContext.Provider value={{ previousCategory, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryProvider, CategoryContext };