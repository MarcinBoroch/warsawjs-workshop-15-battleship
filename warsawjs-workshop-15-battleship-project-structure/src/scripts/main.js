import GameField from './GameField';
import GameState from './GameState';


const main = () => {
    const players = ['user', 'computer'];
    const app = document.getElementById('app');
    GameState.placeShips(players[0]);
    GameState.placeShips(players[1]);
    app.append(GameField(players[0]));
    app.append(GameField(players[1]));
    GameState.startGame();

};
main();