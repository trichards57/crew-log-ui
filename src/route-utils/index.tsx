import { createContext, useContext, useMemo, useRef } from "react";
import {
  useNavigate as useNavigateOriginal,
  NavigateFunction,
} from "react-router-dom";

interface RouterUtilsContextType {
  navigateRef: React.MutableRefObject<NavigateFunction> | null;
}

const RouterUtilsContext = createContext<RouterUtilsContextType>({
  navigateRef: null,
});

function RouterUtils({ children }: React.PropsWithChildren<{}>) {
  const navigate = useNavigateOriginal();

  const navigateRef = useRef(navigate);

  navigateRef.current = navigate;

  const contextValue: RouterUtilsContextType = useMemo(() => {
    return { navigateRef };
  }, [navigateRef]);

  return (
    <RouterUtilsContext.Provider value={contextValue}>
      {children}
    </RouterUtilsContext.Provider>
  );
}

export function useNavigateNoUpdates() {
  const { navigateRef } = useContext(RouterUtilsContext);
  if (navigateRef === null) {
    throw new Error(
      "RouterUtils context needs to be in the tree immediately below BrowserRouter"
    );
  }

  return navigateRef.current;
}

export default RouterUtils;
