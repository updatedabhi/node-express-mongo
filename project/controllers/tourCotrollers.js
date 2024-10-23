const Tour = require('../models/tourModel');

/*
const tours = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '..', 'dev-data', 'data', 'tours-simple.json'),
    'utf8'
  )
);

const checkID = (req, res, next, val) => {
  if (val > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
};

const checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'name or price missing'
    });
  }
  next();
}
*/

const getAllTour = async (req, res) => {
  /*
  res.status(200).json({
    date: req.printDate,
    status: 'success',
    result: tours.length,
    data: {
      tours,
    },
  });
  */
  console.log(req.query);

  try {
    // const tours = await Tour.find();

    // first way
    // const tours = await Tour.find({
    //   duration: 5,
    //   difficulty: 'easy',
    // });

    // second way
    // const tours = await Tour.find()
    //   .where('duration')
    //   .equals(5)
    //   .where('difficulty')
    //   .equals('easy');

    // third way
    // CREATE QUERY
    const queryObj = { ...req.query };
    const excludedField = ['page', 'sort', 'limit', 'fields'];
    excludedField.forEach((element) => delete queryObj[element]);
    const query = Tour.find(queryObj);

    // EXECUTE QUERY
    const tours = await query;

    res.status(201).json({
      status: 'success',
      result: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(401).json({
      status: 'fail',
      message: err.message,
    });
  }
};

const getTour = async (req, res) => {
  /*
  All about req.params
  const { id } = req.params;

  const tour = tours.find((target) => target.id == id);

  if (!tour) {
    res.status(401).json({
      status: 'fail',
      message: 'invalid id',
    });
  }
  */
  try {
    const tour = await Tour.findById(req.params.id);
    // const tour = await Tour.findOne({_id: req.params.id})
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 401,
      message: err.message,
    });
  }
};

const createTour = async (req, res) => {
  /*
  All about req.body
  let newId = tours[tours.length - 1].id + 1;
  req.body.id = newId
  if you do like this in future whenever you make changes in req.body.id it will affect in your newId
  const newTour = req.body;

  so preffered way is this one
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  */

  // setting data from backend first way

  // const newTour = new Tour({});
  // newTour.save();
  // console.log(newTour);

  // another way
  try {
    const newTour = await Tour.create(req.body);
    res.status(200).json({
      message: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

const deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: {
        tour: null,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

const updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    console.log(err.message);
    res.send(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

module.exports = {
  getAllTour,
  getTour,
  createTour,
  updateTour,
  deleteTour,
};
