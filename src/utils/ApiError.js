class ApiError extends Error {
  constructor(statusCode, message = "someting went wrong", error = [], statck = "") {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = massage;
    this.sucess = false;
    this.error = error;

    if (statck) {
      this.stack = stack;
    } else {
      error.captureStackTrace(this, this.constructor);
    }
    
  }
}


export { ApiError };