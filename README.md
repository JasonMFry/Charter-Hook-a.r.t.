# Charter-Hook-a.r.t.
Automated Regression Testing for charterhook.com

Tests assume you have a file named `credentials.js` inside the test folder. Create a file that looks like this, and enter the appropriate credentials:

```javascript

module.exports = {
  normalCustomer: {
    email: '',
    password: '',
    firstName: '',
  },
  normalCrewMember: {
    email: '',
    password: '',
    firstName: '',
  },
  normalCaptain: {
    email: '',
    password: '',
    firstName: '',
  },
  normalBusinessOwner: {
    email: '',
    password: '',
    firstName: '',
  },
};
```