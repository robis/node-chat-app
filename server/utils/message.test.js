var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Robi';
    var text = 'Test'; 
    var res = generateMessage(from, text);
    expect(res.from).toBe(from);
    expect(res.text).toBe(text);
    expect(typeof res.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Robi';
    var latitute = 1;
    var longitude = 15; 
    var res = generateLocationMessage(from, latitute, longitude);
    expect(res.from).toBe(from);
    expect(res.url).toBe('https://www.google.com/maps?q=1,15');
    expect(typeof res.createdAt).toBe('number');
  });
})