// inizializzo variabili
const start = document.getElementById('start');
const gridElement = document.getElementById('grid');



// al click sul pulsante play mostro a video la tabella a seconda della difficoltà inserita
 start.addEventListener('click', function(){

    const difficolta = document.getElementById('selector-difficolta').value;
   
    // resetto la griglia al click del pulsante
    gridElement.innerHTML = "";

    if(difficolta == 0){

        for(let i=1; i<=100; i++){

            const node = document.createElement('div');
            node.classList.add('square-easy');
            node.innerHTML += i;
            node.addEventListener('click', function(){
        
                console.log(this);
                this.classList.add('clicked');
            })
        
            gridElement.appendChild(node);
        }
     
    } 
    else if(difficolta==1){

        for(let i=1; i<=81; i++){

            const node = document.createElement('div');
            node.classList.add('square-hard');
            node.innerHTML += i;
            node.addEventListener('click', function(){
        
                console.log(this);
                this.classList.add('clicked');
            })
        
            gridElement.appendChild(node);
        }
      
    }
    else if (difficolta == 2){

        for(let i=1; i<=49; i++){

            const node = document.createElement('div');
            node.classList.add('square-crazy');
            node.innerHTML += i;
            node.addEventListener('click', function(){
        
                console.log(this);
                this.classList.add('clicked');
            })
        
            gridElement.appendChild(node);
        }
      
    }


 })

