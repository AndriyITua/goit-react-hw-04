import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSearch }) {
  const notify = () => {
    toast.error("My toast");
  };

  // const handleForm = (e) => {
  //   const form = e.target;
  //   const value = form.elements.input.value;
  //   e.preventDefault();
  //   form.reset();
  // };

  return (
    <header>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          onSearch(values.query);
          actions.resetForm();
        }}
      >
        <Form onSubmit={onSearch}>
          <Field
            type="text"
            autoComplete="off"
            name="query"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" onClick={notify}>
            Search
          </button>
          <Toaster />
        </Form>
      </Formik>
    </header>
  );
}
