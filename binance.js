const Binance = require('node-binance-api');
const binance = new Binance().options({
  APIKEY: 'hZNZMkg1ZpUTwGNHbOocCciSm2S8n6frdMIOggkxyUdkP8YrIeGy2hFCByWgc0vL',
  APISECRET:'GC67Y6qiSUCqqNh3FMisvy4Z7fSgRFTpOihmqTnfbeU374Ek2JeWGA83Ii1BTZG8',
  useServerTime: true,
  test: true
});

binance.prices('BNBBTC',(error,ticker) =>{
  console.log("Price of BNB:",ticker.BNBBTC);
});