const userActivity = require('../schemas/userActivity');

const writeUserActivity = ({username, searchCriteria, agentInfo}) => {
    return new userActivity({
        username: username,
        searchCriteria: JSON.stringify(searchCriteria),
        agentInfo     : JSON.stringify(agentInfo)
    }).save();
};

module.exports = {
    writeUserActivity,
};