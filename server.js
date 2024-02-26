const app = require('./index');
const PORT = 3000;


app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}/`);
});

module.import = app;