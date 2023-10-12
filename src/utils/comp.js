export const CompatibleClasses = (course, selected) =>{
    const ans = checkSelectability(course, selected);
    return ans;
}

const checkSelectability = (currCourse, courses) => {
    const [currDayList, currDates] = currCourse.meets.split(" ");
    const [dateCurrStart, dateCurrEnd] = currDates.replace(":", "").split("-");
    const currDays = currDayList.split('');
    const currTerm = currCourse.term;
    
    const filtered = courses.filter((course) =>{
        const [courseDaysList, courseDates]  = course.meets.split(" ");
        const [dateCourseStart, dateCourseEnd] = courseDates.replace(":", "").split("-");
        const courseDays = courseDaysList.split('');
        const courseTerm = course.term;
        return (courseTerm == currTerm) && (currDays.some((day) => courseDays.includes(day))) && ((dateCurrStart < dateCourseEnd && dateCurrEnd > dateCourseStart) ||
        (dateCurrStart > dateCourseStart && dateCurrStart < dateCourseEnd)) && (course.number != currCourse.number);
    });
    return (filtered.length > 0);
}