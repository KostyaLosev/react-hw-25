export interface User {
    email: string | null;
}

export interface AuthState {
    user: User | null;
    email: string;
    password: string;
    loading: boolean;
    error: string | null;
    success: boolean;
}