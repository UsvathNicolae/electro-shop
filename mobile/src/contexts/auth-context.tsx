import { createContext, useContext, useMemo, useState } from "react";
import { headers } from "../../App";
import { useAppNavigation, useEffectAsync } from "../hooks/utils";
import { RegInfo } from "../pages/login";

type AuthenticationContext = ReturnType<typeof useCreateAuthService>
const AuthenticationContext = createContext<AuthenticationContext>(null!);

export function useAuthService() {
    return useContext(AuthenticationContext);
}

function useCreateAuthService() {
    const [loginInfo, setLoginInfo] = useState<{
        message: string,
        role: string,
        token: string,
        user: string
    }>();
    const nav = useAppNavigation();
    const [error, setError] = useState(false);

    const login = async (regInfo: RegInfo<string>) => {
        // if it is not working please change localhost to your internal IPv4 address
        await fetch("localhost:8080/user/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(regInfo),
        }).then((data) => data.json()).then((result) => {
            if (result.token) {
                setLoginInfo(result);
            }
            if (result.message) {
                nav.navigate("OrderList");
            } else {
                setError(true);
            }
        }).catch((error) => {
            console.log("eroare", error)
        })
    }

    useEffectAsync(async () => {
        if (loginInfo?.token === null) return;
        if (loginInfo?.token) {
            headers['Authorization'] = `Bearer ${loginInfo?.token}`;
        } else {
            delete headers['Authorization'];
        }
    }, [loginInfo])

    return useMemo(() => ({
        login,
        loginInfo,
        setLoginInfo,
        error
    }), [loginInfo, error])
}

export function AuthenticationContextProvider(props: { children: JSX.Element }) {
    const authService = useCreateAuthService();
    return <AuthenticationContext.Provider value={authService}>
        {props.children}
    </AuthenticationContext.Provider>
}
