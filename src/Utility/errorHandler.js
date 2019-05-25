class ErrorHandler {
  res_error(res, error) {
    return res.json({
      status: 'error',
      message: error
    });
  }
}

module.exports = {
  ErrorHandler
};