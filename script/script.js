const actionContainer = document.querySelector('#action-container-primary');

const secActionContainer = document.querySelector(
  '#action-container-secondary'
);

/* Main section between header och footer */

const mainSection = document.querySelector('main');

/* Fields with smaller text */

const actionParagraph = actionContainer.querySelector('p');
actionParagraph.classList.add('positionAbsolute');

/* Fields with larger text */

const actionHeading = document.createElement('h2');

const uselessMainHeading = document.querySelector('h1');

/* Logotype */

const wolfsHead = document.querySelector('#wolfsHead');

const wolfsEyes = wolfsHead.querySelector('#wolfsEyes');


const uselessResources = {
  images: {
    prettyWolf: './images/Crimson-Tribal-Wolf.svg',
    clawRend: './images/vector_claws.svg',
  },
  soundEffects: {
    howl: ['./sound_effects/wolf-howl-6310.mp3', 'audio/mpeg'],
    strike: ['./sound_effects/punch-2-123106.mp3', 'audio/mpeg'],
  },
};

/* uselessCounter iterates through what happebs during "PART I". */

let uselessCounter = 0;

/* Not pretty. This is a huge If-statement. There is probably a better solution out there */

actionContainer.addEventListener('click', () => {
  /* |--- --- PART I: click events --- ---> */

  if (uselessCounter === 0) {
    actionParagraph.textContent = 'Well?';
    /* --- --- --- --- --- --- --- --- --- --- --- */
  } else if (uselessCounter === 1) {
    actionParagraph.textContent = 'Well???';
    /* --- --- --- --- --- --- --- --- --- --- --- */
  } else if (uselessCounter === 2) {
    actionHeading.textContent = 'WELL!???';
    actionContainer.replaceChild(actionHeading, actionParagraph);
    actionHeading.classList.add('positionAbsolute');
    /* --- --- --- --- --- --- --- --- --- --- --- */
  } else if (uselessCounter === 3) {
    actionHeading.classList.toggle('hidden');
    wolfsHead.classList.toggle('hidden');
    /* --- --- --- --- --- --- --- --- --- --- --- */
  } else if (uselessCounter === 4) {
    wolfsEyes.classList.add('turnDemonRed');
    /* --- --- --- --- --- --- --- --- --- --- --- */
  } else if (uselessCounter === 5) {
    wolfsHead.classList.add('exitStageLeft');
    wolfsHead.classList.toggle('hidden');

    setTimeout(() => {
      actionContainer.replaceChild(actionParagraph, actionHeading);
    }, 1000);

    actionParagraph.textContent = 'Here again!';
  } else if (uselessCounter === 6) {
    /* Removes actioContainer from screen */

    actionContainer.classList.add('offScreen');
    actionContainer.classList.add('hidden');

    /* Creates an image element to hold an svg */

    const prettyWolfImg = document.createElement('img');
    prettyWolfImg.src = uselessResources.images.prettyWolf;
    prettyWolfImg.alt = "Wolf's head drawn in tribal style";
    prettyWolfImg.classList.add('image');

    secActionContainer.appendChild(prettyWolfImg);

    /* Moves in second actionContainer */

    secActionContainer.classList.toggle('onScreen');

    /* Creates and play a sound element */

    const prettyWolfHowl = document.createElement('audio');
    prettyWolfHowl.src = uselessResources.soundEffects.howl[0];
    prettyWolfHowl.type = uselessResources.soundEffects.howl[1];

    prettyWolfHowl.play();

    /* Changes text in the H1 */

    uselessMainHeading.textContent = 'AAAOOOOOOOO....!';

    /**/

    /* <--- --- PART I: END--- ---| */

    /* --- --- --- --- --- --- --- --- --- --- --- */

    /* |--- --- PART II: Mouse over-events --- ---> */

    /* Temporary button that concludes "PART I" */

    secActionContainer.addEventListener('click', () => {
      uselessMainHeading.classList.remove('uselessHeading');
      uselessMainHeading.classList.add('turnDemonRed');

      prettyWolfImg.classList.add('exitStageLeft', 'hidden');
      secActionContainer.classList.remove('offScreen', 'onScreen');
      secActionContainer.classList.add('exitStageLeft', 'hidden');

      /* Adds a delay */

      setTimeout(() => {
        uselessMainHeading.textContent = "Why don't you... move around?";
      }, 2000);

      /* This loops out eight div:s with claw marks  */

      for (let i = 0; i < 8; i++) {
      
        const clawDiv = document.createElement('div');
        clawDiv.classList.add('positionAbsolute', 'clawContainer');

        /* Images */
        const clawMarksImg = document.createElement('img');
        clawMarksImg.src = uselessResources.images.clawRend;
        clawMarksImg.alt = 'Stylised image of claw rending marks';
        clawMarksImg.classList.add('image', 'opacity');

        /* Image rotation */
        const rotation = Math.floor(Math.random() * 360);
        clawMarksImg.style.transform = `rotate(${rotation}deg)`;

        clawDiv.appendChild(clawMarksImg);

        mainSection.appendChild(clawDiv);
      }

      /* --- --- --- --- --- --- --- --- --- --- --- */

      /* Create a node with all ClawDiv:s so they can be placed randomly on screen. (Thanks, Google) */

      const clawMarks = document.querySelectorAll('.clawContainer');

      for (let i = 0; i < clawMarks.length; i++) {
        const clawMark = clawMarks[i];

        /* Mouse-over-event to activate claw marks */

        /* Randomised positioning in "main" */

        clawMark.style.transform = 'translate(-50%, -50%)';
        clawMark.style.top = `${Math.floor(Math.random() * 100)}%`;
        clawMark.style.left = `${Math.floor(Math.random() * 100)}%`;

        /* Image becomes visible and a sound is played. */

        clawMark.addEventListener('mouseover', () => {
          const clawMarksImg = clawMark.querySelector('img');
          clawMarksImg.classList.remove('opacity');
          const clawStrikeSound = document.createElement('audio');
          clawStrikeSound.src = uselessResources.soundEffects.strike[0];
          clawStrikeSound.type = uselessResources.soundEffects.strike[1];
          clawStrikeSound.play();
        });
        setTimeout(() => {
          mainSection.classList.add('bgTurnDemonRed');
        }, 6000);

        setTimeout(() => {
          window.location.reload();
        }, 9000);
      }

      /* --- --- --- --- --- --- --- --- --- --- --- */
    });

    /* <--- --- PART II: END--- ---| */
  }
  /* --- --- --- --- --- --- --- --- --- --- --- */

  uselessCounter++;
});
