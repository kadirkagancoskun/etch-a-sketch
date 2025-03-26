alert("bö")
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");

content.textContent="bööö";
for (let i = 0; i<=16; i++){
    for(let j=0; j<=16; j++){
    let content = document.createElement("div");
    content.classList.add("content");
    
    content.textContent="bööö";
    container.appendChild(content);
    }
}
