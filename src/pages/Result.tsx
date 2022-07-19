import { useEffect, Dispatch, SetStateAction } from "react";
import styles from "../styles/Result.module.css";

interface ResultProps {
  setInterVisible: Dispatch<SetStateAction<boolean>>;
  success: boolean;
}

const Result = ({ setInterVisible, success }: ResultProps) => {
  // update the display after 2s to redisplay the Ts and Ls
  useEffect(() => {
    const timer = setTimeout(() => {
      setInterVisible(false);
    }, 5);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.res}>
      {success ? (
        <h1 >Correct</h1>
      ) : (
        <h1>Incorrect</h1>
      )}
    </div>
  );
};

export default Result;
