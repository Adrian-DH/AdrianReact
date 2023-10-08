import { useState } from 'react';
import CourseList from "./CourseList";

const SelectedCourses = ({courses}, {currTerm}) => {
  const [selected, setSelected] = useState([]);

  const toggleSelected = (item) => setSelected(
    selected.includes(item)
    ? selected.filter(x => x !== item)
    : [...selected, item]
  );

  return (
    <div className ='selectedcourses'>
    <CourseList courses={courses} currTerm = {currTerm} selected={selected} toggleSelected={toggleSelected} />
    </div>
  );
};

export default SelectedCourses;