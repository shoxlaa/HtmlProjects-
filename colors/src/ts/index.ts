import $ from "jquery";
import Cookies from "js-cookie";

$(function f() {
    let routes: Map<string, () => void> = new Map<string, () => void>();
    let $boxes = $("#cont-colors")
    let $colorName = $("#color-name");
    let $selectedType = $("#select");
    let $code = $("#code");
    let $setName = $("#button");

    const colorValidation: RegExp = /[0-9]/g;
    const HexValidation : RegExp = /^#?([a-f\d]{3,4}|[a-f\d]{6}|[a-f\d]{8})$/g;
    const RgbValidation  = new RegExp(/(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/);
    const RGBAValidation = new RegExp(/(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|0?\.\d|1(\.0)?)/);


    routes.set("/HtmlProjects-/colors/pages/index.html", () => {
        $setName.on("click", (e) => {
            let $newDiv = $(`<div class="box"> <div class="sub-box">
            <div class="color-name">  ${$colorName.val()} </div>
            <div class="code-type">${$selectedType.val()}</div>
            <div class="code"> ${$code.val()}</div>  </div></div>`);
            if ($selectedType.val().toString() === "RGB" && RgbValidation.test($code.val() as string )) {
                $newDiv.css("background", `rgb(${$code.val()})`)

            } else if ($selectedType.val().toString() === "RGBA"&& RGBAValidation.test($code.val() as string )) {
                $newDiv.css("background", `rgba(${$code.val()})`)

            } else if ($selectedType.val().toString() === "Hex" && HexValidation.test($code.val() as string )) {
                $newDiv.css("background", `${$code.val()}`)
            }
            $boxes.append($newDiv)

        });
    });


    let result = routes.get(window.location.pathname);

    if (result !== undefined) {
        result();
    }
});

