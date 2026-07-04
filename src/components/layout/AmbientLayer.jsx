"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

export default function AmbientLayer() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(-300);
  const pointerY = useMotionValue(-300);
  const x = useSpring(pointerX, { stiffness: 45, damping: 24 });
  const y = useSpring(pointerY, { stiffness: 45, damping: 24 });

  useEffect(() => {
    if (reduceMotion) return undefined;

    const handlePointerMove = (event) => {
      pointerX.set(event.clientX - 220);
      pointerY.set(event.clientY - 220);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [pointerX, pointerY, reduceMotion]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      {!reduceMotion && (
        <motion.div
          className="pointer-aura hidden lg:block"
          style={{ x, y }}
        />
      )}
    </div>
  );
}
