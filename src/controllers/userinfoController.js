const Userinfo = (req,res)=>{
    try {
        res.send("Hello Back offic user Info")
    } catch (e) {
        res.status(500).send({error : e.message})
    }
}

module.exports =  Userinfo;