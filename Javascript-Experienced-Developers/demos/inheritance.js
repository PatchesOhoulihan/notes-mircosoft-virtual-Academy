//Testing Inheritance

//Person1 Constructor
var Person1 = function(firstName){
	this.firstName = firstName;
};

//Adding another Methode to the Person1s prototype at runtime.
Person1.prototype.sayHello = function(){
	console.log("Hello, I'm " + this.firstName);
}

//Like Person1, adding a Method at compile time.
var Person2 = function(firstName){
	this.firstName = firstName;

	this.sayHello = function(){
		console.log("Hello, I'm " + this.firstName);
	}
}


//Child Constructor for Person
var Student = function(firstName, subject){

	//Calling the Parent constructor
	Person1.call(this, firstName);
	
	//Initializing the Student-specific property
	this.subject = subject;
}


//Create a Student.prototype object that inherits form Person1.prototype.
//BTW Just new Student(.....) don't work.
Student.prototype = Object.create(Person1.prototype);

//Set the constructor property to refer to Student
Student.prototype.contructor = Student;

//Replacing the "sayHello" method
Student.prototype.sayHello = function(){
	console.log('Hello my Name is ' + this.firstName + ' and I am studying ' + this.subject);
}

var student1 = new Student("Dave","Modern Arts");

console.log(student1 instanceof Person1);
console.log(student1 instanceof Student);


