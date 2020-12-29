const userActivityServices = require('../services/userActivity');

const writeUserActivity = (activity) => {
    return userActivityServices.writeUserActivity(activity);
};

module.exports = {
    writeUserActivity,
};
