import $ from "jquery";

export interface Root {
    Search: Search[]
    totalResults: string
    Response: string
}

export interface Search {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}

$(function f() {
    let routes: Map<string, () => void> = new Map<string, () => void>();
    routes.set("/HtmlProjects-/MovieApi/pages/index.html", () => {
//ApiRequests prop
        const apiKey: string = "31ed7c20";
        let response: Root;
        // newItems values

        let $poster = $(".image");
        let $type = $(".movie-type");
        let $title = $(".movie-name");
        let $year = $(".year");
        let $details = $(".button-details");

        let $movieList = $("#movie-list");
        let $movieTypeSelector =$("#movie-type-selector");


        let $d = $("#d");
        let $search = $("#search");
        let $pageBack = $("#back");
        let $pageNext = $("#next");
        $search.on("click", (e) => {
            let $movieTitle = $("#movie-title");

            $.get(`http://www.omdbapi.com/?i=tt3896198&apikey=31ed7c20&s=${$movieTitle.val()}&type${$movieTypeSelector}`).done((data) => {
                response = data;
                addItems($movieList,response);
            });

        });


    });
    let result = routes.get(window.location.pathname);

    function addItems(buffer: JQuery<HTMLElement>, response: Root) {
        let movies= response.Search;
        for (let i = 0; i < parseInt(response.totalResults); i++) {

            buffer.append(` <div class="box">
                     <div class="cont1">
                         <input  class="image" type="image" src=${movies[i].Poster}>
                     </div>
                     <div class="cont2">
                         <div class="movie-type">${movies[i].Type}</div>
                         <div class="movie-name">${movies[i].Title}</div>
                         <div class="year">${movies[i].Year}</div>
                         <input type="button" class="button-details" value="Details" >
                     </div>
                 </div>`)
        }
    }

    if (result !== undefined) {
        result();
    }
});