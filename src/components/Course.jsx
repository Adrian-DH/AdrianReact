import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Course.css';
import { CompatibleClasses } from '../utils/comp';
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
    </Card>
   </div>
 );

};
export default Course;

