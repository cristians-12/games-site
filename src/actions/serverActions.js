"use server"

export const getGames = async (page = 1, name = '') => {
    
    const params = new URLSearchParams({ page, search:name, key: process.env.API_KEY });
    const res = await fetch(`${process.env.API_URL}/games?${params}`, {
        headers: {
            Autorization: `Bearer ${process.env.API_KEY}`,
        },
        next: {
            revalidate: 50,
        }
    });
    const datos = await res.json();
    return datos;
}

export const getGameById = async (id) => {
    const res = await fetch(`${process.env.API_URL}/games/${id}?key=${process.env.API_KEY}&language=es-ES`, {
        headers: {
            Autorization: `Bearer ${process.env.API_KEY}`,
        }
    });
    const datos = await res.json();
    return datos;
}


export const getGameTrailers = async (id) => {
    const res = await fetch(`${process.env.API_URL}/games/${id}/movies?key=${process.env.API_KEY}`);
    const datos = await res.json();
    return datos;
}

