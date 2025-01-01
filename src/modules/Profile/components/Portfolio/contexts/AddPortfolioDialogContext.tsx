import { createContext } from "react";

export const AddPortfolioDialogContext = createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  open: false,
  setOpen: () => {},
});

export const AddPortfolioDialogProvider = AddPortfolioDialogContext.Provider;
