const express = require("express");
const app = require("./server/src/index")

const PORT = 3006;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));