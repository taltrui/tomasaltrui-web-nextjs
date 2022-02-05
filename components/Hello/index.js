import { useEffect, useRef, useState } from "react";
import { hellos } from "./constants";
import styles from "./styles.module.scss";

const Hello = () => {
  const [index, setIndex] = useState(0);
  const prevIndex = useRef();

  useEffect(() => {
    const interval = setInterval(
      () =>
        setIndex((index) => {
          prevIndex.current = index;
          return index === hellos.length - 1 ? 0 : index + 1;
        }),
      3500
    );

    return () => clearInterval(interval);
  });

  return (
    <div className={styles.fontContainer}>
      {hellos.map((hello, _index) => (
        <span
          className={`${styles.font} ${_index === index && styles.slidein} ${_index === prevIndex.current && styles.slideout
            }`}
        >
          {hello},
        </span>
      ))}
    </div>
  );
};

export default Hello;
