
"use client";

import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiAperture,
  FiMove,
  FiPlus,
  FiCommand,
} from "react-icons/fi";

const rise = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export default function OffersPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#1C1519] text-[#F7F0E9] transition-colors duration-500">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#702C3B]/25 blur-[140px]" />
        <div className="absolute -bottom-40 -left-40 h-[550px] w-[550px] rounded-full bg-[#D68B9A]/10 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.045] [background-image:radial-gradient(#D68B9A_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 mx-auto flex max-w-[1500px] items-center justify-between px-6 py-7 sm:px-12 lg:px-16">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D68B9A] text-[#29141B] shadow-lg shadow-[#D68B9A]/20">
            <FiAperture size={23} />
          </div>
          <span className="text-xl font-black tracking-[0.3em]">NOVA</span>
        </div>

        <div className="hidden items-center gap-3 rounded-full border border-white/10 bg-[#292026]/80 px-5 py-3 backdrop-blur-xl sm:flex">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#7DD4A0]" />
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#C2ACB2]">
            BUILDING SOMETHING NEW
          </span>
        </div>

        <span className="text-[10px] font-bold tracking-[0.2em] text-[#C2ACB2]">
          EST. 2026
        </span>
      </header>

      {/* Hero */}
      <section className="relative mx-auto grid min-h-[calc(100vh-100px)] max-w-[1500px] items-center gap-12 px-6 pb-16 pt-8 sm:px-12 lg:grid-cols-2 lg:px-16">

        {/* Content */}
        <div className="relative z-10">
          <motion.div
            variants={rise}
            initial="hidden"
            animate="visible"
            className="mb-8 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-[#D68B9A]" />
            <span className="text-[10px] font-black tracking-[0.4em] text-[#D68B9A]">
              A NEW ERA IS TAKING SHAPE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[clamp(4rem,10vw,9rem)] font-black leading-[0.85] tracking-[-0.09em]"
          >
            RE
            <span className="bg-gradient-to-r from-[#F7F0E9] via-[#D68B9A] to-[#A93750] bg-clip-text text-transparent">
              IMAGINE.
            </span>
            <br />
            <span className="text-[#F7F0E9]/15">RE</span>
            <span className="text-[#D68B9A]">DEFINE.</span>
          </motion.h1>

          <motion.p
            variants={rise}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.25 }}
            className="mt-9 max-w-md text-sm leading-8 text-[#C2ACB2] sm:text-base"
          >
            More than an online store. A new perspective on digital shopping.
            We are creating something different, something made to stand out.
          </motion.p>

          <motion.div
            variants={rise}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <div className="flex items-center gap-3 rounded-full bg-[#D68B9A] px-7 py-4 text-[#29141B] shadow-xl shadow-[#D68B9A]/20">
              <FiCommand size={18} />
              <span className="text-xs font-bold tracking-[0.2em]">
                COMING SOON
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#C2ACB2]">
              <span className="h-2 w-2 rounded-full bg-[#7DD4A0]" />
              CURRENTLY IN DEVELOPMENT
            </div>
          </motion.div>

          <div className="mt-20 hidden items-center gap-8 border-t border-white/10 pt-7 sm:flex">
            {["DESIGN", "TECHNOLOGY", "EXPERIENCE"].map((item, index) => (
              <div key={item}>
                <div className="text-2xl font-black tracking-tighter text-[#F7F0E9]">
                  0{index + 1}
                </div>
                <div className="mt-1 text-[9px] font-bold tracking-[0.2em] text-[#C2ACB2]">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto flex aspect-square w-full max-w-[570px] items-center justify-center">

          <div className="absolute inset-[8%] rounded-full bg-gradient-to-br from-[#702C3B]/30 via-[#38262D]/40 to-[#D68B9A]/10 shadow-[inset_0_0_100px_rgba(214,139,154,0.08)]" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[4%] rounded-full border border-dashed border-[#D68B9A]/25"
          >
            <div className="absolute left-[12%] top-[16%] h-3 w-3 rounded-full bg-[#D68B9A] shadow-[0_0_20px_#D68B9A]" />
          </motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[15%] rounded-full border border-[#D68B9A]/15"
          />

          <motion.div
            animate={{
              y: [0, -18, 0],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex h-[55%] w-[55%] items-center justify-center rounded-[42%] border border-white/20 bg-gradient-to-br from-[#D68B9A] via-[#A93750] to-[#702C3B] shadow-[25px_35px_90px_rgba(169,55,80,0.3),inset_8px_8px_35px_rgba(255,255,255,0.25)]"
          >
            <div className="absolute inset-[10%] rounded-[40%] border border-white/20" />
            <div className="absolute left-[15%] top-[15%] h-16 w-24 rotate-[-35deg] rounded-full bg-white/20 blur-xl" />

            <span className="relative text-8xl font-black tracking-[-0.1em] text-white drop-shadow-xl sm:text-9xl">
              N.
            </span>
          </motion.div>

          {/* Floating card */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [2, -2, 2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-1 top-[18%] rounded-2xl border border-white/10 bg-[#292026]/85 p-4 shadow-2xl backdrop-blur-2xl sm:-left-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#702C3B] text-[#F7F0E9]">
                <FiMove size={19} />
              </div>
              <div>
                <div className="text-[10px] font-black tracking-widest text-[#F7F0E9]">
                  NEW VISION
                </div>
                <div className="mt-1 text-[9px] text-[#C2ACB2]">
                  BEYOND ORDINARY
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-1 right-0 rounded-2xl border border-white/10 bg-[#292026]/90 px-5 py-4 shadow-xl backdrop-blur-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#7DD4A0]" />
              <span className="text-[10px] font-black tracking-[0.2em] text-[#F7F0E9]">
                SOMETHING IS COMING
              </span>
            </div>
          </motion.div>

          <FiPlus className="absolute right-[9%] top-[10%] text-[#D68B9A]/70" size={24} />
          <FiPlus className="absolute bottom-[13%] left-[10%] text-[#A93750]" size={17} />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-4 border-t border-white/10 px-6 py-7 sm:flex-row sm:px-12 lg:px-16">
        <span className="text-xs font-black tracking-[0.4em]">NOVA®</span>
        <span className="text-[9px] font-semibold tracking-[0.3em] text-[#C2ACB2]">
          MADE FOR THE NEXT GENERATION
        </span>
        <div className="flex items-center gap-2 text-[#D68B9A]">
          <span className="text-[10px] font-bold tracking-[0.2em]">
            STAY CURIOUS
          </span>
          <FiArrowUpRight size={17} />
        </div>
      </footer>
    </main>
  );
}
