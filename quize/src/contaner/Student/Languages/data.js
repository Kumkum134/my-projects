export const ChashQuestions = [
    {
        id: 1,
        question: "What is C# primarily used for?",
        options: ["Web development", "System programming", "Application development", "Game development"],
        answer: "Application development",
        explanation: "C# is primarily used for developing Windows applications, web applications, and game development using the Unity engine."
    },
    {
        id: 2,
        question: "Which of the following is a valid data type in C#?",
        options: ["integer", "float", "string", "All of the above"],
        answer: "All of the above",
        explanation: "int, float, and string are all valid data types in C#."
    },
    {
        id: 3,
        question: "What is the purpose of the using statement in C#?",
        options: ["To include namespaces", "To declare variables", "To define functions", "To handle exceptions"],
        answer: "To include namespaces",
        explanation: "The using statement is used to include namespaces, allowing access to classes and methods defined in those namespaces."
    },
    {
        id: 4,
        question: "Which keyword is used to define a class in C#?",
        options: ["define", "class", "struct", "object"],
        answer: "class",
        explanation: "The class keyword is used to define a class in C#."
    },
    {
        id: 5,
        question: "What is the default access modifier for class members in C#?",
        options: ["Public", "Private", "Protected", "Internal"],
        answer: "Private",
        explanation: "By default, class members in C# are private if no access modifier is specified."
    },
    {
        id: 6,
        question: "Which of the following is not a value type in C#?",
        options: ["int", "float", "string", "char"],
        answer: "string",
        explanation: "string is a reference type in C#, while int, float, and char are value types."
    },
    {
        id: 7,
        question: "What is the use of the static keyword in C#?",
        options: ["To create instance methods", "To define constants", "To define class-level members", "To handle exceptions"],
        answer: "To define class-level members",
        explanation: "The static keyword is used to define class-level members that are shared among all instances of the class."
    },
    {
        id: 8,
        question: "What is a constructor in C#?",
        options: ["A method that initializes an object", "A method that destroys an object", "A special type of variable", "A type of exception"],
        answer: "A method that initializes an object",
        explanation: "A constructor is a special method used to initialize objects when they are created."
    },
    {
        id: 9,
        question: "Which of the following is the correct way to declare an array in C#?",
        options: ["int array[5];", "int[] array = new int[5];", "array int[5];", "array int = new int(5);"],
        answer: "int[] array = new int[5];",
        explanation: "The correct way to declare an array in C# is by using int[] array = new int[5];."
    },
    {
        id: 10,
        question: "What does the override keyword do in C#?",
        options: [
            "Creates a new method",
            "Modifies the return type",
            "Allows a derived class to provide a specific implementation of a method defined in a base class",
            "Prevents a method from being overridden"
        ],
        answer: "Allows a derived class to provide a specific implementation of a method defined in a base class",
        explanation: "The override keyword is used to provide a new implementation of a method that is defined in a base class."
    },
    {
        id: 11,
        question: "Which of the following is used to handle exceptions in C#?",
        options: ["try-catch", "if-else", "switch-case", "for loop"],
        answer: "try-catch",
        explanation: "The try-catch block is used to handle exceptions and errors that may occur during program execution."
    },
    {
        id: 12,
        question: "What is the purpose of the interface in C#?",
        options: ["To define the structure of a class",
            "To define a contract that classes can implement",
            "To declare variables",
            "To create objects"],
        answer: "To define a contract that classes can implement",
        explanation: "An interface defines a contract that classes can implement, specifying methods and properties that must be defined."
    },
    {
        id: 13,
        question: "Which keyword is used to create an instance of a class in C#?",
        options: ["class", "object", "new", "create"],
        answer: "new",
        explanation: "The new keyword is used to create an instance of a class."
    },
    {
        id: 14,
        question: "Which of the following statements is true about properties in C#?",
        options: ["They are used to define methods",
            "They allow data encapsulation",
            "They cannot be read or written",
            "They are always public"],
        answer: "They allow data encapsulation",
        explanation: "Properties in C# provide a way to encapsulate data, allowing controlled access to class fields."
    },
    {
        id: 15,
        question: `What is the output of the following code if x is equal to 10 and y is equal to 5? Console.WriteLine(x > y ? "x is greater" : "y is greater");`,
        options: ["x is greater", "y is greater", "10", "5"],
        answer: "x is greater",
        explanation: `The conditional (ternary) operator evaluates the expression and returns "x is greater" since 10 is greater than 5.`
    },
    {
        id: 16,
        question: "What is the purpose of the async keyword in C#?",
        options: ["To declare a synchronous method",
            "To declare an asynchronous method",
            "To create a new thread",
            "To handle exceptions"],
        answer: "To declare an asynchronous method",
        explanation: "The async keyword is used to declare a method as asynchronous, allowing for non-blocking operations."
    },
    {
        id: 17,
        question: "Which of the following is a collection type in C#?",
        options: ["array", "List<T>", "Queue", "All of the above"],
        answer: "List<T>",
        explanation: "array, List<T>, and Queue are all collection types in C#."
    },
    {
        id: 18,
        question: "What does the sealed keyword do in C#?",
        options: ["Prevents a class from being instantiated", "Prevents a class from being inherited", "Makes a method private", "Hides a class"],
        answer: "Prevents a class from being inherited",
        explanation: "The sealed keyword is used to prevent a class from being inherited by other classes."
    },
    {
        id: 19,
        question: "What is the purpose of the Nullable<T> type in C#?",
        options: ["To allow value types to hold null values", "To create reference types", "To define constants", "To declare arrays"],
        answer: "To allow value types to hold null values",
        explanation: "The Nullable<T> type allows value types to have an additional null value, which is useful for database operations."
    },
    {
        id: 20,
        question: "Which of the following is true about C# delegates?",
        options: ["They are used to define classes", "They are used to define a type-safe function pointer", "They cannot be used with events", "They are not type-safe"],
        answer: "They are used to define a type-safe function pointer",
        explanation: "Delegates are type-safe function pointers used to encapsulate method references, particularly useful in event handling."
    },
];

export const CQuestions = [
    {
        id: 1,
        question: "What is the primary purpose of the C programming language?",
        options: ["Web development", "System programming", "Data analysis", "Game development"],
        answer: "System programming",
        explanation: "C is primarily used for system programming, including operating systems and embedded systems.",
    },
    {
        id: 2,
        question: "Which of the following is not a C data type?",
        options: ["int", "char", "string", "float"],
        answer: "string",
        explanation: "string is not a built-in data type in C; instead, C uses character arrays to handle strings.",
    },
    {
        id: 3,
        question: "What does ANSI C refer to?",
        options: ["A version of C standardized by ISO", "A programming paradigm", "A variant of C for Windows", "A library in C "],
        answer: "A library in C ",
        explanation: "ANSI C refers to the version of C standardized by the American National Standards Institute (ANSI)."
    },
    {
        id: 4,
        question: "What is the size of an int data type in C on most modern systems?",
        options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
        answer: "4 bytes",
        explanation: "On most modern systems, an int is typically 4 bytes in size, but it can vary depending on the architecture."
    },
    {
        id: 5,
        question: "Which of the following keywords is used to define a constant in C?",
        options: ["constant", "define", "const", "static"],
        answer: "const",
        explanation: "The const keyword is used to define constants in C, which cannot be modified after initialization."
    },
    {
        id: 6,
        question: "What is a pointer in C?",
        options: ["A variable that holds the address of another variable", "A data type", "A function", "A constant"],
        answer: "A variable that holds the address of another variable",
        explanation: "A pointer is a variable that stores the address of another variable, allowing for direct memory access."
    },
    {
        id: 7,
        question: "Which of the following is a valid way to comment in C?",
        options: ["// This is a comment", "/* This is a comment", "# This is a comment", "-- This is a comment"],
        answer: "// This is a comment",
        explanation: "In C, comments can be made using // for single-line comments or /* ... */ for multi-line comments."
    },
    {
        id: 8,
        question: "What is the output of a program if it contains a return 0; statement in the main function?",
        options: ["The program crashed",
            "The program returned a success status",
            "The program executed indefinitely",
            "The program returned a failure status"],
        answer: "The program returned a success statusCharacter",
        explanation: "return 0; indicates successful termination of the program to the operating system."
    },
    {
        id: 9,
        question: `What does the term "compilation" mean in the context of C programming?`,
        options: ["The process of executing a program",
            "The process of converting source code into machine code",
            "The process of debugging a program",
            "The process of writing code"],
        answer: "The process of converting source code into machine code",
        explanation: "Compilation is the process of translating C source code into machine code that can be executed by a computer."
    },
    {
        id: 10,
        question: "Which of the following is a feature of the C programming language?",
        options: ["Object-oriented", "Low-level access to memory", "High-level abstraction", "Automatic garbage collection"],
        answer: "Low-level access to memory",
        explanation: "C provides low-level access to memory, which allows for direct manipulation of hardware and memory addresses."
    },
    {
        id: 11,
        question: "What is the function of the #include directive in C?",
        options: ["To declare variables", "To define functions", "To include header files", "To compile the code"],
        answer: "To include header files",
        explanation: "The #include directive is used to include standard or user-defined header files in a C program."
    },
    {
        id: 12,
        question: "What type of memory is used for dynamically allocated variables in C?",
        options: ["Stack", "Heap", "Static", "ROM"],
        answer: "Heap",
        explanation: "Dynamically allocated variables are stored in the heap memory, which is managed at runtime."
    },
    {
        id: 13,
        question: "Which of the following operators is used for logical AND in C?",
        options: ["&", "&&", "|", "||"],
        answer: "&&",
        explanation: "The logical AND operator in C is represented by &&."
    },
    {
        id: 14,
        question: "What will happen if a variable is declared but not initialized in C?",
        options: ["It will cause a compilation error",
            "It will have a garbage value",
            "It will automatically be set to zero",
            "It will be initialized to NULL"],
        answer: "It will have a garbage value",
        explanation: "If a variable is declared but not initialized, it holds an indeterminate value, often referred to as a garbage value."
    },
    {
        id: 15,
        question: "Which of the following keywords is used to exit from a loop in C?",
        options: ["stop", "exit", "break", "return"],
        answer: "break",
        explanation: "The break keyword is used to exit from loops or switch statements prematurely."
    },
    {
        id: 16,
        question: "What is the purpose of a struct in C?",
        options: ["To define a function",
            "To declare a pointer",
            "To create a composite data type",
            "To control the flow of the program"],
        answer: "To create a composite data type",
        explanation: "A struct allows the creation of a composite data type that can hold multiple variables of different types."
    },
    {
        id: 17,
        question: "Which of the following is not a storage class in C?",
        options: ["auto", "register", "global", "extern"],
        answer: "global",
        explanation: "global is not a storage class; it refers to the scope of a variable accessible throughout the program."
    },
    {
        id: 18,
        question: "What is the use of the sizeof operator in C?",
        options: ["To determine the size of a variable in bytes",
            "To allocate memory",
            "To compare two variables",
            "To print the variable size"],
        answer: "To determine the size of a variable in bytes",
        explanation: "The sizeof operator returns the size, in bytes, of a variable or data type."
    },
    {
        id: 19,
        question: "Which of the following is true about the void keyword in C?",
        options: ["It specifies an integer data type",
            "It indicates no value or no type",
            "It is used for floating-point numbers",
            "It is used for pointers only"],
        answer: "It indicates no value or no type",
        explanation: "The void keyword indicates that a function does not return a value or that a pointer does not point to any specific data type."
    },
    {
        id: 20,
        question: "What is a common use of the typedef keyword in C?",
        options: ["To create an alias for a data type",
            "To define a function",
            "To declare variables",
            "To include libraries"],
        answer: "To create an alias for a data type",
        explanation: "The typedef keyword is used to create an alias for existing data types, improving code readability."
    },
];
export const CPlusPlusQuestions = [
    {
        id: 1,
        question: "What does C++ primarily support?",
        options: ["Object-oriented programming", "Functional programming", "Procedural programming", "Logic programming"],
        answer: "Object-oriented programming",
        explanation: "C++ is known for supporting object-oriented programming principles like encapsulation, inheritance, and polymorphism.",
    },
    {
        id: 2,
        question: "Which of the following is a valid data type in C++?",
        options: ["int", "float", "char", "All of the above"],
        answer: "All of the above",
        explanation: "int, float, and char are all valid data types in C++."
    },
    {
        id: 3,
        question: "Which operator is used to access members of a class or structure in C++?",
        options: [".", "->", "::", "[]"],
        answer: ".",
        explanation: "The dot operator (.) is used to access members of a class or structure in C++."
    },
    {
        id: 4,
        question: "What is a constructor in C++?",
        options: ["A method that destroys an object", "A method that initializes an object", "A special type of variable", "A type of exception"],
        answer: "A method that initializes an object",
        explanation: "A constructor is a special member function that initializes an object when it is created."
    },
    {
        id: 5,
        question: "Which keyword is used to define a class in C++?",
        options: ["define", "class", "struct", "object"],
        answer: "class",
        explanation: "The class keyword is used to define a class in C++."
    },
    {
        id: 6,
        question: "What is the default access modifier for members of a class in C++?",
        options: ["Public", "Private", "Protected", "Internal"],
        answer: "Private",
        explanation: "By default, members of a class in C++ are private unless specified otherwise."
    },
    {
        id: 7,
        question: "Which of the following is not a pointer type in C++?",
        options: ["int*", "float*", "void*", "string*"],
        answer: "string*",
        explanation: "In C++, string is a class type, and the correct pointer type should be std::string*, not string*."
    },
    {
        id: 8,
        question: "What is the purpose of the virtual keyword in C++?",
        options: ["To create a new class", "To define an interface", "To allow derived classes to override base class methods", "To define constants"],
        answer: "To allow derived classes to override base class methods",
        explanation: "The virtual keyword allows derived classes to provide specific implementations of methods defined in a base class."
    },
    {
        id: 9,
        question: "What does the static keyword indicate when used with a class member?",
        options: ["The member can be accessed without an instance of the class", "The member is constant", "The member cannot be overridden", "The member is private"],
        answer: "The member can be accessed without an instance of the class",
        explanation: "The static keyword indicates that a class member belongs to the class itself rather than to any specific object of the class."
    },
    {
        id: 10,
        question: "Which of the following is a standard library used for input and output in C++?",
        options: ["stdio.h", "iostream", "stdlib.h", "string.h"],
        answer: "iostream",
        explanation: "The iostream library is used for input and output operations in C++."
    },
    {
        id: 11,
        question: `What is the output of the following code if x is equal to 10 and y is equal to 5? cout << (x > y ? "x is greater" : "y is greater");`,
        options: ["x is greater", "y is greater", "10", "5"],
        answer: "x is greater",
        explanation: `The conditional (ternary) operator evaluates the expression and returns "x is greater" since 10 is greater than 5.`
    },
    {
        id: 12,
        question: "Which of the following statements is true about C++ functions?",
        options: ["They must return a value", "They can be overloaded", "They cannot have default arguments", "They cannot be recursive"],
        answer: "They can be overloaded",
        explanation: "C++ functions can be overloaded, allowing multiple functions with the same name but different parameters."
    },
    {
        id: 13,
        question: "Which of the following is a correct way to declare a reference variable in C++?",
        options: ["int& ref;", "int ref*;", "int ref;", "ref int;"],
        answer: "int& ref;",
        explanation: "The correct way to declare a reference variable in C++ is int& ref;."
    },
    {
        id: 14,
        question: "What is the purpose of the delete keyword in C++?",
        options: ["To free up memory allocated for an object", "To delete a variable", "To terminate a program", "To remove a class"],
        answer: "To free up memory allocated for an object",
        explanation: "The delete keyword is used to free up memory that was allocated for an object created with new."
    },
    {
        id: 15,
        question: "Which keyword is used to define a template in C++?",
        options: ["template", "class", "function", "define"],
        answer: "template",
        explanation: "The template keyword is used to define a template that can operate with any data type."
    },
    {
        id: 16,
        question: "What does the const keyword indicate in C++?",
        options: ["The variable is constant and cannot be changed", "The variable is static", "The variable is a pointer", "The variable is public"],
        answer: "The variable is constant and cannot be changed",
        explanation: "The const keyword indicates that the variable's value cannot be modified after initialization."
    },
    {
        id: 17,
        question: "Which of the following is an example of dynamic memory allocation in C++?",
        options: ["int arr[10];", "int* arr = new int[10];", "int arr(10);", "int arr = malloc(10);"],
        answer: "int* arr = new int[10];",
        explanation: "The correct syntax for dynamic memory allocation in C++ is using new, such as int* arr = new int[10];."
    },
    {
        id: 18,
        question: "Which of the following can be used to implement polymorphism in C++?",
        options: ["Function overloading", "Operator overloading", "Virtual functions", "All of the above"],
        answer: "Virtual functions",
        explanation: "Polymorphism can be implemented using virtual functions, function overloading, and operator overloading."
    },
    {
        id: 19,
        question: "What is the output of the following code? int x = 5; cout << (x++);",
        options: ["5", "6", "Error", "4"],
        answer: "5",
        explanation: "The x++ expression evaluates to the current value of x (which is 5) before incrementing it."
    },
    {
        id: 20,
        question: "What is an abstract class in C++?",
        options: ["A class that cannot be instantiated", "A class with no member functions", "A class with only static members", "A class that inherits from another class"],
        answer: "A class with no member functions",
        explanation: "An abstract class in C++ is a class that cannot be instantiated and typically contains at least one pure virtual function."
    },
];


