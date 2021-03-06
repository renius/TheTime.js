(function() {
  var RuTimeLocale, scope;

  RuTimeLocale = {
    localeName: 'ru',
    locale: {
      'month': {
        'name': [null, 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        'gen': [null, 'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
        'abbr': [null, 'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        'abbr2': [null, 'Янв.', 'Фев.', 'Мар.', 'Апр.', 'Май.', 'Июн.', 'Июл.', 'Авг.', 'Сен.', 'Окт.', 'Ноя.', 'Дек.']
      },
      'day': {
        'name': [null, 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
        'abbr': [null, 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        'part': {
          'night': 'ночь',
          'morning': 'утро',
          'day': 'день',
          'evening': 'вечер'
        }
      }
    }
  };

  scope = typeof window === 'object' ? window : global;

  scope.RuTimeLocale = RuTimeLocale;

}).call(this);