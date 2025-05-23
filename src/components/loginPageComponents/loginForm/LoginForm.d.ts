export interface State {
    email: string;
    password: string;
    error: string;
    success: boolean;
}

export type Action =
    | { type: "SET_EMAIL"; payload: string }
    | { type: "SET_PASSWORD"; payload: string }
    | { type: "LOGIN_SUCCESS" }
    | { type: "LOGIN_ERROR"; payload: string }
    | { type: "RESET" };