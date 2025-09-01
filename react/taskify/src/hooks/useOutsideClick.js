import { useEffect, useRef } from "react";

export default function useOutsideClick(handlre, listenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      // console.log(ref.current.contains(e.target));
      if (ref.current && !ref.current.contains(e.target)) {
        handlre();
      }
    }

    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handlre, listenCapturing]);

  return ref;
}
