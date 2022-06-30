import Counter from "./components/count";

function App() {
  return (
    <div className="font-roboto text-3xl bg-galaxy h-screen">
      <div className="xl:flex justify-center xl:space-x-5 py-6">
        <h1 className="text-center py-6 text-white">Alex | Rodrigues</h1>
        <div className="grid items-center justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/54729143?v=4"
            className="rounded-full h-28  drop-shadow-2xl"
          />
        </div>
      </div>
      <div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
