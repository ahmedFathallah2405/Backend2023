/*const express=require('express');
const router=express.Router()
const Categorie=require("../models/categorie")

router.get("/",async(req,res)=>{

})

router.post("/", async(req,res)=>{
   const{nomcategorie,imagecategorie}=req.body
   //const nomcategorie= req.body.nomcategorie
   //const imagecategorie=req.body.imagecategorie
   const cat1=new Categorie({nomcategorie:nomcategorie,imagecategorie:imagecategorie})
   //const cat1=new Categorie(req.body)
   try{
      await cat1.save();
      res.status(200).json(cat1)
   }
   catch(error){
     res.status(404).json({message:error.message})
   }
})

router.put("/", async(req,res)=>{

})

router.delete("/",async(req,res)=>{

})
module.exports=router*/

const express=require('express')
const router=express.Router()
const Categorie=require('../models/categorie')

router.get('/', async(req,res)=>{
   try{
    const cat=await Categorie.find()
     res.status(200).json(cat)
   }
   catch(error){
    res.status(404).json({message:error.message})
   }
});

router.get('/:categorieId',async(req, res)=>{
   try {
   const cat = await Categorie.findById(req.params.categorieId);
   res.status(200).json(cat);
   } catch (error) {
   res.status(404).json({ message: error.message });
   }
   });
   

router.post('/', async(req,res)=>{
   const {nomcategorie,imagecategorie}=req.body
   //const nomcategorie=req.body.nomcategorie
   //const imagecategorie=req.body.imagecategorie
   const cat1= new Categorie({nomcategorie:nomcategorie,imagecategorie:imagecategorie})
   try{
      await cat1.save()
      res.status(200).json(cat1)
   }
   catch(error){
   res.status(404).json({message:error.message})
   }
});

router.put('/:categorieID', async(req,res)=>{
   const { nomcategorie, imagecategorie} = req.body;
   const id = req.params.categorieID;
   try {
   const cat1 = { 
   nomcategorie:nomcategorie,imagecategorie:imagecategorie, _id:id };
   console.log(cat1)
   await Categorie.findByIdAndUpdate(id, cat1);
   res.json(cat1);
   } catch (error) {
   res.status(404).json({ message: error.message });
   }
   });
   



   router.delete('/:categorieId', async (req, res)=> {
      const id = req.params.categorieId;
      await Categorie.findByIdAndDelete(id);
      res.json({ message: "categorie deleted successfully." });
});

module.exports=router