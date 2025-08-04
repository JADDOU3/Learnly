import '../styles/GradeCard.css';
import getUserGrades from "../api/getUserGrades.js";
import AddGradeCard from "./AddGradeCard.jsx";
import { useEffect, useState } from 'react';

function GradesCard() {
    const [grades , setGrades] = useState([]);
    const [card , showCard] = useState(false);
    const [animateOut, setAnimateOut] = useState(false);

    const toggleGradeCard = () => {
        if (card) {
            setAnimateOut(true);
            setTimeout(() => {
                showCard(false);
                setAnimateOut(false);
            }, 400);
        } else {
            showCard(true);
        }
    };

    const getGrades = async () => {
        const data = await getUserGrades();
        if(!data) {
            setGrades(null);
            return;
        }
        setGrades(data);
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            getGrades();
        }
    }, []);

    return (
        <div className="card grades-card">
            <div className="profile-header">
                <h2>Grades</h2>
            </div>
            <div className="details-section">
                <div className="add-btn-container">
                    <button onClick={toggleGradeCard} className="primary-btn">
                        {card ? "Close" : "Add Grade"}
                    </button>
                </div>

                {card && (
                    <div className={`add-grade-card-container ${animateOut ? "slide-fade-out" : "slide-fade-in"}`}>
                        <AddGradeCard />
                    </div>
                )}
                <div className="table-container">
                    <table>
                        <thead>
                        <tr>
                            <th>Semester</th>
                            <th>Subject</th>
                            <th>Grade</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {grades?.length > 0 ? (
                            grades.map((grade, index) => (
                                <tr key={index}>
                                    <td>{grade.semester}</td>
                                    <td>{grade.subject}</td>
                                    <td className={`grade-cell grade-${grade.grade[0]}`}>
                                        {grade.grade}
                                    </td>
                                    <td className="actions-cell">
                                        <i className="fa-solid fa-pen-to-square icon-btn edit-btn" title="Edit"></i>
                                        <i className="fa-solid fa-trash icon-btn delete-btn" title="Delete"></i>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">
                                    <div className="empty-state">
                                        <p>No grades recorded yet</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default GradesCard;
