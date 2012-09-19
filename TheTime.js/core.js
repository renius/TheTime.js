(function() {
  var Moment, scope, _size,
    _this = this;

  Date.prototype.to_m = function() {
    return new Moment(_this);
  };

  _size = function(obj) {
    var key, size;
    size = 0;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        size++;
      }
    }
    return size;
  };

  Moment = (function() {

    Moment.o_mori = "Respice post te! Hominem te memento! (Look behind you! Remember that you are but a man!)";

    Moment.toLeadingZero = function(int, sign) {
      var num, t, _sign;
      if (sign == null) {
        sign = false;
      }
      num = Math.abs(int);
      _sign = int < 0 ? '-' : '';
      _sign = sign ? _sign : '';
      return t = Math.abs(int) < 10 ? "" + _sign + "0" + num : "" + _sign + num;
    };

    Moment.prototype.locales = {};

    Moment.prototype.localeName = null;

    Moment.prototype.currentLocale = null;

    Moment["new"] = function(data) {
      return new Moment(data);
    };

    Moment.addLocale = function(name, locale) {
      Moment.prototype.locales[name] = locale;
      return Moment.prototype.localeName = name;
    };

    Moment.setDefaultLocale = function(name) {
      Moment.prototype.localeName = name;
      return Moment.prototype.currentLocale = Moment.prototype.locales[name];
    };

    Moment.want = function(M) {
      return M = M instanceof Moment ? M : new Moment(M);
    };

    Moment.prototype.setLocale = function(name) {
      this.localeName = name;
      this.currentLocale = this.locales[name];
      return this.t = this.currentLocale;
    };

    function Moment(date) {
      var l, n, _ref;
      this.scope = typeof window === 'object' ? window : global;
      if (_size(this.locales) === 0) {
        _ref = [DefaultMomentLocale.localeName, DefaultMomentLocale.locale], n = _ref[0], l = _ref[1];
        Moment.addLocale(n, l);
        Moment.setDefaultLocale(n);
      }
      this.t = this.currentLocale;
      this.parse(date);
    }

    Moment.prototype.month_name = function() {
      return this.t.month.name[this.month];
    };

    Moment.prototype.day_name = function() {
      return this.t.day.name[this.day_of_week()];
    };

    Moment.prototype.day_of_week = function(date) {
      var day;
      if (date == null) {
        date = this.date;
      }
      day = date.getDay();
      return day = day === 0 ? 7 : day;
    };

    Moment.prototype.to_a = function() {
      return [this.year, this.month, this.day, this.hours, this.mins, this.secs, this.ms, this.offset];
    };

    Moment.prototype.to_hash = function() {
      return {
        year: this.year,
        month: this.month,
        day: this.day,
        hours: this.hours,
        mins: this.mins,
        secs: this.secs,
        ms: this.ms,
        offset: this.offset
      };
    };

    Moment.prototype.toMonthString = function() {
      return "" + this.year + "." + this.month;
    };

    Moment.prototype.toDayString = function() {
      return "" + this.year + "." + this.month + "." + this.day;
    };

    Moment.prototype.set = function(d) {
      return this.parse(d);
    };

    Moment.prototype.setYear = function(y) {
      var d;
      d = this.date;
      d.setYear(y);
      return this.parse(d);
    };

    Moment.prototype.setMonth = function(m) {
      var d;
      d = this.date;
      d.setMonth(m - 1);
      return this.parse(d);
    };

    Moment.prototype.setDay = function(_d) {
      var d;
      d = this.date;
      d.setDate(_d);
      return this.parse(d);
    };

    Moment.prototype.setHours = function(h) {
      var d;
      d = this.date;
      d.setHours(h);
      return this.parse(d);
    };

    Moment.prototype.setMins = function(m) {
      var d;
      d = this.date;
      d.setMinutes(m);
      return this.parse(d);
    };

    Moment.prototype.setSecs = function(s) {
      var d;
      d = this.date;
      d.setSeconds(s);
      return this.parse(d);
    };

    Moment.prototype.setMs = function(ms) {
      var d;
      d = this.date;
      d.setMilliseconds(ms);
      return this.parse(d);
    };

    Moment.prototype.setUnix = function(sec) {
      return this.parse(sec);
    };

    Moment.prototype.setUnixMs = function(ms) {
      return this.parseDate(new Date(ms));
    };

    Moment.prototype.setDateByInstances = function() {
      var date, month;
      date = new Date(0);
      month = this.month > 0 ? this.month - 1 : this.month;
      date.setFullYear(this.year);
      date.setMonth(month);
      date.setDate(this.day);
      date.setHours(this.hours);
      date.setMinutes(this.mins);
      date.setSeconds(this.secs);
      date.setMilliseconds(this.ms);
      return this.date = date;
    };

    Moment.prototype._year = function(date) {
      if (date == null) {
        date = new Date;
      }
      return date.getFullYear();
    };

    Moment.prototype._month = function(date) {
      if (date == null) {
        date = new Date;
      }
      return date.getMonth() + 1;
    };

    Moment.prototype._day = function(date) {
      if (date == null) {
        date = new Date;
      }
      return date.getDate();
    };

    Moment.prototype._hours = function(date) {
      if (date == null) {
        date = new Date;
      }
      return date.getHours();
    };

    Moment.prototype._mins = function(date) {
      if (date == null) {
        date = new Date;
      }
      return date.getMinutes();
    };

    Moment.prototype._secs = function(date) {
      if (date == null) {
        date = new Date;
      }
      return date.getSeconds();
    };

    Moment.prototype._ms = function(date) {
      if (date == null) {
        date = new Date;
      }
      return date.getMilliseconds();
    };

    Moment.prototype._offset = function(date) {
      if (date == null) {
        date = new Date;
      }
      return -(date.getTimezoneOffset() / 60);
    };

    Moment.prototype._unix_ms = function(date) {
      if (date == null) {
        date = new Date;
      }
      return date.getTime();
    };

    Moment.prototype.parse = function(date) {
      var empty;
      if (!date) {
        this.parseDate();
      }
      if (typeof date === 'string') {
        empty = date === '';
        if (empty) {
          this.parseDate();
        }
        if (!empty) {
          this.parseString(date);
        }
      }
      if (typeof date === 'number') {
        this.parseNumber(date * 1000);
      }
      if (typeof date === 'object') {
        if (date instanceof Date) {
          return this.parseDate(date);
        }
        if (date instanceof Array) {
          return this.parseArray(date);
        }
        if (date instanceof Object) {
          return this.parseHash(date);
        }
        if (date instanceof Moment) {
          return new Moment(date.to_a());
        }
      }
      return this;
    };

    Moment.prototype.parseDate = function(date) {
      if (date == null) {
        date = new Date;
      }
      this.date = date;
      this.year = this._year(this.date);
      this.month = this._month(this.date);
      this.day = this._day(this.date);
      this.hours = this._hours(this.date);
      this.mins = this._mins(this.date);
      this.secs = this._secs(this.date);
      this.ms = this._ms(this.date);
      this.offset = this._offset(this.date);
      this.unix_ms = this._unix_ms(this.date);
      this.unix = Math.round(this.unix_ms / 1000);
      return this;
    };

    Moment.prototype.parseArray = function(date) {
      var _date;
      if (date.length === 0) {
        return this.parseDate();
      }
      _date = new Date(0);
      this.year = date[0] ? date[0] : this._year(_date);
      this.month = date[1] ? date[1] : 1;
      this.day = date[2] ? date[2] : 1;
      this.hours = date[3] ? date[3] : 0;
      this.mins = date[4] ? date[4] : 0;
      this.secs = date[5] ? date[5] : 0;
      this.ms = date[6] ? date[6] : 0;
      this.offset = date[7] ? date[7] : this._offset(_date);
      this.setDateByInstances();
      return this.parseDate(this.date);
    };

    Moment.prototype.parseHash = function(date) {
      var empty_hash, _date;
      empty_hash = !date['year'] && !date['month'] && !date['day'] && !date['hours'] && !date['mins'] && !date['secs'] && !date['ms'];
      if (empty_hash) {
        return this.parseDate();
      }
      _date = new Date(0);
      this.year = date['year'] ? date['year'] : this._year(_date);
      this.month = date['month'] ? date['month'] : 1;
      this.day = date['day'] ? date['day'] : 1;
      this.hours = date['hours'] ? date['hours'] : 0;
      this.mins = date['mins'] ? date['mins'] : 0;
      this.secs = date['secs'] ? date['secs'] : 0;
      this.ms = date['ms'] ? date['ms'] : 0;
      this.offset = date['offset'] ? date['offset'] : this._offset(_date);
      this.setDateByInstances();
      return this.parseDate(this.date);
    };

    Moment.prototype.parseString = function(date) {
      var _date;
      if (date.match('-') && date.match(':') && !date.match('T')) {
        date = date.replace(/-/g, '/');
      }
      if (date.match('\\.') && !date.match(':')) {
        return this.parseArray(date.split('.'));
      }
      _date = new Date(Date.parse(date));
      return this.parseDate(_date);
    };

    Moment.prototype.parseNumber = function(date) {
      var _date;
      _date = new Date(date);
      return this.parseDate(_date);
    };

    return Moment;

  })();

  scope = typeof window === 'object' ? window : global;

  scope.Moment = Moment;

  scope._size = _size;

  scope.to_lz = Moment.toLeadingZero;

  Moment.addLocale(DefaultMomentLocale.localeName, DefaultMomentLocale.locale);

  Moment.setDefaultLocale('en');

}).call(this);
