import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import './CourseList.css';

const CourseList = ({courses}, {currTerm}) =>{
  
    const Courses = Object.entries(courses).filter(([id, course]) => courses['term'] === currTerm);
    console.log(Courses)
        const arr = Courses.map(([id, course]) => (
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