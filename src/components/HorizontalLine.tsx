import { motion } from "framer-motion";
import useAnimatedInView from "../hooks/useAnimatedInView";

const MotionDiv = motion.div;

const HorizontalLine = () => {
  const{ref:divRef,isInView:isDivInView} = useAnimatedInView<HTMLDivElement>();
  return (
    <MotionDiv
    ref={divRef}
      className="gradient-border mb-5 mt-2 md:mt-3 lg:mt-5 "
      initial={{ width: "0%" }}
      animate={isDivInView?{width:'100%'}:{width:'0%'}}
      transition={{ duration: 1, ease: "easeOut" }}
      
    ></MotionDiv>
  );
};

export default HorizontalLine;
