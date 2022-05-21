const app = require('./app');
const consign = require('consign');
const PORT = process.env.PORT || 3003;

consign()
    .include('./authenticationAndAuthorizationAtTheBakery/token/passport/passport.js');

app.listen(PORT, () => {
    console.log(`Application running on the port ${PORT}.`)
});
