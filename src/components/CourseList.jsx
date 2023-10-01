import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import './CourseList.css';

const CourseList = ({courses}) =>{
    console.log(courses);
    
    const arr = Object.entries(courses).map(([id, course]) => (
        <div key={id} className="course-card">
        <Card  bg="Light" border="secondary" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{course.term} CS {course.number}</Card.Title>
          <Card.Text>
          {course.title}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small>{course.meets}</small>
        </Card.Footer>
        </Card>
        </div>
    ));
    return (
        <Container>
        <CardGroup> {arr}</CardGroup> 
        </Container>
    );
};
export default CourseList;