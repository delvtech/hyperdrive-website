import { useParams } from "react-router-dom";

export function Redirect({ to }: { to: string }) {
  const params = useParams();
  let path = to;

  if (params["*"]) {
    if (!path.endsWith("/")) {
      path += "/";
    }
    path += params["*"];
  }

  window.location.replace(path);

  return null;
}
