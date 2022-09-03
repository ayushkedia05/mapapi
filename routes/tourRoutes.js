const express = require('express');
const tourController = require('./../controllers/tourController');
const router = express.Router();
const upload =require('./../upload.js')


router.post("/upload", upload.single("file"), async (req, res) => {
  if (req.file === undefined) return res.send("you must select a file.");
  const imgUrl = `http://localhost:8080/file/${req.file.filename}`;
  return res.send(imgUrl);
});


router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.uploadTourimage,tourController.resizeTourimages ,tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
