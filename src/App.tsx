import { CatImage } from "./components/catgenerator";

function App() {
  return (
    <div className="font-roboto text-3x">
      <div className="xl:flex justify-center xl:space-x-5 py-6 pb-10 ">
        <h1 className="text-center py-6 text-purple-300">Alex | Rodrigues</h1>
        <div className="grid items-center justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/54729143?v=4"
            className="rounded-full h-28 "
          />
        </div>
      </div>
      <div className="xl:flex justify-center items-center pt-4">
        <div className="h-screen">
          <h1 className="text-center text-2xl font-normal text-gray-200"> Gerador de meow🐱</h1>
          <CatImage />
        </div>
      </div>
    </div>
  );
}

export default App;
