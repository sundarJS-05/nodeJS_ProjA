
const getUser = ( req,res )=>{

    res.send({
        success: true,
        message: 'recvd from MVC pattern..'
    })

}

module.exports = {getUser}