import { FC } from "react";
import styles from "./index.module.css";

interface Props {
  isChecked: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const SelectableImage: FC<Props> = ({ isChecked, onClick }) => (
  <button
    onClick={onClick}
    className={[styles.button, isChecked && styles.checked].join(" ")}
  ></button>
);

export default SelectableImage;
