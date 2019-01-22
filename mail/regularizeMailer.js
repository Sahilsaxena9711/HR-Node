var nodeMailer = require('nodemailer');
var regularizemail = ((email, data, date, username) => {
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
        subject: "Regularization Request", // Subject line
        text: `Hey, ${username} has requested to regularize attendance for ${date} with entry time : ${data.entryTime} & exit time: ${data.exitTime}, You can take action on this request using the application.
        
Thank You!`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return error;
        }
        return { message: `Mail has been send to ${email}` }
    });
});

module.exports = { regularizemail };
