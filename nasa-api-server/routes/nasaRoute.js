const Router=require('express')
const { check} = require('express-validator');
const { checkCache} = require('../cache');
const { getSearchByQueries, getMediaByNasaId } = require('../controller/nasaController');

const nasaRoute=Router()


// API endpoint to fetch data from NASA API
nasaRoute.get('/search', [
    check('query').optional().isString().withMessage('Query is required'),
    check('year_start').optional().isNumeric().withMessage('Year start must be a number'),
    check('year_end').optional().isNumeric().withMessage('Year end must be a number'),
    check('media_type').not().isEmpty().isString().withMessage('Media type must be a string'),
    check('page').optional().isNumeric().withMessage('Page must be a number')
  ],checkCache, getSearchByQueries)


// API endpoint to fetch media from NASA API
  nasaRoute.get('/media', [
    check('nasa_id').not().isEmpty().isString().withMessage('nasa_id type must be a string')
    ],
    checkCache,getMediaByNasaId)


  exports.nasaRoute=nasaRoute
