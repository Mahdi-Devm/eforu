export class NetworkError extends Error {
  constructor(message = "خطا در اتصال به سرور") {
    super(message);
    this.name = "NetworkError";
  }
}
