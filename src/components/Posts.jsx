import { useState } from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Posts = ({data}) => {
    const [update, result] = useState("");
    const [state, change] = useState("");
    const submit = (evt) => {
    evt.preventDefault();
    if (!state.errors) {
      update(state.values);
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
const ButtonBar = () => {
    const navigate = useNavigate();
    return (
      <div className="d-flex">
        <button type="button" className="btn btn-outline-dark me-2" onClick={() => navigate(-1)}>Cancel</button>
        <button type="submit" className="btn btn-primary me-auto" >Submit</button>
        
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
    
    <form onSubmit={submit} noValidate className={state.errors ? 'was-validated' : null}>
      <InputField name="firstName" text="Course Term" state={state} change={change} />
      <InputField name="lastName" text="Course Number" state={state} change={change} />
      <InputField name="email" text="Course Title" state={state} change={change} />
      <InputField name="description" text="Course Description" state={state} change={change} />
      <InputField name="meets" text="Course Meets" state={state} change={change} />
      <ButtonBar  />
   
  
    </form>
   
  </div>
);
    }
export default Posts; 
