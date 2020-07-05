import mongoose from 'mongoose';

const GradesSchema = mongoose.Schema({
  name: {
    type      : String,
    required  : true
  },
  subject: {
    type      : String,
    required  : true
  },
  type: {
    type      : String,
    required  : true
  },
  value: {
    type      : Number,
    required  : true
  },
  lastModified: {
    type      : Date,
    default   : Date.now,
  }
}, { versionKey: false });

const model = mongoose.model('Grades', GradesSchema);

export default model;

