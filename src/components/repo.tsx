interface Reposity {
  id: number;
  name: string;
  html_url: string;
  language: string;
}

export const Repo: Reposity = ({ id, name, html_url, language }) => {
  return (
    <li className=" list-none">
      <a href={html_url}>
        <div className="bg-black rounded-md  border-2 border-white grid gap-2 hover:border-white hover:bg-purple-500 ">
          <div className="flex justify-between p-2 space-x-2">
            <p className="text-white font-roboto text-sky-600">project</p>
            <h2 className="font-roboto text-red-500">{name}</h2>
          </div>
          <p className="text-xl p-2 font-bold text-white"> {language}</p>
        </div>
      </a>
    </li>
  );
};
