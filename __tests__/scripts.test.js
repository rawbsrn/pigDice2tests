import {Player} from '../src/js/scripts.js';


describe('Player', () => {

  test('should create a player object containing a roll, tempScore, totalScore, turn, and playerName', () => {
    let player = new Player("Z");
    expect(player.roll).toEqual(0);
    expect(player.tempScore).toEqual(0);
    expect(player.totalScore).toEqual(0);
    expect(player.turn).toEqual(0);
    expect(player.playerName).toEqual("Z");
  });
});

  // describe('dieRoll')
  test('should return a random number between 1 & 6', () => {
    let player = new Player();
    player.dieRoll();
    expect(player.roll).toBeLessThanOrEqual(6);
  });

  test('should return a random number between 1 & 6', () => {
    let player = new Player();
    expect(player.dieRoll()).toBeLessThanOrEqual(6);
  });

  describe ('hold', () => {
  test('should take the tempScore and add it to the totalScore', () => {
    let player = new Player('Z');
    player.tempScore = 5;
    expect(player.hold()).toEqual(5);
  });
  });

describe ('winner', () => {
  test('should return 100 to alert winner', ()=> {
    let player = new Player('Z');
    player.totalScore = 100;
    expect(player.winner()).toEqual(100);
  })
});



//OG test that have passed

//hold:
// test('should take the tempScore and add it to the totalScore', () => {
//   let player = new Player('Z');
//   player.tempScore = 5;
//   player.hold();
//   expect(player.totalScore).toEqual(5);
// });
// })

//winner:
// test('should return 100 to alert winner', ()=> {
//   let player = new Player('Z');
//   player.totalScore = 100;
//   player.winner();
//   expect(player.totalScore).toEqual(100);
// })