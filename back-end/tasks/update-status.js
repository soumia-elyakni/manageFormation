const { updateAllStatus } = require('../controllers/formationControllers')

const dailyUpdates = () => {
    cron.schedule('0 0 * * *', () => {
     updateAllStatus();
    });
  };

module.exports = {dailyUpdates}