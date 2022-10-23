import $ from "jquery";

export interface Rating {
    Source: string;
    Value: string;
}

export interface RootObject {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: Rating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}


$(function () {

    let routes: Map<string, () => void> = new Map<string, () => void>();
    let $body = $("body");
    routes.set("/HtmlProjects-/Ajax/index.html", () => {
        const apiKey: string = "31ed7c20";

        let $title = $("#tytle");
        let $typeFilm = $("#typeFilm");
        let $year = $("#year");
        let $filmData = $("#filmData");
        let $getFilm = $("#getFilm");
        $getFilm.on("click", (e) => {
            let title = $title.val();

            // TODO: Add validation for lat lon

            $.get(`http://www.omdbapi.com/?apikey=${apiKey}&/?t=${title}&`).done((data) => {
                let response: RootObject = data;

                $filmData.empty();
                $filmData.append(`<div>Title ${response.Title} Year ${response.Year} </div>`);
            });
        });
        let result = routes.get(window.location.pathname);

        if (result !== undefined) {
            result();
        }
    });
});