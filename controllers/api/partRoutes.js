const express = require("express");
const router = express.Router();
const db = require("../../models");

router.get("/", async(req,res)=>{
    try{
        const parts = await db.Part.findAll({
            attributes: { exclude: [`createdAt`, `updatedAt`] },
          });
        res.status(200).json(parts);
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})

router.get("/:id", async(req,res)=>{
    try{
        const monsters = await db.Part.findOne({
            where:{id:req.params.id},
            attributes: { exclude: [`createdAt`, `updatedAt`] },
          });
        res.status(200).json(monsters);
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router;