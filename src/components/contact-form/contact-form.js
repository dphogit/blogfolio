import React from "react"
import { Button, TextField } from "@material-ui/core"
import { Formik } from "formik"
import * as Yup from "yup"
import useStyles from "./styles"

const initialForm = { name: "", email: "", message: "" }

const ContactForm = () => {
  const classes = useStyles()

  return (
    <Formik
      initialValues={initialForm}
      validationSchema={Yup.object({
        name: Yup.string().required("Name Required"),
        email: Yup.string()
          .email("Invalid Email Address")
          .required("Email Required"),
        message: Yup.string()
          .min(30, "Must Be 30 Characters Or More ")
          .required("Message Required"),
      })}
      onSubmit={(values, { resetForm }) => {
        alert(JSON.stringify(values, null, 4))
        resetForm(initialForm)
      }}
    >
      {formik => (
        <form
          onSubmit={formik.handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <TextField
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            type="text"
            {...formik.getFieldProps("name")}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            className={classes.textField}
          />

          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            type="email"
            {...formik.getFieldProps("email")}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            className={classes.textField}
          />

          <TextField
            id="message"
            name="message"
            label="Message"
            variant="outlined"
            {...formik.getFieldProps("message")}
            multiline
            rows={4}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            className={classes.textField}
          />

          <div className={classes.actions}>
            <Button
              variant="contained"
              color="secondary"
              onClick={formik.handleReset}
            >
              Reset
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default ContactForm
