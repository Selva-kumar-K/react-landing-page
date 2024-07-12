import { menus } from "../libs/menus";

type Props = {
    openMenu : boolean
}

export default function HeroSection({openMenu} : Props) {
  return (
    <div className="mt-10 flex flex-col lg:flex-row lg:justify-between lg:items-center lg:space-x-4">
             {openMenu && (
        <div className="mb-5 lg:hidden">
          {menus.map((menu, index) => (
            <p
              key={index}
              className={`${
                menu[index] === "M" ? "font-semibold text-black" : ""
              } text-slate-500 px-3 py-2 hover:border-2 hover:border-pink-400 hover:rounded-md text-center`}
            >
              {menu}
            </p>
          ))}
        </div>
      )}
      <div className="space-y-10 lg:w-3/6 lg:space-y-12">
        <h2 className="font-roboto font-extrabold leading-tight text-4xl lg:text-6xl text-slate-900">
          Don't listen to the people that tell you you can't do it
        </h2>
        <p className="break-words font-semibold text-slate-300 text-lg">
          What would you do if you know today was your last day? Keep dreaming
          and remember to live every day as if it was your last.
        </p>
        <div className="flex flex-col space-y-2 lg:flex lg:flex-row lg:items-center lg:space-x-8">
          <button className="bg-[#e95151] text-white rounded-lg px-5 py-3 hover:bg-[#e92640]">
            Get free trial
          </button>
          <button className="flex border-2 justify-center items-center lg:flex-row gap-1 font-semibold rounded-lg hover:border-2 hover:border-pink-400 px-5 py-3">
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
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
            Watch video
          </button>
        </div>
      </div>
      <div className="lg:w-3/6">
        <img
          src="https://cdn.dribbble.com/userupload/3662090/file/original-25ad8289db5df0a0dea1bb5da37cf589.jpg?resize=1200x900&vertical=center"
          alt="img-girl" className="lg:h-[80vh] bg-cover object-cover w-screen shrink-0"
        />
      </div>
    </div>
  );
}
