const { Module } = require('module');

const APPID = '5a67a1d97f0b7b4acb95f0c5cbae2e98';
const WEATHERURL = 'https://api.openweathermap.org/data/2.5/weather?appid='
    + APPID + '&units=metric&q=';
const WEATHER_API = 'http://api.openweathermap.org/data/2.5/weather?appid='
    + APPID + '&units=metric&q=';
const STATUS_CODE = require('http').STATUS_CODE;

module.exports = {
    WEATHER_API,
    WEATHERURL,
    STATUS_CODE,
}