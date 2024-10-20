import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function Redirect({ to }: { to: string }) {
  const navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    let path = to;
    if (params["*"]) {
      if (!path.endsWith("/")) {
        path += "/";
      }
      path += params["*"];
    }
    window.location.replace(path);
  }, [to, navigate]);

  return null;
}
