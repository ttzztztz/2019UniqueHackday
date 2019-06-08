export default async (url: string) => {
    try {
        const data = await fetch(url, {
            method: "GET"
        });
        return await data.json();
    } catch (e) {
        return {
            code: "err",
            e
        };
    }
};
