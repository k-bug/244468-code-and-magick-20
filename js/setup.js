'use strict';

var FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAME = ['да Марья', 'Верон','Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)',
  'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
var setupSimilarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content
  .querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();

var generatePlayers = function () {
  var players = [];
  for (var i = 0; i < 4; i++) {
    players[i] = {
      name: FIRST_NAME[Math.floor(Math.random() * FIRST_NAME.length)] + ' '
        + LAST_NAME[Math.floor(Math.random() * LAST_NAME.length)],
      coatColor: COAT_COLORS[Math.floor(Math.random() * COAT_COLORS.length)],
      eyesColor: EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)]
    }
  }

  return players;
}

var createWizard = function (wizard) {
  var playersWizard = similarWizardTemplate.cloneNode(true);
  playersWizard.querySelector('.setup-similar-label').textContent = wizard.name;
  playersWizard.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  playersWizard.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return playersWizard;
}

for (var i = 0; i < 4; i++) {
  fragment.appendChild(createWizard(generatePlayers()[i]));
}

setupSimilarList.appendChild(fragment);

userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
