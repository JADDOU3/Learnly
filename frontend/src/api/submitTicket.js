

const submitTicket = async (title , description) => {
    try{
        const response = await fetch("http://localhost:5000/api/tickets" , {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
            body:JSON.stringify({
                title,
                description
            })
        })
        const data = await response.json();
        if (!response.ok) {
            alert(data.msg);
            return;
        }
        alert("Ticket Submitted Successfully");
        console.log(data);
        return data;
    }
    catch(error){
        alert("Error fetching user info:", error);
    }
}

export default submitTicket