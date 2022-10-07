!(function(a) {
  var e,
    t,
    n,
    o,
    i,
    d =
      '<svg><symbol id="icon-del" viewBox="0 0 1024 1024"><path d="M223.616 955.584a31.872 31.872 0 0 1-31.872-31.808V350.656a31.872 31.872 0 0 1 63.68 0v541.248h509.44V350.72a31.872 31.872 0 0 1 63.68 0v573.12a31.872 31.872 0 0 1-31.808 31.808H223.616z m159.168-212.288V478.016a31.872 31.872 0 0 1 63.68 0v265.344a31.872 31.872 0 1 1-63.616-0.064z m191.04-10.624v-254.72a31.872 31.872 0 1 1 63.68 0v254.72a31.872 31.872 0 0 1-63.68 0zM155.328 255.04a29.824 29.824 0 0 1-27.264-31.808 29.888 29.888 0 0 1 27.264-31.872h165.568V95.872c0-17.344 13.888-31.552 31.232-31.872h319.808a31.488 31.488 0 0 1 31.104 31.872V191.36h161.792a29.888 29.888 0 0 1 27.264 31.872 29.824 29.824 0 0 1-27.264 31.808H155.328z m228.096-63.68h257.472v-63.68H383.424v63.68z"  ></path></symbol><symbol id="icon-edit" viewBox="0 0 1088 1024"><path d="M864.384 128a32 32 0 1 1 0 64H280C231.488 192 192 231.488 192 280.128v499.584c0 48.64 39.488 88.064 88 88.064h594.368c48.512 0 88-39.488 88-88.064v-288.64a32 32 0 1 1 64 0v288.704a152.32 152.32 0 0 1-151.936 152.256H280A152.32 152.32 0 0 1 128 779.776V280.192A152.32 152.32 0 0 1 280 128h584.384z m193.92 61.696a32 32 0 0 1 0 45.312l-407.296 407.296a32 32 0 1 1-45.312-45.312l407.296-407.296a32 32 0 0 1 45.312 0zM416 512a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64h64z m192-192a32 32 0 0 1 0 64h-256a32 32 0 0 1 0-64h256z" fill="#595959" ></path></symbol><symbol id="icon-root-add" viewBox="0 0 1024 1024"><path d="M853.333333 750.933333a34.133333 34.133333 0 0 1 34.133334 34.133334v68.266666h68.266666a34.133333 34.133333 0 1 1 0 68.266667h-68.266666v68.266667a34.133333 34.133333 0 1 1-68.266667 0v-68.266667h-68.266667a34.133333 34.133333 0 1 1 0-68.266667h68.266667v-68.266666a34.133333 34.133333 0 0 1 34.133333-34.133334zM750.933333 0a34.133333 34.133333 0 0 1 34.133334 34.133333v341.333334a34.133333 34.133333 0 0 1-27.989334 33.5872L750.933333 409.6H238.933333v204.8h136.533334V512a34.133333 34.133333 0 0 1 34.133333-34.133333h546.133333a34.133333 34.133333 0 0 1 34.133334 34.133333v136.533333a34.133333 34.133333 0 1 1-68.266667 0V546.133333H443.733333v204.8h170.666667a34.133333 34.133333 0 1 1 0 68.266667h-204.8a34.133333 34.133333 0 0 1-34.133333-34.133333V682.666667H204.8a34.133333 34.133333 0 0 1-34.133333-34.133334V409.6H68.266667a34.133333 34.133333 0 0 1-34.133334-34.133333v-341.333334A34.133333 34.133333 0 0 1 68.266667 0h682.666666zM716.8 341.333333V68.266667H102.4v273.066666h614.4z" fill="#595959" ></path></symbol><symbol id="icon-add" viewBox="0 0 1024 1024"><path d="M512 480a32 32 0 0 1 32 32v192h192a32 32 0 1 1 0 64h-192v192a32 32 0 1 1-64 0v-192h-192a32 32 0 1 1 0-64h192V512a32 32 0 0 1 32-32zM928 0a32 32 0 0 1 32 32v256a32 32 0 0 1-26.24 31.488L928 320H96a32 32 0 0 1-32-32v-256a32 32 0 1 1 64 0V256h768V32a32 32 0 0 1 32-32z" fill="#595959" ></path></symbol><symbol id="icon-set" viewBox="0 0 1097 1024"><path d="M146.285714 585.142857a36.571429 36.571429 0 0 1 36.571429 36.571429v365.714285a36.571429 36.571429 0 1 1-73.142857 0v-365.714285A36.571429 36.571429 0 0 1 146.285714 585.142857z m365.714286 146.285714a36.571429 36.571429 0 0 1 36.571429 36.571429v219.428571a36.571429 36.571429 0 1 1-73.142858 0v-219.428571A36.571429 36.571429 0 0 1 512 731.428571z m402.285714 146.285715a36.571429 36.571429 0 0 1 36.571429 36.571428v73.142857a36.571429 36.571429 0 1 1-73.142857 0v-73.142857a36.571429 36.571429 0 0 1 36.571428-36.571428z m0-365.714286a146.285714 146.285714 0 1 1 0 292.571429 146.285714 146.285714 0 0 1 0-292.571429z m0 73.142857a73.142857 73.142857 0 1 0 0 146.285714 73.142857 73.142857 0 0 0 0-146.285714zM512 365.714286a146.285714 146.285714 0 1 1 0 292.571428 146.285714 146.285714 0 0 1 0-292.571428z m0 73.142857a73.142857 73.142857 0 1 0 0 146.285714 73.142857 73.142857 0 0 0 0-146.285714zM146.285714 219.428571a146.285714 146.285714 0 1 1 0 292.571429 146.285714 146.285714 0 0 1 0-292.571429z m0 73.142858a73.142857 73.142857 0 1 0 0 146.285714 73.142857 73.142857 0 0 0 0-146.285714z m768-292.571429a36.571429 36.571429 0 0 1 36.571429 36.571429v365.714285a36.571429 36.571429 0 1 1-73.142857 0v-365.714285a36.571429 36.571429 0 0 1 36.571428-36.571429zM512 0a36.571429 36.571429 0 0 1 36.571429 36.571429v219.428571a36.571429 36.571429 0 0 1-73.142858 0v-219.428571A36.571429 36.571429 0 0 1 512 0zM146.285714 0a36.571429 36.571429 0 0 1 36.571429 36.571429v73.142857a36.571429 36.571429 0 0 1-73.142857 0v-73.142857A36.571429 36.571429 0 0 1 146.285714 0z" fill="#595959" ></path></symbol></svg>',
    v = (v = document.getElementsByTagName('script'))[
      v.length - 1
    ].getAttribute('data-injectcss'),
    l = function(a, e) {
      e.parentNode.insertBefore(a, e);
    };
  if (v && !a.__iconfont__svg__cssinject__) {
    a.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>',
      );
    } catch (a) {
      console && console.log(a);
    }
  }
  function h() {
    i || ((i = !0), n());
  }
  function c() {
    try {
      o.documentElement.doScroll('left');
    } catch (a) {
      return void setTimeout(c, 50);
    }
    h();
  }
  (e = function() {
    var a,
      e = document.createElement('div');
    (e.innerHTML = d),
      (d = null),
      (e = e.getElementsByTagName('svg')[0]) &&
        (e.setAttribute('aria-hidden', 'true'),
        (e.style.position = 'absolute'),
        (e.style.width = 0),
        (e.style.height = 0),
        (e.style.overflow = 'hidden'),
        (e = e),
        (a = document.body).firstChild ? l(e, a.firstChild) : a.appendChild(e));
  }),
    document.addEventListener
      ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
        ? setTimeout(e, 0)
        : ((t = function() {
            document.removeEventListener('DOMContentLoaded', t, !1), e();
          }),
          document.addEventListener('DOMContentLoaded', t, !1))
      : document.attachEvent &&
        ((n = e),
        (o = a.document),
        (i = !1),
        c(),
        (o.onreadystatechange = function() {
          'complete' == o.readyState && ((o.onreadystatechange = null), h());
        }));
})(window);
