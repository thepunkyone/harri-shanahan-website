!(function (n, e, s, o) {
  function a(n, e) {
    return typeof n === e
  }
  var t = [],
    i = {
      _version: '3.11.6',
      _config: {
        classPrefix: '',
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (n, e) {
        var s = this
        setTimeout(function () {
          e(s[n])
        }, 0)
      },
      addTest: function (n, e, s) {
        t.push({ name: n, fn: e, options: s })
      },
      addAsyncTest: function (n) {
        t.push({ name: null, fn: n })
      },
    },
    l = function () {}
  ;(l.prototype = i), (l = new l())
  var f = [],
    r = s.documentElement,
    c = 'svg' === r.nodeName.toLowerCase()
  !(function () {
    var n, e, s, o, i, r, c
    for (var u in t)
      if (t.hasOwnProperty(u)) {
        if (
          ((n = []),
          (e = t[u]),
          e.name &&
            (n.push(e.name.toLowerCase()),
            e.options && e.options.aliases && e.options.aliases.length))
        )
          for (s = 0; s < e.options.aliases.length; s++)
            n.push(e.options.aliases[s].toLowerCase())
        for (o = a(e.fn, 'function') ? e.fn() : e.fn, i = 0; i < n.length; i++)
          (r = n[i]),
            (c = r.split('.')),
            1 === c.length
              ? (l[c[0]] = o)
              : ((l[c[0]] && (!l[c[0]] || l[c[0]] instanceof Boolean)) ||
                  (l[c[0]] = new Boolean(l[c[0]])),
                (l[c[0]][c[1]] = o)),
            f.push((o ? '' : 'no-') + c.join('-'))
      }
  })(),
    (function (n) {
      var e = r.className,
        s = l._config.classPrefix || ''
      if ((c && (e = e.baseVal), l._config.enableJSClass)) {
        var o = new RegExp('(^|\\s)' + s + 'no-js(\\s|$)')
        e = e.replace(o, '$1' + s + 'js$2')
      }
      l._config.enableClasses &&
        (n.length > 0 && (e += ' ' + s + n.join(' ' + s)),
        c ? (r.className.baseVal = e) : (r.className = e))
    })(f),
    delete i.addTest,
    delete i.addAsyncTest
  for (var u = 0; u < l._q.length; u++) l._q[u]()
  n.Modernizr = l
})(window, window, document)
