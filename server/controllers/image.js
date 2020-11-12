const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: process.env.CLARIFAI_API,
});

const handleApiCall = (req, res) => {
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(404).json('Unable to work with API'));
};

const handleImage = (req, res, db) => {
  const { id } = req.body;
  db('users')
    .where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then((enteries) => {
      res.json(enteries[0]);
    })
    .catch((err) => res.status(400).json('Unable to get entries'));
};

module.exports = {
  handleImage,
  handleApiCall,
};
