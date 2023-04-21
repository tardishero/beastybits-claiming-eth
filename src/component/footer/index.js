import { BsTwitter } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-custom border-t-2 flex justify-between lg:mt-40 lg:px-10 md:px-20 px-5 py-1 sm:px-10 w-full xl:px-40 z-50"
    >
      <h1 className="hidden mt-5 sm:block text-center text-gray-400 text-md w-full">
        Copyright @2023 Lions - All Rights Reserved.
      </h1>

      <div className="flex gap-5 m-5">
        <a
          href="https://twitter.com/thesgbpride"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter className="cursor-pointer duration-200 hover:text-green-500 text-2xl text-white" />
        </a>
        <a
          href="https://discord.gg/kaTqPtgCt9"
          target="_blank"
          rel="noreferrer"
        >
          <SiDiscord className="cursor-pointer duration-200 hover:text-green-500 text-2xl text-white" />
        </a>
      </div>
    </footer>
  );
}
