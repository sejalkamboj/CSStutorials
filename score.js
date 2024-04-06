function calculateScore(answers, correctAnswers) {
    let score = 0;
    // Check if answers and correctAnswers are defined and have the same length
    if (answers && correctAnswers && answers.length === correctAnswers.length) {
        for (let i = 0; i < answers.length; i++) {
            if (answers[i] === correctAnswers[i]) {
                score++;
            }
        }
    } else {
        console.error("Answers or correctAnswers is undefined or their lengths don't match.");
    }
    return score;
}

function displayScoreAndAnswers(answers, correctAnswers, explanations) {
    const scoreContainer = document.getElementById('score');
    const answersList = document.getElementById('answers');

    // Calculate score
    const score = calculateScore(answers, correctAnswers);

    // Display score
    scoreContainer.textContent = score + " out of " + correctAnswers.length;

    // Display correct answers and explanations
    for (let i = 0; i < correctAnswers.length; i++) {
        const listItem = document.createElement('li');
        listItem.innerHTML = "<strong>Question " + (i + 1) + ": </strong>" + explanations[i] + "<br><em>Correct Answer: " + correctAnswers[i] + "</em>";
        answersList.appendChild(listItem);
    }
}

window.onload = function() {
    // Retrieve answers from localStorage
    let answers = JSON.parse(localStorage.getItem('quizAnswers'));

    // Define correct answers and explanations
    let correctAnswers = ['b', 'c', 'b', 'a', 'c', 'd', 'b', 'c', 'c', 'a', 'a', 'a', 'c', 'c', 'c'];
    let explanations = ['Explaination:CSS stands for Cascading Style Sheets. It is a style sheet language used for describing the presentation of a document written in HTML or XML.', 'Explaination:CSS primarily serves the role of controlling the presentation and layout of web pages. It defines how HTML elements are displayed on the screen, including aspects such as colors, fonts, spacing, and positioning.', 'Explaination:CSS applies to HTML (Hypertext Markup Language) and XML (Extensible Markup Language). HTML and XML are both markup languages used for structuring and presenting content on the web.', 'Explaination:CSS allows developers to define various stylistic properties such as colors, fonts, spacing, borders, backgrounds, and more. These properties enable designers to customize the appearance of elements on a webpage, enhancing its visual appeal and user experience.', 'Explaination:CSS promotes consistency in website design by allowing developers to define styling rules that can be applied to multiple elements across different web pages.', 'Explaination:The purpose of separation of concerns in CSS is to separate the concerns of structure (HTML), presentation (CSS), and behavior (JavaScript). This separation allows for cleaner, more maintainable code and enhances code organization and readability.', 'Explaination:Media queries are a fundamental feature of CSS for creating responsive web designs. They allow developers to apply different styles based on various characteristics of the users device, such as screen size, orientation, and resolution. By using media queries, developers can create layouts and designs that adapt and respond to different devices, ensuring a consistent and optimal user experience across a wide range of screen sizes and devices.', 'Explaination:CSS plays a crucial role in responsive web design by allowing developers to create layouts that can adapt and respond to various screen sizes and devices.', 'Explaination:Print stylesheets in CSS are specifically designed to control the appearance of web pages when they are printed. They allow web developers to define separate styles that are applied only when the page is printed, ensuring that the content is optimized for printing on paper.', 'Explaination:The background-color property in CSS is used to set the background color of an element. This property allows developers to specify a color value, such as a color name, hexadecimal color code, RGB value, or HSL value, to fill the background of the element with that color.', 'Explaination:Media queries in CSS allow developers to apply different styles to a document based on various factors such as the devices screen size, resolution, orientation, and even specific features like whether its a print or screen device. ', 'Explaination:Flexbox, also known as the Flexible Box Layout module, is a CSS layout technique designed for creating flexible and efficient layouts. It provides a way to distribute space among items in a container, even when their size is unknown or dynamic. ', 'Explaination:CSS simplifies styling in web development by allowing developers to apply styling rules to HTML elements using classes, IDs, and selectors. This approach promotes code reusability and maintainability by separating the structure (HTML) from the presentation (CSS). ', 'Explaination:CSS primarily serves to control the appearance of user interface (UI) elements on a web page. It allows web developers to define various visual properties such as colors, fonts, spacing, layout, and positioning of elements.', 'Explaination:CSS is an indispensable component of modern web development, offering developers precise control over the presentation of HTML elements on web pages. Its versatility allows developers to define colors, fonts, layout, spacing, and effects, facilitating the creation of visually appealing and user-friendly websites. '];

    // Call the function to display score and answers if answers are retrieved
    if (answers) {
        displayScoreAndAnswers(answers, correctAnswers, explanations);
    } else {
        console.error("No answers found in localStorage.");
    }
};
