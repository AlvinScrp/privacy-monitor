'use strict';
const fetchDate = require('./fetchDate.js')
exports.main_handler = async (event, context) => {
    console.log("fetchDate")
    console.log(event)
    console.log(event["non-exist"])
    console.log(context)
    await fetchDate()
    return event
};