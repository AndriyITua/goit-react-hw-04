import { RotatingLines } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loader}>
      <RotatingLines height="30" width="30" strokeColor="blue" />
      <p className={css.text}>loading, please wait</p>
    </div>
  );
}
