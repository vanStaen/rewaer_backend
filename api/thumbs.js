const express = require("express");
const router = express.Router();
const { v1: uuidv1 } = require('uuid');

const createThumbnail = require('../helpers/createThumbnail')
const uploadFileFromUrlToS3 = require('../helpers/uploadFileFromUrlToS3')
const deleteLocalFile = require('../helpers/deleteLocalFile')

// Post a URL of a pic and get a URL of its thumb on AWS S3
router.post("/", async (req, res) => {

  const url = req.body.url;
  const fileName = "t_" + uuidv1();

  createThumbnail(url, fileName)
    .then(thumbUrlLocal => {
      uploadFileFromUrlToS3(thumbUrlLocal, fileName)
        .then(thumbUrlS3 => {
          deleteLocalFile(fileName);
          return res.status(201).json({ thumbUrl: thumbUrlS3 });
        }).catch((err) => {
          return res.status(400).json({ error: err });
        });
    });

});

module.exports = router;