
//  inizializzo variabili
document.getElementById('start').addEventListener('click',play);


// creo la funzione che gestisce il gioco
function play(){

    const NUMERO_BOMBE = 16;

    console.log('Avvio del gioco');

    const gioco = document.getElementById('grid');

    // resetto il campo di gioco al click
    const gridElement = document.getElementById('grid');
    gridElement.innerHTML = "";


    const difficolta = document.getElementById('selector-difficolta').value;

    let numeroCelle;
    let celleRiga;
    const tentativi = [];

    switch(difficolta){
        case "0":
            numeroCelle = 100;
            break;
        case "1":
            numeroCelle = 81;
            break;
        case "2":
            numeroCelle = 49;
            break;
    }

    generaGrid(numeroCelle);

    const bomb = generaBombe(NUMERO_BOMBE, numeroCelle);
    console.log(bomb);


    function generaGrid(numeroCelle){
        celleRiga = Math.sqrt(numeroCelle);

        for(let i=1; i<= numeroCelle; i++){
            
            const nodo = document.createElement('div');
            nodo.classList.add('square');

            const dimensione =  `calc(100% / ${celleRiga})`;
            nodo.style.width = dimensione;
            nodo.style.height = dimensione;

            nodo.innerText = i;

            nodo.addEventListener('click', toggleClick);

            gioco.appendChild(nodo);

        }
        return true;
    }

    function toggleClick(){
        this.classList.add('clicked');
        this.removeEventListener('click',toggleClick);

        const cell = parseInt(this.innerText);

        if(bomb.includes(cell)){
            terminaGioco();
        }else{
            tentativi.push(cell);
            console.log(tentativi)
        }

    }   


    function terminaGioco(){
        const square = document.getElementsByClassName('square');

        for(let i=0; i<square.length; i++){
            if(bomb.includes(parseInt(square[i].innerText))){
                square[i].classList.add('bomb');
            }
            
            for(let j=0; j<= tentativi.length; j++){
              console.log("tentativi: " + tentativi.length);
             break;
            }
        }
    }


    // funzione che generi 16 celle contenenti una bomba
    function generaBombe(numero_bombe, numeroCelle){

        const bombeGenerate = [];

        while(bombeGenerate.length < numero_bombe){
            const bomba = getRandomNumber(1, numeroCelle);
            if(!bombeGenerate.includes(bomba)){
                bombeGenerate.push(bomba);
            }
        }
        return bombeGenerate;
    }

}

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}