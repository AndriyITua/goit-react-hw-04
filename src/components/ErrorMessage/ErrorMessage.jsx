import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return <b className={css.error}>Error. Please try again later</b>;
}
