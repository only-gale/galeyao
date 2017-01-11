/**
 * Created by gale on 17-1-11.
 */
export class AOPEvent {
  constructor (public name: string, public method: string, public error: Error = null) { }

  toString(): string {
    let eventString = 'Event: ' + this.name + '. Method: ' + this.method + '.';
    if (this.error) {
      eventString += ' Error: ' + this.error.name + ' ' + this.error.message + '.';
    }
    return eventString;
  }
}
