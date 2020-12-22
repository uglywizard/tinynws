(this.webpackJsonptiny_neows = this.webpackJsonptiny_neows || []).push([
  [0],
  {
    48: function (e, t, n) {},
    49: function (e, t, n) {
      "use strict";
      n.r(t);
      var c = n(2),
        a = n(0),
        r = n.n(a),
        i = n(11),
        s = n.n(i),
        o = n(21),
        p = n(3),
        h = n(12),
        u = n.n(h),
        j = n(16),
        l = n(17),
        d = n(18),
        b = n(23),
        O = n(22),
        x = n(63),
        f = n(28),
        m = n.n(f),
        v = function (e) {
          var t = e.item,
            n = e.children;
          return t
            ? Object(c.jsxs)("div", {
                children: [
                  Object(c.jsx)("div", {
                    children: Object(c.jsx)("h1", { children: t.name }),
                  }),
                  Object(c.jsx)("div", {
                    children: Object(c.jsxs)("p", {
                      children: [
                        "Next approach date:",
                        " ",
                        Object(c.jsx)(m.a, {
                          format: "Do MMMM YYYY (HH:mm)",
                          children: t.close_approach_date,
                        }),
                      ],
                    }),
                  }),
                  Object(c.jsx)("div", { children: n }),
                ],
              })
            : Object(c.jsx)("p", { children: "No object returned, sorry." });
        },
        g = (function (e) {
          Object(b.a)(n, e);
          var t = Object(O.a)(n);
          function n() {
            var e;
            Object(l.a)(this, n);
            for (var c = arguments.length, a = new Array(c), r = 0; r < c; r++)
              a[r] = arguments[r];
            return (
              ((e = t.call.apply(t, [this].concat(a))).state = {
                id: e.props.match.params.id,
                goBack: e.props.history.goBack,
                item: {},
              }),
              (e.fetchHttpRequestDetail = (function () {
                var t = Object(j.a)(
                  u.a.mark(function t(n) {
                    var c, a;
                    return u.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              "https://tinynws.herokuapp.com/api/",
                              (t.next = 3),
                              fetch(
                                "https://tinynws.herokuapp.com/api/" +
                                  "detail/".concat(n)
                              )
                            );
                          case 3:
                            return (c = t.sent), (t.next = 6), c.json();
                          case 6:
                            (a = t.sent), e.setState({ item: a });
                          case 8:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()),
              e
            );
          }
          return (
            Object(d.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.fetchHttpRequestDetail(this.state.id);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return Object(c.jsxs)("div", {
                    children: [
                      Object(c.jsxs)(v, {
                        item: this.state.item,
                        children: [
                          Object(c.jsxs)("p", {
                            children: [
                              "Estimated diameter: ",
                              this.state.item.estimated_diameter_min,
                              " -",
                              " ",
                              this.state.item.estimated_diameter_max,
                              " ",
                            ],
                          }),
                          Object(c.jsxs)("p", {
                            children: [
                              "Relative velocity: ",
                              this.state.item.relative_velocity,
                              " km/h",
                            ],
                          }),
                          Object(c.jsxs)("p", {
                            children: [
                              "Url:",
                              " ",
                              Object(c.jsx)("a", {
                                href: this.state.item.nasa_jpl_url,
                                children: this.state.item.nasa_jpl_url,
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(c.jsx)(x.a, {
                        variant: "contained",
                        color: "primary",
                        onClick: function () {
                          return e.state.goBack();
                        },
                        children: "Back",
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(a.Component),
        _ = function (e) {
          var t = e.collection;
          return t && 0 !== t.length
            ? Object(c.jsx)("ul", {
                children: t.map(function (e) {
                  return Object(c.jsx)(
                    "div",
                    {
                      children: Object(c.jsx)(o.b, {
                        to: {
                          pathname: "/".concat(e.id, "/"),
                          query: {
                            id: e.id,
                            name: e.name,
                            close_approach_date: e.close_approach_date,
                          },
                        },
                        children: Object(c.jsx)(v, { item: e }),
                      }),
                    },
                    e.id
                  );
                }),
              })
            : Object(c.jsx)("p", { children: "No objects returned, sorry" });
        },
        y = n(32),
        k = n(33);
      var w = function (e) {
          return function (t) {
            var n = t.isLoading,
              a = Object(k.a)(t, ["isLoading"]);
            return n
              ? Object(c.jsx)("span", { children: "Fetching..." })
              : Object(c.jsx)(e, Object(y.a)({}, a));
          };
        },
        H = (function (e) {
          Object(b.a)(n, e);
          var t = Object(O.a)(n);
          function n() {
            var e;
            Object(l.a)(this, n);
            for (var c = arguments.length, a = new Array(c), r = 0; r < c; r++)
              a[r] = arguments[r];
            return (
              ((e = t.call.apply(t, [this].concat(a))).state = {
                collection: [],
                current_page: 1,
                next_page: null,
                prev_page: null,
                page_count: 1,
                is_loading: !1,
              }),
              (e.fetchHttpRequestPage = (function () {
                var t = Object(j.a)(
                  u.a.mark(function t(n) {
                    var c, a;
                    return u.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              e.setState({ is_loading: !0 }),
                              "https://tinynws.herokuapp.com/api/feed/?page=",
                              (t.next = 4),
                              fetch(
                                "https://tinynws.herokuapp.com/api/feed/?page=" +
                                  "".concat(n)
                              )
                            );
                          case 4:
                            return (c = t.sent), (t.next = 7), c.json();
                          case 7:
                            (a = t.sent),
                              e.setState({
                                collection: a.results,
                                current_page: a.current_page,
                                next_page: a.next_page,
                                prev_page: a.previous_page,
                                page_count: a.page_count,
                                is_loading: !1,
                              });
                          case 9:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()),
              e
            );
          }
          return (
            Object(d.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.fetchHttpRequestPage(this.state.current_page);
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t = this,
                    n = w(_),
                    a = [];
                  if (this.state.page_count)
                    for (var r = 1; r <= this.state.page_count; r++) a.push(r);
                  return (
                    (e = a.map(function (e) {
                      return Object(c.jsx)(
                        "span",
                        {
                          style: { padding: "0.2em" },
                          onClick: function () {
                            return t.fetchHttpRequestPage(e);
                          },
                          children: e,
                        },
                        e
                      );
                    })),
                    Object(c.jsxs)("div", {
                      children: [
                        Object(c.jsx)(n, {
                          isLoading: this.state.is_loading,
                          collection: this.state.collection,
                        }),
                        Object(c.jsxs)("div", {
                          children: [
                            Object(c.jsx)("span", {
                              onClick: function () {
                                return t.fetchHttpRequestPage(1);
                              },
                              children: "\xab",
                            }),
                            Object(c.jsx)("span", {
                              style: { padding: "0.5em" },
                              children: e,
                            }),
                            Object(c.jsx)("span", {
                              onClick: function () {
                                return t.fetchHttpRequestPage(
                                  t.state.page_count
                                );
                              },
                              children: "\xbb",
                            }),
                          ],
                        }),
                      ],
                    })
                  );
                },
              },
            ]),
            n
          );
        })(a.Component);
      var q = function () {
        return Object(c.jsxs)("div", {
          children: [
            Object(c.jsxs)("div", {
              children: [
                Object(c.jsx)("h1", { children: "Tiny NeoWS" }),
                Object(c.jsx)("h2", {
                  children: "Near Earth Objects Dashboard",
                }),
              ],
            }),
            Object(c.jsx)(o.a, {
              children: Object(c.jsxs)(p.c, {
                children: [
                  Object(c.jsx)(p.a, { path: "/", exact: !0, component: H }),
                  Object(c.jsx)(p.a, { path: "/:id/", component: g }),
                ],
              }),
            }),
          ],
        });
      };
      n(48);
      s.a.render(
        Object(c.jsx)(r.a.StrictMode, { children: Object(c.jsx)(q, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[49, 1, 2]],
]);
//# sourceMappingURL=main.84aebe73.chunk.js.map
