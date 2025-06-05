export interface LogEntry {
    url: string;
    body: any;
    status: number | "NETWORK_ERROR";
    error?: string;
    timestamp: string;
}

export interface FetchOptions extends RequestInit {
    log?: boolean;
}