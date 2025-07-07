import GRADES from "../utils/Grades.js";

const analyzer = async (grades) => {
    const subjectScore = {};

    grades.forEach(grade => {
        if(!subjectScore[grade.subject]){
            subjectScore[grade.subject] =[];
        }
        subjectScore[grade.subject].push(grade.grade);
    });

    for (const subject in subjectScore) {
        subjectScore[subject].sort((a, b) => a.semester.localeCompare(b.semester));
    }

    const trends = {};
    for (const subject in subjectScore) {
        const subjectGrades = subjectScore[subject]
            .map(g => GRADES[g.grade] || 0)
            .filter(score => score > 0);

        if (subjectGrades.length === 0) continue;

        const first = subjectGrades[0];
        const last = subjectGrades[subjectGrades.length - 1];
        const avg = subjectGrades.reduce((a, b) => a + b, 0) / subjectGrades.length;

        trends[subject] = {
            avg,
            trend: last - first,
            weak: avg < 60 || (last - first) < 0
        };
    }

    return trends;

}


export default analyzer