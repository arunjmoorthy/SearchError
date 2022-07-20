import { useEffect, Dispatch, SetStateAction } from "react";
import styles from "../styles/Result.module.css";

interface ResultProps {
  setInterVisible: Dispatch<SetStateAction<boolean>>;
  success: boolean;
  startTime: number;
  rtArr: number[];
  setrtArr: Dispatch<SetStateAction<number[]>>;
}

const Result = ({ setInterVisible, success, startTime, rtArr, setrtArr }: ResultProps) => {

  // update the display after 2s to redisplay the Ts and Ls
  useEffect(() => {
    let endTime = new Date();
    let rt = (endTime.getTime())-startTime;
    let rts = rtArr;
    rts.push(rt);
    setrtArr(rts);

    const timer = setTimeout(() => {
      setInterVisible(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.res}>
      {success ? (
        <h1>Correct</h1>
      ) : (
        <h1>Incorrect</h1>
      )}
    </div>
  );
};

export default Result;
