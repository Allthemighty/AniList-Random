// ==UserScript==
// @name         AniList Random Button
// @namespace    https://github.com/Allthemighty/AniList-Random
// @updateURL    https://github.com/Allthemighty/AniList-Random/raw/master/randomButton.user.js
// @version      1.0
// @description  Get a random button on your Anilist lists. To quickly get a random anime or manga. *Note, select the desired category, otherwise it will select from all.
// @author       Allthemighty
// @match        https://anilist.co/user/*/animelist
// @match        https://anilist.co/user/*/mangalist

// ==/UserScript==

(function() {
    window.onload = function(){
        var base_node = document.getElementsByClassName("section-name")[0];
        var r_button = document.createElement("button");
        r_button.innerHTML = "Surprise me";
        r_button.style.marginLeft = "25px";
        r_button.style.marginBottom = "10px";
        r_button.style.borderRadius = "6px";
        r_button.style.textDecoration = "none";
        r_button.style.cursor = "pointer";
        r_button.style.border = "none";
        r_button.style.fontWeight = "bold";
        r_button.style.backgroundColor = "#FFFFFF";
        r_button.style.padding = "2px";
        r_button.onclick = function() {
            var items = document.getElementsByClassName("entry row");
            var r = items[Math.floor(Math.random() * items.length)];
            window.open(r.childNodes[2].firstChild.href)
        }
        base_node.parentNode.insertBefore(r_button, base_node.nextSibling);
};
})();

