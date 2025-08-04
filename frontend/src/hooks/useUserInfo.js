import {useEffect, useState} from "react";
import getUserInfo from "../api/getUserInfo.js";


const useUserInfo =  () => {
    const [user, setUser] = useState(null);
    const getInfo = async () => {
        const data = await getUserInfo();
        if(!data) {
            setUser(null);
            return;
        }

        setUser({
            ...data,
            url: data.url || data.image || "https://avatars.githubusercontent.com/u/84065638?v=4"
        });
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            getInfo();
        }
    });

    return user;
}

export default useUserInfo