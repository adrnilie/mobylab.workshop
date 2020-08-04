import React from "react";
import { Formik } from "formik";
import { TextField, Button, Grid } from "@material-ui/core";
import * as Yup from "yup";
import styled from "styled-components";
import Spacer from "../ui/Spacer";

const Form = styled.form`
  width: 100%;
`;

const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("You can't send a message without providing a name")
      .default(""),
    phoneNumber: Yup.string().notRequired().default(""),
    email: Yup.string()
      .email("You should enter a valid email address")
      .required("Don't you want to be contacted if we want to respond?")
      .default(""),
    message: Yup.string()
      .min(10, "Please insert at least 10 characters")
      .max(255, "Maximum is 255 chars")
      .required("Yo. This is required")
      .default(""),
  });

  return (
    <Grid container item direction="row">
      <Spacer size="36px" />
      <Formik
        validationSchema={validationSchema}
        initialValues={validationSchema.default()}
        onSubmit={values => console.log(values)}
      >
        {({
          handleSubmit,
          handleBlur,
          handleChange,
          values,
          touched,
          errors,
        }) => (
          <Grid
            container
            item
            direction="column"
            alignItems="flex-start"
            xs={12}
          >
            <Form noValidate onSubmit={handleSubmit}>
              <Grid container item direction="row" xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  color="primary"
                  size="small"
                  label="Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name && Boolean(errors.name)}
                  helperText={errors.name}
                />
              </Grid>
              <Spacer size="16px" />
              <Grid container item direction="row" xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  color="primary"
                  size="small"
                  label="Phone number"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                  helperText={errors.phoneNumber}
                />
              </Grid>
              <Spacer size="16px" />
              <Grid container item direction="row" xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  color="primary"
                  size="small"
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={errors.email}
                />
              </Grid>
              <Spacer size="16px" />
              <Grid container item direction="row" xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  color="primary"
                  size="small"
                  label="Message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.message && Boolean(errors.message)}
                  helperText={errors.message}
                  multiline
                  rows={10}
                />
              </Grid>
              <Spacer size="16px" />
              <Grid container item direction="row" xs={12}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Submit
                </Button>
              </Grid>
            </Form>
          </Grid>
        )}
      </Formik>
    </Grid>
  );
};

export default ContactForm;
