import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { useParams, useNavigate } from 'react-router-dom';
import { useDbUpdate } from '../utils/firebase';
import { useFormData }  from '../utils/useFormData';

const validateUserData = (key, val) => {
  switch (key) {
    case 'title':
      return /(^\w\w)/.test(val) ? '' : 'must be least two characters';
    case 'meets':
      return !/\b(?:M|Tu|W|Th|F)+(?:-(?:M|Tu|W|Th|F)+)?\s+\d{2}:\d{2}-\d{2}:\d{2}\b/.test(val) ? '' : 'Meeting times must be formatted "MWF 12:00-13:20".';
    default: return '';
  }
};

const getCourse = (id, data) => {
  console.log(data);
  const course = data.courses[id];
  console.log(course);
  return course;
};

const Posts = ({data}) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const course = getCourse(id, data);
    const [state, change] = useFormData(validateUserData, course);
    const [update, result] = useDbUpdate(`/users/${id}`);
    
    const submit = (evt) => {
      evt.preventDefault();
      if (!state.errors) {
        console.log("submitted!")
        update(state.values);
        navigate(-1);
    }
  };

 const InputField = ({name, text, state, change}) => (
  <div className="mb-3">
    <label htmlFor={name} className="form-label">{text}</label>
    <input className="form-control" id={name} name={name} 
      defaultValue={state.values?.[name]} onChange={change} />
    <div className="invalid-feedback">{state.errors?.[name]}</div>
  </div>
);

 
const ButtonBar = ({message, disabled}) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex">
      <button type="button" className="btn btn-outline-dark me-2" onClick={() => navigate(-1)}>Cancel</button>
      <button type="submit" className="btn btn-primary me-auto" disabled={disabled}>Submit</button>
      <span className="p-2">{message}</span>
    </div>
  );
};
  
    return(

    <div className="container">
    <Card  bg="Light" border="secondary" style={{ width: '4em'}}>
    <Link className= "btn btn-success" to="/" ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
    </svg>
    </Link>
    </Card>
    
    <form onSubmit={submit} noValidate className={state.errors ? 'was-validated' : null} >
      <InputField name="term" text="Course Term" state={state} change={change}/>
      <InputField name="number" text="Course Number"    state={state} change={change}/>
      <InputField name="title"  text="Course Title" state={state} change={change} />
     
      <InputField name="meets"   text="Course Meets" state={state} change={change} />
      <ButtonBar  message={result?.message}/>
   
  
    </form>
   
  </div>
);
    }
export default Posts; 
