import { useLocation } from "react-router-dom";

export const Timer = () => {
  let location = useLocation();
  const command = decodeURI(location.pathname.substring(1));
  return <div>{command}</div>;
};
