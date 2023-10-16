import { useState } from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Posts = ({data}) => {
    const [formData, setFormData] = useState("");
    const [titleError, setTitleError] = useState('');
    const [meetsError, setMeetError] = useState('');
    const submit = (evt) => {
      evt.preventDefault();
  };
  const handleInputError = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    (name === 'title' && value.length < 2) ? setTitleError('Title must be at least 2 characters long') : setTitleError("");
    (name === 'meets' && !/\b(?:M|Tu|W|Th|F)+(?:-(?:M|Tu|W|Th|F)+)?\s+\d{2}:\d{2}-\d{2}:\d{2}\b/.test(value)) ? setMeetError('Meeting times must be formatted "MWF 12:00-13:20".') : setMeetError("");
 };

  const InputField = ({name, text}) => (
    <div className="mb-3">
    <label htmlFor={name} className="form-label">
      {text}
    </label>
    <input
      className={`form-control `}
      id={name}
      name={name}
      value={formData[name]}
      onChange={handleInputError}
    />
    
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
    
    <form onSubmit={submit} noValidate >
      <InputField name="term" text="Course Term" />
      <InputField name="number" text="Course Number"    />
      <InputField name="title"  text="Course Title"  />
      <InputField  name="description" text="Course Description"   />
      <InputField name="meets"   text="Course Meets"  />
      <ButtonBar  />
   
  
    </form>
   
  </div>
);
    }
export default Posts; 
