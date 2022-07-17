import { CatImage } from "./components/catgenerator";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="font-roboto text-3x">
      <Navbar />
      <div className="xl:flex justify-center items-center pt-4">
        <div className="mt-10">
          <h1 className="text-center text-2xl font-roboto text-gray-800"> Gerador de meow🐱</h1>
          <CatImage />
        </div>
      </div>
    </div>
  );
}

export default App;
