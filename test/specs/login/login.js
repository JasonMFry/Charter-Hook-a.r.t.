const assert = require('assert');
const loginHelpers = require('./loginHelpers');
const creds = require('../../credentials');

beforeAll(() => {
  browser.url('/');
});

describe('Basic login/logout functionality', () => {
  it('displays an alert when incorrect login credentials are provided.', () => {
    loginHelpers.login();
    const alertTextFromSite = browser.getText(".alert-info");
    const match = alertTextFromSite.includes('Please provide an email and password.');
    assert.equal(match, true);
  });

  it('logs in given correct credentials', () => {
    const email = creds.normalCustomer.email
    const password = creds.normalCustomer.password;
    loginHelpers.login(email, password);
    const dropdownMenuText = browser.getText("a.nav-link[data-toggle='dropdown']");
    assert.equal(dropdownMenuText, creds.normalCustomer.firstName);
  });

  it('logs out', () => {
    loginHelpers.logout();
    const loginButtonText = browser.getText(".navbar [data-target='#loginModal']");
    assert.equal(loginButtonText, 'Login');
  })
});
