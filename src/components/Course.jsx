import Card from 'react-bootstrap/Card';
import './Course.css';
import { CompatibleClasses } from '../utils/comp';
import { Link } from 'react-router-dom';
import Posts from './Posts';
import { Button } from 'react-bootstrap';
import { useAuthState, useDbData } from '../utils/firebase';
export const useProfile = () => {
  const [user] = useAuthState();
  const [isAdmin, isLoading, error] = useDbData( `/admins/${user?.uid || 'guest'}`);
  console.log(user);
  return [{ user, isAdmin }, isLoading, error];
};
const Course= ({ id, course, selected, toggleSelected}) =>{
    
    const [profile, profileLoading, profileError] = useProfile();
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
    {profile.isAdmin ? (<Link to={`/course/${id}/edit`}><Button>Edit</Button></Link>): null}
    </div>
    </Card>
    
   </div>
 );

};
export default Course;

