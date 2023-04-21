import { useEffect, useState } from "react";
import Slider from "./Slider";
import { motion } from "framer-motion";
import { useWeb3React } from "@web3-react/core";
import config from "../../config/config";
import CountUp from "react-countup";

import NFTCONTRACT_ABI from "../../assets/abis/NFTCONTRACT_ABI.json";
import TOKENCONTRACT_ABI from "../../assets/abis/TOKENCONTRACT_ABI.json";

const ethers = require("ethers");

export default function DashBoard() {
  const { account } = useWeb3React();

  const [class1TypeNfts, setClass1TypeNfts] = useState(0);
  const [class2TypeNfts, setClass2TypeNfts] = useState(0);
  const [class3TypeNfts, setClass3TypeNfts] = useState(0);
  const [class4TypeNfts, setClass4TypeNfts] = useState(0);

  const [class1TypeRewards, setClass1TypeRewards] = useState(0);
  const [class2TypeRewards, setClass2TypeRewards] = useState(0);
  const [class3TypeRewards, setClass3TypeRewards] = useState(0);
  const [class4TypeRewards, setClass4TypeRewards] = useState(0);

  const [totalNftCounts, setTotalNftCounts] = useState(0);
  const [totalReward, setTotalReward] = useState(0);
  const [myBalanceOf, setMyBalanceOf] = useState(0);

  const Provider = new ethers.providers.Web3Provider(window.ethereum);
  const Signer = Provider.getSigner();

  const NFTContract = new ethers.Contract(
    config.NFTCONTRACT_ADDRESS,
    NFTCONTRACT_ABI,
    Signer
  );

  const TOEKNCONTRACT = new ethers.Contract(
    config.TOKENCONTRACT_ADDRESS,
    TOKENCONTRACT_ABI,
    Signer
  );

  const getMydata = async () => {
    await NFTContract.getNFTsPerClass(account).then((data) => {
      setClass1TypeNfts(Number(data[0]));
      setClass2TypeNfts(Number(data[1]));
      setClass3TypeNfts(Number(data[2]));
      setClass4TypeNfts(Number(data[3]));
      setTotalNftCounts(
        Number(data[0]) + Number(data[1]) + Number(data[2]) + Number(data[3])
      );
    });

    const class1Reward = await NFTContract.classRewardPerSecond(1);
    setClass1TypeRewards(
      Number(parseFloat(ethers.utils.formatEther(class1Reward)).toFixed(19))
    );

    const class2Reward = await NFTContract.classRewardPerSecond(2);
    setClass2TypeRewards(
      Number(parseFloat(ethers.utils.formatEther(class2Reward)).toFixed(19))
    );

    const class3Reward = await NFTContract.classRewardPerSecond(3);
    setClass3TypeRewards(
      Number(parseFloat(ethers.utils.formatEther(class3Reward)).toFixed(19))
    );

    const class4Reward = await NFTContract.classRewardPerSecond(4);
    setClass4TypeRewards(
      Number(parseFloat(ethers.utils.formatEther(class4Reward)).toFixed(19))
    );

    const totalReward = await NFTContract.getPendingRewards(account);
    setTotalReward(
      Number(parseFloat(ethers.utils.formatEther(totalReward)).toFixed(19))
    );

    const myTokenAmount = await TOEKNCONTRACT.balanceOf(account);
    setMyBalanceOf(myTokenAmount);
  };

  useEffect(() => {
    if (account) {
      getMydata();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  // const handleClaimFunc =async () => {
  //   await NFTContract.claimRewards()
  // }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
    >
      <div className="2xl:px-20 flex justify-between lg:px-10 mb-10 md:px-20 mt-10 px-5 sm:px-10 w-full z-50">
        <div className="bg-custom-blur border-2 border-custom justify-between staking_content w-full">
          <div className="lg:flex w-full">
            <div className="grid grid-cols-2 lg:w-2/3">
              <div className="border-b-2 border-custom border-r-2 w-full flex flex-col items-center justify-center">
                <h1 className="sm:text-2xl text-indigo-500 text-left lg:text-3xl">
                  Total NFT per class
                </h1>
                <h1 className=" sm:text-4xl text-left text-lg text-white">
                  - <CountUp start={0} end={class1TypeNfts} duration={3} />{" "}
                  Lions
                </h1>
                <h1 className=" sm:text-4xl text-left text-lg text-white">
                  - <CountUp start={0} end={class2TypeNfts} duration={3} />{" "}
                  Lions
                </h1>
                <h1 className=" sm:text-4xl text-left text-lg text-white">
                  - <CountUp start={0} end={class3TypeNfts} duration={3} />{" "}
                  Lions
                </h1>
                <h1 className=" sm:text-4xl text-left text-lg text-white">
                  - <CountUp start={0} end={class4TypeNfts} duration={3} />{" "}
                  Lions
                </h1>
              </div>
              <div className="border-b-2 border-custom w-full flex flex-col items-center justify-center">
                <h1 className=" sm:text-2xl text-indigo-500 text-left lg:text-3xl">
                  Rewards per class
                </h1>
                <h1 className="sm:text-4xl text-left text-lg text-white">
                  -{" "}
                  <CountUp
                    start={0}
                    end={class1TypeRewards}
                    duration={3}
                    decimals={15}
                  />{" "}
                  beast
                </h1>
                <h1 className="sm:text-4xl text-left text-lg text-white">
                  -{" "}
                  <CountUp
                    start={0}
                    end={class2TypeRewards}
                    duration={3}
                    decimals={15}
                  />{" "}
                  beast
                </h1>
                <h1 className="sm:text-4xl text-left text-lg text-white">
                  -{" "}
                  <CountUp
                    start={0}
                    end={class3TypeRewards}
                    duration={3}
                    decimals={15}
                  />{" "}
                  beast
                </h1>
                <h1 className="sm:text-4xl text-left text-lg text-white">
                  -{" "}
                  <CountUp
                    start={0}
                    end={class4TypeRewards}
                    duration={3}
                    decimals={15}
                  />{" "}
                  beast
                </h1>
              </div>
              <div className="border-b-2 border-custom border-r-2 lg:border-b-0 w-full flex items-center justify-center flex-col">
                <h1 className="sm:text-2xl text-indigo-500 text-left lg:text-3xl">
                  My beast Balance
                </h1>
                <h1 className="sm:text-4xl text-left text-lg text-white">
                  <CountUp
                    start={0}
                    end={myBalanceOf}
                    duration={3}
                    decimals={2}
                  />{" "}
                  beast
                </h1>
              </div>
              <div className="border-b-2 border-custom lg:border-b-0 w-full flex flex-col items-center justify-center">
                <h1 className="sm:text-2xl text-indigo-500 text-left lg:text-3xl">
                  Available for claim
                </h1>
                <h1 className="sm:text-4xl text-left text-lg text-white">
                  <CountUp
                    start={0}
                    end={totalReward}
                    duration={1}
                    decimals={10}
                  />{" "}
                  beast
                </h1>
                {totalReward !== 0 && (
                  <button className="px-10 py-3 bg-white my-4">Claim</button>
                )}
              </div>
            </div>
            <div className="border-custom md:border-l-2 lg:mt-0 lg:w-1/3 mt-10">
              <Slider />
              <div className="mt-10 text-center w-full">
                <h1 className="sm:text-2xl text-white">Total NFTs</h1>
                <h1 className="sm:text-5xl text-gray-500 text-lg">
                  <CountUp start={0} end={totalNftCounts} duration={1} /> NFTs
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