export const CssQuestions = [
    {
        id: 1,
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets",
        explanation: "CSS stands for Cascading Style Sheets, which is used to style HTML documents."
    },
    {
        id: 2,
        question: "Which of the following is a correct way to link a CSS file to an HTML document?",
        options: ["<link rel='stylesheet' type='text/css' href='styles.css'>", `<style src="styles.css">`, `<stylesheet>styles.css</stylesheet>`, `<link href="styles.css">`],
        answer: "<link rel='stylesheet' type='text/css' href='styles.css'>",
        explanation: "The correct syntax to link a CSS file is by using the <link> tag with the appropriate attributes."
    },
    {
        id: 3,
        question: "Which property is used to change the background color of an element?",
        options: ["color", "bgcolor", "background-color", "background"],
        answer: "background-color",
        explanation: "The background-color property is used to set the background color of an element."
    },
    {
        id: 4,
        question: "What is the default value of the position property in CSS?",
        options: ["absolute", "relative", "fixed", "static"],
        answer: "static",
        explanation: "The default value of the position property is static, meaning elements are positioned according to the normal document flow."
    },
    {
        id: 5,
        question: "Which CSS property is used to control the text size?",
        options: ["text-size", "font-size", "text-style", "font-style"],
        answer: "font-size",
        explanation: "The font-size property is used to specify the size of the font."
    },
    {
        id: 6,
        question: "What is the purpose of the z-index property in CSS?",
        options: ["To change the color of an element",
            "To control the stacking order of elements",
            "To specify the width of an element",
            "To set the opacity of an element"],
        answer: "To control the stacking order of elements",
        explanation: "The z-index property determines the stack order of overlapping elements."
    },
    {
        id: 7,
        question: "Which of the following is a valid CSS selector?",
        options: ["#header", ".header", "header", "All of the above"],
        answer: "#header",
        explanation: "All options provided are valid CSS selectors; #header is an ID selector, .header is a class selector, and header is a type selector."
    },
    {
        id: 8,
        question: "How can you apply styles to multiple elements in CSS?",
        options: ["By using a comma to separate selectors", "By using a period", "By using a space", "By using a semicolon"],
        answer: "By using a comma to separate selectors",
        explanation: "You can apply styles to multiple elements by separating the selectors with a comma."
    },
    {
        id: 9,
        question: "Which property is used to add space between the content and the border of an element?",
        options: ["margin", "padding", "border-spacing", "spacing"],
        answer: "padding",
        explanation: "The padding property adds space between the content of an element and its border."
    },
    {
        id: 10,
        question: "What is the effect of the display: none; property?",
        options: ["It makes the element invisible but still takes up space.",
            "It removes the element from the document flow",
            "It hides the element and keeps its space.",
            "It makes the element transparent."],
        answer: "It removes the element from the document flow",
        explanation: "The display: none; property removes the element from the document flow, making it invisible and not taking up space."
    },
    {
        id: 11,
        question: "What does the float property do in CSS?",
        options: ["It positions an element at a fixed location.",
            "It makes an element disappear.",
            "It allows text and inline elements to wrap around a block element",
            "It adds space between elements."],
        answer: "It allows text and inline elements to wrap around a block element",
        explanation: "The float property allows text and inline elements to wrap around a block element."
    },
    {
        id: 12,
        question: "Which of the following properties is used to change the font of an element?",
        options: ["font-style", "font-family", "font-weight", "text-family"],
        answer: "font-family",
        explanation: "The font-family property specifies the font of an element."
    },
    {
        id: 13,
        question: "What is the purpose of the @media rule in CSS?",
        options: ["To create animations", "To apply styles based on different conditions", "To define keyframes", "To set the default styles"],
        answer: "To apply styles based on different conditions",
        explanation: "The @media rule is used to apply different styles based on the device's characteristics, such as screen size."
    },
    {
        id: 14,
        question: "Which of the following values is not valid for the position property?",
        options: ["absolute", "relative", "fixed", "dynamic"],
        answer: "dynamic",
        explanation: "dynamic is not a valid value for the position property in CSS."
    },
    {
        id: 15,
        question: "How do you make a list appear horizontally in CSS?",
        options: ["list-style-type: horizontal;", "display: inline;", "list-style-type: inline;", "display: block;"],
        answer: "display: inline;",
        explanation: "Setting display: inline; on list items makes them appear horizontally."
    },
    {
        id: 16,
        question: "What is the purpose of the opacity property in CSS?",
        options: ["To control the visibility of an element", "To control the transparency level of an element", "To change the color of an element", "To change the size of an element"],
        answer: "To control the transparency level of an element",
        explanation: "The opacity property is used to set the transparency level of an element."
    },
    {
        id: 17,
        question: "Which of the following units is relative to the viewport width in CSS?",
        options: ["px", "em", "vw", "%"],
        answer: "vw",
        explanation: "The vw unit stands for viewport width, where 1 vw is equal to 1% of the viewport width."
    },
    {
        id: 18,
        question: "Which CSS property controls the text indentation?",
        options: ["text-indent", "indent", "padding", "margin"],
        answer: "text-indent",
        explanation: "The text-indent property is used to specify the indentation of the first line of text."
    },
    {
        id: 19,
        question: "How can you comment in CSS?",
        options: ["// This is a comment", "/* This is a comment */", "<!-- This is a comment -->", "# This is a comment"],
        answer: "/* This is a comment */",
        explanation: "CSS comments are written using the /* comment */ syntax."
    },
    {
        id: 20,
        question: "Which of the following is a CSS pseudo-class?",
        options: [":hover", ":after", ":before", "All of the above"],
        answer: ":hover",
        explanation: "All options are valid CSS pseudo-classes, which apply styles based on the state of an element."
    },
];
export const ExpressQuestions = [
    {
        id: 1,
        question: "What is Express.js?",
        options: ["A database management system", "A frontend JavaScript framework", "A web application framework for Node.js", "A CSS library"],
        answer: "A web application framework for Node.js",
        explanation: "Express.js is a lightweight web application framework for Node.js, designed to build web applications and APIs."
    },
    {
        id: 2,
        question: "Which of the following is the correct way to install Express.js in a Node.js project?",
        options: ["npm install express --global", "npm install express", "npm download express", "npm start express"],
        answer: "npm install express",
        explanation: "The correct command to install Express.js is npm install express."
    },
    {
        id: 3,
        question: "Which method in Express.js is used to define a route that listens for GET requests?",
        options: ["app.post()", "app.get()", "app.listen()", "app.route()"],
        answer: "app.get()",
        explanation: "The app.get() method is used to define a route for handling HTTP GET requests."
    },
    {
        id: 4,
        question: "In Express.js, which method is used to listen to a specific port for incoming requests?",
        options: ["app.start()", "app.port()", "app.listen()", "app.init()"],
        answer: "app.listen()",
        explanation: "The app.listen() method is used to bind and listen for connections on the specified host and port."
    },
    {
        id: 5,
        question: "Which object in Express.js is used to handle the HTTP request in a route handler?",
        options: ["req", "res", "app", "next"],
        answer: "req",
        explanation: "The req (request) object represents the HTTP request and contains properties like request parameters, query strings, and the body."
    },
    {
        id: 6,
        question: "How do you handle errors in Express.js?",
        options: ["By using app.use(function (err, req, res, next) {...})", "By using app.error(function () {...})", "By using app.catch(function () {...})", "By using app.listen(function (err) {...})"],
        answer: "By using app.use(function (err, req, res, next) {...})",
        explanation: "Errors in Express.js are typically handled using middleware that has 4 arguments: err, req, res, next."
    },
    {
        id: 7,
        question: "What does the res.send() method do in Express.js?",
        options: ["It sends a static file to the client.", "It sends a string, object, or array as a response to the client.", "It closes the server.", "It sends an HTTP POST request to the client."],
        answer: "It sends a string, object, or array as a response to the client.",
        explanation: "The res.send() method sends a response of various types, such as a string, object, or array, to the client."
    },
    {
        id: 8,
        question: "How do you serve static files in an Express.js application?",
        options: ["By using app.static('public')", "By using express.static('public')", "By using app.use('static')", "By using res.sendFile('public')"],
        answer: "By using express.static('public')",
        explanation: "The express.static() middleware function is used to serve static files like images, CSS, and JavaScript files."
    },
    {
        id: 9,
        question: "Which of the following is a middleware function in Express.js?",
        options: ["app.get('/user', (req, res) => {...})", "app.use((req, res, next) => {...})", "res.redirect('/home')", "app.listen(port)"],
        answer: "app.use((req, res, next) => {...})",
        explanation: "Middleware functions are functions that have access to the req, res, and next objects, and they are defined using app.use()."
    },
    {
        id: 10,
        question: "Which HTTP status code represents a successful response?",
        options: ["404", "500", "200", "302"],
        answer: "200",
        explanation: "The status code 200 indicates a successful HTTP request."
    },
    {
        id: 11,
        question: "How can you redirect a client to another route in Express.js?",
        options: ["res.redirect('/new-route')", "res.sendFile('/new-route')", "res.route('/new-route')", "res.go('/new-route')"],
        answer: "res.redirect('/new-route')",
        explanation: "The res.redirect() method is used to redirect the client to a different route or URL."
    },
    {
        id: 12,
        question: "What is the purpose of next() in Express.js middleware?",
        options: ["To terminate the server", "To move to the next piece of middleware or route handler", "To send a response to the client", "To stop the current request"],
        answer: "To move to the next piece of middleware or route handler",
        explanation: "The next() function is used to pass control to the next middleware function or route handler in the request-response cycle."
    },
    {
        id: 13,
        question: "How do you retrieve query parameters in an Express.js route?",
        options: ["req.params", "req.query", "req.body", "req.headers"],
        answer: "req.query",
        explanation: "Query parameters can be accessed using req.query in Express.js."
    },
    {
        id: 14,
        question: "Which Express.js method is used to create a new router object?",
        options: ["express.router()", "express.Route()", "express.Router()", "express.route()"],
        answer: "express.Router()",
        explanation: "The express.Router() method is used to create a new router object to handle different routes in the application."
    },
    {
        id: 15,
        question: "Which of the following is an advantage of using Express.js?",
        options: ["It is fast and minimalistic.", "It replaces the need for Node.js.", "It does not support middleware.", "It is primarily used for machine learning applications."],
        answer: "It is fast and minimalistic.",
        explanation: "Express.js is lightweight, fast, and minimalistic, allowing developers to build efficient web applications."
    },
    {
        id: 16,
        question: "Which method is used to handle POST requests in Express.js?",
        options: ["app.send()", "app.post()", "app.get()", "app.route()"],
        answer: "app.post()",
        explanation: "The app.post() method is used to define a route that handles POST requests in Express.js."
    },
    {
        id: 17,
        question: "What does the body-parser middleware do in Express.js?",
        options: ["It serves static files.", "It parses incoming request bodies and makes them available under req.body.", "It parses URLs and makes them available under req.query.", "It handles file uploads."],
        answer: "It parses incoming request bodies and makes them available under req.body.",
        explanation: "The body-parser middleware parses incoming request bodies and makes the data available under req.body."
    },
    {
        id: 18,
        question: "How do you handle JSON data in an Express.js POST request?",
        options: ["app.use(express.json())", "app.use(express.urlencoded())", "app.use(bodyParser.text())", "app.use(express.static())"],
        answer: "app.use(express.json())",
        explanation: "To handle JSON data in POST requests, you use the middleware express.json()."
    },
    {
        id: 19,
        question: "How do you handle form-encoded data in Express.js?",
        options: ["app.use(express.json())", "app.use(express.urlencoded({ extended: true }))", "app.use(bodyParser.raw())", "app.use(express.static())"],
        answer: "app.use(express.urlencoded({ extended: true }))",
        explanation: "To handle form-encoded data, you use express.urlencoded() middleware with the extended option."
    },
    {
        id: 20,
        question: "Which middleware is used in Express.js to serve files like CSS and JavaScript?",
        options: ["body-parser", "express.static()", "res.sendFile()", "app.use()"],
        answer: "express.static()",
        explanation: "The express.static() middleware is used to serve static files such as CSS, JavaScript, and images."
    }
];

