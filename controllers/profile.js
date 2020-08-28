const handleProfile = (req, res, db) => {
    const { id } = req.params;
    db.select('*').from('users').where({id})
    .then(user => {
        if (user.length){
            res.json(user[0])  
        } else{
            res.json('error, user not found!')
        }
    })
}

module.exports = {
    handleProfile
}