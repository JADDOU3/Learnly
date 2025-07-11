import GRADES from "../utils/Grades.js";

const analyzer = async (grades) => {
    const grouped = {};
    grades.forEach(g => {
        if (!grouped[g.subject]) grouped[g.subject] = [];
        grouped[g.subject].push(g);
    });

    for (const subject in grouped) {
        grouped[subject].sort((a, b) => a.semester.localeCompare(b.semester));
    }

    const trends = {};
    for (const subject in grouped) {
        const subjectGrades = grouped[subject]
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