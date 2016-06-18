//var currentGridSize = 16;
var colors = ["#0074D9", "#7FDBFF", "#39CCCC", "#3D9970", "#2ECC40", "#DB6862", "#FFDC00", "#FF851B", "#FF4136", "#9FD814", "#9350D5"];
$(document).ready(function() {
    // generate initial 16x16 grid
    genGrid(16);

    // call resetGrid function when reset button is clicked
    $("#reset").click(function() { resetGrid(); });

    // change color depending on the button the user pressed
    $("#black").click(function() { changeColors("black"); });
    $("#green").click(function() { changeColors("green"); });
    $("#red").click(function() { changeColors("red"); });
    $("#random").click(function() { changeColors("random"); });
});

// generate grid
function genGrid(gridSize) {
    /* divide the container's width by the amount of cells to find out what width they should have.
    subtract 2 because of the space borders take. */
    var cellSize = $("#container").width() / gridSize - 2;
    for (var x = 0; x < gridSize; x++) {
        for (var y = 0; y < gridSize; y++) {
            $("#container").append("<div class='cell'></div>");
        }
    }
    // set squares/cells width and height with the value calculated before
    $(".cell").css("width", cellSize);
    $(".cell").css("height", cellSize);
    // change cell background
    $(".cell").hover(function() {
        $(this).css("background-color", "#000");
    });
};

// clear grid function
function clear() {
    $(".cell").remove();
}

// reset grid
function resetGrid() {
    var gridSize = prompt("How many squares per side do you want? Max: 64");
    if (gridSize > 0 && gridSize <= 64) {
        clear();
        genGrid(gridSize);
        //currentGridSize = gridSize;
    } else {
        resetGrid()
    }

}
// colors
function changeColors(color) {
    if (color === "black") {
        $(".cell").hover(function() {
            $(this).css("background-color", "#000");
        });
    } else if (color === "green") {
        $(".cell").hover(function() {
            $(this).css("background-color", "#4fb443");
        });
    } else if (color == "red") {
        $(".cell").hover(function() {
            $(this).css("background-color", "#b8483c");
        });
    } else if (color == "random") {
        $(".cell").hover(function() {
            // generate new color everytime a cell is hovered
            var randomColor = colors[Math.floor(Math.random() * colors.length)];
            $(this).css("background-color", randomColor);
        });
    }
}
