import { html,nothing } from "../../node_modules/lit-html/lit-html.js";
import * as albumService from "../services/albumService.js";
import {albumTemplate} from "./templates/albumTemplate.js";

const searchTemplate = (searchHandler, albums, isLoged, clicked) => html`
    <!--Search Page-->
    <section id="searchPage">
            <h1>Search by Name</h1>

            <div class="search">
                <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
                <button class="button-list" @click=${searchHandler}>Search</button>
            </div>

            <h2>Results:</h2>
            ${clicked ? html`<div class="search-result">
            ${albums.length > 0 
                   ?  albums.map(album=> albumTemplate(album, isLoged))
                   : html`<p class="no-result">No result.</p>`}</div>` : nothing}    
           
            </div>
        </section>
`;

export const searchView = (ctx) =>{
    let clicked = false;
    const isLoged = Boolean(ctx.user);
    const searchHandler = (ev) =>{
       let searchElement = document.getElementById(`search-input`);
   
       if(searchElement.value == '') {
        window.alert('Please enter an album');
        return;
       }
       albumService.searchText(searchElement.value)
               .then(albums=>{
                clicked = true;
                 ctx.render(searchTemplate(searchHandler, albums, isLoged, clicked));
               });
    }

    ctx.render(searchTemplate(searchHandler, [], isLoged, clicked));
}