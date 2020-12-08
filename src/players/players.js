// Problem:
// 1) The game is played on a standard 10x10 board
// 2) Player 1 starts on position 0x0 (top left corner). Player 2 starts on position 9x9 (bottom right corner).
// 3) At each turn, a player may move up, down, left, or right on the board.
// These steps are held in an array and take the form 'u', 'd', 'l', and 'r' respectively.
// 4) If a player crosses a previous path of another player, including themselves, they are eliminated.
// 5) If a player lands on the same space as another player on the same turn, both players are eliminated and the match is declared a draw.
// 6) If a player moves off the board, into the vast cyber nothingness, they are eliminated.
// 7) If there is only one player left at the end of a turn, that player wins no matter if they have more moves or not.
// 8) If the match has ended and there is more than one player still active, the match is declared a draw.
// 9) If both players are eliminated on the same turn, the match is declared a draw.

const playGame = (player1, player2) => {
    let winner = "draw";
    let player1x = 0;
    let player1y = 0;
    let player2x = 9;
    let player2y = 9;
    const player1track = ["00"];
    const player2track = ["99"];

    for (let i = 0; i < player1.length; i++) {
        player1[i] === "u" && (player1y -= 1);
        player1[i] === "d" && (player1y += 1);
        player1[i] === "l" && (player1x -= 1);
        player1[i] === "r" && (player1x += 1);
        const player1currentLocation = `${player1x}${player1y}`;
        !player1track.includes(player1currentLocation)
            ? player1track.push(player1currentLocation)
            : (winner = "player2");
        if (player1x < 0 || player1x > 9 || player1y < 0 || player1y > 9) {
            winner = "player2";
            break;
        }

        player2[i] === "u" && (player2y -= 1);
        player2[i] === "d" && (player2y += 1);
        player2[i] === "l" && (player2x -= 1);
        player2[i] === "r" && (player2x += 1);
        const player2currentLocation = `${player2x}${player2y}`;
        if (!player2track.includes(player2currentLocation)) {
            player2track.push(player2currentLocation);
        } else if (winner === "player2") {
            winner = "draw";
            break;
        } else {
            winner = "player1";
            break;
        }

        if (player2x < 0 || player2x > 9 || player2y < 0 || player2y > 9) {
            winner = "player1";
            break;
        }

        if (player1x === player2x && player1y === player2y) {
            break;
        }
    }

    return winner;
};

export default playGame;
