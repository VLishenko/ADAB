/**!
 * MixItUp Pagination v1.1.0
 * A Premium Extension for MixItUp
 *
 * @copyright Copyright 2014 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://mixitup.kunkalabs.com
 *
 * @license   To be used under the same terms as MixItUp core.
 *            https://mixitup.kunkalabs.com/licenses/
 */
! function(a, b) {
    a.MixItUp.prototype.addAction("_constructor", "pagination", function() {
        var b = this;
        b.pagination = {
            limit: 0,
            loop: !1,
            generatePagers: !0,
            maxPagers: 5,
            pagerClass: "",
            prevButtonHTML: "&laquo;",
            nextButtonHTML: "&raquo;"
        }, a.extend(b.selectors, {
            pagersWrapper: ".pager-list",
            pager: ".pager"
        }), a.extend(b.load, {
            page: 1
        }), b._activePage = null, b._totalPages = null, b._$pagersWrapper = a()
    }, 1), a.MixItUp.prototype.addAction("_init", "pagination", function() {
        var a = this;
        a._activePage = 1 * a.load.page, a.pagination.maxPagers = "number" == typeof a.pagination.maxPagers && a.pagination.maxPagers < 5 ? 5 : a.pagination.maxPagers
    }, 1), a.MixItUp.prototype.addAction("_bindHandlers", "pagination", function() {
        var b = this;
        b.pagination.generatePagers && (b._$pagersWrapper = a(b.selectors.pagersWrapper)), b.controls.live ? b._$body.on("click.mixItUp." + b._id, b.selectors.pager, function() {
            b._processClick(a(this), "page")
        }) : b._$pagersWrapper.on("click.mixItUp." + b._id, b.selectors.pager, function() {
            b._processClick(a(this), "page")
        })
    }, 1), a.MixItUp.prototype.addAction("_processClick", "pagination", function(a) {
        var b = this,
            c = null,
            d = a[0],
            e = a[1];
        if ("page" === e) {
            if (c = d.attr("data-page") || !1, "prev" === c) c = b._getPrevPage();
            else if ("next" === c) c = b._getNextPage();
            else {
                if (!c) return !1;
                c = 1 * c
            }
            d.hasClass(b.controls.activeClass) || b.paginate(c)
        }
    }, 1), a.MixItUp.prototype.addAction("_buildState", "pagination", function() {
        var b = this;
        a.extend(b._state, {
            limit: b.pagination.limit,
            activePage: b._activePage,
            totalPages: b._totalPages
        })
    }, 1), a.MixItUp.prototype.addAction("_sort", "pagination", function() {
        var a = this;
        a.pagination.limit > 0 && a._printSort()
    }, 1), a.MixItUp.prototype.addAction("_filter", "pagination", function() {
        var a = this,
            b = a.pagination.limit * (a.load.page - 1),
            c = a.pagination.limit * a.load.page - 1,
            d = null,
            e = null;
        a._activePage = a.load.page, a._totalPages = a.pagination.limit ? Math.ceil(a._$show.length / a.pagination.limit) : 1, a.pagination.limit > 0 && (d = a._$show.filter(function(a) {
            return a >= b && c >= a
        }), e = a._$show.filter(function(a) {
            return b > a || a > c
        }), a._$show = d, a._$hide = a._$hide.add(e), a._sorting && a._printSort(!0)), a.pagination.generatePagers && a._$pagersWrapper.length && a._generatePagers()
    }, 1), a.MixItUp.prototype.addAction("multiMix", "pagination", function(c) {
        var d = this,
            c = d._parseMultiMixArgs(c);
        c.command.paginate !== b ? "object" == typeof c.command.paginate ? a.extend(d.pagination, c.command.paginate) : d.load.page = c.command.paginate : (c.command.filter !== b || c.command.sort !== b) && (d.load.page = 1)
    }, 0), a.MixItUp.prototype.addAction("destroy", "pagination", function() {
        var a = this;
        a._$pagersWrapper.off(".mixItUp").html("")
    }, 1), a.MixItUp.prototype.extend({
        _getNextPage: function() {
            var a = this,
                b = a._activePage + 1,
                b = a._activePage < a._totalPages ? b : a.pagination.loop ? 1 : a._activePage;
            return a._execFilter("_getNextPage", 1 * b)
        },
        _getPrevPage: function() {
            var a = this,
                b = a._activePage - 1,
                b = a._activePage > 1 ? b : a.pagination.loop ? a._totalPages : a._activePage;
            return a._execFilter("_getPrevPage", 1 * b)
        },
        _generatePagers: function() {
            var a = this,
                b = "UL" === a._$pagersWrapper[0].nodeName ? "li" : "span",
                c = a.pagination.pagerClass ? a.pagination.pagerClass + " " : "",
                d = "<" + b + ' class="' + c + 'pager page-prev" data-page="prev"><span>' + a.pagination.prevButtonHTML + "</span></" + b + ">",
                d = a._activePage > 1 ? d : a.pagination.loop ? d : "<" + b + ' class="' + c + 'pager page-prev disabled"><span>' + a.pagination.prevButtonHTML + "</span></" + b + ">";
            nextButtonHTML = "<" + b + ' class="' + c + 'pager page-next" data-page="next"><span>' + a.pagination.nextButtonHTML + "</span></" + b + ">", nextButtonHTML = a._activePage < a._totalPages ? nextButtonHTML : a.pagination.loop ? nextButtonHTML : "<" + b + ' class="' + c + 'pager page-next disabled"><span>' + a.pagination.nextButtonHTML + "</span></" + b + ">", totalButtons = a.pagination.maxPagers !== !1 && a._totalPages > a.pagination.maxPagers ? a.pagination.maxPagers : a._totalPages, pagerButtonsHTML = "", pagersHTML = "", wrapperClass = "", a._execAction("_generatePagers", 0);
            for (var e = 0; totalButtons > e; e++) {
                var f = null,
                    g = "";
                0 === e ? (f = 1, a.pagination.maxPagers !== !1 && a._activePage > a.pagination.maxPagers - 2 && a._totalPages > a.pagination.maxPagers && (g = " page-first")) : a.pagination.maxPagers === !1 || totalButtons < a.pagination.maxPagers ? f = e + 1 : e === a.pagination.maxPagers - 1 ? (f = a._totalPages, a._activePage < a._totalPages - 2 && a._totalPages > a.pagination.maxPagers && (g = " page-last")) : a._activePage > a.pagination.maxPagers - 2 && a._activePage < a._totalPages - 2 ? f = a._activePage - (2 - e) : a._activePage < a.pagination.maxPagers - 1 ? f = e + 1 : a._activePage >= a._totalPages - 2 && (f = a._totalPages - (a.pagination.maxPagers - 1 - e)), g = f == a._activePage ? g + " " + a.controls.activeClass : g, pagerButtonsHTML += "<" + b + ' class="' + c + "pager page-number" + g + '" data-page="' + f + '"><span>' + f + "</span></" + b + "> "
            }
            pagersHTML = a._totalPages > 1 ? d + " " + pagerButtonsHTML + " " + nextButtonHTML : "", wrapperClass = a._totalPages > 1 ? "" : "no-pagers", a._$pagersWrapper.html(pagersHTML).removeClass("no-pagers").addClass(wrapperClass), a._execAction("_generatePagers", 1)
        },
        _parsePaginateArgs: function(a) {
            for (var b = this, c = {
                    command: null,
                    animate: b.animation.enable,
                    callback: null
                }, d = 0; d < a.length; d++) {
                var e = a[d];
                null !== e && ("object" == typeof e || "number" == typeof e ? c.command = e : "boolean" == typeof e ? c.animate = e : "function" == typeof e && (c.callback = e))
            }
            return b._execFilter("_parsePaginateArgs", c, arguments)
        }
    }), a.MixItUp.prototype.extend({
        paginate: function() {
            var a = this,
                b = a._parsePaginateArgs(arguments);
            a.multiMix({
                paginate: b.command
            }, b.animate, b.callback)
        },
        nextPage: function() {
            var a = this,
                b = a._parsePaginateArgs(arguments);
            a.multiMix({
                paginate: a._getNextPage()
            }, b.animate, b.callback)
        },
        prevPage: function() {
            var a = this,
                b = a._parsePaginateArgs(arguments);
            a.multiMix({
                paginate: a._getPrevPage()
            }, b.animate, b.callback)
        }
    })
}(jQuery);