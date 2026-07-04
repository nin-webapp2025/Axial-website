"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const premiumEase = [0.16, 1, 0.3, 1];

export function Reveal({ children, className = "", delay = 0, y = 36 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      transition={{ duration: 0.9, delay, ease: premiumEase }}
      viewport={{ once: true, amount: 0.18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { delayChildren: 0.08, staggerChildren: 0.1 } },
      }}
      viewport={{ once: true, amount: 0.12 }}
      whileInView={reduceMotion ? undefined : "visible"}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 28, scale: 0.985 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.75, ease: premiumEase },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxMedia({ children, className = "" }) {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -80]);

  return (
    <motion.div className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}

export { motion, premiumEase };
