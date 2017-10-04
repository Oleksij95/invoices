$(function() {
    altair_invoices.init()
});
var $invoice_card = $("#invoice"),
    $invoice_preview = $("#invoice_preview"),
    $invoice_form = $("#invoice_form"),
    $invoices_list_main = $("#invoices_list"),
    invoice_list_class = ".invoices_list",
    $invoice_add_btn = $("#invoice_add");
altair_invoices = {
    init: function() {
        altair_invoices.copy_list_sidebar(), altair_invoices.add_new(), altair_invoices.open_invoice(), altair_invoices.print_invoice()
    },
    add_new: function() {
        if ($invoice_add_btn) {
            var i = function() {
                    var i = $("#invoice_form_template"),
                        e = $invoice_card.height(),
                        n = $invoice_card.find(".md-card-content").innerHeight(),
                        t = i.html();
                    $(invoice_list_class).find(".md-list-item-active").removeClass("md-list-item-active"), $invoice_card.height(e), $invoice_form.hide().html(t).find(".md-card-content").innerHeight(n);
                    var o = function() {
                        var i = $("#invoice_form_template_services"),
                            e = $invoice_form.find("#form_invoice_services"),
                            n = i.html(),
                            t = Handlebars.compile(n)({
                                invoice_service_id: e.children().length ? parseInt(e.children(".uk-grid:last").attr("data-service-number")) + 1 : 1
                            });
                        e.append(t), altair_md.inputs(), altair_forms.textarea_autosize(), altair_uikit.reinitialize_grid_margin()
                    };
                    o(), $("#invoice_form_append_service_btn").on("click", function(i) {
                        i.preventDefault(), o()
                    }), altair_md.checkbox_radio()
                },
                e = function() {
                    $invoice_card.css({
                        height: ""
                    }), $invoice_form.show(), $invoice_preview.html(""), setTimeout(function() {
                        altair_uikit.reinitialize_grid_margin()
                    }, 560)
                };
            $invoice_add_btn.on("click", function(n) {
                n.preventDefault(), altair_md.card_show_hide($invoice_card, i, e, void 0)
            })
        }
    },
    open_invoice: function() {
        var i = function(i) {
            var e = i,
                n = $("#invoice_template").html(),
                t = Handlebars.compile(n),
                o = parseInt(e.attr("data-invoice-id")),
                c = t({
                    invoice: {
                        id: o,
                        invoice_number: Math.floor(200 * Math.random() + 1) + "/2015",
                        invoice_date: moment().format("DD.MM.YYYY"),
                        invoice_due_date: moment().add(14, "days").format("DD.MM.YYYY"),
                        invoice_from_company: "Bailey-Lynch",
                        invoice_from_address_1: "2808 Robson St",
                        invoice_from_address_2: "Vancouver, BC V6B 3K9",
                        invoice_to_company: "Price Ltd",
                        invoice_to_address_1: "2894 Bond Street",
                        invoice_to_address_2: "Providence, RI 02908",
                        invoice_total_value: "$3,751.50",
                        invoice_vat_value: "$862.85",
                        invoice_services: [{
                            service_name: "Website design & development",
                            service_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                            service_rate: "$25.00",
                            service_hours: "32",
                            service_vat: "23%",
                            service_total: "$984.00"
                        }, {
                            service_name: "Search engine optimization",
                            service_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab blanditiis cupiditate delectus deserunt.",
                            service_rate: "$50.00",
                            service_hours: "20",
                            service_vat: "23%",
                            service_total: "$1,230.00"
                        }, {
                            service_name: "Consulting service",
                            service_description: "Lorem ipsum dolor sit amet, consectetur.",
                            service_rate: "$100.00",
                            service_hours: "12.5",
                            service_vat: "23%",
                            service_total: "$1,537.50"
                        }],
                        invoice_payment_info: "BANK XYZ<br/>IBAN 123 123 123 123",
                        invoice_payment_due: "14",
                        header: 3 == o || 7 == o,
                        footer: 3 == o || 7 == o
                    }
                });
            $invoice_preview.html(c), $invoice_form.html(""), $window.resize(), setTimeout(function() {
                altair_uikit.reinitialize_grid_margin()
            }, 290)
        };
        $(invoice_list_class).on("click", "a", function(e) {
            e.preventDefault(), e.stopPropagation(), altair_md.card_show_hide($invoice_card, void 0, i, $(this)), $(this).closest("li").siblings("li").removeClass("md-list-item-active").end().addClass("md-list-item-active")
        }), $(invoice_list_class).find("a").length ? $(invoice_list_class).find("a").eq(0).click() : $invoice_add_btn.trigger("click")
    },
    print_invoice: function() {
        $body.on("click", "#invoice_print", function(i) {
            i.preventDefault(), UIkit.modal.confirm("Do you want to print this invoice?", function() {
                altair_main_sidebar.hide_sidebar(), setTimeout(function() {
                    window.print()
                }, 300)
            }, {
                labels: {
                    Ok: "print"
                }
            })
        })
    },
    copy_list_sidebar: function() {
        $sidebar_secondary_toggle.addClass("uk-hidden-large");
        var i = $invoices_list_main.clone();
        i.attr("id", "invoices_list_sidebar"), $sidebar_secondary.find(".sidebar_secondary_wrapper").html(i).end()
    }
};