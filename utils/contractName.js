var generate = require('project-name-generator');

const getName = () => {

    return generate().spaced.toUpperCase();

}

exports.getName = getName;

