import { useState } from "react";
import { useFetch } from "../components/useFetch";

type CatImage = {
  imageCatUrl: object;
  url: string;
};

export function CatImage() {
  // const [generator, newGenerator] = useState<any | number>(0);
  const url = "https://api.thecatapi.com/v1/images/search";
  const { data } = useFetch<CatImage[]>(url);

  return (
    <>
      <div className="flex justify-center p-3">
        {data?.map((repo) => {
          return (
            <img
              src={repo.url}
              className="h-48 w-48 xl:h-96 xl:w-96 rounded-lg border-2 border-purple-800 bg-purple-500"
            />
          );
        })}
      </div>

      <span className="text-center flex justify-center pb-2 text-gray-800 text-xl">
        meow generator
      </span>
      <div className="flex justify-center pb-10"></div>
      <div className="flex justify-center">
        <button
          onClick={() => {
            return alert("o botão quebrou atualiza a pagina pra gerar outro felino");
          }}
          className=" hover:bg-blue-500 p-2 text-gray-800 border-2 border-purple-800 bg-purple-100 font-semibold"
        >
          GERAR OTO
        </button>
      </div>
    </>
  );
}
