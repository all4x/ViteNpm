import { useEffect, useState } from "react";
import { Repo } from "./repo";
import api from "../services/api";

interface Reps {
  id: number;
  name: string;
  html_url: string;
  language: string;
}

export const Repos = () => {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    api.get("repos").then(({ data }) => {
      setRepo(data);
    });
  }, []);

  return (
    <div className="grid gap-4 xl:grid-cols-2 text-center">
      {repo?.map((repo: Reps) => (
        <Repo id={repo.id} name={repo.name} html_url={repo.html_url} language={repo.language} />
      ))}
    </div>
  );
};
