import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const ScrollTrigger = () => {
  const [progress, setProgress] = useState(0);

  const handleProgress = () => {
    const totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const progress = (scrollTop / totalHeight) * 100;
    setProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleProgress);
    return () => {
      window.removeEventListener("scroll", handleProgress);
    };
  }, []);

  const springProps = useSpring({ value: progress });

  return (
    <animated.progress value={springProps.value} max="100" className=""></animated.progress>
  );
};

export default ScrollTrigger;
