let jsonUrl = "http://mixel.dk/kea/food8/wordpress/wp-json/wp/v2/steder";
let steder = [];

let display = document.querySelector("section");
let template = document.querySelector("template");

document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {
    let dataJson = await fetch(jsonUrl);
    steder = await dataJson.json();
    console.log(steder);

    visSteder();

}

        function visSteder()  {
            steder.forEach(sted => {
                let klon = template.cloneNode(true).content;

                klon.querySelector("[data-header]").textContent = sted.title.rendered;

                klon.querySelector("[data-image]").src = sted.acf.logo.url;

                klon.querySelector("[data-image]").alt = sted.title.rendered;

                //                klon.querySelector(".ret").setAttribute("data-id", hverRet.id);

                klon.querySelector("article").addEventListener("click", () => {
                    if (sted.acf)
                        location.href = "single.html?id=" + sted.id;
                });

                display.appendChild(klon);
            });
        }
