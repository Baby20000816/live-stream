'use strict';

module.exports = (app) => {
	const { INTEGER,STRING,DATE,ENUM,TEXT} = app.Sequelize
	
	const LiveUser = app.model.define('live_user', {
		id: {
			type: INTEGER(20),
			primaryKey: true,
			autoIncrement: true
		},
		live_id: {
			type: INTEGER,
			allowNull: false,
			defaultValue: 0,
			comment: '直播间id',
			references: {
				model: 'live',
				key: 'id',
			},
			onDelete: 'cascade',
			onUpdate: 'restrict',		
		},		
		user_id: {
			type: INTEGER,
			allowNull: false,
			defaultValue: 0,
			comment: '用户id',
			references: {
				model: 'user',
				key: 'id',		
			},
			onDelete: 'cascade',
			onUpdate: 'restrict',	
		},
		created_time: DATE,
		updated_time: DATE,		
	})
	//关联关系
	LiveUser.associate = function(models){
		//关联用户
		LiveUser.belongsTo(app.model.User)
		//关联查询
		LiveUser.belongsTo(app.model.Live)
	}
	return LiveUser
};
