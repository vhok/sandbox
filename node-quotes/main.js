const quoteService = require('./quote-service');

const result = quoteService.getQuoteById(0);

console.log('result:', result);
