document.addEventListener("DOMContentLoaded", function() {
    let memesContainer = document.querySelector(".memes");
    let theDeleteButton = document.querySelector(".delete");

    memeForm = document.querySelector("#memeForm");
    memeForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let imageURL = document.getElementById("meme_upload").value;
        let lineOne = document.getElementById("line_one").value;
        let lineTwo = document.getElementById("line_two").value;
        
        let newMeme = document.createElement("div");
        newMeme.classList.add("meme");

        let lineOneDiv = document.createElement("div");
        lineOneDiv.innerHTML = lineOne;
        lineOneDiv.classList.add("line-one");

        let newImage = document.createElement("img");
        newImage.src = imageURL;

        let lineTwoDiv = document.createElement("div");
        lineTwoDiv.innerHTML = lineTwo;
        lineTwoDiv.classList.add("line-two");

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete")
        deleteButton.innerText = "X"
        
        memesContainer.append(newMeme);
        newMeme.append(lineOneDiv);
        newMeme.append(newImage);
        newMeme.append(lineTwoDiv);
        newMeme.append(deleteButton);
        
        memeForm.reset();
    })

    memesContainer.addEventListener("click", function(event) {
        const targetTagToLowerCase = event.target.tagName.toLowerCase();
        if(targetTagToLowerCase === "button") {
            event.target.parentNode.remove();
        }
    })
});