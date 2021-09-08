import React from "react"
import Button from "@material-ui/core/Button"
import { Formik } from "formik"
import * as Yup from "yup"
import useStyles from "./styles"
import { navigate } from "gatsby-link"
import InputField from "./input-field/input-field"

const initialForm = { name: "", email: "", message: "" }

const ContactForm = () => {
  const classes = useStyles()

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

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
      onSubmit={data => {
        console.log(data)
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": "contact",
            ...data,
          }),
        })
          .then(() => {
            navigate("/thanks")
          })
          .catch(error => {
            console.log(error)
            alert("Something went wrong with your submission")
          })
      }}
    >
      {formik => (
        <form
          onSubmit={formik.handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
          data-netlify="true"
          method="POST"
          name="contact"
          netlify-honeypot="bot-field"
          className={classes.contactForm}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <InputField formik={formik} field="name" type="text" />
          <InputField formik={formik} field="email" type="email" />
          <InputField formik={formik} field="message" type="multiline" />

          <div className={classes.actions}>
            <Button variant="contained" onClick={formik.handleReset}>
              Reset
            </Button>
            <Button type="submit" variant="contained" color="secondary">
              Send
            </Button>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default ContactForm
