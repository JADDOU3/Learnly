

const analyzer = async (grades) => {
    const subjectScore = {};

    grades.forEach(grade => {
        if(!subjectScore[grade.subject]){
            subjectScore[grade.subject] =[];
        }
        subjectScore[grade.subject].push(grade.grade);
    });

    const trends = {};

    for (const subject in subjectScore) {
        const subjectGrades = subjectScore[subject];
        const average = subjectGrades.reduce((a, b) => a + b, 0) / subjectGrades.length;
        const last = subjectGrades[subjectGrades.length - 1];
        const first = subjectGrades[0];

        trends[subject] = {
            average ,
            trend : last - first,
            weak: average < 60 || ( last - first ) < 0
        }
    }

    return trends;

}


export default analyzer