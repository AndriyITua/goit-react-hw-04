import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const notify = () => {
    if (value.query === "") {
      toast("Text must be entered");
    }
  };

  // const handleForm = (e) => {
  //   const form = e.target;
  //   const value = form.elements.input.value;
  //   e.preventDefault();
  //   form.reset();
  // };

  return (
    <header className={css.container}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          onSearch(values.query);
          actions.resetForm();
          setValue(values);
        }}
      >
        <Form>
          <Field
            className={css.input}
            type="text"
            autoComplete="off"
            name="query"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" onClick={notify}>
            Search
          </button>
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              style: {
                border: "1px solid black",
                padding: "5px",
                color: "black",
              },
            }}
          />
        </Form>
      </Formik>
    </header>
  );
}