export const HQuestion = [
    {
        id: 1,
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Modeling Language"],
        answer: "Hyper Text Markup Language",
        explanation: "HTML is a standard markup language used for creating web pages. The Hypertext refers to links that connect different pages, and Markup Language indicates that it uses tags to structure content.",
    },
    {
        id: 2,
        question: "Which of the following is the correct syntax for adding an image in HTML?",
        options: [`<img src="image.jpg" alt="Image">`, `<image src="image.jpg" alt="Image">`, `<img href="image.jpg" alt="Image">`, `<picture src="image.jpg" alt="Image">`],
        answer: `<img src="image.jpg" alt="Image">`,
        explanation: "The <img> tag is used to embed images in HTML. The src attribute specifies the path to the image, and the alt attribute provides alternative text for accessibility.",
    },
    {
        id: 3,
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<href>", "<a>", "<hyper>"],
        answer: "<a>",
        explanation: "The <a> (anchor) tag is used to create hyperlinks, allowing users to navigate from one page to another. The href attribute specifies the URL of the page the link goes to.",
    },
    {
        id: 4,
        question: "How do you create an ordered list in HTML?",
        options: ["<ul>", "<ol>", "<list>", "<order>"],
        answer: "<ol>",
        explanation: "The <ol> tag defines an ordered list, which automatically numbers the items in the list. The <ul> tag defines an unordered list, which uses bullet points instead.",
    },
    {
        id: 5,
        question: "Which HTML element is used to specify a footer for a document?",
        options: ["<bottom>", "<footer>", "<section>", "<end>"],
        answer: "<footer>",
        explanation: "The <footer> element represents the footer section of a document or section, typically containing information like the author, copyright, or related links.",
    },
    {
        id: 6,
        question: "How can you make a numbered list?",
        options: ["<ol>", " < dl > ", " < list > ", " < ul > "],
        answer: "<ol>",
        explanation: "The < ol > tag creates a numbered list in HTML. Each list item is automatically numbered by the browser.",
    },
    {
        id: 7,
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<br>", "<lb>", "<break>", "<hr>"],
        answer: "<br>",
        explanation: "The <br> tag is used to insert a line break in text. It is a self-closing tag that does not require an end tag.",
    },
    {
        id: 8,
        question: "Which HTML attribute is used to define inline styles?",
        options: ["style", "class", "id", "styles"],
        answer: "style",
        explanation: "The style attribute allows you to apply CSS styles directly to an HTML element, overriding any styles defined in an external stylesheet or in a <style> tag.",
    },
    {
        id: 9,
        question: "Which HTML tag is used to define an internal stylesheet?",
        options: ["<style>", "<css>", "<link>", "<script>"],
        answer: "<style>",
        explanation: "The <style> tag is used within the <head> section of an HTML document to define internal CSS styles that apply to the entire document.",
    },
    {
        id: 10,
        question: "Which character is used to indicate an end tag in HTML?",
        options: ["/", "<", ">", "*"],
        answer: "/",
        explanation: "An end tag is indicated by a forward slash / preceding the tag name, signaling the closure of that specific element.",
    },
    {
        id: 11,
        question: "Which tag is used to create a table in HTML?",
        options: ["<table>", "<tab>", "<tbody>", "<tr>"],
        answer: "<table>",
        explanation: "The <table> tag is used to create a table in HTML, with additional tags such as <tr> for rows, <th> for header cells, and <td> for standard cells.",
    },
    {
        id: 12,
        question: "What do you use to create a dropdown list in HTML?",
        options: ["<input>", "<select>", "<list>", "<option>"],
        answer: "<select>",
        explanation: "The <select> tag creates a dropdown list in HTML. The <option> tags within it define the individual items in the dropdown.",
    },
    {
        id: 13,
        question: "Which HTML element is used for the largest heading?",
        options: ["<h1>", "<h6>", "<heading>", "<header>"],
        answer: "<h1>",
        explanation: "The <h1> tag defines the largest heading, while <h2> to <h6> are used for progressively smaller headings.",
    },
    {
        id: 14,
        question: "Which attribute specifies the destination of a hyperlink?",
        options: ["href", "link", "src", "url"],
        answer: "href",
        explanation: "The href attribute of the <a> tag specifies the URL of the page the link should navigate to when clicked.",
    },
    {
        id: 15,
        question: "Which tag is used to define a block of code in HTML?",
        options: ["<code>", "<block>", "<pre>", "<div>"],
        answer: "<code>",
        explanation: "The <code> tag is used to define a block of code in HTML, typically displayed in a monospace font to indicate that it's code.",
    },
    {
        id: 16,
        question: "What does the <meta> tag represent in HTML?",
        options: ["It defines metadata about an HTML document.", "It creates a navigation menu.", "It specifies a script.", "It defines a table."],
        answer: "It defines metadata about an HTML document.",
        explanation: "The <meta> tag provides metadata about the HTML document, such as character set, description, and keywords, which are useful for search engines.",
    },
    {
        id: 17,
        question: "How do you create a checkbox in HTML?",
        options: ["<input type='checkbox'>", "<check>", "<input type='check'>", "<checkbox>"],
        answer: "<input type='checkbox'>",
        explanation: "The <input> tag with type='checkbox' creates a checkbox in an HTML form, allowing users to make binary choices.",
    },
    {
        id: 18,
        question: "Which HTML element is used to define a navigation link?",
        options: ["<nav>", "<navigation>", "<link>", "<menu>"],
        answer: "<nav>",
        explanation: "The <nav> element is used to define a section of the document intended for navigation links, making it semantically clear for search engines and assistive technologies.",
    },
    {
        id: 19,
        question: "How can you include an external CSS file in an HTML document?",
        options: ["<link rel='stylesheet' href='style.css'>", "<stylesheet src='style.css'>", "<link src='style.css'>", "<css src='style.css'>"],
        answer: "<link rel='stylesheet' href='style.css'>",
        explanation: "The <link> tag is used to include an external CSS file in the <head> section of an HTML document. The rel attribute specifies the relationship as a stylesheet.",
    },
    {
        id: 20,
        question: "Which HTML element is used to display a horizontal rule?",
        options: ["<hr>", "<line>", "<break>", "<rule>"],
        answer: "<hr>",
        explanation: "The <hr> tag is used to create a horizontal line in the document, typically representing a thematic break or change in content.",
    },
];

