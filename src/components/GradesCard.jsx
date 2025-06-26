import '../styles/GradeCard.css';

function GradesCard() {
    const grades = [
        { semester: "Fall 2023", subject: "Mathematics", grade: "A" },
        { semester: "Fall 2023", subject: "Physics", grade: "B+" },
        { semester: "Spring 2024", subject: "Computer Science", grade: "A" },
        { semester: "Spring 2024", subject: "Literature", grade: "A-" },
        { semester: "Summer 2024", subject: "Chemistry", grade: "C" },
    ];

    return (
        <div className="card grades-card">
            <div className="profile-header">
                <h2>Grades</h2>
            </div>
            <div className="details-section">
                <div className="add-btn-container">
                    <button className="primary-btn">Add Grade</button>
                </div>

                <table>
                    <thead>
                    <tr>
                        <th>Semester</th>
                        <th>Subject</th>
                        <th>Grade</th>
                    </tr>
                    </thead>
                    <tbody>
                    {grades.length > 0 ? (
                        grades.map((grade, index) => (
                            <tr key={index}>
                                <td>{grade.semester}</td>
                                <td>{grade.subject}</td>
                                <td className={`grade-cell grade-${grade.grade[0]}`}>
                                    {grade.grade}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">
                                <div className="empty-state">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                    <p>No grades recorded yet</p>
                                </div>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default GradesCard;