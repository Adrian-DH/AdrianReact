import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Course.css';
const Course= ({ id, course, selected, toggleSelected}) =>{
    return (
    <div key = {id} className="course-card" onClick={() => toggleSelected(id)}>
    <Card  bg="Light" border="secondary" style={{ width: '18rem' }}>
    <div className={`card-body ${selected.includes(id) ? 'selected' : ''}`}>
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

