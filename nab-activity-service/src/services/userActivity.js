const ActivityModel = require('../schemas/userActivity');

const writeUserActivity = ({username, searchCriteria, agentInfo}) => {
    return ActivityModel.create({
        username: username,
        searchCriteria: JSON.stringify(searchCriteria),
        agentInfo: JSON.stringify(agentInfo)
    });
};

const getUserActivities = () => {
    return ActivityModel.find();
};

module.exports = {
    writeUserActivity,
    getUserActivities,
};
