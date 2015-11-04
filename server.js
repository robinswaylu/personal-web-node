var express = require('express');
var nodemailer = require("nodemailer");
var app = express();
/*
Here we are configuring our SMTP Server details.
STMP is mail server which is responsible for sending and recieving email.
*/
/*gmail version
    var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "robinswaylu@gmail.com",
        pass: "arcadia2177"
    }
});
*/
var transporter = nodemailer.createTransport({
    service: "sendgrid",
    auth: {
        user: "robinswaylu",
        pass: "Ahs@8:00"
    }
});
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/

app.get('/', function (req, res) {
    res.sendfile('index.html');
});

app.get('/send', function (req, res) {
    var mailOptions = {
        from: 'robinswaylu@gmail.com',
        to: 'robinswaylu@gmail.com',
        subject: req.query.subject,
        text: req.query.text
    }
    console.log(mailOptions);

    transporter.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
            res.end("error");
        } else {
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });
});

/*--------------------Routing Over----------------------------*/

app.use('/public', express.static(__dirname + '/public'));

app.listen(3000, function () {
    console.log("Express Started on Port 3000");
});