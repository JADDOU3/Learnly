import '../styles/Help.css'
import submitTicket from "../api/submitTicket.js";

function Help(){
    return(
        <div className="card profile-card">
            <div className="profile-header">
                <h2>Submit a ticket</h2>
            </div>
            <div className="details-section">
                <label>Title</label>
                <input id="title-field" className="input-field" type="text" placeholder="Enter your title" />
                <label>Description</label>
                <textarea id="description-field" className="input-field"  placeholder="Enter your description"></textarea>
                <button onClick={handleSubmit} className="primary-btn">Submit</button>
            </div>
        </div>
    )
}

const handleSubmit =  async (e) => {
    e.preventDefault();
    const title = document.querySelector('input[id ="title-field"]').value;
    const description = document.querySelector('textarea[id ="description-field"]').value;
    await submitTicket(title , description);
}

export default Help