//Schema para as informações do banco

const mongoose = require('mongoose');

const CovidSchema = new mongoose.Schema({
    cases:{
       type: String, 
    },
    deaths: {
      type: String,
    },
    recovered: {
      type: String,
    },
}, {
  timestamps: true,
});

mongoose.model('Covid', CovidSchema);