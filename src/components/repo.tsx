interface repoTypes {
  id: number;
  html_url: string;
  language: string;
  name: string;
}

export const Repo = ({ name, html_url, language }: repoTypes) => {
  return (
    <li className=" list-none bg-black">
      <a href={html_url}>
        <div className="bg-black rounded-md m-4 border-2 hover:border-white hover:bg-purple-500 ">
          <div className="flex justify-between p-2 space-x-2">
            <p className="font-roboto text-sky-600">project</p>
            <h2 className="font-roboto text-red-500">{name}</h2>
          </div>
          <p className="text-xl p-2 font-bold text-white"> {language}</p>
        </div>
      </a>
    </li>
  );
};
