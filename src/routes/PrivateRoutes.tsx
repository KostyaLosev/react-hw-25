import type { ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector  } from "../hooks/hooks"

interface Props {
    children: ReactElement;
}

const ProtectedRoute = ({ children }: Props) => {
    const { user, checking  } = useAppSelector((state) => state.auth);
    const location = useLocation();

    if (checking) return <div>Loading auth status...</div>;
    if (!user) return <Navigate to="/login" replace state={{ from: location }} />;

    return children;
};

export default ProtectedRoute;