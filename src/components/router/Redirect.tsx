import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Redirect({ to }: { to: string }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.replace(to);
  }, [to, navigate]);

  return null;
}
