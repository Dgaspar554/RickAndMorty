export const getRick = async (page) => {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const resp = await fetch(url);
    const { results } = await resp.json();
    
    const personajes = data.map
}
