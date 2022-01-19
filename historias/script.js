const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }

const storyText = 'Estava 34 ºC lá fora, então :insertx: saiu para uma caminhada. Quando ele chegou :inserty:, :insertx: ficou horrorizado por alguns momentos, até que, :insertz:. Bob viu a coisa toda, porém não ficou surpreso — :insertx: pesava 300 quilos, e esse foi um dia quente.';

const insertX = ['Willy o duende', 'o paizão', 'Natal'];
const insertY = ['ao sopão', 'a Disneylândia', 'a Casa Branca',];
const insertZ = ['entrou em combustão espontânea', 'derreteu em uma poça na calçada', 'se transformou em uma lesma e rastejou para longe']

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':inserty:',yItem);
    newStory = newStory.replace(':insertz:',zItem);

    if(customName.value !== '') {
      const name = customName.value;
      newStory = newStory.replace('Bob',name);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
  }