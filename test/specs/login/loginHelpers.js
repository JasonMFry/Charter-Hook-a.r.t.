module.exports = {
  login(email, password) {
    browser.click(".navbar [data-target='#loginModal']");
    browser.waitForVisible(".modal-body [name='email']");
    browser.setValue(".modal-body [name='email']", email);
    browser.setValue(".modal-body [name='password']", password);
    browser.click(".modal-footer [value='Sign In']");
    browser.waitForText("a.nav-link[data-toggle='dropdown']");
  },
  logout() {
    browser.click("a.nav-link[data-toggle='dropdown']");
    browser.click(".dropdown-menu [href='https://charterhook.com/auth/logout']");
    browser.waitForVisible(".navbar [data-target='#loginModal']");
  },
};
