import axios from "axios";

export const LoginServiceHandler = async(email, password) => {
    try {
        const res = await axios.post("/api/auth/login", {
            email: email, 
            password: password
        })
        return res.data
    }
    catch(error) {
        console.log("error occured", error)
    }
}