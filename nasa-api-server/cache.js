
const { createClient } = require('@redis/client');

// Redis client setup
// const redisClient = createClient({
//     url: 'redis://localhost:6379'
// });
const redisClient = createClient({
    host:'localhost',
    port:6379
});

redisClient.connect()

redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

// Middleware to check cache
const checkCache = (req, res, next) => {
    console.log(req.query,req.url)
    const { query, year_start, year_end, media_type, page ,nasa_id} = req.query;
    let redisKey = ''
  if(req.url.includes("/search")){

      redisKey = `nasa:${query}:${year_start}:${year_end}:${media_type}:${page}`;
    }
    else{
        redisKey = `nasa:${nasa_id}`;
    }
  
  console.log(`redis key: ${redisKey}`)
  redisClient.get(redisKey).then((data)=>{if (data !== null) {
    console.log(`${redisKey} found in redis` )
    res.send(JSON.parse(data));
  } else {
    next();
  }})
};

const setSearchResult=(key,data)=>{
    redisClient.setEx(key, 3600, JSON.stringify(data)); // Cache for 1 hour
}

exports.checkCache=checkCache
exports.setSearchResult=setSearchResult