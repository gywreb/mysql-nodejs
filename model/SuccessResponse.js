class SuccessResponse {
  constructor(code, data) {
    this.success = true;
    this.code = code;
    this.data = data;
  }
}

module.exports = SuccessResponse;
