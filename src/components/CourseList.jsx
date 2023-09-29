const CourseList = ({courses}) =>{
    console.log(courses);
    const arr = Object.entries(courses).map(([id, course]) => (
        <p key={id}>{course.term} CS {course.number}: {course.title} </p>
    ));
    return (
        <div> {arr} </div>
    );
};
export default CourseList;