export const JavaQuestions = [
    {
        id: 1,
        question: "What is the primary purpose of the JVM (Java Virtual Machine)?",
        options: ["To convert Java bytecode into machine code", "To interpret Java source code directly", "To handle the garbage collection process", "To manage memory in Java applications"],
        answer: "To convert Java bytecode into machine code",
        explanation: "The JVM converts Java bytecode into machine code specific to the platform where the Java program is running."
    },
    {
        id: 2,
        question: "Which of the following is a valid declaration of a main method in Java?",
        options: ["public static int main(String[] args)", "public void main(String args)", "public static void main(String[] args)", "void public static main(String args[])"],
        answer: "public static int main(String[] args)",
        explanation: "The correct declaration of the main method must be public, static, return void, and accept an array of String."
    },
    {
        id: 3,
        question: "What is the default value of a boolean variable in Java?",
        options: ["true", "1", "false", "null"],
        answer: "false",
        explanation: "The default value of a boolean variable in Java is false."
    },
    {
        id: 4,
        question: "Which of the following is not a primitive data type in Java?",
        options: ["int", "String", "float", "char"],
        answer: "String",
        explanation: "String is not a primitive data type in Java. It is a reference type."
    },
    {
        id: 5,
        question: "What is the size of an int in Java?",
        options: ["8 bits", "16 bits", "32 bits", "64 bits"],
        answer: "32 bits",
        explanation: "In Java, an int is a 32-bit signed data type."
    },
    {
        id: 6,
        question: "What is the purpose of the final keyword in Java?",
        options: ["To define constants", "To create abstract methods", "To allow method overriding", "To change the scope of variables"],
        answer: "To define constants",
        explanation: "The final keyword is used to declare constants, which means the variable's value cannot be changed once assigned."
    },
    {
        id: 7,
        question: "Which of the following methods can be used to convert a string to an integer in Java?",
        options: ["Integer.parseInt()", "String.toInt()", "String.parseInteger()", "Integer.toString()"],
        answer: "Integer.parseInt()",
        explanation: "The Integer.parseInt() method is used to convert a string to an integer in Java."
    },
    {
        id: 8,
        question: "In Java, what is the parent class of all classes?",
        options: ["Object", "String", "Class", "System"],
        answer: "Object",
        explanation: "All classes in Java implicitly inherit from the Object class."
    },
    {
        id: 9,
        question: "What will be the output of the following code? int a = 10; int b = 20; System.out.println(a + b);",
        options: ["10", "30", "1020", "40"],
        answer: "30",
        explanation: "The sum of a and b is 30, so the output will be 30."
    },
    {
        id: 10,
        question: "Which keyword is used to prevent a method from being overridden in Java?",
        options: ["static", "final", "private", "protected",],
        answer: "final",
        explanation: "The final keyword is used to prevent method overriding in Java."
    },
    {
        id: 11,
        question: "What is null in Java?",
        options: ["A keyword that indicates an absence of value", "A primitive data type", "A reference to the JVM", "A special integer value"],
        answer: "A keyword that indicates an absence of value",
        explanation: "null is a special keyword in Java used to indicate that an object reference does not point to any memory location."
    },
    {
        id: 12,
        question: "Which of the following is true about constructors in Java?",
        options: ["A constructor must have a return type.", "Constructors are used to initialize objects.", "A constructor cannot be overloaded.", "A constructor is inherited."],
        answer: "Constructors are used to initialize objects.",
        explanation: "Constructors are used to initialize objects and do not have a return type."
    },
    {
        id: 13,
        question: "Which of the following is the correct syntax for creating a package in Java?",
        options: ["import package mypackage;", "package mypackage;", "mypackage package;", "package new mypackage;"],
        answer: "package mypackage;",
        explanation: "The correct way to define a package is by using the package keyword followed by the package name."
    },
    {
        id: 14,
        question: "What is the output of the following code snippet? int x = 5; x++; System.out.println(x);",
        options: ["4", "5", "6", "Compilation error"],
        answer: "6",
        explanation: "The value of x is incremented by 1, so the output will be 6."
    },
    {
        id: 15,
        question: "Which exception is thrown when an array is accessed with an invalid index in Java?",
        options: ["NullPointerException", "IndexOutOfBoundsException", "ArrayStoreException", "IllegalArgumentException"],
        answer: "IndexOutOfBoundsException",
        explanation: "IndexOutOfBoundsException is thrown when trying to access an array element with an index that is out of bounds."
    },
    {
        id: 16,
        question: "Which loop guarantees that the loop body will be executed at least once?",
        options: ["for loop", "while loop", "do-while loop", "foreach loop"],
        answer: "do-while loop",
        explanation: "The do-while loop checks its condition after the loop body is executed, so it runs at least once."
    },
    {
        id: 17,
        question: "Which access modifier makes a member accessible only within its own class in Java?",
        options: ["public", "protected", "private", "default"],
        answer: "private",
        explanation: "The private access modifier restricts the visibility of a member to its own class."
    },
    {
        id: 18,
        question: "What is the purpose of the super keyword in Java?",
        options: ["To refer to the current class object", "To refer to the parent class constructor or method", "To declare static methods", "To override a method"],
        answer: "To refer to the parent class constructor or method",
        explanation: "The super keyword is used to call the parent class constructor or methods."
    },
    {
        id: 19,
        question: `What will be the output of the following code? String str = "Java"; System.out.println(str.length());`,
        options: ["3", "4", "5", "Compilation error"],
        answer: "4",
        explanation: "The length() method returns the number of characters in the string, which is 4 in this case."
    },
    {
        id: 20,
        question: "Which method is used to get the current thread in Java?",
        options: ["Thread.getCurrent()", "Thread.currentThread()", "Thread.runCurrent()", "Thread.get()"],
        answer: "Thread.currentThread()",
        explanation: "The Thread.currentThread() method returns a reference to the currently executing thread."
    },
];


export const JavaScriptQuestion = [
    {
        id: 1,
        question: "What is JavaScript?",
        options: ["Programming Language", "Scripting Language", "Markup Language", "None"],
        answer: "Scripting Language",
        explanation: "JavaScript is a Scripting Language used to add interactivity and dynamic behavior to web pages.",
    },
    {
        id: 2,
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Management", "Document Output Model", "None"],
        answer: "Document Object Model",
        explanation: "DOM stands for Document Object Model. It represents the structure of a web page, allowing scripts like JavaScript to access and manipulate HTML elements dynamically.",
    },
    {
        id: 3,
        question: "Which of the following is a JavaScript framework?",
        options: ["React", "Django", "Flask", "Laravel"],
        answer: "React",
        explanation: "React is a JavaScript framework used for building user interfaces, especially single-page applications. The others, Django, Flask, and Laravel, are frameworks for other programming languages (Python and PHP).",
    },
    {
        id: 4,
        question: "What is the result of 2 + '2' in JavaScript?",
        options: ["22", "4", "NaN", "Error"],
        answer: "22",
        explanation: "The result of 2 + '2' in JavaScript is '22'. This happens because when a number is added to a string, JavaScript converts the number to a string and concatenates them, resulting in the string '22'.",
    },
    {
        id: 5,
        question: "Which method is used to remove the last element from an array in JavaScript?",
        options: ["push()", "pop()", "shift()", "splice()"],
        answer: "pop()",
        explanation: "The method used to remove the last element from an array in JavaScript is pop(). The pop() method removes the last element from an array and returns that element, modifying the array's length.",
    },
    {
        id: 6,
        question: "Which operator is used to compare both value and type in JavaScript?",
        options: ["==", "===", "!=", "!=="],
        answer: "===",
        explanation: "The === operator checks for both value and type equality, ensuring that both operands are exactly the same in terms of value and data type.",
    },
    {
        id: 7,
        question: "How do you declare a JavaScript variable?",
        options: ["var x;", "variable x;", "x = var;", "declare x;"],
        answer: "var x;",
        explanation: "In JavaScript, the var, let, or const keywords are used to declare variables. For instance, var x; declares a variable named x.",
    },
    {
        id: 8,
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["String", "Boolean", "Character", "Number"],
        answer: "Character",
        explanation: "JavaScript does not have a specific data type for characters. Instead, it uses the String data type to represent both single characters and longer strings of text. Other common JavaScript data types include Boolean (true/false) and Number (for both integers and floating-point numbers).",
    },
    {
        id: 9,
        question: "Which function is used to parse a string to an integer in JavaScript?",
        options: ["parseInt()", "parseFloat()", "Number()", "toInteger()"],
        answer: "parseInt()",
        explanation: "In JavaScript, parseInt() is used to convert (or parse) a string to an integer. It takes a string as an argument and returns an integer, ignoring any non-numeric characters after the number. Other functions like parseFloat() parse a string to a floating-point number, and Number() can be used for general type conversion, but toInteger() does not exist in JavaScript.",
    },
    {
        id: 10,
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        options: [
            "Refers to the current object",
            "Refers to the previous object",
            "Refers to the parent object",
            "Refers to a global object",
        ],
        answer: "Refers to the current object",
        explanation: "In JavaScript, the this keyword refers to the object that is currently executing the code. Its value depends on the context in which it's used: 1.In a method, this refers to the object that owns the method. 2.In a constructor function or class, this refers to the instance of the object that is being created. 3.In global scope or simple function calls, this refers to the global object (window in browsers).",
    },
    {
        id: 11,
        question: "Which method is used to add new elements to an array in JavaScript?",
        options: ["push()", "pop()", "concat()", "splice()"],
        answer: "push()",
        explanation: "In JavaScript, the push() method is used to add one or more elements to the end of an array. This method modifies the original array and returns the new length of the array.",
    },
    {
        id: 12,
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["onmouseover", "onchange", "onclick", "onmouseclick"],
        answer: "onclick",
        explanation: "In JavaScript, the onclick event occurs when a user clicks on an HTML element. It's one of the most commonly used events for interactivity in web applications.",
    },
    {
        id: 13,
        question: "Which of the following is the correct way to write a comment in JavaScript?",
        options: ["<!-- Comment -->", "// Comment", "/* Comment */", "' Comment"],
        answer: "// Comment",
        explanation: "In JavaScript, single-line comments are written with '//'.",
    },
    {
        id: 14,
        question: "How do you define a function in JavaScript?",
        options: ["function myFunction() {}", "myFunction function() {}", "func myFunction() {}", "define myFunction() {}"],
        answer: "function myFunction() {}",
        explanation: "The 'function' keyword is used to define a function in JavaScript.",
    },
    {
        id: 15,
        question: "Which built-in method sorts the elements of an array in JavaScript?",
        options: ["changeOrder()", "order()", "sort()", "arrange()"],
        answer: "sort()",
        explanation: "The sort() method sorts the elements of an array.",
    },
    {
        id: 16,
        question: "How can you detect the client's browser name in JavaScript?",
        options: ["navigator.appName", "browser.name", "client.browser", "window.appName"],
        answer: "navigator.appName",
        explanation: "The 'navigator.appName' property contains the name of the browser.",
    },
    {
        id: 17,
        question: "Which of the following is used to loop over arrays in JavaScript?",
        options: ["for", "forEach", "map", "while"],
        answer: "forEach",
        explanation: "The forEach() method is commonly used to loop through arrays in JavaScript.",
    },
    {
        id: 18,
        question: "What is the output of: console.log(typeof null);",
        options: ["null", "object", "undefined", "boolean"],
        answer: "object",
        explanation: "In JavaScript, 'null' is considered an object due to a legacy bug.",
    },
    {
        id: 19,
        question: "Which method is used to find the length of a string in JavaScript?",
        options: [".length", ".size", ".count", ".index"],
        answer: ".length",
        explanation: "The 'length' property returns the length of a string in JavaScript.",
    },
    {
        id: 20,
        question: "Which statement is used to stop a loop in JavaScript?",
        options: ["break", "stop", "exit", "return"],
        answer: "break",
        explanation: "The 'break' statement terminates the current loop in JavaScript.",
    },
];

