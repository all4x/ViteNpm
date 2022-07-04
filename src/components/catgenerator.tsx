import { useEffect, useState } from "react";

export function CatImage() {
  const [catImage, setCatImage] = useState<string | any>([]);
  const [loading, setLoading] = useState(false);
  const [newCat, setNewCat] = useState(false);
  const [generator, newGenerator] = useState<any | number>(0)


  useEffect(() => {
    setLoading(true);

    fetch("https://api.thecatapi.com/v1/images/search")
      .then((Response) => Response.json())
      .then((Object) => {
        setCatImage(Object[0].url);

        setLoading(false);
        setNewCat(true);
      });
  }, [newCat]);

  return loading ? (
    <div className="text-center font-thin text-3xl text-white">Loadging...</div>
  ) : (
    <div>
      <div className="flex justify-center p-3">
        <img src={catImage} className="h-60 w-60 border-2 rounded-lg border-2 bg-purple-500"></img>


      </div>

      <span className="text-center flex justify-center pb-2 text-white text-xl">{generator} meow</span>
      <div className="flex justify-center pb-10">
        <button
          onClick={() => { setNewCat(false), newGenerator(generator + 1) }}
          className=" p-2 text-white border-2 border-purple-50 bg-purple-500 rounded-md font-semibold"
        >
          GERAR OTO
        </button>
      </div>
    </div>
  );
}
