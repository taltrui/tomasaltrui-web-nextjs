import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

const hellos = ['hOlA', 'hI', 'CiAO', 'hALlO', 'oLÁ', 'SAlUT']

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
      4000
    );

    return () => clearInterval(interval);
  });

  return (
    <div className={styles.fontContainer}>
      {hellos.map((hello, _index) => (
        <span
          key={hello}
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
