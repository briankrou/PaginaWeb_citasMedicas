// log.middleware.js

function logMiddleware(request, response, next) {
    console.log(`[${new Date().toLocaleString()}] - ${request.path}`);
    
    n
  next();
  }
  
  module.exports = logMiddleware;