const { connect, connection } = require("mongoose");

connect("mongodb://localhost/socialNetworkBackend", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;