import { motion } from "framer-motion";

const Divider = () => (
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3, duration: 1 }}
    className="h-px bg-border origin-center max-w-xs mx-auto"
  />
);

export default Divider;
