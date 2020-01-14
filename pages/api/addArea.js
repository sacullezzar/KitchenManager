const StorageArea = require('../../src/storageArea')

export default (req, res) => {
  StorageArea.add(req.body.areaName)
  res.status(200).json(req.body.areaName)
}