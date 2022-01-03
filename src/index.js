console.log("Script Launched");
let detailsImage = document.querySelector(".details-images");
let anchors = document.querySelectorAll(".thumbnails-anchor");
let detailsTitle = document.querySelector(".details-title");
for(let i = 0;i < anchors.length; i++)
{
    anchors[i].addEventListener("click", function(event)
    {
event.preventDefault();
console.log(anchors[i].getAttribute("href"));
setDetails(anchors[i]);
    })
}
function setDetails(anchor)
{
    console.log("anchor element was presed", anchor);
    let hrefValue = anchor.getAttribute("href");
    detailsImage.setAttribute("src", hrefValue);
    
    let thumbnailsTitleSelector = `[href="${hrefValue}"] .thumbnails-title`;
    let thumbnailsTitleEl = document.querySelector(thumbnailsTitleSelector);
    detailsTitle.textContent = `${thumbnailsTitleEl.textContent}: ${anchor.getAttribute("data-details-title")}`;

}