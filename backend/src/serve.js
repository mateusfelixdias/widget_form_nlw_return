const app = require('./app');
const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
    console.log(`Application running on the port ${PORT}.`)
});
