import { useEffect, useState } from "react";

export function DogImage() {
  const [dogImage, setDogImage] = useState<string | any>([]);
  const [loading, setLoading] = useState(false);
  const [newDog, setNewDog] = useState(false);
  const [generator, newGenerator] = useState<number | any>(0);

  useEffect(() => {
    setLoading(true);

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((Response) => Response.json())
      .then((Object) => {
        setDogImage(Object.message);
        setLoading(false);
        setNewDog(true);
      });
  }, [newDog]);

  return loading ? (
    <div className="text-center font-thin text-3xl text-white">Loadging...</div>
  ) : (
    <>
      <div className="flex-col justify-center p-3">
        <img src={dogImage} className="h-60 w-60 border-2 border-blue-500"></img>


        <span className="text-center flex justify-center pt-2 text-white text-xl">Você gerou {generator}</span>
      </div>
      <div className="flex justify-center mb-10">
        <button
          onClick={() => { setNewDog(false), newGenerator(generator + 1) }}
          className=" p-2 text-white bg-blue-600 border-2 border-blue-50 font-semibold"
        >
          GERAR OTO
        </button>
      </div>
    </>
  );
}
