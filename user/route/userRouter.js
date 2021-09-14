const router = require('express').Router()
const UserService = require('../service/UserService')

router.get('/', (req, res)=>{
    res.send("user router");
})

router.post('/save', async (req, res) => {
    const user = await UserService.save(req.body)
    res.send(user)
})

router.get('/:id',async(req,res)=>{
    const id = req.params.id;
    res.send(await UserService.findById(id))
})

router.delete('/delete/:id', async (req, res) => {
    await UserService.delete(req.params.id)
    res.send("User Deleted")
})

module.exports = router