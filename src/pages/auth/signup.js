import { useState, useEffect } from "react"
import { AccLinks } from "../../components/allComp"
import { useAuth } from "../../context/allContext"

export const SignUp = () => {
    const { UserSignUpHandler, authUser } = useAuth()
    const [userSignUp, setUserSignUp] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    useEffect(() => {
        authUser.isUserLoggedIn? navigate("/notes"): null
    }, [])
    return (
        <div>
            <div className="account-page">
                    <div className="form-container">
                        <AccLinks />
                        <form className="register-form">
                            <input type="text" placeholder="Firstname" required 
                            onChange={(e) => setUserSignUp({...userSignUp, firstName: e.target.value})}
                            />
                            <input type="text" placeholder="LastName" required 
                            onChange={(e) => setUserSignUp({...userSignUp, lastName: e.target.value})}
                            />
                            <input type="email" placeholder="Email" required 
                            onChange={(e) => setUserSignUp({...userSignUp, email: e.target.value})}
                            />
                            <input type="password" placeholder="Password" required 
                            onChange={(e) => setUserSignUp({...userSignUp, password: e.target.value})}
                            />
                            <div className="pswd-rem">
                                <input type="checkbox" id="check" />
                                <label id="remember-check">I accept the terms and conditions</label>
                            </div>
                            <button type="submit" className="account-btn"
                            onClick={(e) => {
                                e.preventDefault();
                                UserSignUpHandler(userSignUp)
                            }
                            }
                            >Signup</button>
                        </form>
                    </div>
                </div>
            </div>
    )
}
