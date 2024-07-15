const {Selector} = require('testcafe');

// Selectors

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.login = {
    url: function() {
        return 'https://the-internet.herokuapp.com/login';
    },
    inputUsername: function() {
        return select('#username').with({ boundTestRun: testController });
    },
    inputPassword: function() {
        return select('#password').with({ boundTestRun: testController });
    },
    buttonClick: function() {
        return select('button.radius').with({ boundTestRun: testController });
    },
    messageSuccess: function() {
        return select('div#flash').with({ boundTestRun: testController });
    },
    messageLoggedOutSuccess: function() {
        return select('div#flash').with({ boundTestRun: testController });
    },
};