import { menus } from "../libs/menus";

type Props = {
    setOpenMenu : React.Dispatch<React.SetStateAction<boolean>>
}
export default function Header({setOpenMenu}: Props) {
 
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <h1 className="text-5xl text-[#e95151]">ժׁׅ݊</h1>
        <p className="font-bold text-3xl">dream.io</p>
      </div>
      <div className="hidden lg:flex space-x-14 items-center">
        {menus.map((menu, index) => (
          <p
            key={index}
            className={`${
              menu[index] === "M" ? "font-semibold text-black" : ""
            } text-slate-500 px-3 py-2 hover:border-2 hover:border-pink-400 hover:rounded-md`}
          >
            {menu}
          </p>
        ))}
      </div>

      <div className="lg:hidden" onClick={() => setOpenMenu(prev => !prev)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div className="hidden lg:flex">
        <button className="px-7 py-2 border-2 border-slate-500 rounded-xl font-semibold hover:border-pink-400">
          Join
        </button>
      </div>
 
    </div>
  );
}
