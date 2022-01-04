console.log("Script Launched");
let detailsImage = document.querySelector('.details-image');
let detailsTitle = document.querySelector('.details-title');
let mainContentEl = document.querySelector('.main-content');

let anchors = document.querySelectorAll('.thumbnails-anchor');
for(let i = 0;i < anchors.length; i++)
{
    anchors[i].addEventListener("click", function(event)
    {
event.preventDefault();
setDetails();
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

function showDetails()
{
    mainContentEl.classList.remove("hidden");
}

function hideDetails()
{
    mainContentEl.classList.add("hidden");
}