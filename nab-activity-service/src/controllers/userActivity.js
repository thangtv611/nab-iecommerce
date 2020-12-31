const activityService = require('../services/userActivity');
const { OK } = require('http-status-codes');

const getActivities = async (ctx) => {
    ctx.body = await activityService.getUserActivities();
    ctx.status = OK;
}

module.exports = {
    getActivities,
};