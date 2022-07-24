import { useEffect, useState, Dispatch, SetStateAction } from "react";
import styles from "../styles/Result.module.css";

interface ResultProps {
  setInterVisible: Dispatch<SetStateAction<boolean>>;
  success: boolean;
  startTime: number;
  rtArr: number[];
  setrtArr: Dispatch<SetStateAction<number[]>>;
  id: String;
  trialIndex: number;
  type: number[];
  targetLocArr: number[];
}

const Result = ({ setInterVisible, success, startTime, rtArr, setrtArr, id, trialIndex, type, targetLocArr }: ResultProps) => {

  let [responseVal, setResponseVal] = useState<String>("");
  let [targetLoc, setTargetLoc] = useState<number>(999);
  let [first, setFirst] = useState<String>("");
  let [trialType, setTrialType] = useState<number>(0);
  let [RT, setRT] = useState<number>(0);

  const pushData = async () => {

    if(trialIndex < 100){
      setTargetLoc(targetLocArr[trialIndex]);
      setFirst("first");
      setTrialType(type[trialIndex]);
      //setRT()
    }
    else{
      setTargetLoc(targetLocArr[99-trialIndex]);
      setFirst("second");
      setTrialType(type[99-trialIndex]);
    }

    if(success){
      setResponseVal("correct");
    }
    else{
      setResponseVal("incorrect");
    }

    const request = await fetch(
        `${process.env.REACT_APP_API_URL}/addTrial`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id,
                trialIndex: (trialIndex+1),
                first: first,
                trialType: trialType,
                targetLoc: targetLoc,
                responseVal: responseVal,
                RT: RT
            }),

        });

    const response = await request.json();

    if (response.success) {
        console.log("yay");
    } else {
        console.log(response.message);
    }
  }

  // update the display after 2s to redisplay the Ts and Ls
  useEffect(() => {
    let endTime = new Date();
    let rt = (endTime.getTime())-startTime;
    let rts = rtArr;
    rts.push(rt);
    setrtArr(rts);

    const timer = setTimeout(() => {
      setInterVisible(false);
    }, 1000);
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
