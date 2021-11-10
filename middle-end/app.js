const MiddleEnd = require('strange-middle-end');
const { default: Axios } = require('axios');
const SecureStore = require('expo-secure-store');

const internals = {};

module.exports = (m, { apiBaseUrl }) => {

    const client = internals.createClient({ baseURL: apiBaseUrl });

    const { createReducer } = MiddleEnd;

    return {
        client,
        initialize() {

        },
        actions: {

        },
        reducer: createReducer({ mutable: true }, {

        }, {

        }),
        selectors: {

        }
    };
};

internals.createClient = (options) => {

    const client = Axios.create({
        headers: { common: {} },
        // Needed for refresh token, esp. in local development
        withCredentials: true,
        paramsSerializer: (obj) => {
            // The default serializer turns array params into ?trades[]=A&trades[]=B
            // which is not compatible with node's querystring parser which wants ?trades=A&trades=B.
            // Luckily URLSearchParams and node are in agreement, so we can customize for it below.

            if (!obj) {
                return '';
            }

            if (typeof obj === 'string') {
                return obj;
            }

            const params = new URLSearchParams();
            const append = (key, val) => {

                val = val instanceof Date ? val.toISOString() : val;

                params.append(key, val);
            };

            Object.entries(obj).forEach(([key, value]) => {

                if (Array.isArray(value)) {
                    value.forEach((val) => append(key, val));
                }
                else {
                    append(key, value);
                }
            });

            return params.toString();
        },
        ...options
    });

    client.interceptors.request.use(
        async (config) => {

            const token = await SecureStore.getItemAsync('access_token');

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            return config;
        }
    );

    return client;
};
