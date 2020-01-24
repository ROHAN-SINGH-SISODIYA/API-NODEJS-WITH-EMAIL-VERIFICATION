const nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');


let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
	auth: {
		user:'',
		pass:''
	}
});


exports.send = function (from, to, subject, html)
{
	console.log(from)
	console.log(to)
	console.log(html)
	return transporter.sendMail({
		from: from, // sender address e.g. no-reply@xyz.com or "Fred Foo 👻" <foo@example.com>
		to: to, // list of receivers e.g. bar@example.com, baz@example.com
		subject: subject, // Subject line e.g. 'Hello ✔'
		//text: text, // plain text body e.g. Hello world?
		html: html // html body e.g. '<b>Hello world?</b>'
	});
};

