const async = require('async');
const request = require('request');
const times = require('lodash.times');
const url = 'https://api.usaspending.gov/api/v2/awards/last_updated';

const dataArray = times(200, () => url);
const postReqs = dataArray.map(data => callback => request(data, callback));

cbResponse = (error, response, body) => {
    error && console.log('error:', error); // Print the error if one occurred
    response && console.log('response:', JSON.stringify(response)); // Print the response status code if a response was received
    body && console.log('body:', JSON.stringify(body)); // Print the HTML for the Google homepage.
};

async.series(postReqs, cbResponse);
