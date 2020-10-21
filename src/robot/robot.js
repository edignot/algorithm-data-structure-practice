// Problem: The robot moves on an plane, and its movements are described by a command string consisting of one or more of the following letters.
// - G instructs the robot to move forward one step
// - L instructs the robot to turn left
// - R instructs the robot to turn right
// The robot cannot go backwards. After running all of the movement commands, check if robot returns to the starting location.
// Time complexity: O(n)

function checkRobotLocation(str) {
    const operation = str.split("");
    let x = 0;
    let y = 0;
    let directions = ["N", "E", "S", "W"];
    let direction = directions[0];

    operation.forEach((task) => {
        if (task === "G") {
            direction === "N" && (y += 1);
            direction === "S" && (y -= 1);
            direction === "E" && (x += 1);
            direction === "W" && (x -= 1);
        } else if (task === "R") {
            let i = directions.indexOf(direction);
            directions.length <= i + 1
                ? (direction = directions[0])
                : (direction = directions[i + 1]);
        } else if (task === "L") {
            let i = directions.indexOf(direction);
            i > 0
                ? (direction = directions[i - 1])
                : (direction = directions[directions.length - 1]);
        }
    });
    return x === 0 && y === 0 ? true : false;
}

export default checkRobotLocation;
