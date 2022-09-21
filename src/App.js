import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const initialValues = { title: "", content: "", status: "", posted_at:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.title) {
      errors.title = "Erreur le titre n est pas defini!";
    }
    if (!values.content) {
      errors.content = "Erreur content n est pas defini!";
    }
    if (!values.status) {
      errors.status = "Erreur status n est pas defini!";
    }
    if (!values.posted_at) {
      errors.posted_at = "Erreur status n est pas defini!";
    }
   
    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <form onSubmit={handleSubmit}>
        <h1>Formulaire</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formValues.title}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.title}</p>
          <div className="field">
            <label>Content</label>
            <input
              type="text"
              name="content"
              placeholder="content"
              value={formValues.content}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.content}</p>
          <div className="field">
            <label>Status</label>
            <input
              type="status"
              name="status"
              placeholder="status"
              value={formValues.status}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.status}</p>
          <div className="field">
            <label>Posted_at</label>
            <input
              type="posted_at"
              name="posted_at"
              placeholder="posted_at"
              value={formValues.posted_at}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.posted_at}</p>
         
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
