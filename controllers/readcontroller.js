const reading = require('./../models/readingbookmodel');

exports.readdetail = async (req, res, next) => {
  try {
    // console.log(req.file);
    console.log(req.body);
    const { email, location, book } = req.body;

    let readdata;
    readdata = await reading.find({ email: req.body.email });

    console.log(readdata);

    if (!readdata.length) {
      console.log('kadbja');
      readdata = await reading.create(req.body);
    } else {
      readdata = await reading.updateOne(
        { email: email },
        { $set: { location: location, book: book } }
      );
    }

    res.status(201).json({
      status: 'success',
      data: {
        readdata
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getdetails = async (req, res, next) => {
  try {
    // console.log(req.file);
    console.log(req.body);
    const {lat,long, dis} = req.body;

 
    let readdata;
    readdata = await reading.find({
      location: {
        $geoWithin: { $centerSphere: [[lat, long], dis / 6378.1] }
      }
    });

    console.log(readdata);

    res.status(201).json({
      status: 'success',
      data: {
        readdata
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};
