const baseUrl = 'https://jsonplaceholder.typicode.com';

export const apiService = async <T, >(endpoint: string) => {
    const response = await fetch(baseUrl + endpoint);
    return await response.json() as T;
}