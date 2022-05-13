let option = document.getElementsByClassName('option-img');
let resultConatiner = document.getElementById('show-result');
const treeOptions = ['rock', 'paper', 'sisor'];
let player1

console.log(resultConatiner);

for (let i = 0; i < option.length; i++) {
    option[i].addEventListener('click', ()=>{
        player1 = option[i].alt
        let machine = MachineSelectOption();
        CompareOptions(player1, machine);
        ShowResult();
    })
    
}
const ShowResult = ()=>{
    resultConatiner.style.display = 'inline-block'
}

const MachineSelectOption = ()=>{
    let numberOption = Math.floor(Math.random()*(4-1)+1)
    return treeOptions[numberOption-1];
}

const CompareOptions = (p1, machine)=>{
    console.log(p1 + ' ' +machine);
    if(p1 == 'rock' && machine == "sisor"|| 
    p1 == 'paper' && machine == "rock"||
    p1 == 'sisor' && machine == "paper"
    ){
        CreateResultPanel(p1, machine, 'Human Player is Winner');
    }else if(machine == 'rock' && p1 == "sisor"|| 
    machine == 'paper' && p1 == "rock"||
    machine == 'sisor' && p1 == "paper"){
        CreateResultPanel(p1, machine, 'Machine Player is Winner');
    }
    else{
        CreateResultPanel(p1, machine, 'It is a Tie');
    }
}

const CreateResultPanel = (optionPlayerOne, optionPlayerTwo ,textwinner)=>{
    let newGame = document.createElement('input')
    newGame.type = 'button';
    newGame.value = 'New Game';
    newGame.id = 'newGame';
    newGame.className = 'btn-newGame btn';
    newGame.onclick = ()=>{
        resultConatiner.style.display = 'none';
        resultConatiner.removeChild(result);
        resultConatiner.removeChild(message);
        };
    let textH3 = document.createElement('h3');
    textH3.innerHTML = textwinner
    let message = document.createElement('div');
    message.className = 'message';
    message.appendChild(textH3);
    message.appendChild(newGame);
    let human = document.createElement('div');
    human.className = 'container-option human'
    human.appendChild(ImageElement(optionPlayerOne, optionPlayerOne));
    human.appendChild(TextElement('Human Player'));
    let machine = document.createElement('div');
    machine.className = 'container-option pc';
    machine.appendChild(ImageElement(optionPlayerTwo, optionPlayerTwo));
    machine.appendChild(TextElement('Machine Player'))
    let result = document.createElement('div');
    result.className = 'result';
    result.appendChild(human);
    result.appendChild(machine);
    resultConatiner.appendChild(result);
    resultConatiner.appendChild(message)
}

const ImageElement = (dir, alt)=>{
    let image = document.createElement('img');
        image.className = 'img-result';
        image.src = `./img/${dir}.png`;
        image.alt = `${alt}`;    
    return image;
}
const TextElement = (textContent)=>{
    let text = document.createElement('p');
        text.innerText = `${textContent}`;
        return text
}