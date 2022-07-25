import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import blackL from "../assets/blackL.png";
import blackT from "../assets/blackT.png";
import { Stimulus } from "../interfaces/Stimulus";
import { SetStateAction, Dispatch } from "react";

interface RowProps {
  trial: Stimulus[];
  startIndex: number;
  setTrialIndex: Dispatch<SetStateAction<number>>;
  trialIndex: number;
  setSuccess: Dispatch<SetStateAction<boolean>>;
  setInterVisible: Dispatch<SetStateAction<boolean>>;
  results: number[];
  setResults: Dispatch<SetStateAction<number[]>>;
  intermediate: boolean;
  setResponseVal: Dispatch<SetStateAction<string>>;
  setResponseType: Dispatch<SetStateAction<string>>;
}

export default function Row({
  trial,
  startIndex,
  setTrialIndex,
  trialIndex,
  setSuccess,
  setInterVisible,
  results,
  setResults,
  intermediate,
  setResponseVal,
  setResponseType
}: RowProps) {
  const [images, setImages] = useState<Stimulus[]>([]);

  const navigate = useNavigate();

  const handleClick = () => {

    let arr: number[] = results;
    arr.push(1);
    setResults(arr);
    setResponseVal("correct");
    setResponseType("HIT");

    if (trialIndex === 100 && intermediate) {
      navigate("/conclusion");
    } else {
      setTrialIndex(trialIndex + 1);
      setSuccess(true);
      setInterVisible(true);
    }
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
    if (event.key === " ") {
      if (trial[1].category === 0) {
        let arr: number[] = results;
        arr.push(1);
        setResults(arr);
        setSuccess(true);
        setResponseVal("correct");
        setResponseType("TNEG");
      } else if (trial[1].category === 1) {
        let arr: number[] = results;
        arr.push(0);
        setResults(arr);
        setSuccess(false);
        setResponseVal("incorrect");
        setResponseType("MISS");
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
