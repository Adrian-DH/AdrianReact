
import Course from "./Course";
import './CourseList.css';

const CourseList = ({courses, selected, toggleSelected, currTerm} ) =>{
    const Courses = Object.entries(courses).filter(([,course]) => course['term'] === currTerm); 
    return (
    <div className="courselist">
      {Courses.map(([id, course]) => (
          <Course key={id}  id = {id} course={course} selected={selected} toggleSelected={toggleSelected}/>
      ))}
      </div>
    );
};
export default CourseList;