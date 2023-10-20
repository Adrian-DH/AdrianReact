import Card from 'react-bootstrap/Card';
import './Course.css';
import { CompatibleClasses } from '../utils/comp';
import { Link } from 'react-router-dom';
import Posts from './Posts';
import { Button } from 'react-bootstrap';

const getCourse = (courseInfo) => {
  const term = courseInfo.term.charAt(0);
  const number = courseInfo.number;
  return `${term}${number}`;
};
const Course= ({ id, course, selected, toggleSelected}) =>{
    const redHighlight = CompatibleClasses(course, selected);
    return (
    <div key = {id} className="course-card" onClick={() => toggleSelected(course)}>
    <Card  bg="Light" border="secondary" style={{ width: '18em'}}>
    <div className={`card-body ${selected.includes(course) ? 'selected' : ''} ${redHighlight ? "notComp" : ''}`}>
    <Card.Body >
      <Card.Title>{course.term} CS {course.number}</Card.Title>
      <Card.Text>
      {course.title}
      </Card.Text>
    </Card.Body>

    <Card.Footer>
      <small>{course.meets}</small>
    </Card.Footer>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , marginBottom: '5px'}}>
    <Link to={`/course/${id}/edit`}><Button>Edit</Button></Link>
    </div>
    </Card>
    
   </div>
 );

};
export default Course;

