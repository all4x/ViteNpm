import { DogImage } from "./components/doggenerator";
import { CatImage } from "./components/catgenerator";

function App() {
  return (
    <div className="font-roboto text-3xl  h-screen">
      <div className="xl:flex justify-center xl:space-x-5 py-6 bg-gray-800 pb-10 border-b-2">
        <h1 className="text-center py-6 text-purple-300">Alex | Rodrigues</h1>
        <div className="grid items-center justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/54729143?v=4"
            className="rounded-full h-28  drop-shadow-2xl"
          />
        </div>
      </div>
      <div className="xl:flex justify-center items-center bg-black pt-4">
        <div className="">
          <h1 className="text-center text-2xl font-normal text-gray-200">Gerador de meow🐱</h1>
          <CatImage />
        </div>
      </div>
    </div>
  );
}

export default App;
