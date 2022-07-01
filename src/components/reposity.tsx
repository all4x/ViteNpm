import { useEffect, useState } from "react";

export function DogImage() {
  const [dogImage, setDogImage] = useState<string | any>([]);
  const [loading, setLoading] = useState(false);
  const [newDog, setNewDog] = useState(false);

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
      <div className="flex justify-center p-3 border-blue-500 border-2">
        <img src={dogImage}></img>
      </div>
      <div className="flex justify-center mb-10">
        <button
          onClick={() => setNewDog(false)}
          className=" p-2 text-white border-2 bg-blue-600 font-semibold"
        >
          GERADOR
        </button>
      </div>
    </>
  );
}
