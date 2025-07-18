

const getUserGrades = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/grades/", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        });
        if (!response.ok) {
            throw new Error("Failed to fetch user info");
        }
        const data = await response.json();

        if(!data){
            return null;
        }
        console.log(data);
        return data;

    }catch (error){
        console.error("Error fetching user info:", error);
    }

}

export default getUserGrades