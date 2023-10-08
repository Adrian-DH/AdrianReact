import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Course from "./Course";
import './CourseList.css';

const CourseList = ({courses, currTerm, selected, toggleSelected} ) =>{

    const Courses = Object.entries(courses).filter((course) => courses['term'] === currTerm); 
    return (
    <div className="courselist">
      {Courses.map(([id, course]) => (
          <Course key={id}  id = {id} course={course} selected={selected} toggleSelected={toggleSelected}/>
      ))}
      </div>
    );
};
export default CourseList;