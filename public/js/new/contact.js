/*
 * Lelande HTML5 Template
 * Copyright 2016, Filip Greksa
 * www.filipgreksa.com
 * 2016/10/09
 */

/* Contact Form */

/*global $, jQuery*/

$(document).ready(function () {
	"use strict";
	
	var contactForm = $("#contact-form"),
		url = contactForm.attr("action");
	
	contactForm
		.on("formvalid.zf.abide", function (ev, frm) {
		// Ajax Submit
			$.ajax({
				type: "POST",
				url: url,
				data: {
					"name": $("#contact-form #name").val(),
					"email": $("#contact-form #email").val(),
					"message": $("#contact-form #message").val()
				},
				dataType: "json",
				success: function (data) {
					if (data.response === "success") {
						$("#contact-success").removeClass("hidden");
						$("#contact-error").addClass("hidden");
						setTimeout(function () {
							$("#contact-success").fadeOut(3000);
						}, 6000);
						// Reset Form
						contactForm[0].reset();
					} else {
						$("#contact-error").removeClass("hidden");
						$("#contact-success").addClass("hidden");
						setTimeout(function () {
							$("#contact-error").fadeOut(7000);
						}, 6000);
					}
				},
				complete: function () {
					contactForm[0].reset();
				}
			});
		})
		.on("submit", function (ev) {
			ev.preventDefault();
		});
});