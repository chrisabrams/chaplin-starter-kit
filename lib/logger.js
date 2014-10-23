class Log {

  constructor(options) {
    if(this.silent) return

    if(typeof options == 'object') {

      if(typeof options.dir == 'string') {
        this.dir = options.dir
      }

      if(typeof options.name == 'string') {
        this.name = options.name
      }

      if(typeof options.silent == 'boolean') {
        this.silent = options.silent
      }

    }

    this._times = {}
  }

  debug() {
    if(this.silent) return

    var args = Array.prototype.slice.call(arguments)
    args = this.prepareArgs(args)

    console.log.apply(this, args)

  }

  error() {
    if(this.silent) return

    var args = Array.prototype.slice.call(arguments)
    args = this.prepareArgs(args)

    console.error.apply(this, args)

  }

  getTimeDuration(label) {
    if(this.silent) return

    if (!this._times[label]) {
      this.error('No such label: ', label)
      return
    }

    if (!this._times[label].duration) {
      this.error('Label has not called timeEnd(): ', label)
      return
    }

    return this._times[label].duration

  }

  info() {
    if(this.silent) return

    var args = Array.prototype.slice.call(arguments)
    args = this.prepareArgs(args)

    console.info.apply(console, args)

  }

  log() {
    if(this.silent) return

    var args = Array.prototype.slice.call(arguments)
    args = this.prepareArgs(args)

    console.log.apply(this, args)

  }

  prepareArgs(args) {
    if(this.silent) return

    if(this.name) {
      args.unshift(this.name)
    }

    return args
  }

  time(label) {
    if(this.silent) return

    this._times[label] = {
      start: Date.now()
    }
  }

  timeEnd(label) {
    if(this.silent) return

    var start = this._times[label].start

    if (!this._times[label]) {
      this.error('No such label: ', label)
      return
    }

    var end = Date.now()
    this._times[label].end = end

    var duration = end - start
    this._times[label].duration = duration
    this.log(label, duration + 'ms')
  }

}

Log.prototype.silent = false

module.exports = Log
