
const login = async (email, password) => {
    try{
        const response = await fetch("http://localhost:5000/api/students/login" , {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        });


        const data = await response.json();
        if (!response.ok) {
            alert(data.msg);
            return;
        }
        alert("Login Successful");
        localStorage.setItem("token", data.token);

        window.location.href = "/";
    }
    catch(error){
        console.log(error);
    }
}

export default login