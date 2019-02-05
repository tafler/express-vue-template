const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const sinon =require('sinon');
let server = require('../index');

let db = 'here connect database'

chai.use(chaiHttp);

global.server = server;
global.expect = expect;
global.db = db;
global.chai = chai;

