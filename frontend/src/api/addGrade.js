

const addGrade = async (subject , grade , semester) => {
        try {
            const response = await fetch("http://localhost:5000/api/grades" , {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },
                body:JSON.stringify({
                    subject,
                    grade,
                    semester
                })
            });
            const data = await response.json();
            if (!response.ok) {
                alert(data.msg);
                return;
            }
            alert("Grade Added Successfully");
            console.log(data);
            return data;

        }catch (error){
            console.error("Error fetching user info:", error);
        }

}

export default addGrade