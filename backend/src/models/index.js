const sequelize = require('../config/database');
const Activity = require('./Activity');
const User = require('./User');
const Role = require('./Role');
const ActivityCategory = require('./ActivityCategory');
const ActivityBooking = require('./ActivityBooking');
const Event = require('./Event');

// Definir las asociaciones entre los modelos
User.belongsTo(Role, { foreignKey: 'role_id' });
Role.hasMany(User, { foreignKey: 'role_id' });

Activity.belongsTo(ActivityCategory, { foreignKey: 'category_id' });
ActivityCategory.hasMany(Activity, { foreignKey: 'category_id' });

ActivityBooking.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(ActivityBooking, { foreignKey: 'user_id' });

ActivityBooking.belongsTo(Activity, { foreignKey: 'activity_id' });
Activity.hasMany(ActivityBooking, { foreignKey: 'activity_id' });

Event.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Event, { foreignKey: 'user_id' });

module.exports = {
    sequelize,
    Activity,
    User,
    Role,
    ActivityCategory,
    ActivityBooking,
    Event
};
