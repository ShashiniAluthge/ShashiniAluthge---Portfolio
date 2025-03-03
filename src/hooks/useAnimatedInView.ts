import {useInView } from "framer-motion";
import { useRef } from "react";

const useAnimatedInView =<T extends HTMLElement>()=>{
    const ref = useRef<T|null>(null);
    const isInView = useInView(ref);

    return {ref,isInView};

}
export default useAnimatedInView;