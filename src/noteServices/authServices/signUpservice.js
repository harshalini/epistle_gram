import axios from "axios";

export const SignupServiceHandler = async (firstName, lastName, email, password) => {
    try {
        const res = await axios.post("api/auth/signup", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        })
        return res.data;
    }
    catch(error) {
        console.log("an error occured", error)
    }
}