"use client";

import Image from "next/image";
import { motion, premiumEase } from "@/animations/Motion";

export default function PageHero({ data, image, index = "01" }) {
  return (
    <section className="page-hero">
      <motion.div
        className="page-hero__media"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: premiumEase }}
      >
        <Image
          alt=""
          className="object-cover"
          fill
          priority
          sizes="100vw"
          src={image}
        />
      </motion.div>
      <div className="page-hero__veil" />
      <div className="tech-grid absolute inset-0 opacity-20" />
      <motion.div
        className="page-hero__beam"
        animate={{ x: ["-20%", "130%"] }}
        transition={{ duration: 7, ease: "linear", repeat: Infinity, repeatDelay: 2 }}
      />

      <div className="page-hero__content site-container">
        <motion.div
          className="eyebrow text-gold"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: premiumEase }}
        >
          <span>{index}</span>
          <span>{data.title}</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 54 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: premiumEase }}
        >
          {data.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.42, ease: premiumEase }}
        >
          {data.description}
        </motion.p>
        <motion.div
          className="page-hero__line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.55, ease: premiumEase }}
        />
      </div>
      <div className="page-hero__index" aria-hidden="true">{index}</div>
    </section>
  );
}
