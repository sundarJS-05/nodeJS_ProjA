
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const userRoute = require('./routes/userRoutes')

const port = 5000

// create REST obejct -a copy of express
let app = express()

// middleware
app.use( express.json() )
app.use( bodyParser.urlencoded({extended: false}))
app.use(morgan('dev'))

// routes
app.use('/user', userRoute)

// REST routes
app.get('/',  (req,res)=>{
    res.send('<h2>hello.</h2>')

})

// post method
app.post('/form', (req,res)=>{

    // we must destructure the var - input data by putting {}; esle it will be an object
    let {inputData} = req.body
    res.json(
        {
            success: true,
            message: `input data is --- ${inputData}`
        }

    )

})

// listenrer; 2nd param - callback fn - is needed to show detaisl of how server running
app.listen( port, ()=>{
    console.log(`server running on port --- ${port}`)
})