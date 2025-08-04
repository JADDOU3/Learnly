import addGrade from '../api/addGrade.js'

function AddGradeCard(){
    return(
        <div>
            <div className="details-section">
                <label>Subject</label>
                <input id ="subject-field" className="input-field" type="text" placeholder="Enter Subject Name" />
            </div>
            <div className="details-section">
            <label>Grade</label>
            <input id ="grade-field" className="input-field" type="text" placeholder="Enter Grade" />
            </div>
            <div className="details-section">
            <label>Semester</label>
            <input id ="semester-field" className="input-field" type="text" placeholder="Enter Semester" />
            </div>
            <button onClick={handleAddGrade} className="primary-btn">Add Grade</button>
        </div>
    );
}

const handleAddGrade =  async (e) => {
    e.preventDefault();
    const subject = document.querySelector('input[id ="subject-field"]').value;
    const grade = document.querySelector('input[id ="grade-field"]').value;
    const semester = document.querySelector('input[id ="semester-field"]').value;
    await addGrade(subject , grade , semester);
    window.location.reload();
}



export default AddGradeCard;