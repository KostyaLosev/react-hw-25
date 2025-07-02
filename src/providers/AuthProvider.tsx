import { ReactNode, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useDispatch } from "react-redux";
import { setUser, setChecking } from "../features/AuthSlice"


interface Props {
    children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser({ email: user.email }));
            } else {
                dispatch(setUser(null));
            }
            dispatch(setChecking(false));
        });

        return () => unsubscribe();
    }, [dispatch]);

    return <>{children}</>;
};

export default AuthProvider;