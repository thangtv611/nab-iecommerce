const {StatusCodes} = require('http-status-codes');
const activityService = require('../services/userActivity');

const getActivities = async (ctx) => {
    ctx.body = await activityService.getUserActivities();
    ctx.status = StatusCodes.OK;
};

module.exports = {
    getActivities,
};
