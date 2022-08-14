import * as request from "./requester.js";



const baseUrl = `http://localhost:3030/data/albums`;

export const getAll = () => request.get(`${baseUrl}?sortBy=_createdOn%20desc&distinct=name`);

export const getOne = (albumId) => request.get(`${baseUrl}/${albumId}`);


export const create = (albumData) => request.post(baseUrl, albumData);

export const edit = (albumId, albumData) => request.put(`${baseUrl}/${albumId}`, albumData);
//взимаме албум ид албум дейтата, правим пут заявка до бейс урл със албум ид  със албумдейтата

export const remove = (albumId) => request.del(`${baseUrl}/${albumId}`);

export const searchText
    = (searchText) => {
        // const query = encodeURIComponent(`name LIKE "${searchText}" `);
        const query = searchText;
        return request.get(`${baseUrl}?where=name%20LIKE%20%22${query}%22`);
        //URL: /data/albums?where=name%20LIKE%20%22${query}%22
        // /data/albums?where=name%20LIKE%20%22${query}%22
    }