export const KotlinQuestions = [
    {
        id: 1,
        question: "Which of the following is the correct way to declare a variable in Kotlin?",
        options: ["var x: Int = 10", "int x = 10", "val x = 10", "int x: 10"],
        answer: "var x: Int = 10",
        explanation: "In Kotlin, variables are declared using either var for mutable variables or val for immutable variables. Option A is correct because it uses var and explicitly specifies the type Int."
    },
    {
        id: 2,
        question: "What is the difference between val and var in Kotlin?",
        options: ["val is mutable, var is immutable", "val is immutable, var is mutable", "Both are mutable", "Both are immutable"],
        answer: "val is immutable, var is mutable",
        explanation: "In Kotlin, val declares a read-only (immutable) variable, while var declares a mutable variable."
    },
    {
        id: 3,
        question: "Which of the following is used to create a function in Kotlin?",
        options: ["function", "fun", "def", "void"],
        answer: "fun",
        explanation: "In Kotlin, the fun keyword is used to declare a function."
    },
    {
        id: 4,
        question: "What is the default visibility modifier in Kotlin for classes and functions?",
        options: ["public", "private", "protected", "internal"],
        answer: "public",
        explanation: "The default visibility modifier in Kotlin is public, meaning the class or function can be accessed from anywhere."
    },
    {
        id: 5,
        question: "Which keyword is used to define a constant in Kotlin?",
        options: ["const", "final", "static", "immutable"],
        answer: "const",
        explanation: "The const keyword is used to declare compile-time constants in Kotlin."
    },
    {
        id: 6,
        question: "Which of the following represents a nullable variable in Kotlin?",
        options: ["var x: Int", "var x: Int?", "var x: Null", "var x = 0"],
        answer: "var x: Int?",
        explanation: "The ? in Int? indicates that the variable x can hold either an Int or null."
    },
    {
        id: 7,
        question: "How can you handle null safety in Kotlin?",
        options: ["Using try-catch", "Using the if statement", "Using the safe call operator ?.", "Using the throw statement"],
        answer: "Using the safe call operator ?.",
        explanation: "The safe call operator ?. is used to handle null safety in Kotlin, avoiding NullPointerException."
    },
    {
        id: 8,
        question: "Which of the following can be used to check if a value belongs to a specific type in Kotlin?",
        options: ["as", "is", "instanceof", "typeof"],
        answer: "is",
        explanation: "The is keyword is used to check if a value is of a specific type in Kotlin."
    },
    {
        id: 9,
        question: "What is the equivalent of the switch statement in Kotlin?",
        options: ["select", "choose", "when", "if-else"],
        answer: "when",
        explanation: "The when expression in Kotlin is similar to the switch statement in other languages."
    },
    {
        id: 10,
        question: "Which of the following is a feature of Kotlin?",
        options: ["Kotlin allows extension functions.", "Kotlin does not support functional programming.", "Kotlin does not support null safety.", "Kotlin is only for Android development."],
        answer: "Kotlin allows extension functions.",
        explanation: "Kotlin supports extension functions, null safety, and is a versatile language for more than just Android development."
    },
    {
        id: 11,
        question: "How do you create a for loop in Kotlin?",
        options: ["for (i = 0; i < 10; i++)", "for (i in 0 until 10)", "for (i -> 0; i -> 10)", "for i in range(0, 10)"],
        answer: "for (i in 0 until 10)",
        explanation: "In Kotlin, the correct syntax for a for loop is for (i in 0 until 10)."
    },
    {
        id: 12,
        question: "How do you create a data class in Kotlin?",
        options: ["class MyClass", "data class MyClass", "dataclass MyClass", "final class MyClass"],
        answer: "data class MyClass",
        explanation: "The data class keyword in Kotlin is used to create a class that is mainly used to hold data."
    },
    {
        id: 13,
        question: "Which function in Kotlin is used to print output to the console?",
        options: ["print()", "println()", "echo()", "write()"],
        answer: "println()",
        explanation: "The println() function is used to print output to the console in Kotlin."
    },
    {
        id: 14,
        question: "What is the primary purpose of the companion object in Kotlin?",
        options: ["To create multiple instances of a class", "To define static members", "To create constructors", "To handle exceptions"],
        answer: "To define static members",
        explanation: "companion object in Kotlin is used to define static members within a class."
    },
    {
        id: 15,
        question: `What is the output of the following Kotlin code? val list = listOf(1, 2, 3, 4)eprintln(list".size)`,
        options: ["3", "4", "2", "5"],
        answer: "4",
        explanation: "The size of the list listOf(1, 2, 3, 4) is 4."
    },
    {
        id: 16,
        question: "What is the purpose of the let function in Kotlin?",
        options: ["To handle null values safely", "To run code on a new thread", "To create a new list", "To perform type casting"],
        answer: "To handle null values safely",
        explanation: "The let function is used for null-safe calls and to execute code on non-null objects."
    },
    {
        id: 17,
        question: "Which of the following is true about inheritance in Kotlin?",
        options: ["By default, all classes are final.", "By default, all classes are open for inheritance.", "Classes need to be marked with open to be inheritable.", "Kotlin does not support inheritance."],
        answer: "Classes need to be marked with open to be inheritable.",
        explanation: "In Kotlin, classes are final by default and must be marked with the open keyword to be inheritable."
    },
    {
        id: 18,
        question: "What is the output of the following Kotlin code? val x = 10 val y = 20 println(x + y)",
        options: ["30", "1020", "40", "50"],
        answer: "30",
        explanation: "The output is 30 as x + y is 10 + 20."
    },
    {
        id: 19,
        question: "Which of the following is true about Kotlin coroutines?",
        options: ["They are used to perform long-running tasks on the main thread.", "They simplify asynchronous programming.", "They run synchronously by default.", "They are deprecated in Kotlin."],
        answer: "They simplify asynchronous programming.",
        explanation: "Kotlin coroutines are used to simplify asynchronous programming by suspending functions and avoiding blocking threads."
    },
    {
        id: 20,
        question: "How do you define a nullable type in Kotlin?",
        options: ["Int", "Int?", "Null<Int>", "Nullable<Int>"],
        answer: "Int?",
        explanation: "A nullable type in Kotlin is declared with a ? after the type, like Int?, allowing the variable to hold either a value or null."
    },
];

export const MongoDBQuestions = [
    {
        id: 1,
        question: "What is MongoDB?",
        options: ["A relational database", "A NoSQL database", "A cloud service", "A file storage system"],
        answer: "A NoSQL database",
        explanation: "MongoDB is a NoSQL database designed for handling large amounts of data that are stored in a non-relational format."
    },
    {
        id: 2,
        question: "Which of the following is a feature of MongoDB?",
        options: ["It stores data in tables", "It stores data in JSON-like documents", "It requires schemas for all collections", "It does not support indexing"],
        answer: "It stores data in JSON-like documents",
        explanation: "MongoDB stores data in BSON (Binary JSON) format, which allows flexibility in the structure of the stored data."
    },
    {
        id: 3,
        question: "Which data format does MongoDB use to store data?",
        options: ["JSON", "BSON", "XML", "CSV"],
        answer: "BSON",
        explanation: "MongoDB uses BSON (Binary JSON) to store data, which is a binary representation of JSON-like documents."
    },
    {
        id: 4,
        question: "What command is used to insert data into a MongoDB collection?",
        options: ["db.collection.add()", "db.collection.insert()", "db.collection.push()", "db.collection.update()"],
        answer: "db.collection.insert()",
        explanation: "The insert() method is used to insert documents into a MongoDB collection."
    },
    {
        id: 5,
        question: "Which of the following is the correct way to create a new database in MongoDB?",
        options: ["create database newDB", "use newDB", "new database newDB", "db.newDB"],
        answer: "use newDB",
        explanation: "In MongoDB, a database is created by switching to it using use newDB, and the database will be created automatically when a document is inserted."
    },
    {
        id: 6,
        question: "What is a collection in MongoDB?",
        options: ["A row of data", "A group of related documents", "A table of data", "A schema definition"],
        answer: "A group of related documents",
        explanation: "In MongoDB, a collection is a group of related documents, similar to a table in a relational database."
    },
    {
        id: 7,
        question: "How do you find all documents in a MongoDB collection?",
        options: ["db.collection.getAll()", "db.collection.find()", "db.collection.retrieveAll()", "db.collection.queryAll()"],
        answer: "db.collection.find()",
        explanation: "The find() method is used to retrieve all documents from a MongoDB collection."
    },
    {
        id: 8,
        question: "Which command is used to update a document in MongoDB?",
        options: ["db.collection.modify()", "db.collection.update()", "db.collection.insertOrUpdate()", "db.collection.change()"],
        answer: "db.collection.update()",
        explanation: "The update() method is used to modify documents in a MongoDB collection."
    },
    {
        id: 9,
        question: "What is a document in MongoDB?",
        options: ["A file stored in MongoDB", "A JSON-like structure representing data", "A schema definition", "A column in a relational database"],
        answer: "A JSON-like structure representing data",
        explanation: "A document in MongoDB is a JSON-like structure that contains the actual data, such as key-value pairs."
    },
    {
        id: 10,
        question: "How do you delete a document in MongoDB?",
        options: ["db.collection.remove()", "db.collection.delete()", "db.collection.clear()", "db.collection.drop()"],
        answer: "db.collection.remove()",
        explanation: "The remove() method is used to delete documents from a MongoDB collection."
    },
    {
        id: 11,
        question: "Which command is used to delete a collection in MongoDB?",
        options: ["db.collection.remove()", "db.collection.delete()", "db.collection.drop()", "db.collection.clear()"],
        answer: "db.collection.drop()",
        explanation: "The drop() method is used to remove an entire collection from a MongoDB database."
    },
    {
        id: 12,
        question: "What is the default port for MongoDB?",
        options: ["27018", "27017", "8080", "3306"],
        answer: "27017",
        explanation: "MongoDB runs on port 27017 by default."
    },
    {
        id: 13,
        question: "Which of the following is true about MongoDB indexing?",
        options: ["MongoDB does not support indexes", "MongoDB automatically creates indexes on all fields", "MongoDB allows creating indexes to improve query performance", "Indexes slow down the MongoDB queries"],
        answer: "MongoDB allows creating indexes to improve query performance",
        explanation: "Indexes in MongoDB improve query performance by allowing faster data retrieval."
    },
    {
        id: 14,
        question: "What is a primary key in MongoDB?",
        options: ["_id field", "key field", "primary field", "unique field"],
        answer: "_id field",
        explanation: "Every MongoDB document contains a unique _id field, which acts as the primary key."
    },
    {
        id: 15,
        question: "How do you retrieve only certain fields from a document in MongoDB?",
        options: [
            "db.collection.find({field1: value1}, {field2: 1})",
            "db.collection.findAll({field2: 1})",
            "db.collection.select({field1: 1})",
            "db.collection.retrieve({field1: true})"
        ],
        answer: "db.collection.find({field1: value1}, {field2: 1})",
        explanation: "The second argument in the find() method specifies the fields to be returned from the query. 1 means include the field, and 0 means exclude it."
    },
    {
        id: 16,
        question: "What does the $set operator do in MongoDB?",
        options: ["It creates a new collection", "It adds a new document to the database", "It updates specific fields in a document", "It deletes specific fields from a document"],
        answer: "It updates specific fields in a document",
        explanation: "The $set operator is used to update specific fields in a document without affecting the other fields."
    },
    {
        id: 17,
        question: "What is a replica set in MongoDB?",
        options: [
            "A single-node cluster",
            "A group of MongoDB databases stored on a single server",
            "A group of MongoDB instances that provide redundancy",
            "A collection of backup databases"],
        answer: "A group of MongoDB instances that provide redundancy",
        explanation: "A replica set is a group of MongoDB instances that maintain the same data set, providing high availability and redundancy."
    },
    {
        id: 18,
        question: "How do you limit the number of results returned in a MongoDB query?",
        options: ["db.collection.limit(5)", "db.collection.find(5)", "db.collection.slice(5)", "db.collection.top(5)"],
        answer: "db.collection.limit(5)",
        explanation: "The limit() method is used to specify the number of results to return in a query."
    },
    {
        id: 19,
        question: "What does the aggregate function do in MongoDB?",
        options: [
            "It deletes documents based on a condition",
            "It updates documents across collections",
            "It processes documents and returns computed results",
            "It adds documents to collections"
        ],
        answer: "It processes documents and returns computed results",
        explanation: "The aggregate function is used for data processing and transformation in MongoDB, returning computed results like sums, averages, or grouped data."
    },
    {
        id: 20,
        question: "Which of the following is true about MongoDB schema design?",
        options: [
            "MongoDB enforces strict schemas",
            "MongoDB is schema-less, allowing flexible document structures",
            "MongoDB uses SQL to define schemas",
            "Collections in MongoDB must have the same document structure"
        ],
        answer: "MongoDB is schema-less, allowing flexible document structures",
        explanation: "MongoDB is schema-less, meaning you don't need to define a strict schema for your collections, and documents can have varying structures."
    },
];
export const MySQLQuestions = [
    {
        id: 1,
        question: "What is MySQL?",
        options: ["A programming language", "A NoSQL database", "A relational database management system", "An operating system"],
        answer: "A relational database management system",
        explanation: "MySQL is a popular relational database management system (RDBMS) that uses SQL for database operations."
    },
    {
        id: 2,
        question: "Which SQL command is used to retrieve data from a database?",
        options: ["INSERT", "DELETE", "SELECT", "UPDATE"],
        answer: "SELECT",
        explanation: "The SELECT statement is used to retrieve data from a MySQL database."
    },
    {
        id: 3,
        question: "Which of the following is a valid MySQL data type?",
        options: ["TEXT", "INT", "DATE", "All of the above"],
        answer: "All of the above",
        explanation: "MySQL supports various data types like TEXT, INT, and DATE."
    },
    {
        id: 4,
        question: "How do you create a new database in MySQL?",
        options: ["CREATE NEW DATABASE dbname;", "CREATE DATABASE dbname;", "ADD DATABASE dbname;", "INSERT INTO DATABASE dbname;"],
        answer: "CREATE DATABASE dbname;",
        explanation: "The correct syntax to create a new database in MySQL is CREATE DATABASE dbname;."
    },
    {
        id: 5,
        question: "Which of the following is the correct way to delete a table in MySQL?",
        options: ["DROP DATABASE tablename;", "DELETE FROM tablename;", "DROP TABLE tablename;", "REMOVE TABLE tablename;"],
        answer: "DROP TABLE tablename;",
        explanation: "The DROP TABLE command is used to delete an entire table and its structure in MySQL."
    },
    {
        id: 6,
        question: "Which of the following MySQL commands is used to modify an existing record?",
        options: ["UPDATE", "MODIFY", "INSERT", "ALTER"],
        answer: "UPDATE",
        explanation: "The UPDATE statement is used to modify existing records in a table."
    },
    {
        id: 7,
        question: "What command is used to remove duplicates from a SELECT statement?",
        options: ["UNIQUE", "DISTINCT", "DELETE", "REMOVE"],
        answer: "DISTINCT",
        explanation: "The DISTINCT keyword is used to return only distinct (unique) values in a SELECT query."
    },
    {
        id: 8,
        question: "Which SQL clause is used to filter records based on a condition?",
        options: ["GROUP BY", "WHERE", "ORDER BY", "JOIN"],
        answer: "WHERE",
        explanation: "The WHERE clause is used to filter records that meet a specific condition."
    },
    {
        id: 9,
        question: "How do you add a new column to an existing table in MySQL?",
        options: ["ADD COLUMN column_name TO table_name;", "INSERT COLUMN column_name INTO table_name;", "ALTER TABLE table_name ADD column_name;", "UPDATE TABLE table_name ADD column_name;"],
        answer: "ALTER TABLE table_name ADD column_name;",
        explanation: "The ALTER TABLE statement is used to add, delete, or modify columns in an existing table."
    },
    {
        id: 10,
        question: "What does the JOIN keyword do in MySQL?",
        options: ["Combines rows from two or more tables", "Deletes rows from multiple tables", "Inserts data into multiple tables", "Renames tables"],
        answer: "Combines rows from two or more tables",
        explanation: "The JOIN keyword is used to combine rows from two or more tables based on a related column between them."
    },
    {
        id: 11,
        question: "What is a primary key in MySQL?",
        options: ["A column that stores unique values for each row", "A column used for joining two tables", "A row identifier", "A foreign key from another table"],
        answer: "A column that stores unique values for each row",
        explanation: "A primary key uniquely identifies each record in a table and cannot be NULL."
    },
    {
        id: 12,
        question: "Which of the following commands is used to delete a database in MySQL?",
        options: ["DELETE DATABASE dbname;", "REMOVE DATABASE dbname;", "DROP DATABASE dbname;", "ERASE DATABASE dbname;"],
        answer: "DROP DATABASE dbname;",
        explanation: "The DROP DATABASE statement is used to delete a database and all its tables."
    },
    {
        id: 13,
        question: "Which function is used to get the current date in MySQL?",
        options: ["DATE()", "NOW()", "TODAY()", "CURRENT_DATE()"],
        answer: "NOW()",
        explanation: "The NOW() function returns the current date and time in MySQL."
    },
    {
        id: 14,
        question: "How do you sort records in ascending order in a MySQL query?",
        options: ["SORT BY", "ORDER BY ASC", "SORT ASC", "FILTER BY"],
        answer: "ORDER BY ASC",
        explanation: "The ORDER BY clause is used to sort the records, and ASC specifies ascending order."
    },
    {
        id: 15,
        question: "Which of the following commands is used to change a column's data type?",
        options: ["MODIFY COLUMN", "ALTER COLUMN", "ALTER TABLE table_name MODIFY column_name", "UPDATE COLUMN"],
        answer: "ALTER TABLE table_name MODIFY column_name",
        explanation: "The ALTER TABLE statement is used along with the MODIFY keyword to change the data type of a column."
    },
    {
        id: 16,
        question: "Which MySQL statement is used to remove all data from a table but keeps the table structure?",
        options: ["DELETE", "DROP", "TRUNCATE", "CLEAR"],
        answer: "TRUNCATE",
        explanation: "The TRUNCATE command removes all rows from a table but keeps its structure intact."
    },
    {
        id: 17,
        question: "Which of the following is used to create an index on a table?",
        options: ["CREATE INDEX", "INSERT INDEX", "ADD INDEX", "UPDATE INDEX"],
        answer: "CREATE INDEX",
        explanation: "The CREATE INDEX command is used to add an index to a table, which improves query performance."
    },
    {
        id: 18,
        question: "How do you check the structure of a table in MySQL?",
        options: ["DESCRIBE table_name;", "SHOW table_name;", "VIEW table_name;", "DISPLAY table_name;"],
        answer: "DESCRIBE table_name;",
        explanation: "The DESCRIBE command is used to display the structure of a table, including column names, types, and other attributes."
    },
    {
        id: 19,
        question: "Which clause is used to group records that have the same values in MySQL?",
        options: ["GROUP BY", "JOIN", "WHERE", "ORDER BY"],
        answer: "GROUP BY",
        explanation: "The GROUP BY clause is used to group rows that have the same values into summary rows."
    },
    {
        id: 20,
        question: "Which MySQL clause is used to filter aggregated data?",
        options: ["WHERE", "FILTER", "HAVING", "GROUP BY"],
        answer: "HAVING",
        explanation: "The HAVING clause is used to filter records after aggregation, such as filtering groups of data."
    },
];

