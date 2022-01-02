var affirmationSelect = document.getElementById('affirmations');
var mantraSelect = document.getElementById('mantras');
var receiveMsgButton = document.getElementById('receive-btn');
var icon = document.getElementById('meditate-icon');
var messageText = document.getElementById('msg');
var loader = document.getElementById('loading');
var background = document.querySelector('body');
var affirmBackground = document.querySelector('.background-affirm');
var mantraBackground = document.querySelector('.background-mantra');
var clearMsgButton = document.getElementById('clear-btn');
var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices."
];
var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather."
];
var shownAffirmations = [];
var shownMantras = [];

receiveMsgButton.addEventListener('click', function() {
  checkSelection();
  checkArrays();
  hideIcon();
  displayLoading();
  getMessage();
  changeBackground();
  displayMessage();
});

clearMsgButton.addEventListener('click', clearMessageBox);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function checkSelection() {
  if (!affirmationSelect.checked && !mantraSelect.checked) {
    window.alert("Please select a message type.");
  }
};

function checkArrays() {
  if (affirmationSelect.checked && !affirmations.length) {
    alertEndOfList();
    resetAffirmations();
  }
  if (mantraSelect.checked && !mantras.length) {
    alertEndOfList();
    resetMantras();
  }
};

function hideIcon() {
  if (affirmationSelect.checked || mantraSelect.checked) {
    icon.classList.add('hidden');
  }
};

function getMessage() {
  if (affirmationSelect.checked && affirmations.length) {
    var index = getRandomIndex(affirmations);
    currentMessage = affirmations[index];
    markShown(affirmations);
  }
  if (mantraSelect.checked && mantras.length) {
    var index = getRandomIndex(mantras);
    currentMessage = mantras[index];
    markShown(mantras);
  }
};

function markShown(array) {
  for (var i = 0; i < array.length; i++) {
    if (array === affirmations && array[i] === currentMessage) {
      shownAffirmations.push(currentMessage);
      affirmations.splice(i, 1);
    }
    if (array === mantras && array[i] === currentMessage) {
      shownMantras.push(currentMessage);
      mantras.splice(i, 1);
    }
  }
};

function displayMessage() {
  event.preventDefault();
  messageText.innerText = currentMessage;
  if (affirmationSelect.checked || mantraSelect.checked) {
    unhideMessage();
    unhideClearMsgButton();
  }
  if (!messageText.classList.contains('hidden') && affirmationSelect.checked || mantraSelect.checked) {
    hideMessage();
    unhideMessage();
  }
};

function hideMessage() {
  messageText.classList.add('hidden')
};

function unhideMessage() {
  setTimeout(function() {
    messageText.classList.remove('hidden');
  }, 2000);
};

function resetAffirmations() {
  affirmations = shownAffirmations.slice();
  shownAffirmations = [];
};

function resetMantras() {
  mantras = shownMantras.slice();
  shownMantras = [];
};

function unhideClearMsgButton() {
  setTimeout(function() {
    clearMsgButton.classList.remove('hidden');
  }, 2000);
};

function alertEndOfList() {
  if (affirmationSelect.checked) {
    window.alert("You've received all of the affirmations. You will now begin seeing repeats.");
  }
  if (mantraSelect.checked) {
    window.alert("You've received all of the mantras. You will now begin seeing repeats.");
  }
};

function displayLoading() {
  if (affirmationSelect.checked || mantraSelect.checked) {
    loader.classList.remove('hidden');
    setTimeout(function() {
      loader.classList.add('hidden');
    }, 2000);
  }
};

function changeBackground() {
  if (affirmationSelect.checked && affirmations.length) {
    mantraBackground.style.opacity = '0';
    affirmBackground.style.opacity = '1';
  }
  if (mantraSelect.checked && mantras.length) {
    mantraBackground.style.opacity = '1';
  }
};

function clearMessageBox() {
  messageText.classList.add('hidden');
  icon.classList.remove('hidden');
  clearMsgButton.classList.add('hidden');
};
