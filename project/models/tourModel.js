const mongoose = require('mongoose');

// Shcema: A schema in Mongoose defines the structure of documents within a MongoDB collection. It specifies the types, default values, validation rules, and constraints for the fields in the documents.

// -> A scheam is like blueprint that describes how a paritcular document should look within a document.

const tourSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have name'],
    unique: true,
  },

  duration: {
    type: Number,
    required: [true, 'A tour must have duration'],
  },

  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a group size'],
  },

  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty'],
  },

  ratingAverage: {
    type: Number,
    default: 3.8,
  },

  ratingQuantity: {
    type: Number,
    default: 0,
  },

  price: {
    type: Number,
    required: [true, 'A tour must have price'],
  },

  priceDiscount: Number,

  summary: {
    type: String,
    trim: true,
    required: [true, 'A tour must have description'],
  },

  description: {
    type: String,
    trim: true,
  },

  imageCover: {
    type: String,
    required: [true, 'A tour must have cover image'],
  },

  images: [String],

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  startDates: [Date],
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
