console.log("my apps is linked");
// on load jquery
$(() => {
	//=================== stage 0 ===================
	const $container = $("<div>").addClass("container green");
	$("body").append($container);

	const $h1 = $("<h1>").text("How to become an architect");
	$container.append($h1);

	let $instruction = $("<p>").text("score 100 points to build your castle");
	$container.append($instruction);

	const $button = $("<a>")
		.addClass("btn")
		.text("Play Game")
		.attr("href", "#");
	$container.append($button);

	//=================== stage 1 ===================
	$button.on("click", () => {
		$container.hide();
		$container2.show();
	});

	const $container2 = $("<div>").addClass("container2 cyan");
	$("body").append($container2);
	$container2.hide();

	const $scoreBoard = $("<div>").addClass("scoreboard");
	$container2.append($scoreBoard);

	let score = 11;

	const $showScore = $("<h2>")
		.addClass("score")
		.text(`You have ${score} points`);
	$scoreBoard.append($showScore);

	const $instructionsContainer = $("<div>").addClass("instruction-container");
	$container2.append($instructionsContainer);

	const $instruction2 = $("<p>")
		.addClass("instructions")
		.text(`select the red color to earn 25 points`);
	$instructionsContainer.append($instruction2);

	const $squareContainer = $("<div>").addClass("square-container");
	$container2.append($squareContainer);

	// making our 4 boxes
	let grid4x4 = () => {
		for (let i = 1; i < 5; i++) {
			const $box = $("<div>").addClass("box color");
			$box.attr("id", i);
			$squareContainer.append($box);
		}
	};

	grid4x4();

	$("#1").on("click", () => {
		alert("you clicked red");
		alert("you earned 25 points");
	});
});
