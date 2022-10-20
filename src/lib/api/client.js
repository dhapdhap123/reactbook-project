import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = 'https://external-api-server.com/';

client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';

export default client;