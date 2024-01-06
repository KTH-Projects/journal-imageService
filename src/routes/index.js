const express = require('express');
const imageRepo = require('./ImageRepo');
const { uuidv4 } = require('../utility/Guid');
const router = express.Router();
//const LocalTime = require("@js-joda/core").LocalTime.now()

router.get('/api/image', (req, res) => {

});

router.get('/api/data', (req, res) => {
  const testDataPictures = [
    { id: 1, imageData: 'base64_encoded_image_data_1', name: 'Picture 1', date: '2023-12-08' },
    { id: 2, imageData: 'base64_encoded_image_data_2', name: 'Picture 2', date: '2023-12-09' },
    { id: 3, imageData: 'base64_encoded_image_data_3', name: 'Picture 3', date: '2023-12-10' },
];
  res.json(testDataPictures);
});

router.get('/api/images', async (req,res) => {
  try {
    const images = await imageRepo.getAllImages();
    console.log("Getting images="+images[3].image)
    images.forEach(element => {
        console.log("Image size="+element.image.length)
    });
    res.header('Content-Type', 'application/json')
    res.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

router.post('/api/image', async (req, res) => {
    console.log("Posting image... image=",req.body)
  
    const  {image}  = req.body;
    console.log("1...")
    if (image == null || image === "") {
      console.log("image error...")
      res.status(400).json({ error: 'Bad Request: Missing required fields' });
      return;
    }
    console.log("2...")
    const random_uuid = uuidv4();
    const LocalTime = new Date(); 
    console.log("id="+random_uuid, " image="+image, " date="+LocalTime)
    try {
      await imageRepo.createImage({ id:random_uuid , image, date:LocalTime });
      res.json({ message: 'Image inserted successfully' });
  } catch (error) {
      console.error('Error inserting image:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/api/image', async (req, res) => {
  
  const { id ,image } = req.body;

  if (!image || image == null || image === "") {
    res.status(400).json({ error: 'Bad Request: Missing required fields' });
    return;
  }
  console.log("id="+id, " image="+image)
  try {
    await imageRepo.updateImage({ id , image});
    res.json({ message: 'Image updated successfully' });
} catch (error) {
    console.error('Error updated image:', error);
    res.status(500).json({ error: 'Internal Server Error' });
}
});

module.exports = router;