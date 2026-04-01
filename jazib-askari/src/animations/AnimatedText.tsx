import { motion } from "framer-motion";
import type { ReactNode, Key } from "react";

type Props = {
  children: ReactNode;
  duration?: number;
  delay?: number;
  trigger?: Key;
};

const AnimatedText = ({
  children,
  duration = 0.6,
  delay = 0,
  trigger,
}: Props) => {
  return (
    <motion.div
      key={trigger} 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ 
        once: true,   
        amount: 0.2,     
        margin: "0px 0px -50px 0px" 
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText;