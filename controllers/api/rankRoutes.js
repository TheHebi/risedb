const express = require("express");
const router = express.Router();
const db = require("../../models");

router.get("/", async(req,res)=>{
    try{
        const ranks = await db.Rank.findAll({
            attributes: { exclude: [`createdAt`, `updatedAt`] },
          });
        res.status(200).json(ranks);
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})

router.get("/:id", async(req,res)=>{
    try{
        const monsters = await db.Rank.findOne({
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