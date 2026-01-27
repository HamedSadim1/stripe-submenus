import React, { useState, useContext } from "react";
import { sublinks, SUBLINKS } from "../data";

interface COORDINATES {
  center: number;
  bottom: number;
}

interface AppContextProps {
  isSidebarOpen: boolean;
  isSubmenuOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  coordinates: COORDINATES;
  openSubmenu: (text: string, coordinates: COORDINATES) => void;
  closeSubmenu: () => void;
  page: SUBLINKS;
}

const AppContext = React.createContext<AppContextProps>({
  isSidebarOpen: false,
  isSubmenuOpen: false,
  openSidebar: () => {},
  closeSidebar: () => {},
  closeSubmenu: () => {},
  openSubmenu: (_text: string, _coordinates: COORDINATES) => {},
  coordinates: { center: 0, bottom: 0 },
  page: sublinks[0],
});

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(false);
  const [coordinates, setCoordinates] = useState<COORDINATES>({
    center: 0,
    bottom: 0,
  });
  const [page, setPage] = useState<SUBLINKS>({
    page: "",
    links: [],
  });

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = (text: string, coordinates: COORDINATES) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page as SUBLINKS);
    setCoordinates(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        coordinates,
        closeSubmenu,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// context hook
export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useGlobalContext must be used within a AppProvider");
  }
  return context;
};

export default AppContext;
