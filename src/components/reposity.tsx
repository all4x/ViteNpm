import { useEffect, useState } from "react";

export function DogImage() {
  const [dogImage, setDogImage] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((Response) => Response.json())
      .then((Object) => {
        setDogImage(Object.message);

        setLoading(false);
      });
  }, []);

  return loading ? (
    <div className="text-center font-thin text-3xl text-white">Loadging...</div>
  ) : (
    <>
      <div className="flex justify-center p-3 border-blue-500 border-2">
        <img src={dogImage}></img>
      </div>
    </>
  );
}