export const NodeQuestions = [
    {
        id: 1,
        question: "What is Node.js?",
        options: ["A web server", "A JavaScript library", "A JavaScript runtime environment", "A database"],
        answer: "A JavaScript runtime environment",
        explanation: "Node.js is a runtime environment that allows JavaScript to be executed outside the browser, primarily for server-side development."
    },
    {
        id: 2,
        question: "Node.js is built on which JavaScript engine?",
        options: ["Chakra", "SpiderMonkey", "V8", "Nitro"],
        answer: "V8",
        explanation: "Node.js is built on Google Chrome’s V8 JavaScript engine, which allows it to execute JavaScript efficiently."
    },
    {
        id: 3,
        question: "Which of the following is a built-in module in Node.js?",
        options: ["fs", "express", "lodash", "react"],
        answer: "fs",
        explanation: "The fs module is a core Node.js module used for handling file system operations, while the others are external packages."
    },
    {
        id: 4,
        question: "Which method is used to create an HTTP server in Node.js?",
        options: ["http.createServer()", "http.newServer()", "server.create()", "server.new()"],
        answer: "http.createServer()",
        explanation: "The http.createServer() method is used to create an HTTP server in Node.js."
    },
    {
        id: 5,
        question: "What does the npm command stand for in Node.js?",
        options: ["Node Project Manager", "Node Package Manager", "Node Program Manager", "None of the above"],
        answer: "Node Package Manager",
        explanation: "npm stands for Node Package Manager, which is used to manage and install Node.js packages."
    },
    {
        id: 6,
        question: "Which command is used to initialize a new Node.js project?",
        options: ["node init", "npm start", "npm init", "node create"],
        answer: "npm init",
        explanation: "The npm init command is used to initialize a new Node.js project by creating a package.json file."
    },
    {
        id: 7,
        question: "Which of the following is a popular web framework for Node.js?",
        options: ["Flask", "Django", "Express", "Laravel"],
        answer: "Express",
        explanation: "Express is a widely used web framework for Node.js that simplifies the creation of server-side applications."
    },
    {
        id: 8,
        question: "How can you import a module in Node.js?",
        options: ["import module from 'module';", "require('module');", "include 'module';", "module.import('module');"],
        answer: "require('module');",
        explanation: "In Node.js, modules are imported using the require() function."
    },
    {
        id: 9,
        question: "What is the default package manager for Node.js?",
        options: ["Yarn", "Composer", "npm", "pip"],
        answer: "npm",
        explanation: "The default package manager for Node.js is npm, which allows developers to manage and install packages."
    },
    {
        id: 10,
        question: "What does the fs.readFile() method do in Node.js?",
        options: ["It writes data to a file", "It reads the contents of a file asynchronously", "It deletes a file", "It renames a file"],
        answer: "It reads the contents of a file asynchronously",
        explanation: "The fs.readFile() method reads the contents of a file asynchronously and returns the result."
    },
    {
        id: 11,
        question: "Which of the following is true about Node.js?",
        options: ["Node.js is single-threaded and asynchronous", "Node.js is multi-threaded", "Node.js is synchronous by default", "Node.js runs only in the browse"],
        answer: "Node.js is single-threaded and asynchronous",
        explanation: "Node.js uses a single-threaded event loop and supports asynchronous operations, making it suitable for handling multiple requests concurrently."
    },
    {
        id: 12,
        question: "Which object represents the server in an HTTP request in Node.js?",
        options: ["req", "res", "server", "http"],
        answer: "http",
        explanation: "The http module is used to create an HTTP server in Node.js, and objects like req and res represent the request and response, respectively."
    },
    {
        id: 13,
        question: "How do you stop a running Node.js application?",
        options: ["Ctrl + Z", "Alt + F4", "Ctrl + C", "Ctrl + D"],
        answer: "Ctrl + C",
        explanation: "Pressing Ctrl + C in the terminal stops a running Node.js application."
    },
    {
        id: 14,
        question: "What is the purpose of the package.json file in a Node.js project?",
        options: ["To store environment variables", "To define project metadata and dependencies", "To include Node.js core modules", "To write JavaScript code"],
        answer: "To define project metadata and dependencies",
        explanation: "The package.json file contains metadata about the project and lists the project's dependencies."
    },
    {
        id: 15,
        question: "Which method is used to listen to incoming connections in a Node.js HTTP server?",
        options: ["server.connect()", "server.on()", "server.listen()", "server.request()"],
        answer: "server.listen()",
        explanation: "The server.listen() method is used to bind and listen for connections on a specified host and port."
    },
    {
        id: 16,
        question: "What does the process object in Node.js represent?",
        options: ["The current browser environment", "The global object representing the Node.js runtime", "The current file system", "The JavaScript code interprete"],
        answer: "The global object representing the Node.js runtime",
        explanation: "The process object in Node.js provides information about the current Node.js process, including environment variables and runtime details."
    },
    {
        id: 17,
        question: "How do you handle exceptions in asynchronous code in Node.js?",
        options: ["Using try/catch blocks", "Using async/await with try/catch", "Using console.log", "Ignoring them"],
        answer: "Using async/await with try/catch",
        explanation: "When using async/await, exceptions in asynchronous code are handled using try/catch blocks."
    },
    {
        id: 18,
        question: "Which of the following is true about callback functions in Node.js?",
        options: ["They are executed synchronously",
            "They are used for error handling",
            "They are executed after an asynchronous operation is complete",
            "They are only used in event handlers"],
        answer: "They are executed after an asynchronous operation is complete",
        explanation: "In Node.js, callbacks are functions passed to other functions to be executed after an asynchronous operation completes."
    },
    {
        id: 19,
        question: "What is middleware in the context of Express.js?",
        options: ["A file system module", "A function executed during the lifecycle of a request", "A database connection handler", "A data validation library"],
        answer: "A function executed during the lifecycle of a request",
        explanation: "Middleware functions in Express.js are functions that have access to the request and response objects and can modify them or terminate the request/response cycle."
    },
    {
        id: 20,
        question: "What does the nodemon tool do?",
        options: ["Automatically restarts the Node.js application when file changes are detected",
            "Lints JavaScript code", "Runs unit tests", "Executes Node.js scripts in parallel"],
        answer: "Automatically restarts the Node.js application when file changes are detected",
        explanation: "nodemon is a development tool that automatically restarts the Node.js application whenever file changes in the directory are detected."
    },
];
export const PHPQuestions = [
    {
        id: 1,
        question: "What does PHP stand for?",
        options: ["Personal Home Page", "Hypertext Preprocessor", "Preprocessor Home Page", "Private Home Page"],
        answer: "Hypertext Preprocessor",
        explanation: "PHP originally stood for 'Personal Home Page,' but now it is a recursive acronym for 'Hypertext Preprocessor.'"
    },
    {
        id: 2,
        question: "Which of the following is the correct way to declare a variable in PHP?",
        options: ["var x = 10;", "$x = 10;", "int x = 10;", "let x = 10;"],
        answer: "$x = 10;",
        explanation: "In PHP, variables are declared with a dollar sign $ followed by the variable name."
    },
    {
        id: 3,
        question: "How do you create an array in PHP?",
        options: ["array[] = {1, 2, 3};", "$arr = (1, 2, 3);", "$arr = array(1, 2, 3);", "$arr = [1, 2, 3];"],
        answer: "$arr = array(1, 2, 3);",
        explanation: "Arrays can be created using the array() function or shorthand with square brackets [].",
    },
    {
        id: 4,
        question: "Which symbol is used for comments in PHP?",
        options: ["# and //", "/* ... */", "// and /** ... */", "All of the above"],
        answer: "# and //",
        explanation: "PHP supports single-line comments with # and //, as well as multi-line comments with /* ... */.",
    },
    {
        id: 5,
        question: "What is the output of echo 5 + '10' + '10.5'; in PHP?",
        options: ["25", "20.5", "15", "10.5"],
        answer: "25",
        explanation: "PHP performs type juggling, converting the string values to numbers, so the expression evaluates to 5 + 10 + 10.5, which equals 25.",
    },
    {
        id: 6,
        question: "How do you start a session in PHP?",
        options: ["session_start();", "start_session();", "session();", "begin_session();"],
        answer: "session_start();",
        explanation: "The session_start() function is used to start a new session or resume an existing session.",
    },
    {
        id: 7,
        question: "What is the purpose of the include statement in PHP?",
        options: ["To include external libraries", "To include code from another file", "To include HTML files", "To include CSS files"],
        answer: "To include code from another file",
        explanation: "The include statement is used to include and evaluate a specified file during the execution of a PHP script.",
    },
    {
        id: 8,
        question: "Which of the following is a way to define a constant in PHP?",
        options: ["define('MY_CONSTANT', 10);", "constant('MY_CONSTANT', 10);", "const MY_CONSTANT = 10;", "Both A and C"],
        answer: "define('MY_CONSTANT', 10);",
        explanation: "Constants can be defined using the define() function or the const keyword.",
    },
    {
        id: 9,
        question: "What is the purpose of the $_POST superglobal in PHP?",
        options: ["To retrieve data from a URL", "To retrieve data sent via the POST method", "To retrieve data from cookies", "To retrieve ssion data"],
        answer: "To retrieve data sent via the POST method",
        explanation: "The $_POST superglobal is an associative array that contains data sent to the server via the HTTP POST method.",
    },
    {
        id: 10,
        question: "What is the correct way to check if a variable is set in PHP?",
        options: ["if (isset($var))", "if (check($var))", "if ($var.isset())", "if (exists($var))"],
        answer: "if (isset($var))",
        explanation: "The isset() function checks if a variable is set and is not NULL.",
    },
    {
        id: 11,
        question: "Which of the following functions is used to connect to a MySQL database in PHP?",
        options: ["mysqli_connect();", "mysql_connect();", "db_connect();", "connect_mysql();"],
        answer: "mysqli_connect();",
        explanation: "The mysqli_connect() function is used to establish a connection to a MySQL database.",
    },
    {
        id: 12,
        question: "How do you retrieve query parameters from the URL in PHP?",
        options: ["$_GET", "$_POST", "$_REQUEST", "$_URL"],
        answer: "$_GET",
        explanation: "The $_GET superglobal is used to collect data sent in the URL query string.",
    },
    {
        id: 13,
        question: "What is the output of var_dump(2 + '3 apples');?",
        options: ["5", "Warning", "3", "int(5)"],
        answer: "int(5)",
        explanation: "PHP will convert the string to a number, ignoring the non-numeric part, resulting in int(5).",
    },
    {
        id: 14,
        question: "How do you create a function in PHP?",
        options: ["function myFunction() {}", "create myFunction() {}", "myFunction() {}", "def myFunction() {}"],
        answer: "function myFunction() {}",
        explanation: "Functions in PHP are defined using the function keyword followed by the function name and parentheses.",
    },
    {
        id: 15,
        question: "Which operator is used for string concatenation in PHP?",
        options: [".", "+", "&", ","],
        answer: ".",
        explanation: "The . operator is used to concatenate strings in PHP.",
    },
    {
        id: 16,
        question: "What is the output of echo 'Hello' . ' ' . 'World';?",
        options: ["HelloWorld", "Hello World", "Hello, World", "Hello + World"],
        answer: "Hello World",
        explanation: "The . operator concatenates the strings, resulting in Hello World.",
    },
    {
        id: 17,
        question: "What is the purpose of the header() function in PHP?",
        options: ["To output HTML headers", "To send raw HTTP headers", "To set cookie headers", "To retrieve HTTP headers"],
        answer: "To send raw HTTP headers",
        explanation: "The header() function is used to send raw HTTP headers to the client.",
    },
    {
        id: 18,
        question: "Which of the following is a way to access an object's properties in PHP?",
        options: ["object.property", "object->property", "object{property}", "object[property]"],
        answer: "object->property",
        explanation: "In PHP, the -> operator is used to access properties and methods of an object.",
    },
    {
        id: 19,
        question: "How do you define an associative array in PHP?",
        options: ["$arr = array('key' => 'value');", "$arr = ['key' => 'value'];", "$arr = key => value;", "Both A and B"],
        answer: "$arr = array('key' => 'value');",
        explanation: "Associative arrays can be defined using either the array() function or the shorthand with square brackets.",
    },
    {
        id: 20,
        question: "What is the purpose of the die() function in PHP?",
        options: ["To terminate the script", "To create an infinite loop", "To throw an exception", "To pause the execution"],
        answer: "To terminate the script",
        explanation: "The die() function is used to terminate the current script and optionally output a message.",
    },
];
export const PythonQuestions = [
    {
        id: 1,
        question: "What is Python?",
        options: ["A high-level programming language", "A web framework", "A database", "A markup language"],
        answer: "A high-level programming language",
        explanation: "Python is a high-level, interpreted programming language known for its readability and versatility."
    },
    {
        id: 2,
        question: "Which of the following is the correct file extension for Python files?",
        options: [".py", ".pt", ".pyt", ".python"],
        answer: ".py",
        explanation: "Python files use the .py extension."
    },
    {
        id: 3,
        question: "What is the correct way to create a function in Python?",
        options: ["function myFunc()", "def myFunc():", "create myFunc():", "function:myFunc()"],
        answer: "def myFunc():",
        explanation: "In Python, functions are defined using the def keyword followed by the function name and parentheses."
    },
    {
        id: 4,
        question: "Which of the following data types is immutable in Python?",
        options: ["List", "Set", "Dictionary", "Tuple"],
        answer: "Tuple",
        explanation: "Tuples are immutable, meaning once created, their elements cannot be changed."
    },
    {
        id: 5,
        question: "How do you write a comment in Python?",
        options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "<!-- This is a comment -->"],
        answer: "# This is a comment",
        explanation: "Python comments start with the # symbol."
    },
    {
        id: 6,
        question: "What is the output of print(2 ** 3)?",
        options: ["6", "9", "8", "5"],
        answer: "8",
        explanation: "The ** operator is used for exponentiation in Python. So, 2 ** 3 equals 2^3, which is 8."
    },
    {
        id: 7,
        question: "How do you create a list in Python?",
        options: ["myList = {1, 2, 3}", "myList = (1, 2, 3)", "myList = [1, 2, 3]", "myList = <1, 2, 3>"],
        answer: "myList = [1, 2, 3]",
        explanation: "Lists are created using square brackets []."
    },
    {
        id: 8,
        question: "Which keyword is used for exception handling in Python?",
        options: ["try", "catch", "throw", "except"],
        answer: "try",
        explanation: "The try block is used to handle exceptions in Python. It is followed by the except block."
    },
    {
        id: 9,
        question: "What is the output of print(type([]))?",
        options: ["<class 'tuple'>", "<class 'list'>", "<class 'set'>", "<class 'dict'>"],
        answer: "<class 'list'>",
        explanation: "The type function shows the type of an object. In this case, [] is a list, so it returns <class 'list'>."
    },
    {
        id: 10,
        question: "How do you add an element to a list in Python?",
        options: ["list.add()", "list.append()", "list.insert()", "list.addItem()"],
        answer: "list.append()",
        explanation: "The append() method is used to add an element to the end of a list."
    },
    {
        id: 11,
        question: "Which of the following loops is not used in Python?",
        options: ["for", "while", "do-while", "None of the above"],
        answer: "do-while",
        explanation: "Python does not have a do-while loop. Only for and while loops are used."
    },
    {
        id: 12,
        question: "How do you declare a variable in Python?",
        options: ["int x = 10", "x = 10", "let x = 10", "var x = 10"],
        answer: "x = 10",
        explanation: "Python does not require you to specify the data type. You declare a variable simply by assigning a value, as in x = 10."
    },
    {
        id: 13,
        question: "What is the result of len('Hello')?",
        options: ["5", "6", "4", "None"],
        answer: "5",
        explanation: "The len() function returns the number of characters in a string. 'Hello' has 5 characters."
    },
    {
        id: 14,
        question: "How do you create a dictionary in Python?",
        options: ["myDict = {}", "myDict = []", "myDict = ()", "myDict = <>"],
        answer: "myDict = {}",
        explanation: "Dictionaries are created using curly braces {} in Python."
    },
    {
        id: 15,
        question: "What is the purpose of the self keyword in Python classes?",
        options: ["To reference the parent class", "To reference the current instance of the class", "To initialize variables", "Todefine static methods"],
        answer: "To reference the current instance of the class",
        explanation: "self is a reference to the current instance of the class and is used to access variables and methods of the class."
    },
    {
        id: 16,
        question: "Which of the following is used to install third-party packages in Python?",
        options: ["install package", "pip install", "python install", "download package"],
        answer: "pip install",
        explanation: "pip is the package manager for Python used to install third-party libraries and packages."
    },
    {
        id: 17,
        question: "What is a lambda function in Python?",
        options: ["A function that is only used in loops", "A small anonymous function", "A function that returns multiplevalues", "A function used for recursion"],
        answer: "A small anonymous function",
        explanation: "Lambda functions in Python are small, anonymous functions that can have any number of arguments but only one expression."
    },
    {
        id: 18,
        question: "What does continue do in a loop?",
        options: ["Exits the loop", "Restarts the loop", "Skips the current iteration and moves to the next", "Breaks the loop andgoes to the next code block"],
        answer: "Skips the current iteration and moves to the next",
        explanation: "The continue statement skips the rest of the code in the current iteration of a loop and proceeds to the next iteration."
    },
    {
        id: 19,
        question: "Which of the following is used to open a file in Python?",
        options: ["open()", "file()", "read()", "openFile()"],
        answer: "open()",
        explanation: "The open() function is used to open files in Python for reading, writing, or appending."
    },
    {
        id: 20,
        question: "What is the correct syntax for defining a class in Python?",
        options: ["class MyClass {}", "def MyClass():", "class MyClass:", "create class MyClass:"],
        answer: "class MyClass:",
        explanation: "Python classes are defined using the class keyword followed by the class name and a colon."
    },
];
export const ReactQuestion = [
    {
        id: 1,
        question: "What is React?",
        options: ["A database", "A web server", "A JavaScript library for building user interfaces", "A CSS framework"],
        answer: "A JavaScript library for building user interfaces",
        explanation: "React is a JavaScript library developed by Facebook, used for building dynamic user interfaces, particularly for single-page applications.",
    },
    {
        id: 2,
        question: "What is a component in React?",
        options: ["A class in Java", "A reusable piece of UI", "A web server", "A function for data storage"],
        answer: "A reusable piece of UI",
        explanation: "Components are reusable, independent pieces of UI that can have their own state and logic in a React application.",
    },
    {
        id: 3,
        question: "How do you create a React component?",
        options: ["Using the Component function", "Using createComponent()", "By extending React.Component", "Using makeComponent()"],
        answer: "By extending React.Component",
        explanation: "React components can be created by extending the React.Component class or by using function components.",
    },
    {
        id: 4,
        question: "What is JSX?",
        options: ["A CSS preprocessor", "A templating engine", "A syntax extension for JavaScript", "A database query language"],
        answer: "A syntax extension for JavaScript",
        explanation: "JSX is a syntax extension that allows you to write HTML-like code inside JavaScript, which gets transformed into React elements.",
    },
    {
        id: 5,
        question: "What does state represent in a React component?",
        options: ["The component’s appearance", "The component’s data", "The component’s style", "The component’s performance"],
        answer: "The component’s data",
        explanation: "state in React refers to an object that stores the component's dynamic data and determines how it behaves and renders.",
    },
    {
        id: 6,
        question: "How do you update the state in a React component?",
        options: ["Using this.setState()", "Using state = newState", "Using updateState()", "Directly modifying the state variable"],
        answer: "Using this.setState()",
        explanation: "In class components, this.setState() is the method used to update the state object and trigger re-rendering.",
    },
    {
        id: 7,
        question: "Which hook is used to manage state in a functional component?",
        options: ["useClass", "useState", "useEffect", "useReducer"],
        answer: "useState",
        explanation: "useState is a React hook used to manage state in function components, allowing the component to have dynamic data.",
    },
    {
        id: 8,
        question: "What is a React hook?",
        options: ["A function that runs after every render", "A built-in function to add functionality to components", "A lifecycle method", "A way to handle user events"],
        answer: "A built-in function to add functionality to components",
        explanation: "React hooks are built-in functions that allow you to use state and other React features in functional components.",
    },
    {
        id: 9,
        question: "Which hook is used to handle side effects in a functional component?",
        options: ["useState", "useEffect", "useContext", "useMemo"],
        answer: "useEffect",
        explanation: "useEffect is the hook that handles side effects such as data fetching, subscriptions, or manually modifying the DOM in functional components.",
    },
    {
        id: 10,
        question: "What is the purpose of props in React?",
        options: ["To store local component data", "To pass data between components", "To define component style", "To manage component lifecycle"],
        answer: "To pass data between components",
        explanation: "props (short for properties) are used to pass data from a parent component to a child component.",
    },
    {
        id: 11,
        question: "What is the Virtual DOM in React?",
        options: ["A way to interact with databases", "A lightweight copy of the real DOM", "A new JavaScript library", "An alternative to HTML"],
        answer: "A lightweight copy of the real DOM",
        explanation: "The Virtual DOM is a lightweight representation of the actual DOM, which React uses to optimize updates and improve performance by minimizing direct manipulations to the real DOM.",
    },
    {
        id: 12,
        question: "What does useEffect depend on to re-run its effect?",
        options: ["It runs on every render", "It depends on the dependency array passed to it", "It only runs once", "It runs after component unmounts"],
        answer: "It depends on the dependency array passed to it",
        explanation: "useEffect runs after the component renders, and it will re-run only if any value in its dependency array changes.",
    },
    {
        id: 13,
        question: "What is the purpose of key prop in React lists?",
        options: ["To update the state of a component", "To uniquely identify each element in the list", "To pass data from parent to child", "To apply CSS styling"],
        answer: "To uniquely identify each element in the list",
        explanation: "The key prop helps React identify which items have changed, been added, or been removed, improving performance when rendering lists.",
    },
    {
        id: 14,
        question: "How do you pass props in React?",
        options: ["Through this.state", "By using the props object in child components", "Using this.setProps()", "Using sendProps()"],
        answer: "By using the props object in child components",
        explanation: "Props are passed to a child component through attributes in JSX, and accessed inside the child component using the props object.",
    },
    {
        id: 15,
        question: "Which of the following is a correct way to use the useState hook?",
        options: ["const [state, setState] = useState(initialValue)", "const [state, setState] = newState(initialValue)", "const [state] = useState(initialValue)", "setState(initialValue)"],
        answer: "const [state, setState] = useState(initialValue)",
        explanation: "useState returns a pair: the current state and a function that allows you to update it. The first element is the current state, and the second is the state update function.",
    },
    {
        id: 16,
        question: "Which React hook is used to access the value of a reference in the DOM?",
        options: ["useState", "useEffect", "useRef", "useMemo"],
        answer: "useRef",
        explanation: "useRef is a hook that provides a way to access and interact with a DOM element directly within a functional component.",
    },
    {
        id: 17,
        question: "What is a controlled component in React?",
        options: ["A component whose state is managed internally", "A component whose form data is handled by the component state", "A component that is unmounted", "A component that uses lifecycle methods"],
        answer: "A component whose form data is handled by the component state",
        explanation: "A controlled component is a form component that is fully controlled by React, with form input values stored in and managed by the component's state.",
    },
    {
        id: 18,
        question: "What does React.Fragment do?",
        options: ["Creates a component", "Renders multiple elements without adding extra nodes to the DOM", "Performs a side effect", "Updates the state"],
        answer: "Renders multiple elements without adding extra nodes to the DOM",
        explanation: "React.Fragment allows you to group multiple children without adding extra nodes to the DOM, unlike a regular <div>.",
    },
    {
        id: 19,
        question: "Which method is used to handle errors in React components?",
        options: ["componentDidCatch", "renderError", "componentDidError", "errorBoundary"],
        answer: "componentDidCatch",
        explanation: "The componentDidCatch lifecycle method is used in class components to catch and handle errors that occur during rendering, in lifecycle methods, and in constructors.",
    },
    {
        id: 20,
        question: "What does ReactDOM.render() do?",
        options: ["Creates a new component", "Renders a React component into the DOM", "Updates a state", "Handles events in React"],
        answer: "Renders a React component into the DOM",
        explanation: "ReactDOM.render() takes a React component and renders it into a specified DOM node.",
    },
];

