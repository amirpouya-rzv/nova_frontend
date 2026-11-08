
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
    <main className="relative isolate min-h-screen overflow-hidden bg-background text-foreground transition-colors duration-500">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-screen w-[600px] rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute -bottom-40 -left-40 h-[550px] w-[550px] rounded-full bg-rose/15 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.045] [background-image:radial-gradient(var(--foreground)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 mx-auto flex max-w-[1500px] items-center justify-between px-6 py-7 sm:px-12 lg:px-16">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
            <FiAperture size={23} />
          </div>
          <span className="text-xl font-black tracking-[0.3em]">NOVA</span>
        </div>

        <div className="hidden items-center gap-3 rounded-full border border-border bg-card/80 px-5 py-3 backdrop-blur-xl sm:flex">
          <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
          <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground">
            BUILDING SOMETHING NEW
          </span>
        </div>

        <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground">
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
            <span className="h-px w-12 bg-primary" />
            <span className="text-[10px] font-black tracking-[0.4em] text-primary">
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
            <span className="bg-gradient-to-r from-foreground via-primary to-rose bg-clip-text text-transparent">
              IMAGINE.
            </span>
            <br />
            <span className="text-muted-foreground/30">RE</span>
            <span className="text-primary">DEFINE.</span>
          </motion.h1>

          <motion.p
            variants={rise}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.25 }}
            className="mt-9 max-w-md text-sm leading-8 text-muted-foreground sm:text-base"
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
            <div className="flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-primary-foreground shadow-xl shadow-primary/20">
              <FiCommand size={18} />
              <span className="text-xs font-bold tracking-[0.2em]">
                COMING SOON
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-success" />
              CURRENTLY IN DEVELOPMENT
            </div>
          </motion.div>

          <div className="mt-20 hidden items-center gap-8 border-t border-border pt-7 sm:flex">
            {["DESIGN", "TECHNOLOGY", "EXPERIENCE"].map((item, index) => (
              <div key={item}>
                <div className="text-2xl font-black tracking-tighter text-foreground">
                  0{index + 1}
                </div>
                <div className="mt-1 text-[9px] font-bold tracking-[0.2em] text-muted-foreground">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto flex aspect-square w-full max-w-[570px] items-center justify-center">

          <div className="absolute inset-[8%] rounded-full bg-gradient-to-br from-primary/25 via-secondary/50 to-rose/10 shadow-[inset_0_0_100px_var(--border)]" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[4%] rounded-full border border-dashed border-primary/30"
          >
            <div className="absolute left-[12%] top-[16%] h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_var(--primary)]" />
          </motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[15%] rounded-full border border-rose/20"
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
            className="relative flex h-[55%] w-[55%] items-center justify-center rounded-[42%] border border-primary/30 bg-gradient-to-br from-primary via-rose to-secondary shadow-[25px_35px_90px_var(--border),inset_8px_8px_35px_rgba(255,255,255,0.25)]"
          >
            <div className="absolute inset-[10%] rounded-[40%] border border-primary-foreground/20" />
            <div className="absolute left-[15%] top-[15%] h-16 w-24 rotate-[-35deg] rounded-full bg-primary-foreground/20 blur-xl" />

            <span className="relative text-8xl font-black tracking-[-0.1em] text-primary-foreground drop-shadow-xl sm:text-9xl">
              N.
            </span>
          </motion.div>

          {/* Floating card */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [2, -2, 2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-1 top-[18%] rounded-2xl border border-border bg-card/85 p-4 shadow-2xl backdrop-blur-2xl sm:-left-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <FiMove size={19} />
              </div>
              <div>
                <div className="text-[10px] font-black tracking-widest text-card-foreground">
                  NEW VISION
                </div>
                <div className="mt-1 text-[9px] text-muted-foreground">
                  BEYOND ORDINARY
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-1 right-0 rounded-2xl border border-border bg-card/90 px-5 py-4 shadow-xl backdrop-blur-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 animate-pulse rounded-full bg-success" />
              <span className="text-[10px] font-black tracking-[0.2em] text-card-foreground">
                SOMETHING IS COMING
              </span>
            </div>
          </motion.div>

          <FiPlus className="absolute right-[9%] top-[10%] text-primary/70" size={24} />
          <FiPlus className="absolute bottom-[13%] left-[10%] text-rose" size={17} />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-4 border-t border-border px-6 py-7 sm:flex-row sm:px-12 lg:px-16">
        <span className="text-xs font-black tracking-[0.4em]">NOVA®</span>
        <span className="text-[9px] font-semibold tracking-[0.3em] text-muted-foreground">
          MADE FOR THE NEXT GENERATION
        </span>
        <div className="flex items-center gap-2 text-primary">
          <span className="text-[10px] font-bold tracking-[0.2em]">
            STAY CURIOUS
          </span>
          <FiArrowUpRight size={17} />
        </div>
      </footer>
    </main>
  );
}
