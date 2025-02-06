import { createContext } from 'react';

interface HeaderContextType {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export const headerExpandedContext = createContext<HeaderContextType>({
  isExpanded: false,
  setIsExpanded: () => {},
});
