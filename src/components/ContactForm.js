import React, { useState, useEffect } from "react";

const ContactForm = (props) => {
  const initialFieldValues = {
    fullName: "",
    mobile: "",
    email: "",
    address: "",
  };

  var [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (props.currentId == "")
      setValues({
        ...initialFieldValues,
      });
    else
      setValues({
        ...props.contactObjects[props.currentId],
      });
  }, [props.currentId, props.contactObjects]);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    //   prevent refreshing
    e.preventDefault();
    props.addOrEdit(values);
  };

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <div className="form-group input-group mb-5">
        {/* icon before text-box */}
        <div className="label">
          <div className="input-group-text">Task-Name</div>
        </div>
        <input
          className="form-control"
          placeholder="Task-Name"
          name="fullName"
          value={values.fullName}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend mb-5">
            <div className="input-group-text">Description</div>
          </div>
          <input
            className="form-control mb-5"
            placeholder="Description"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group input-group col-md-6">
          {/* icon before text-box */}
          <div className="input-group-prepend mb-5">
            <div className="input-group-text">
              Status
            </div>
          </div>
          <input
            className="form-control mb-5"
            placeholder="To-Do..Doing..Done"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Comments"
          name="address"
          value={values.address}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="form-group">
        <input
          type="submit"
          value={props.currentId == "" ? "Save" : "Update"}
          className="btn btn-primary btn-block mt-5"
        />
      </div>
    </form>
  );
};

export default ContactForm;
