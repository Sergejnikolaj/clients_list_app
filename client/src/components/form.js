import React, { memo } from "react";
import { useFormik } from "formik";
import jsPDF from "jspdf";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Form = memo((props) => {
  const {
    general = {},
    general: { firstName = "", lastName = "", avatar = "" },
    job = {},
    address = {},
    contact = {},
  } = props;
  const formik = useFormik({
    initialValues: {},

    onSubmit: () => {
      const doc = new jsPDF();
      const img = new Image();
      img.src = avatar;
      const generalKeys = Object.keys(general);
      generalKeys.pop();
      const jobKeys = Object.keys(job);
      const addressKeys = Object.keys(address);
      const contactKeys = Object.keys(contact);
      const generalVals = Object.values(general);
      generalVals.pop();
      const jobVals = Object.values(job);
      const addressVals = Object.values(address);
      const contactVals = Object.values(contact);

      doc.addImage(img, "JPEG", 10, 10, 60, 60);
      doc.text(80, 15, generalKeys);
      doc.text(80, 35, contactKeys);
      doc.text(80, 55, jobKeys);
      doc.text(80, 75, addressKeys);
      doc.text(110, 15, generalVals);
      doc.text(110, 35, contactVals);
      doc.text(110, 55, jobVals);
      doc.text(110, 75, addressVals);

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
