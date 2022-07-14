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
      {(success) ? (
        <h2>Congrats! You got this trial correct!</h2>
      ) : (
        <h2>Sorry! You missed this trial!</h2>
      )}
    </div>
  );
};

export default Result;
