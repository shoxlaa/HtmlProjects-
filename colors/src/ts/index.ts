import $ from "jquery";
import Cookies from "js-cookie";

$(function f() {

    let routes: Map<string, () => void> = new Map<string, () => void>();
    let $boxes = $("#cont-colors")
    let $colorName = $("#color-name");
    let $selectedType = $("#select");
    let $code = $("#code");
    let $setName = $("#button");

    let $saveButton = $("#save-button");


    let val = savedColors($boxes);
    let $savedColor: string = val.Color;
    let $savedType: string = val.Type;
    let $savedName: string = val.Name;

    const HexValidation = new RegExp( /^#?([a-f\d]{3,4}|[a-f\d]{6}|[a-f\d]{8})$/g);
    const RgbValidation = new RegExp(/(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/);
    const RGBAValidation = new RegExp(/(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|0?\.\d|1(\.0)?)/);

    routes.set("/HtmlProjects-/colors/pages/index.html", () => {
        $setName.on("click", (e) => {

            let $newDiv = $(`<div class="box"> <div class="sub-box">
            <div class="color-name">  ${$colorName.val()} </div>
            <div class="code-type">${$selectedType.val()}</div>
            <div class="code"> ${$code.val()}</div>  </div></div>`);

            if ($selectedType.val().toString() === "RGB" && RgbValidation.test($code.val() as string)) {
                $newDiv.css("background", `rgb(${$code.val()})`)
                $savedColor += (`rgb(${$code.val()}) `);

            } else if ($selectedType.val().toString() === "RGBA" && RGBAValidation.test($code.val() as string)) {
                $newDiv.css("background", `rgba(${$code.val()})`)
                $savedColor += (`rgba(${$code.val()}) `);

            } else if ($selectedType.val().toString() === "Hex" && HexValidation.test($code.val() as string)) {
                $newDiv.css("background", `${$code.val()}`)
                $savedColor += (`(${$code.val()}) `);
            } else {
                alert("wrong data");
                return;
            }
            $savedName += (`${$colorName.val()} `);
            $savedType += (`${$selectedType.val()} `);
            $boxes.append($newDiv)

        });

        $saveButton.on("click", (e) => {
            localStorage.setItem("color", `${$savedColor}`);
            console.log($savedColor);
            localStorage.setItem("name", `${$savedName}`);
            console.log($savedName);
            localStorage.setItem("type", `${$savedType}`);
            console.log($savedType);
        })

    });


    let result = routes.get(window.location.pathname);

    if (result !== undefined) {
        result();
    }
});

function savedColors(box: JQuery<HTMLElement>) {
    if (localStorage.getItem("color")===null)
    {
        localStorage.setItem("color", "rgb(1,1,1) ");
        localStorage.setItem("name", "black ");
        localStorage.setItem("type", "RGB ");
    }

  let savedColor = localStorage.getItem("color");
  let savedName = localStorage.getItem("name");
  let savedType = localStorage.getItem("type");

    let name = localStorage.getItem("name").split(" ");
    let type = localStorage.getItem("type").split(" ");
    let code = localStorage.getItem("color").split(" ");

    for (let i = 0; i < name.length-1; i++) {

        let $newDiv = $(`<div class="box"> <div class="sub-box">
            <div class="color-name">  ${name[i]} </div>
            <div class="code-type">${type[i]}</div>
            <div class="code"> ${code[i]}</div> <style>  </style> </div></div>`);
        $newDiv.css("background", `${code[i]}`);
        box.append($newDiv);
    }
    return new SaveItems(savedName, savedType, savedColor);

}

class SaveItems {

     Name:string;
     Type:string;
     Color:string;
     constructor(name:string , type:string, color:string) {
         this.Name=name;
         this.Type=type;
         this.Color=color;
     }
}