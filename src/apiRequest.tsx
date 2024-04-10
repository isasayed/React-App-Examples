export const apiRequest = async (url = '', optionsObj: RequestInit, errorMsg = '') => {
    try {
        const response = await fetch(url, optionsObj);
        if (!response.ok) throw Error("Reload the app")
    } catch (err: any) {
        errorMsg = err.message;
    } finally {
        return errorMsg;
    }
}

export const addNewItem = async (API_URL: string, body: any) => {
    const PostOptions = {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(body)
    }
    return await apiRequest(API_URL, PostOptions);
}