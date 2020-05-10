import React, { memo } from "react";
import { useFormik } from "formik";
import jsPDF from "jspdf";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Form = memo((props) => {
  const {
    general = {},
    general: { firstName = "", lastName = "" },
    job = {},
    address = {},
    contact = {},
  } = props;
  const formik = useFormik({
    initialValues: {},

    onSubmit: () => {
      const doc = new jsPDF();
      const generalKeys = Object.keys(general);
      const jobKeys = Object.keys(job);
      const addressKeys = Object.keys(address);
      const contactKeys = Object.keys(contact);
      const generalVals = Object.values(general);
      const jobVals = Object.values(job);
      const addressVals = Object.values(address);
      const contactVals = Object.values(contact);

      doc.text(10, 10, generalKeys);
      doc.text(10, 40, contactKeys);
      doc.text(10, 60, jobKeys);
      doc.text(10, 80, addressKeys);
      doc.text(40, 10, generalVals);
      doc.text(40, 40, contactVals);
      doc.text(40, 60, jobVals);
      doc.text(40, 80, addressVals);

      doc.save(`${firstName}${lastName}.pdf`);
    },
  });

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={formik.handleSubmit}>
        <label htmlFor="names">Name/Lastname</label>
        <TextField
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={`${firstName} / ${lastName}`}
          variant="filled"
          className="form-input"
          disabled
        />
        <label htmlFor="email">Email Address</label>
        <TextField
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={contact.email}
          variant="filled"
          className="form-input"
          disabled
        />
        <label htmlFor="job-title">Job Title</label>
        <TextField
          name="job-title"
          type="text"
          onChange={formik.handleChange}
          value={job.title}
          variant="filled"
          className="form-input"
          disabled
        />
        <label htmlFor="country">Country</label>
        <TextField
          name="country"
          type="text"
          onChange={formik.handleChange}
          value={address.country}
          variant="filled"
          className="form-input"
          disabled
        />
        <label htmlFor="phone-number">Phone Number</label>
        <TextField
          name="phone-number"
          type="text"
          onChange={formik.handleChange}
          value={contact.phone}
          variant="filled"
          className="form-input"
          disabled
        />
        <label htmlFor="job-company">Job Company</label>
        <TextField
          name="job-company"
          type="text"
          onChange={formik.handleChange}
          value={job.company}
          variant="filled"
          className="form-input"
          disabled
        />
        <label htmlFor="city">City</label>
        <TextField
          name="city"
          type="text"
          onChange={formik.handleChange}
          value={address.city}
          variant="filled"
          className="form-input"
          disabled
        />
        <label htmlFor="street">Street</label>
        <TextField
          name="street"
          type="text"
          onChange={formik.handleChange}
          value={address.street}
          variant="filled"
          className="form-input"
          disabled
        />
        <label htmlFor="zip-code">Zip Code</label>
        <TextField
          name="zip-code"
          type="text"
          onChange={formik.handleChange}
          value={address.zipCode}
          variant="filled"
          className="form-input"
          disabled
        />
        <label htmlFor="comments">Leave comments</label>
        <TextField
          name="comments"
          type="text"
          multiline
          rowsMax={4}
          onChange={formik.handleChange}
          value={"-"}
          variant="filled"
          disabled
        />
        <div className="submit-btn-wrapper">
          <Button
            className="submit-btn"
            variant="contained"
            color="secondary"
            type="submit"
          >
            Make PDF
          </Button>
        </div>
      </form>
    </div>
  );
});

