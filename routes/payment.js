var express = require('express');
var router = express.Router();
var Insta = require('instamojo-nodejs');

var API_KEY = "test_d05eb27f6cad1226f4a49a45e9b"
var AUTH_KEY = "test_72c79df6fb9d5273eb5029e2bf0"

Insta.setKeys(API_KEY, AUTH_KEY);
Insta.isSandboxMode(true);

/* GET payment page. */
router.post('/', function (req, res, next) {
    var name = req.body.name
    var email = req.body.email
    var amount = req.body.amount
    var mobile = req.body.mobile
    console.log(name)
    console.log(email)
    console.log(amount)

    var data = new Insta.PaymentData();

    const REDIRECT_URL = "http://localhost:3000/confirmed";

    data.setRedirectUrl(REDIRECT_URL);
    data.send_email = "True";
    data.purpose = "Donation"; // REQUIRED
    data.amount = amount;
    data.name = name;
    data.email = email;
    data.phone = mobile;
    Insta.createPayment(data, function (error, response) {
        if (error) {
          // some error
        } else {
          // Payment redirection link at response.payment_request.longurl
        
          var pay_url= JSON.parse(response);
          res.redirect(pay_url.payment_request.longurl);
        }
    });
});

module.exports = router;