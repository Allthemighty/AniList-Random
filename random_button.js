// ==UserScript==
// @name         Random button AniList
// @namespace    http://anilist.co
// @version      1.0
// @description  Get a random button on your Anilist lists.
// @author       Allthemighty
// @match        https://anilist.co/user/*/animelist
// @match        https://anilist.co/user/*/mangalist
// @grant        none
// ==/UserScript==

(function() {
    setTimeout(function() {
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
    }, 2000);

})();
