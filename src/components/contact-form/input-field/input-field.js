import React from "react"
import { FormHelperText, InputLabel, OutlinedInput } from "@material-ui/core"

import useStyles from "./styles"

const InputField = ({ formik, field, type }) => {
  const classes = useStyles()

  const label = field.charAt(0).toUpperCase() + field.slice(1)
  const error = formik.touched[field] && Boolean(formik.errors[field])

  return (
    <div className={classes.inputWrapper}>
      <InputLabel htmlFor={field} error={error} className={classes.inputLabel}>
        {`${label} *`}
      </InputLabel>
      <OutlinedInput
        id={field}
        name={field}
        {...formik.getFieldProps(field)}
        multiline={type === "multiline"}
        rows={4}
        type={type === "multiline" ? undefined : type}
        error={error}
        classes={{ root: classes.inputBox, error: classes.inputBoxError }}
        required
      />
      <FormHelperText error={error}>
        {formik.touched[field] && formik.errors[field]}
      </FormHelperText>
    </div>
    // <TextField
    //   id={field}
    //   name={field}
    //   label={label}
    //   variant="outlined"
    //   {...formik.getFieldProps(field)}
    //   multiline={type === "multiline"}
    //   rows={type === "multiline" ? 4 : 1}
    //   type={type === "multiline" ? undefined : type}
    //   error={formik.touched[field] && Boolean(formik.errors[field])}
    //   helperText={formik.touched[field] && formik.errors[field]}
    // />
  )
}

export default InputField
