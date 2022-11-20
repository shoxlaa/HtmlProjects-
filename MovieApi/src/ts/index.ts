import $ from "jquery";
import {Root} from "./root";
import {Root2} from "./root2";

$(function f() {
    let routes: Map<string, () => void> = new Map<string, () => void>();

    routes.set("/HtmlProjects-/MovieApi/pages/index.html", () => {
//ApiRequests prop
        const apiKey: string = "31ed7c20";
        let response: Root;
        let response2: Root2;
        // newItems values
        let $document = $(document);


        let $poster = $(".image");
        let $type = $(".movie-type");
        let $title = $(".movie-name");
        let $year = $(".year");
        //let $details = $(".button-details");

        let $movieList = $("#movie-list");

        //modalContent
        let $openModel = $(".button-details");
        let $modal = $("#myModal");
        let $span = $(".close");

        let $l = $(".l");

        let $d = $("#d");
        let $search = $("#search");
        let $pageBack = $("#back");
        let $pageNumber = $("#page-number");
        let $pageButton = $("#page-button");
        let $pageNext = $("#next");
        let $movieTitle = $("#movie-title");
        let pageNum = 1;
        // $document.on('keypress', (e: KeyboardEvent) => {
        //     console.log(e.key);
        //     if (e.key === "Enter") {
        //         $search.click();
        //     }
        // });

        $movieList.on("click", (e) => {
            let $target = $(e.target);
            let buttonDetails = $target.attr("button-details");
            if ($target.hasClass("button-details")) {
                {
                    let b = $target.prev().prev();
                    console.log(b.text());
                    let modelView = $(".sub-model-content");
                    $modal.css("display", "block");

                    $.get(`http://www.omdbapi.com/?i=tt3896198&apikey=31ed7c20&t=${b.text()}`).done((data) => {
                        response2 = data;
                        addModelSource(modelView, response2);
                    });

                }
            }


        })
        $openModel.on("click", (e) => {
            $modal.css("display", "block");
        });

        $span.on("click", (e) => {
            $modal.css("display", "none");
        })

        $search.on("click", (e) => {
            let $movieTypeSelector = $("#movie-type-selector").val().toString();
            $.get(`http://www.omdbapi.com/?i=tt3896198&apikey=31ed7c20&s=${$movieTitle.val()}&type=${$movieTypeSelector}`).done((data) => {
                response = data;
                addItems($movieList, response);
            });
        });
        $pageButton.on("click", (e) => {
            let $movieTypeSelector = $("#movie-type-selector").val().toString();
            $.get(`http://www.omdbapi.com/?i=tt3896198&apikey=31ed7c20&s=${$movieTitle.val()}&page=${$pageNumber.val()}&type=${$movieTypeSelector}`).done((data) => {
                response = data;
                addItems($movieList, response);
            });
            pageNum = parseInt($pageNumber.val().toString());
            document.getElementById("numeration").textContent = pageNum.toString();
        })

        $pageNext.on("click", (e) => {
            let $movieTypeSelector = $("#movie-type-selector").val().toString();
            pageNum += 1;
            $.get(`http://www.omdbapi.com/?i=tt3896198&apikey=31ed7c20&s=${$movieTitle.val()}&page=${pageNum.toString()}&type=${$movieTypeSelector}`).done((data) => {
                response = data;
                addItems($movieList, response);
            });
        })
        $pageBack.on("click", (e) => {
            let $movieTypeSelector = $("#movie-type-selector").val().toString();
            pageNum -= 1;
            $.get(`http://www.omdbapi.com/?i=tt3896198&apikey=31ed7c20&s=${$movieTitle.val()}&page=${pageNum.toString()}&type=${$movieTypeSelector}`).done((data) => {
                response = data;
                addItems($movieList, response);

            });
        })

    });
    let result = routes.get(window.location.pathname);

    function addItems(buffer: JQuery<HTMLElement>, response: Root) {
        let movies = response.Search;
        buffer.empty()
        for (let i = 0; i < parseInt(response.totalResults); i++) {

            buffer.append(` <div class="box">
                     <div class="cont1">
                         <input  class="image" type="image" src=${movies[i].Poster.toString()}>
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

    function addModelSource(buffer: JQuery<HTMLElement>, response: Root2) {
        console.log(response);
        buffer.empty()
        buffer.append(`
            <div class="model-cont-image">
                <input type="image" class="details-poster" src="${response.Poster.toString()}">
               </div>
            <div class="model-cont-list">
                <div class="details-rel">${response.Released}</div>
                <div class="details-genr">${response.Genre}</div>
                <div class="details-country">${response.Country}</div>
                <div class="details-director">${response.Director}</div>
                <div class="details-writer">${response.Writer}</div>
                <div class="details-actor">${response.Actors}</div>
                <div class="details-title">${response.Title}</div>
                <div class="details-awards">${response.Awards}</div>
            </div>

`)
    }


    if (result !== undefined) {
        result();
    }
});