const fs = require('fs');

const Tour = require('./../models/tourmodel.js');
const sharp = require('sharp');
const multer = require('multer');
const AppError = require('../appError.js');

const { v4: uuid } = require('uuid');
// const sharp = require('sharp/lib/sharp');

// const multerStorage=multer.diskStorage({
//   destination : 'public/images',
//   filename:(res,file,cb)=>{
//     const ext=file.mimetype.split('/')[1];
//     const idd=uuid();
//     cb(null,`tour-${idd}.${ext}`)
//   }
// });

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

exports.uploadTourimage = upload.fields([
  {
    name: 'imageCover',
    maxCount: 1
  },
  {
    name: 'images',
    maxCount: 3
  }
]);

exports.resizeTourimages = async (req, res, next) => {
  console.log(req.files);

  const imageCoverfilename = `tour-${req.params.id}-${Date.now()}-cover.jpeg`;
  await sharp(req.files.imageCover[0].buffer)
    .resize(2000, 1300)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`market/src/components/images/${imageCoverfilename}`);

  req.body.imageCover = imageCoverfilename;

  // 2) Images

  // req.body.images = [];
  // await Promise.all(
  // req.files.images.map(async (file, i) => {
  //   const filename = `tour-${req.params.id}-${Date.now()}-${i+1}.jpeg`;
  //   await sharp(file.buffer)
  //     .resize(2000, 1333)
  //     .toFormat('jpeg')
  //     .jpeg({ quality: 90 })
  //     .toFile(`public/images/${ filename }`);
  //   req.body.images.push(filename);
  // }));

  next();
};

// upload.array('image',5);

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

// exports.checkID = (req, res, next, val) => {
//   console.log(`Tour id is: ${val}`);

//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID'
//     });
//   }
//   next();
// };

// exports.tourphoto=upload.single('photo');

exports.getAllTours = async (req, res) => {
  console.log(req.requestTime);

  // console.log(req.query);

  const tours = await Tour.find();

  try {
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      err
    });
  }

  // res.status(200).json({
  //   status: 'success',
  //   requestedAt: req.requestTime,
  //   results: tours.length,
  //   data: {
  //     tours
  //   }
  // });
};

exports.getTour = async (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  const tours = await Tour.findById(id);
  try {
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      err
    });
  }
};




// exports.getTour = async (req, res) => {
//   console.log(req.params);
//   const id = req.params.id;
//   const tours = await Tour.findById(id);
//   try {
//     res.status(200).json({
//       status: 'success',
//       results: tours.length,
//       data: {
//         tours
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       err
//     });
//   }
// };

exports.createTour = async (req, res) => {
  try {
    // console.log(req.file);
    console.log(req.body);
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        newTour
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tours = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json({     
      status: 'success',
      results: tours.length,
      data: {
        tours
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      err
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      err
    });
  }
};
