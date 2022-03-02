import {Player} from '../src/js/scripts.js';


describe('Player', () => {

  test('should create a player object containing a roll, tempScore, totalScore, turn, and playerName', () => {
    let player = new Player("Z")
    expect(player.roll).toEqual(0);
    expect(player.tempScore).toEqual(0);
    expect(player.totalScore).toEqual(0);
    expect(player.turn).toEqual(0);
    expect(player.playerName).toEqual("Z");
  });

  test('should return a random number between 1 & 6', () => {
  let player = new Player("Z")
  expect(player.roll).toEqual(0);
  expect(player.roll).toBeLessThanOrEqual(6);
  })
});