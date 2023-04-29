import { motion } from "framer-motion";

export default function Topbar() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
    >
      <div className="lg:flex lg:px-10 md:px-20 mt-20 px-5 sm:px-10 w-full xl:px-40 z-50">
        <h1 className="lg:text-center lg:w-full mb-2 sm:text-4xl text-4xl text-center text-white font-bold">
          NFT Staking - Claim $BEAST Token
        </h1>
      </div>
    </motion.section>
  );
}
