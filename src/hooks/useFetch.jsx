import { useCallback, useRef, useState } from "react";

const LOG_KEY = "apiLogs";
const MAX_LOGS = 100;

const getStoredLogs = () => {
    try {
        const logs = JSON.parse(localStorage.getItem(LOG_KEY));
        return Array.isArray(logs) ? logs : [];
    } catch {
        return [];
    }
};

const saveLogs = (logs) => {
    const trimmed = logs.slice(-MAX_LOGS);
    localStorage.setItem(LOG_KEY, JSON.stringify(trimmed));
};

const useFetch = () => {
    const logsRef = useRef(getStoredLogs()); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [, forceUpdate] = useState(0);
    const triggerUpdate = () => forceUpdate(n => n + 1);

    const fetchWithLogging = useCallback(async (url, options = {}) => {
        setLoading(true);
        setError(null);

        const { log = true, ...fetchOptions } = options;
        let parsedBody = null;

        try {
            if (fetchOptions.body) {
                parsedBody = typeof fetchOptions.body === "string"
                    ? JSON.parse(fetchOptions.body)
                    : fetchOptions.body;
            }
        } catch {
            parsedBody = fetchOptions.body;
        }

        try {
            const response = await fetch(url, fetchOptions);

            if (log) {
                const entry = {
                    url,
                    body: parsedBody,
                    status: response.status,
                    timestamp: new Date().toISOString(),
                };

                logsRef.current = [...logsRef.current, entry];
                saveLogs(logsRef.current);
                triggerUpdate(); 
            }

            return response;
        } catch (err) {
            setError(err);

            if (log) {
                const errorLog = {
                    url,
                    body: parsedBody,
                    status: "NETWORK_ERROR",
                    error: err.message,
                    timestamp: new Date().toISOString(),
                };

                logsRef.current = [...logsRef.current, errorLog];
                saveLogs(logsRef.current);
                triggerUpdate(); 
            }

            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const clearLogs = useCallback(() => {
        localStorage.removeItem(LOG_KEY);
        logsRef.current = [];
        triggerUpdate(); 
    }, []);

    return {
        fetchWithLogging,
        logs: logsRef.current,
        loading,
        error,
        clearLogs,
    };
};

export default useFetch;