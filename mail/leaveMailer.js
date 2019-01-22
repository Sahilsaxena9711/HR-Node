var nodeMailer = require('nodemailer');
var leavemail = ((email, url, data) => {
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'sahilsaxena9711@gmail.com',
            pass: 'Sahil@1058'
        }
    });
    let mailOptions = {
        from: 'sahilsaxena9711@gmail.com', // sender address
        to: `${email}`, // list of receivers
        subject: "Leave Application", // Subject line
        text: `Hey, ${data.username} has applied ${data.leaveType} for ${data.date} due to the reason "${data.reason}", You can take action on this leave using the application.
        
Thank You!`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return error;
        }
        return { message: `Mail has been send to ${email}` }
    });
});

module.exports = { leavemail };
