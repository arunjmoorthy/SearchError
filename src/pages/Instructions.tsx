import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Instructions.module.css";
import blackT from "../assets/blackT.png";
import blackL from "../assets/blackL.png";
import { height } from "@mui/system";

export default function Instructions() {
  const navigate = useNavigate();

  return (
    <div className={styles.instruct}>
      <h1>Instructions</h1>
      <div className={styles.writing}>
        <p>
          Thank you for doing this experiment! There are 200 images. In each
          image, you will see some “L”s in different orientations. You are
          looking for a target letter, “T”. There will be a T on about half of
          the images. If the T is present, you should click on it. If it is
          absent, you should press the space bar. Work as quickly and accurately
          as you can.
        </p>
        <p>
          Perform the task for each image as quickly and accurately as possible.
        </p>
        <p>
          You must get 75% or more of the trials correct in order to be paid for the task.
        </p>
      </div>
      <div>
        <div className={styles.header}>
          <h2>The Ts and Ls:</h2>
        </div>
        <div className={styles.preview}>
          <div className={styles.L}>
            <figure>
              <img src={blackL} id="blkL" width = "200px" height= "200px" />
              <figcaption>Ls are the distractors</figcaption>
            </figure>
          </div>
          <div className={styles.T}>
            <figure>
            <img src={blackT} width = "200px" height= "200px" />
              <figcaption>T is the target</figcaption>
            </figure>
            
          </div>
          
        </div>
      </div>

      <div className={styles.startExp}>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/experiment");
          }}
        >
          Start Experiment!
        </Button>
      </div>
    </div>
  );
}
