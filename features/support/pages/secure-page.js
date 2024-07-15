const {Selector} = require('testcafe');

// Selectors

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.secure = {
    buttonLogout: function() {
        return select('a.button').with({ boundTestRun: testController });
    },
};