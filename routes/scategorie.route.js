/*const express=require('express')
const router=express.Router()
const Categorie=require('../models/categorie')
const SCategorie=require('../models/scategorie')

router.get('/', async(req,res)=>{
   try{
    const scat=await SCategorie.find()
     res.status(200).json(scat)
   }
   catch(error){
    res.status(404).json({message:error.message})
   }
});

router.get('/:scategorieId',async(req, res)=>{
   try {
   const scat = await SCategorie.findById(req.params.scategorieId);
   res.status(200).json(scat);
   } catch (error) {
   res.status(404).json({ message: error.message });
   }
   });
   

router.post('/', async(req,res)=>{
   const {nomscategorie,imagescat,categorieID}=req.body
   //const nomscategorie=req.body.nomscategorie
   //const imagescat=req.body.imagescat
   //const categorieID=req.body.categorieID
   const scat1= new SCategorie({nomscategorie:nomscategorie,imagescat:imagescat, categorieID:categorieID})
   try{
      await scat1.save()
      res.status(200).json(scat1)
   }
   catch(error){
   res.status(404).json({message:error.message})
   }
});

router.put('/:scategorieID', async(req,res)=>{
   const { nomscategorie, imagescat} = req.body;
   const id = req.params.scategorieID;
   try {
   const scat1 = { 
   nomscategorie:nomscategorie,imagescat:imagescat, _id:id };
   console.log(scat1)
   await SCategorie.findByIdAndUpdate(id, scat1);
   res.json(scat1);
   } catch (error) {
   res.status(404).json({ message: error.message });
   }
   });
   



   router.delete('/:scategorieId', async (req, res)=> {
      const id = req.params.scategorieId;
      await SCategorie.findByIdAndDelete(id);
      res.json({ message: "sous-categorie deleted successfully." });
});

module.exports=router*/

const express=require('express')
const router=express.Router()
const SCategorie=require('../models/scategorie')
const Categorie=require('../models/categorie')


router.get('/', async(req,res)=>{
    try {
      const scat= await SCategorie.find().populate("categorieID").exec()
      


      res.status(200).json(scat)
    } catch (error) {
      res.status(404).json({message:error.message})
    }
});

router.get('/:scategorieID', async(req,res)=>{
  const id=req.params.scategorieID
  try {
    const scat=await SCategorie.findById(id)
    res.status(200).json(scat)
  } catch (error) {
   res.status(404).json({message:error.message})
  }
});

router.post('/' , async(req,res)=>{
    const nomscategorie=req.body.nomscategorie
    const imagescat=req.body.imagescat
    const categorieID=req.body.categorieID
   const scat1 = new SCategorie({nomscategorie:nomscategorie, imagescat:imagescat, categorieID:categorieID})
   try{
     await scat1.save()
     res.status(200).json(scat1)
   }
   catch(error){
     res.status(404).json({message:error.message})
   }
});

router.put('/:scategorieID', async(req,res)=>{
   const {nomscategorie,imagescat,categorieID}=req.body
   const id = req.params.scategorieID
   
   try {
      const scat2 = {nomscategorie:nomscategorie,imagescat:imagescat,categorieID:categorieID, _id:id};
     await SCategorie.findByIdAndUpdate(id,scat2);
     res.status(200).json(scat2)
   } catch (error) {
      res.status(404).json({message:error.message})
   }
});

router.delete('/:scategorieID' , async(req,res)=>{
   const id=req.params.scategorieID
   try {
      await SCategorie.findByIdAndDelete(id)
      res.status(200).send('sous categorie supprimé par succés')
   } catch (error) {
      res.status(404).send('echec de suppression')
   }
});
module.exports=router


