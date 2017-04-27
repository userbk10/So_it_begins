import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';


//this is a test apparently
describe('Our first test', function () {
	it('should pass', function () {
		expect(true).to.equal(true);
	});
});

describe('index.html', function () {
	it('should h1 that says Users', function (done) {  // when doing an async test, involving a call back
		const index = fs.readFileSync('./src/index.html',"utf-8");
		jsdom.env(index, function (err, window) { // callback function ( whatever that means)
			const h1 = window.document.getElementsByTagName('h1')[0];
			expect(h1.innerHTML).to.equal("Users");
			done(); // add the done parameter, and add this call
			window.close;
		});
	});
});
