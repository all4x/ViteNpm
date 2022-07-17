import { useEffect, useState } from "react";
import axios from "axios";

export function CatImage() {
  const [catImage, setCatImage] = useState<string | any>([]);
  const [loading, setLoading] = useState(false);
  const [newCat, setNewCat] = useState<boolean>(true);
  const [generator, newGenerator] = useState<any | number>(0);
  const url = "https://api.thecatapi.com/v1/images/search";

  useEffect(() => {
    setLoading(true);

    axios
      .get(url)
      .then((Response) => {
        const data = Response.data;
        setCatImage(data[0].url);
        setLoading(false);
        setNewCat(false);
      })

      .catch(function (error) {
        // manipula erros da requisição
        console.error(error);
      });
  }, [newCat]);

  return loading ? (
    <div className="text-center font-thin text-3xl text-gray-800 pt-28">Loadging...</div>
  ) : (
    <>
      <div className="flex justify-center p-3">
        <img
          src={catImage}
          className="h-48 w-48 xl:h-96 xl:w-96 rounded-lg border-2 border-purple-800 bg-purple-500"
        ></img>
      </div>

      <span className="text-center flex justify-center pb-2 text-gray-800 text-xl">
        {generator} meow
      </span>
      <div className="flex justify-center pb-10"></div>
      <div className="flex justify-center">
        <button
          onClick={() => {
            setNewCat(true), newGenerator(generator + 1);
          }}
          className=" hover:bg-blue-500 p-2 text-gray-800 border-2 border-purple-800 bg-purple-100 font-semibold"
        >
          GERAR OTO
        </button>
      </div>
    </>
  );
}
