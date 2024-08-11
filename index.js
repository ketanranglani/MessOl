const app= require('./app')


require('dotenv').config()
app.listen(process.env.PORT,()=>{
    console.log(`APP is running on ${process.env.PORT}` )
})