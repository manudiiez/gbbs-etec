import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';



export const UserContext = createContext({});

const URI = process.env.REACT_APP_URI


const UserProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate()
    const cookies = new Cookies()


    const isAuthenticated = async() =>{

        const token = cookies.get('jwt')
        console.log(token)
        if(token){
            const res = await fetch(`${URI}/user_auth`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    token
                })
            })
            const data = await res.json()
            console.log(data)
            if(data){
                setUser(data)
            }else{
                navigate('/')
            }
        }else{
            setUser(null)
            navigate('/')
        }
    }

    const logOutUser = () => {
        cookies.remove('jwt')
    }

    return (
        <UserContext.Provider value={{ 
            user, 
            isAuthenticated,
            logOutUser
            }}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider