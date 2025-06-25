import '../styles/Help.css'

function Help(){
    return(
        <div className="profile-card">
            <div className="profile-header">
                <h2>Submit a ticket</h2>
            </div>
            <form className="details-section">
                <label>Title</label>
                <input type="text" placeholder="Enter your title" />
                <label>Description</label>
                <textarea placeholder="Enter your description"></textarea>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Help