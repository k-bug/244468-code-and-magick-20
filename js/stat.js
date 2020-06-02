'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var GAP = 20;
var MAX_BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

// var getPlayersColor = function (names) {
//   // var color = 'hsla(244, 100%, 50%, Math.random())';
//   var color = 'hsla(244, 100%, 50%, 1)';
//
//   for (var i = 0; i < names.length; i++) {
//     if (names[i] === 'Вы') {
//       color = 'rgba(255, 0, 0, 1)';
//     } else {
//       color = 'hsla(244, 100%, 50%, 1)';
//     }
//   }
//
//   return color;
// };

var renderResults = function (ctx, players, times) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';

  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, 10 + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, 30 + GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsla(244, 100%, 50%, 1)';
    }
    ctx.fillRect(CLOUD_X + GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP * 1.5, BAR_WIDTH, -(MAX_BAR_HEIGHT * times[i]) / maxTime);
  }
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');
  renderResults(ctx, players, times);
};
