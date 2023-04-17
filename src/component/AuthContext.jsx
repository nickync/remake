import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({children}){
    const [lang, setLang] = useState('en')

    const switchLanguage = () => {
        lang === 'en' ? setLang('cn') : setLang('en')
    }

    return (
        <AuthContext.Provider value={{lang, switchLanguage}}>
            {children}
        </AuthContext.Provider>
    )
}