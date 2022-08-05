const express = require("express");
const router = express.Router();
const db = require("../../models");

router.get("/", async(req,res)=>{
    try{
        const monsters = await db.Monster.findAll({
            attributes: { exclude: [`createdAt`, `updatedAt`] },
          });
        res.status(200).json(monsters);
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})

router.get("/:id", async(req,res)=>{
    try{
        const monsters = await db.Monster.findOne({
            where:{id:req.params.id},
            attributes: { exclude: [`createdAt`, `updatedAt`] },
            include:{
                model: db.Part,
                attributes:{exclude:['createdAt','updatedAt']}
            }
          });
        res.status(200).json(monsters);
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router;