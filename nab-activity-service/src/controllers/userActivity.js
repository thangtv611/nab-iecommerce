const activityService = require('../services/userActivity');

const getActivities = async (ctx) => {
    ctx.body = await activityService.getUserActivities();
    ctx.status = 200;
};

module.exports = {
    getActivities,
};