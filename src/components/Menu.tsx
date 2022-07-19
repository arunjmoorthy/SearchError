import { SetStateAction, Dispatch } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import styles from "../styles/Menu.module.css";

interface MenuProps {
  setId: Dispatch<SetStateAction<number>>;
}

const Menu = ({ setId }: MenuProps) => {
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(parseInt(event.target.value));
  };

  return (
    <div className={styles.menu}>
      <div className={styles.intro}>
        <h1>Enter Your MTurk ID</h1>
      </div>
      <div className={styles.actions}>
        <input
          type="text"
          placeholder="Enter Your MTurk ID"
          onChange={handleChange}
        />
        <Button
          variant="contained"
          onClick={() => {
            navigate("/instructions");
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Menu;
