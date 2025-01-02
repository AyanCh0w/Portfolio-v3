import { motion } from "motion/react";

export default function Footer() {
  return (
    <>
      <div className="w-screen h-[1px] bg-[#4b4b4b] mt-8"></div> {/* Divider */}
      <div className=" overflow-hidden w-[98%] text-[#ffffe3] h-44 my-4 flex flex-col-reverse bg-[#191917] mx-auto border border-[#4b4b4b] rounded-lg">
        <motion.p
          className="md:text-[11rem] text-6xl md:translate-y-4 leading-none font-medium"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
        >
          Ayan Chowdhary
        </motion.p>
      </div>
    </>
  );
}
