function Assessment() {
	//creating assessment object
    this.asName = ""; 
    this.maxPoint = ""; 
	this.earnedPoint = "";
}
//making an overloaded constructor
function Assessment(asName, maxPoint, earnedPoint) {
	//creating assessment object
    this.asName = asName;
    this.maxPoint = maxPoint;
	this.earnedPoint = earnedPoint;
}
function createAssessments() {
	
	var labAssignment = new Assessment();
	labAssignment.asName = "Lab Assignment";
	labAssignment.maxPoint = 250
	labAssignment.earnedPoint = parseInt(document.getElementById("laPointsBox").value);
	
	var newAssignment = new Assessment("new", 300, 100); //using overloaded constructor.
	var json1 = JSON.stringify(newAssignment);
	alert(json1); //yayyyy
	alert(newAssignment.asName); //this works. leave here for now. showing use of constructor.

    var quiz = new Assessment();
    quiz.asName = "Quiz";
	quiz.maxPoint = 100;
	quiz.earnedPoint = parseInt(document.getElementById("qPointsBox").value);
	
	var exam = new Assessment();
	exam.asName = "Exam";
	exam.maxPoint = 200;
	exam.earnedPoint = parseInt(document.getElementById("exPointsBox").value);
	
	var project = new Assessment();
	project.asName = "Project";
	project.maxPoint = 100;
	project.earnedPoint = parseInt(document.getElementById("prPointsBox").value);
	
	var extraCredit = new Assessment();
	extraCredit.asName = "Extra Credit";
	extraCredit.maxPoint = 25;
	extraCredit.earnedPoint = parseInt(document.getElementById("ecPointsBox").value);
	
	var partcipation = new Assessment();
	partcipation.asName = "Partcipation";
	partcipation.maxPoint = 75;
	partcipation.earnedPoint = parseInt(document.getElementById("paPointsBox").value);
	
	var totalGrade = (((labAssignment.earnedPoint + quiz.earnedPoint + exam.earnedPoint + project.earnedPoint + extraCredit.earnedPoint + partcipation.earnedPoint )/725)*100).toFixed(2); //get rid of magic numbers
	alert(totalGrade);
	
/* 	var CourseGrade = new Array();
	CourseGrade[0] = labAssignment.asName;
	CourseGrade[1] = labAssignment.maxPoint;
	CourseGrade[2] = labAssignment.earnedPoint;
	CourseGrade[3] = " " + quiz.asName;
	CourseGrade[4] = quiz.maxPoint;
	CourseGrade[5] = quiz.earnedPoint;
	CourseGrade[6] = " " + exam.asName;
	CourseGrade[7] = exam.maxPoint;
	CourseGrade[8] = exam.earnedPoint;
	CourseGrade[9] = " " + project.asName;
	CourseGrade[10] = project.maxPoint;
	CourseGrade[11] = project.earnedPoint;
	CourseGrade[12] = " " + extraCredit.asName;
	CourseGrade[13] = extraCredit.maxPoint;
	CourseGrade[14] = extraCredit.earnedPoint;
	CourseGrade[15] = " " + partcipation.asName;
	CourseGrade[16] = partcipation.maxPoint;
	CourseGrade[17] = partcipation.earnedPoint;
	CourseGrade[18] = "Total Grade: " + totalGrade; */
	
	var CourseGrade = new Array();
	CourseGrade[0] = labAssignment;
	CourseGrade[1] = quiz;
	CourseGrade[2] = exam;
	CourseGrade[3] = project;
	CourseGrade[4] = extraCredit;
	CourseGrade[4] = partcipation;
	
	alert("Working here" + CourseGrade[0].asName); //so you can store all the whole object in the array like above and then when you actually go to display it access it like this so that you don't just get object Object error like early. 
	
	var toJSON = JSON.stringify(CourseGrade);
	
	
	
	document.cookie = CourseGrade; //attempting to just pass the objects into the array. Not working tho just prints out [object Object] 
	
	alert("We made it to course grade " + CourseGrade);
	
	
	
	
	//you can make an array of objects
	
	var first = CourseGrade; //prints the whole array. well assigns the whole array to a var which is printed next
	alert(first);

	var jsonObject = JSON.stringify(labAssignment); //turn labassignment into a json object. as of last night this works. 

	alert(jsonObject);
	
	document.cookie = jsonObject;
	
	var jsobj = JSON.parse(jsonObject); //hmmm
	
	 
	
	var stuffFromCookie = jsonObject;//i think this is how i had this. 
	alert("inside the cookie " + stuffFromCookie);
	
	
	alert("working in the array");
	
	alert(CourseGrade[0]);
	
	document.getElementById("form1").reset();
	
}



function gradeFunction() {

	
	//decesion logic to determine if grade is a certain percent what to display and what page to go to.)
	// if (totalGrade >= 90){
		// alert("You received a " + totalGrade.toFixed(2) + "%");
		// alert("Your weighted grade is an " + weightedTotalGrade.toFixed(2) + "%");
		// alert("Your grade is an A. " + "Great job!");
		// window.location.href= "http://pnw.edu";
	// }
	// else if (totalGrade >= 80){
		// alert("You received a " + totalGrade.toFixed(2) + "%");
		// alert("Your weighted grade is an " + weightedTotalGrade.toFixed(2) + "%");
		// alert("Your grade is an B. " + "Good job but there is room for improvement! Check out this site->");
		// window.location.href= "advice.html";
	// }
	// else if (totalGrade >= 70){
		// alert("You received a " + totalGrade.toFixed(2) + "%");
		// alert("Your weighted grade is an " + weightedTotalGrade.toFixed(2) + "%");
		// alert("Your grade is an C.");
		// window.location.href= "advice.html";
	// }
	// else if (totalGrade >= 60){
		// alert("You received a " + totalGrade.toFixed(2) + "%");
		// alert("Your weighted grade is an " + weightedTotalGrade.toFixed(2) + "%");
		// alert("Your grade is an D.");
		// window.location.href= "advice.html";
	// }
	// else if (totalGrade < 60){
		// alert("You received a " + totalGrade.toFixed(2) + "%");
		// alert("Your weighted grade is an " + weightedTotalGrade.toFixed(2) + "%");
		// alert("Your grade is an F.");
		// window.location.href= "advice.html";
	// }
	//checking to ensure user did not input something that is not a number. 
	// else if (isNaN(totalGrade)){ 
		// alert("Error: invalid input check your scores");
	// }
	
	document.getElementById("form1").reset(); //clears the textboxes on refresh	
}
