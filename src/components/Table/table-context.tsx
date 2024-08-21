import { Children, createContext, FC, PropsWithChildren, useContext } from 'react';

const tableContext = createContext({
  sortable: new Set(),
  searchable: new Set(),
});

export const useTable = () => useContext(tableContext);

export const TableProvider: FC<PropsWithChildren> = ({ children }) => {
   Children.toArray(children).forEach(c=>console.log(c.toLocaleString()))
  return (
    <tableContext.Provider
      value={{ sortable: new Set(), searchable: new Set() }}
    >
      {children}
    </tableContext.Provider>
  );
};
