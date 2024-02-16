import { useMediaQuery } from "react-responsive";

function Tablet({ children }) {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
}

export default Tablet;
