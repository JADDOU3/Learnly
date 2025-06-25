import '../styles/Help.css'

function Help(){
    return(
        <div className="card profile-card">
            <div className="profile-header">
                <h2>Submit a ticket</h2>
            </div>
            <form className="details-section">
                <label>Title</label>
                <input className="input-field" type="text" placeholder="Enter your title" />
                <label>Description</label>
                <textarea className="input-field"  placeholder="Enter your description"></textarea>
                <button className="primary-btn">Submit</button>
            </form>
        </div>
    )
}

export default Help