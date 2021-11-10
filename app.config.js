const { parsed: Config } = require('dotenv').config();

module.exports = ({ config }) => {

    return {
        ...config,
        extra: {
            apiBaseUrl: Config.API_BASE_URL || 'http://localhost:4000/'
        }
    };
};
