// @desc     Get all Bootcamps
// @route    GET /api/v1/bootcamps
// @access   Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, message: "Show all bootcamps" });
}

// @desc     Get single Bootcamp
// @route    GET /api/v1/bootcamps/:id
// @access   Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, message: `Show bootcamp ${req.params.id}` });
}

// @desc     Create Bootcamp
// @route    POST /api/v1/bootcamps
// @access   Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, message: "Create new bootcamp" });
}

// @desc     Update Bootcamp
// @route    PUT /api/v1/bootcamps/:id
// @access   Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, message: `Update bootcamp ${req.params.id}` });
}

// @desc     Delete Bootcamp
// @route    DELETE /api/v1/bootcamps/:id
// @access   Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, message: `Delete bootcamp ${req.params.id}` });
}
