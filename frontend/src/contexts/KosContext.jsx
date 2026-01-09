import { createContext, useContext } from "react";

const KosContext = createContext(null);

export const KosProvider = ({ kos, children }) => {
    return (
        <KosContext.Provider value={kos}>
            {children}
        </KosContext.Provider>
    );
};

export const useKos = () => useContext(KosContext);
