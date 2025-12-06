import { motion as Motion } from "framer-motion";
import Card from "./Cards";

export default function EnterAnimation({ children, delay = 0, className, style }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, delay, type: "spring", bounce: 0.2 }}
      className={className}
      style={style}
    >
      {children}
    </Motion.div>
  );
}
