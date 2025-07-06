

const getUserInfo = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/students/me", {
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

        return data;
    } catch (error) {
        console.error("Error fetching user info:", error);
    }
}

export default getUserInfo