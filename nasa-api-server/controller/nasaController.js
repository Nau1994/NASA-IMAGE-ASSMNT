
const axios = require('axios');
const {validationResult } = require('express-validator');
const { setSearchResult } = require('../cache');

const NASA_API_URL = 'https://images-api.nasa.gov/search';

const getSearchByQueries = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    try {
      const { query, year_start, year_end, media_type, page } = req.query;
      const response = await axios.get(NASA_API_URL, {
        params: {
          q: query,
          year_start: year_start,
          year_end: year_end,
          media_type: media_type,
          page: page
        }
      });
  
      const redisKey = `nasa:${query}:${year_start}:${year_end}:${media_type}:${page}`;
      setSearchResult(redisKey,response.data)
      // redisClient.setEx(redisKey, 3600, JSON.stringify(response.data)); // Cache for 1 hour
  
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching data from NASA API:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  const getMediaByNasaId =  async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      try {
        const { nasa_id } = req.query;
        const response = await axios.get(NASA_API_URL, {
          params: {
            nasa_id: nasa_id
          }
        });
    
        const redisKey = `nasa:${nasa_id}`;
        setSearchResult(redisKey,response.data)
      //   redisClient.setEx(redisKey, 3600, JSON.stringify(response.data)); // Cache for 1 hour
    
        res.json(response.data);
      } catch (error) {
        console.error('Error fetching data from NASA API:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
  }

  exports.getSearchByQueries=getSearchByQueries
  exports.getMediaByNasaId=getMediaByNasaId