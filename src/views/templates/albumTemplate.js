import { html, nothing } from "../../../node_modules/lit-html/lit-html.js";


const albumDetails = (albumId) => html`
<div class="btn-group">
    <a href="albums/${albumId}" id="details">Details</a>
</div>
`;

export const albumTemplate = (album, withdetails = true) => html`
<!-- това с детейлс тру е заради условието за визибъл на дитейлс само ако е потребитела -->
<div class="card-box">
    <img src=${album.imgUrl}>
    <div>
        <div class="text-center">
            <p class="name">Name: ${album.name}</p>
            <p class="artist">Artist: ${album.artist}</p>
            <p class="genre">Genre: ${album.genre}</p>
            <p class="price">Price: ${album.price}</p>
            <p class="date">Release Date: ${album.releaseDate}</p>
        </div>
        ${withdetails ? albumDetails(album._id) : nothing}
    </div>
</div>
`;
