var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}


function createListElement() {
    var li = document.createElement("li");
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className += 'delete-btn';
    deleteBtn.addEventListener("click", function () {
        li.parentNode.removeChild(li);
        // li.remove();
    })

    var done_check = document.createElement("input");
    done_check.type = "checkbox";
    done_check.className += "done-check";
    done_check.addEventListener("change", function () {
        li.classList.toggle("Completed");

        if (done_check.checked) {
            const goodJob = document.createElement('div');
            goodJob.className += 'good-job';
            goodJob.textContent = "Good Job!";
            document.body.appendChild(goodJob);

            const rect = done_check.getBoundingClientRect();
            goodJob.style.top = `${window.scrollY + rect.top - 30}px`;
            goodJob.style.left = `${rect.left}px`;

            setTimeout(() => {
                goodJob.remove()
            }, 2000);
        }
    });

    li.appendChild(document.createTextNode(input.value));
    li.prepend(done_check);
    li.appendChild(deleteBtn);
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if(inputLength() > 0) {
        createListElement();
    }
}
function addListAfterPress(event) {
    if(inputLength() > 0 && event.key === "Enter") {
        createListElement();
    }
}
button.addEventListener("click", addListAfterClick)

input.addEventListener("keydown", addListAfterPress)