const container = document.querySelector("#container");
const sketchboard = document.querySelector(".sketchboard");

let colorChoice;

function changeColorChoice(colorBtn){
    colorChoice = colorBtn;
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

let color = random_rgba();

function clearGrid(container){
   container.innerHTML = ""
}



function createGrid(){
    clearGrid(container)
    
    let gridbool = true;
    let gridSize;
    loop:
    while(true){
        gridSize = Number(prompt("Give a number between 1-100", "16"));
        if(gridSize>1 & gridSize<100){
            for (let i = 0; i<=gridSize-1; i++){
                for(let j=0; j<=gridSize-1; j++){
                    const content = document.createElement("div");
                    let contentSize = 600 / gridSize;
                    content.classList.add("content");
                    container.appendChild(content);
        
                    content.style.width=`${contentSize}px`;
                    content.style.height=`${contentSize}px`;
            
            content.addEventListener("mouseover", (e)=> {
                if(colorChoice=="bw"){
                    e.target.style.backgroundColor=`black`;
                } else{
                e.target.style.backgroundColor=`${random_rgba()}`;
                }
            })
                
                
                }
            }
            gridbool=false;
            break loop;  
        }else{
            alert("Enter a valid number!");
        }
    }

    

}


