import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../../hooks/connect";
import { switchSongbirdNetwork } from "../../hooks/switch-network";

import { FaWallet } from "react-icons/fa";
import logoIMG from "../../assets/images/logoIMG.png";

export default function Header() {
  const { account, chainId, activate, deactivate } = useWeb3React();

  async function connect() {
    if (chainId !== 114 || chainId === undefined) {
      switchSongbirdNetwork();
    }
    try {
      console.log("clicked");
      await activate(injected);
      localStorage.setItem("isWalletConnected", true);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
      localStorage.setItem("isWalletConnected", false);
    } catch (ex) {
      console.log(ex);
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem("isWalletConnected") === "true") {
        try {
          await activate(injected);
          localStorage.setItem("isWalletConnected", true);
        } catch (ex) {
          console.log(ex);
        }
      }
    };
    connectWalletOnPageLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header
        id="header"
        className="flex items-center justify-between lg:px-10 md:px-20 py-1 px-5 sm:px-10 w-full xl:px-40 z-50 bg-gray-400"
      >
        <a className="flex logo items-center justify-center" href="/">
          <img src={logoIMG} alt="logoIMG" className="w-20" />
          <h1 className="hidden sm:block text-black text-3xl font-bold">
            Beastiy Bit
          </h1>
        </a>
        <div>
          {!account ? (
            <button
              variant="hovered"
              className="bg-gray-100 duration-300 flex hover:bg-green-700 hover:text-white py-3 px-3 text-md"
              onClick={() => connect()}
            >
              <FaWallet className="mr-2 mt-1" /> Connect Wallet
            </button>
          ) : (
            <button
              variant="hovered"
              className="bg-gray-100 duration-300 flex hover:bg-green-700 hover:text-white py-3 px-4 text-xl font-bold"
              onClick={() => disconnect()}
            >
              <FaWallet className="mr-2 mt-1" />
              {account.toString().slice(0, 4)} ....{" "}
              {account.toString().slice(-4)}
            </button>
          )}
        </div>
      </header>
    </>
  );
}
