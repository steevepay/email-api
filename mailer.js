const nodemailer = require('nodemailer')

sendEmail = function (req, res) {
  const _cc =  [];

  if (req.body.cc) {
    _cc.push(req.body.cc);
  }
  if (process.env.SMTP_CC) {
    _cc.push(process.env.SMTP_CC);
  }
  if (req.body.from && req.body.to && req.body.subject && req.body.text && req.body.html) {
    if (req.body?.cc) {
      _cc.push(req.body.cc);
    }
    if (process.env.SMTP_CC) {
      _cc.push(process.env.SMTP_CC);
    }
    return deliver({
      from: req.body.from,
      to: req.body.to,
      cc: _cc,
      subject: `${req.body.subject}`,
      text: req.body.text, 
      html: req.body.html
    }, res);
  } else {
    return res.sendStatus(405); // Method Not Allowed
  }
}


function deliver(message, res) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_FROM,
      pass: process.env.SMTP_PASS
    },
    logger: true
  })

  transporter.sendMail(message, (error, info) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.error("🔴 Send Email Error:", error.toString());
      res.sendStatus(500)
    } else {
      res.sendStatus(200)
    }
  })
}

module.exports = {
  sendEmail
}