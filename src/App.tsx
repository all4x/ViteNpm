import { CatImage } from "./components/catgenerator";
import { SideBar } from "./components/social";

function App() {
  return (
    <div className="font-roboto text-3x">
      <SideBar />
      <div className="xl:flex justify-center items-center pt-4">
        <div className="mt-10">
          <h1 className="text-center text-2xl font-normal text-gray-200"> Gerador de meow🐱</h1>
          <CatImage />
        </div>
      </div>
    </div>
  );
}

export default App;
