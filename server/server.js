const exprees = require('express');
const app = exprees()
const port  = 7000

app.listen(port , ()=>{
    console.log(`listening on port ${port}`)
})