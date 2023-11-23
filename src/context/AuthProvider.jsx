import { createContext, useContext, useEffect, useState } from "react";
import {supabase} from "../client";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext)

const login = (email, password) => supabase.auth.signInWithPassword({ email, password })

export const githubLogin = async (e) => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  }

const signOut = () => supabase.auth.signOut()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [auth, setAuth] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const getUser = async () => {
            const {data} = await supabase.auth.getUser()
            const {user: currentUser} = data;
            setUser(currentUser ?? null)
            setAuth(currentUser ? true : false)
            setLoading(false)
        };
        getUser();

        const { data } = supabase.auth.onAuthStateChange((event, session) => {
            if (event == "PASSWORD_RECOVERY") {
                setAuth(false);
            } else if (event == "SIGNED_IN") {
                setUser(session.user);
                setAuth(true);
            } else if (event == "SIGNED_OUT") {
                setUser(null);
                setAuth(false);
            }
        });
        return () => {
            data.subscription.unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider 
        value={{user, auth, loading, login, signOut}}>
            {!loading && children}
        </AuthContext.Provider>
    )
};

export default AuthProvider
