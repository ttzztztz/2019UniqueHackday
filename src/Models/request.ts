export default async (url: string) => {
    const data = await fetch(url);
    return await data.json();
};
