$(document).ready(function() {
    // generate initial 16x16 grid
    genGrid(16);

    // call resetGrid function when reset button is clicked
    $("#reset").click(function(){resetGrid();});
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
        $(this).css("background-color", "#fff");
    });
};

// clear grid function
function clear() {
    $(".cell").remove();
}

// reset grid
function resetGrid() {
    var gridSize = prompt("How many squares per side do you want?");
    clear();
    genGrid(gridSize);
};
