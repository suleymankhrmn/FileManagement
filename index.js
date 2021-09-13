const express = require("express");
const indexRouter =  require('./base/route/indexRouter')
require("./utils/mongooseConnection");
const bodyParser = require('body-parser')




const app = express();
const port = 8091;

app.use(bodyParser.json())
app.use("/api", indexRouter)
app.listen(port, () => {  
  console.log(`app listening at port ${port}`);
});
