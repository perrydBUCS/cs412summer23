const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const expect = chai.expect;

chai.use(chaiHttp);
let response; // Store response here

describe('API endpoint /wx', function () {
    this.timeout(5000); // How long to wait for a response (ms)

    before(function (done) {
        // Send request before each test
        chai.request(app)
            .get('/wx')
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                response = res;
                response.err = err; // Save response
                done();
            });
    });
after(function() {

})
    //Check for valid response (!resp.err, resp-status200)
    it('should have HTTP response code 200', function () {
        expect(response.status).to.equal(200);
    });

    it('should return uncached values on first call', function () {
        expect(response.body.cached).to.be.false;
    })
    it('should not have an error', function () {
        expect(response.err).to.be.null;
    });

    it('should return object with correct keys', function () {
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.all.keys('lat', 'lon', 'timezone', 'timezone_offset', 'current', 'cached');
    });

    it('should return current object with correct keys', function () {

        expect(response.err).to.be.null;
        expect(response.body.current).to.be.an('object');
        expect(response.body.current).to.have.all.keys('dt', 'sunrise', 'sunset', 'temp', 'feels_like', 'pressure', 'humidity', 'dew_point', 'uvi', 'clouds', 'visibility', 'wind_speed', 'wind_deg', 'weather');

    });

    it('should return object with correct length', function () {
        expect(Object.keys(response.body).length).to.equal(6); // 5 top-level keys
        expect(Object.keys(response.body.current).length).to.equal(14); // 14 keys in 'current' object
    });

    it('should have humidity in the current object', function () {

        expect(response.err).to.be.null;
        expect(response.body.current).to.have.property('humidity');
    });
});