// inizializzo variabili
const gridElement = document.getElementById('grid');
const start = document.getElementById('start');
const difficolta = document.getElementById('selector-difficolta').value;

// al click sul pulsante play mostro a video la tabella a seconda della difficoltà inserita
 start.addEventListener('click', function(){

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


 })

