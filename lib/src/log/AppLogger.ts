export class AppLogger {
  static info(message: string): void {
    console.info(`[App Info]: ${message}`)
  }

  static error(message: string): void {
    console.error(`[App Error]: ${message}`)
  }
}
