import { Field, Formik, Form, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as yup from "yup";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters")
    .trim(),
  number: yup
    .string()
    .required("Number is required")
    .matches(/^[\d-]+$/, "Number must contain only digits or hyphens")
    .min(3, "Number must be at least 3 characters")
    .max(12, "Number cannot exceed 12 characters"),
});

const ContactForm = () => {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    action.resetForm();
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );
  };
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId} className={css.label}>
          Name
        </label>
        <Field type="text" name="name" id={nameFieldId} className={css.input} />
        <ErrorMessage className={css.error} name="name" component="span" />

        <label htmlFor={numberFieldId} className={css.label}>
          Number
        </label>
        <Field
          type="text"
          name="number"
          id={numberFieldId}
          className={css.input}
        />
        <ErrorMessage className={css.error} name="number" component="span" />

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
