import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import blackL from "../assets/blackL.png";
import blackT from "../assets/blackT.png";
import { Stimulus } from "../interfaces/Stimulus";
import styles from "../styles/Row.module.css";
import { SetStateAction, Dispatch } from "react";
import { height } from "@mui/system";
import { touchRippleClasses } from "@mui/material";
import { start } from "repl";

interface RowProps {
  trial: Stimulus[];
  startIndex: number;
  setTrialIndex: Dispatch<SetStateAction<number>>;
  trialIndex: number;
  success: boolean;
  setSuccess: Dispatch<SetStateAction<boolean>>;
  setInterVisible: Dispatch<SetStateAction<boolean>>;
  results: number[];
  setResults: Dispatch<SetStateAction<number[]>>;
}

export default function Row({
  trial,
  startIndex,
  setTrialIndex,
  trialIndex,
  success,
  setSuccess,
  setInterVisible,
  results,
  setResults
}: RowProps) {
  const [images, setImages] = useState<Stimulus[]>([]);

  const handleClick = () => {
    // if trial index === 1 and you've seen the intermediate
    // -> router.push
    setTrialIndex(trialIndex + 1);
    setSuccess(true);
    setInterVisible(true);
  };

  useEffect(() => {
    let temp: Stimulus[] = [];
    for (let i = startIndex; i < startIndex + 7; i++) {
      temp.push(trial[i]);
    }
    setImages(temp);
  }, []);

  // handler for keypress
  // identify if press is a space -> switch the boolean state
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key == ' ') {
      if (trial[1].category == 0) {
        setSuccess(true);
        let arr: number[] = results;
        arr.push(1);
        setResults(arr);
      }
      else {
        let arr: number[] = results;
        arr.push(0);
        setResults(arr);
        setSuccess(false);
      }
      setTrialIndex(trialIndex + 1);
      setInterVisible(true);
    }
  };

  // add the event listener (for key presses)
  useEffect(() => {
    window.addEventListener("keyup", handleKeyDown);
    return () => {
      window.removeEventListener("keyup", handleKeyDown);
    };
  });

  return (
    <div>
      <div style={{ display: "table-row" }}>
        {images.map((stimulus: Stimulus) => (
          <div style={{ display: "table-cell", paddingRight: "50px" }}>
            <div>
              {stimulus.type === 0 ? (
                <div style={{ width: "50px", height: "50px" }}></div>
              ) : (
                <div>
                  {stimulus.type === 1 ? (
                    <img
                      src={blackL}
                      width="50px"
                      style={{
                        transform: `rotate(${stimulus.orientation}deg)`,
                      }}
                    />
                  ) : (
                    <img
                      src={blackT}
                      width="50px"
                      style={{
                        transform: `rotate(${stimulus.orientation}deg)`,
                      }}
                      onClick={handleClick}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
