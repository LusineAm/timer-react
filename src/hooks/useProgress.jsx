import { useRef, useEffect } from "react";

// custom hook to dynamically update progress in a progress bar
const useProgress = (value) => {
  const ref = useRef(null);

  useEffect(() => {
    // if no ref exists, return early
    if (!ref.current) return;
    // set css custom property for --progress to the passed value
    ref.current.style.setProperty("--progress", value);
    ref.current.setAttribute("data-value", value.toString());
  }, [value]); // re run the effect when value changes

  // return the ref for use in the component
  return { ref };
};

export default useProgress;