export const SwiftQuestions = [
    {
        id: 1,
        question: "What is Swift?",
        options: ["A web framework", "A programming language for iOS and macOS development", "A database system", "A JavaScript runtime"],
        answer: "A programming language for iOS and macOS development",
        explanation: "Swift is a powerful, open-source programming language developed by Apple, primarily used for building applications for iOS, macOS, watchOS, and tvOS.",
    },
    {
        id: 2,
        question: "Which keyword is used to define a constant in Swift?",
        options: ["var", "let", "const", "final"],
        answer: "let",
        explanation: "In Swift, the let keyword is used to declare a constant, which cannot be changed after its initial assignment.",
    },
    {
        id: 3,
        question: "How do you define a function in Swift?",
        options: ["function myFunc()", "def myFunc()", "func myFunc()", "function:myFunc()"],
        answer: "func myFunc()",
        explanation: "The func keyword is used to define a function in Swift.",
    },
    {
        id: 4,
        question: "Which of the following is a valid array declaration in Swift?",
        options: ["var numbers: Array<Int> = [1, 2, 3]", "var numbers: Int[3] = [1, 2, 3]", "var numbers = Array{1, 2, 3}", "var numbers: [Int] = {1, 2, 3}"],
        answer: "var numbers: Array<Int> = [1, 2, 3]",
        explanation: "Arrays in Swift are declared using the Array type or the shorthand syntax [Type].",
    },
    {
        id: 5,
        question: "What does the following Swift statement do? var name: String? = 'John'",
        options: ["Declares a constant string", "Declares an optional string", "Declares a'n integer", "Declares an array"],
        answer: "Declares an optional string",
        explanation: "The question mark (?) after String indicates that name is an optional, meaning it can either hold a value (a string in this case) or be nil.",
    },
    {
        id: 6,
        question: "What does the guard statement do in Swift?",
        options: ["Unconditionally executes code", "Performs optional binding and exits if the condition is false", "Repeats a block of code", "Executes code in case of errors"],
        answer: "Performs optional binding and exits if the condition is false",
        explanation: "The guard statement in Swift is used to check a condition and exit the current scope (usually with a return or break) if the condition is false.",
    },
    {
        id: 7,
        question: "Which collection type is unordered in Swift?",
        options: ["Array", "Dictionary", "Tuple", "Set"],
        answer: "Dictionary",
        explanation: "In Swift, dictionaries store key-value pairs in an unordered manner, meaning the order of elements cannot be guaranteed.",
    },
    {
        id: 8,
        question: "What is the difference between var and let in Swift?",
        options: ["var is used for constants, and let is used for variables",
            "var is used for variables, and let is used for constants",
            "let allows reassignment", "Both are used interchangeably"],
        answer: "var is used for variables, and let is used for constants",
        explanation: "The var keyword is used to declare variables (which can be modified), whereas let is used to declare constants (which cannot be modified).",
    },
    {
        id: 9,
        question: "What is optional chaining in Swift?",
        options: ["A way to handle missing data", "A method of combining strings", "A loop structure", "A technique for writing conditional statements"],
        answer: "A way to handle missing data",
        explanation: "Optional chaining is a process in Swift that allows calling properties, methods, and subscripts on optionals that might currently be nil. If the optional is nil, the call fails gracefully.",
    },
    {
        id: 10,
        question: "How do you safely unwrap an optional in Swift?",
        options: ["Using if let", "Using switch", "Using case let", "Using while let"],
        answer: "Using if let",
        explanation: "The if let construct is used to safely unwrap an optional by assigning its value to a new constant if it contains a value, or handling the case where it’s nil.",
    },
    {
        id: 11,
        question: "What is the purpose of a tuple in Swift?",
        options: ["To define a class", "To group multiple values into a single compound value", "To create an array", "To iterate over a collection"],
        answer: "To group multiple values into a single compound value",
        explanation: "Tuples in Swift are used to group multiple values into a single compound value, and the values can be of different types.",
    },
    {
        id: 12,
        question: "Which keyword is used to declare a structure in Swift?",
        options: ["class", "struct", "type", "enum"],
        answer: "struct",
        explanation: "The struct keyword is used to declare a structure in Swift, which is a value type.",
    },
    {
        id: 13,
        question: "In Swift, how do you mark a function to throw errors?",
        options: ["func myFunc() error", "func myFunc() throws", "func myFunc() try", "func myFunc() catch"],
        answer: "func myFunc() throws",
        explanation: "The throws keyword is used to mark a function that can throw errors in Swift. The function must be called using try.",
    },
    {
        id: 14,
        question: "How do you call a function that can throw an error?",
        options: ["Using catch", "Using throw", "Using try", "Using guard"],
        answer: "Using try",
        explanation: "Functions that throw errors must be called using try to handle potential errors.",
    },
    {
        id: 15,
        question: "What is the default value of an uninitialized optional in Swift?",
        options: ["0", "nil", "false", " '' "],
        answer: "nil",
        explanation: "An uninitialized optional in Swift has a default value of nil, indicating that it does not contain a value.",
    },
    {
        id: 16,
        question: "Which Swift control flow statement is used to perform pattern matching?",
        options: ["if", "for", "switch", "while"],
        answer: "switch",
        explanation: "The switch statement in Swift supports powerful pattern matching, allowing complex cases such as ranges, tuples, and optionals.",
    },
    {
        id: 17,
        question: "What is the use of defer in Swift?",
        options: ["To handle asynchronous operations", "To postpone code execution until the current scope exits", "To repeat a block of code", "To define constants"],
        answer: "To postpone code execution until the current scope exits",
        explanation: "The defer keyword in Swift is used to ensure that a block of code is executed right before the function returns, regardless of how the control leaves the scope.",
    },
    {
        id: 18,
        question: "Which access control level restricts access to the defining source file in Swift?",
        options: ["open", "internal", "private", "public"],
        answer: "private",
        explanation: "The private access control level restricts access to members of a class or struct from within the same source file.",
    },
    {
        id: 19,
        question: "What is a protocol in Swift?",
        options: ["A class inheritance mechanism", "A blueprint of methods, properties, and other requirements", "A way to handle errors", "A way to perform loops"],
        answer: "A blueprint of methods, properties, and other requirements",
        explanation: "A protocol in Swift defines a blueprint of methods, properties, and other requirements that suit a particular task or piece of functionality.",
    },
    {
        id: 20,
        question: "How can you define a property as read-only in Swift?",
        options: ["By declaring it with let", "By using readonly keyword", "By using const keyword", "By making it private"],
        answer: "By declaring it with let",
        explanation: "Declaring a property with let in Swift makes it a constant, meaning it is read-only and cannot be modified after it is initialized.",
    },
];