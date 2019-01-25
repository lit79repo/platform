let generateConfig = () => {
	return {
		port: process.env.PORT || 3000
	};
};
module.exports = generateConfig();