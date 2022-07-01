import Counter from "./components/count";
import { DogImage } from "./components/reposity";

function App() {
  return (
    <div className="font-roboto text-3xl bg-gray-900 h-screen">
      <div className="xl:flex justify-center xl:space-x-5 py-6">
        <h1 className="text-center py-6 text-white">Alex | Rodrigues</h1>
        <div className="grid items-center justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/54729143?v=4"
            className="rounded-full h-28  drop-shadow-2xl"
          />
        </div>
      </div>
      <div className="space-y-5">
        <h1 className="text-center text-2xl font-normal text-gray-200">Gerador de Dog🐶</h1>
        <DogImage />
      </div>
    </div>
  );
}

export default App;
