var nodeMailer = require('nodemailer');
var mail = ((email, url, name) => {
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
        subject: "HRMS verification", // Subject line
        text: "Hello please verify your email below.", // plain text body
        html: `<html>
        <head>
        <style>
        .button {
          background-color: #00BCD4;
          border: none;
          color: white !important;
          padding: 6px 24px;
              margin-left: 41%;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          border-radius: 18px;
          cursor: pointer;
        }
        .button:hover {
            background-color: #2196f3;
          }
        h1{
            text-align: center;
            font-family: cursive;
color:#fff;

        }
h4{
    margin-left: 14%;
}
        
        .mainDiv{
            height: auto;
            width: 600px;
   		 margin: 0 auto;;
            border-radius: 10px;
            background: #f1f1ef;
        }
.verifyImage{
	    margin-left: 42%;
    height: 85px;
	
}
.emailtop{
	height:70px;
	background:#000;
}
.emailtop h1{
    padding-top: 11px;
}
.emailcontent{
height: 400px;
    margin-top: 11%;
}
.name{
margin-top: 10%;
}

        </style>
        </head>
        <body>
        <div class="mainDiv">
		<div class="emailtop">
<h1><svg width="580" height="400" xmlns="http://www.w3.org/2000/svg">
<!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->
<g>
 <title>background</title>
 <rect fill="#ffffff" id="canvas_background" height="402" width="582" y="-1" x="-1"/>
 <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
  <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
 </g>
</g>
<g>
 <title>Layer 1</title>
 <path stroke="#35e0cc" transform="rotate(-29.135055541992188 361.1708068847657,236.56785583496088) " id="svg_16" d="m278.783405,236.567855l35.30889,-73.276693l94.157033,0l35.308879,73.276693l-35.308879,73.276693l-94.157033,0l-35.30889,-73.276693z" stroke-width="0" fill="#84d3db"/>
 <path stroke="#000" transform="rotate(-29.135055541992188 211.17082214355472,234.56784057617196) " id="svg_17" d="m128.78341,234.56786l35.30889,-73.2767l94.15703,0l35.30888,73.2767l-35.30888,73.27669l-94.15703,0l-35.30889,-73.27669z" stroke-opacity="null" stroke-width="0" fill="#67cea5"/>
 <path stroke="#000" transform="rotate(-29.135055541992188 290.1708068847657,107.56784820556639) " id="svg_18" d="m207.78341,107.56786l35.30889,-73.2767l94.15703,0l35.30888,73.2767l-35.30888,73.27669l-94.15703,0l-35.30889,-73.27669z" stroke-opacity="null" stroke-width="0" fill="#9ACEE6"/>
 <path id="svg_21" d="m298.128591,118.940586c-2.527881,-1.01054 -3.537247,-3.787853 -3.537247,-3.787853s-1.138886,0.629078 -1.138886,-1.137694s1.138886,1.137694 2.277772,-5.684011c0,0 3.157618,-0.885617 2.527881,-8.209246l-0.759257,0c0,0 1.895911,-7.830015 0,-10.482404c-1.898144,-2.65239 -2.655168,-4.419162 -6.828851,-5.684011s-2.652935,-1.012771 -5.687732,-0.883386c-3.034797,0.127154 -5.564911,1.766773 -5.564911,2.650159c0,0 -1.895911,0.127154 -2.652935,0.885617c-0.759257,0.758463 -2.023198,4.292008 -2.023198,5.177625s0.63197,6.821705 1.26394,8.084323l-0.752558,0.252077c-0.63197,7.323629 2.527881,8.209246 2.527881,8.209246c1.136653,6.821705 2.275539,3.917238 2.275539,5.684011s-1.138886,1.137694 -1.138886,1.137694s-1.009366,2.777313 -3.537247,3.787853c-2.527881,1.00831 -16.560745,6.438012 -17.701864,7.575706c-1.141119,1.139925 -1.011599,6.442474 -1.011599,6.442474l60.17562,0c0,0 0.131754,-5.302548 -1.009366,-6.442474c-1.143352,-1.137694 -15.176217,-6.567397 -17.704098,-7.575706zm-27.846884,-0.383693c-0.221078,-0.401539 -0.3305,-0.69154 -0.3305,-0.69154s-0.964704,0.533155 -0.964704,-0.963694s0.964704,0.963694 1.929407,-4.81624c0,0 2.677499,-0.74954 2.141553,-6.957782l-0.643136,0c0,0 0.319335,-1.318387 0.529247,-2.975852c-0.008932,-0.687078 0.013399,-1.418772 0.082625,-2.22185l0.084858,-0.950309c-0.046895,-1.097541 -0.238943,-2.094696 -0.69673,-2.734928c-1.607839,-2.246389 -2.250975,-3.745469 -5.785988,-4.81624c-3.535013,-1.070771 -2.250975,-0.858848 -4.821285,-0.74954c-2.572543,0.107077 -4.716329,1.496849 -4.716329,2.24862c0,0 -1.607839,0.107077 -2.250975,0.74954c-0.605173,0.60454 -1.574343,3.261391 -1.690464,4.205008l0,0.626847c0.104956,1.456695 0.576142,5.463164 1.047329,6.406781l-0.63867,0.214154c-0.533713,6.208242 2.141553,6.957782 2.141553,6.957782c0.964704,5.779934 1.929407,3.319391 1.929407,4.81624s-0.964704,0.963694 -0.964704,0.963694s-0.855281,2.357927 -2.999067,3.210083c-0.13622,0.053539 -0.310402,0.124923 -0.518082,0.205231l0,11.675868l1.284038,0c-0.06476,-2.850928 0.171949,-6.529474 1.6659,-8.0174c0.794987,-0.791925 3.401027,-2.094696 14.184716,-6.384473zm49.865351,-20.201884c-0.089324,-0.843232 -0.283605,-1.595003 -0.652068,-2.110312c-1.605606,-2.24862 -2.250975,-3.745469 -5.783755,-4.81624c-3.537247,-1.070771 -2.250975,-0.858848 -4.823518,-0.74954c-2.57031,0.107077 -4.714096,1.496849 -4.714096,2.24862c0,0 -1.605606,0.107077 -2.250975,0.74954c-0.605173,0.60677 -1.583275,3.283698 -1.692698,4.218393l0.073693,0l0.178649,2.036696c0.044662,0.515309 0.049128,0.972617 0.060294,1.438849c0.20098,1.485695 0.468953,3.011544 0.736926,3.544699l-0.63867,0.214154c-0.533713,6.208242 2.143786,6.957782 2.143786,6.957782c0.964704,5.779934 1.927174,3.319391 1.927174,4.81624s-0.964704,0.963694 -0.964704,0.963694s-0.118355,0.31677 -0.363997,0.754001c10.651936,4.238469 13.235644,5.532318 14.021699,6.322012c1.496184,1.487926 1.73066,5.16424 1.6659,8.0174l1.071893,0l0,-11.836484c-0.03573,-0.013385 -0.084858,-0.033462 -0.116122,-0.046846c-2.141553,-0.854386 -2.999067,-3.210083 -2.999067,-3.210083s-0.966937,0.533155 -0.966937,-0.963694s0.966937,0.963694 1.929407,-4.81624c0,0 1.795421,-0.510847 2.150485,-4.106854l0,-2.737159c-0.002233,-0.040154 -0.002233,-0.073616 -0.006699,-0.113769l-0.645369,0c0,0 0.480119,-1.985388 0.652068,-4.151469l0,-2.62339l0.006699,0z" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000"/>
 <path stroke="#000" id="svg_22" d="m211.109809,202.14484c-16.016442,0 -28.999999,13.20741 -28.999999,29.5c0,16.29259 12.983557,29.5 28.999999,29.5c16.016442,0 28.999999,-13.20741 28.999999,-29.5c0,-16.29259 -12.983557,-29.5 -28.999999,-29.5zm0,52.9088c-12.692236,0 -23.014034,-10.50179 -23.014034,-23.4088c0,-12.90904 10.321798,-23.41083 23.014034,-23.41083c12.692236,0 23.012047,10.49976 23.012047,23.41083c0,12.91107 -10.323796,23.4088 -23.012047,23.4088zm-0.001998,-45.48204c-1.103407,0 -1.99332,0.90931 -1.99332,2.02972l0,18.71608l-12.06372,5.36659c-1.00963,0.4506 -1.468549,1.64814 -1.02559,2.67518c0.327227,0.76114 1.057523,1.2158 1.825722,1.2158c0.267369,0 0.540732,-0.0548 0.800121,-0.17253l13.221003,-5.88213c0.009978,-0.00406 0.017959,-0.00812 0.025939,-0.01218l0.00798,-0.00406c0.029924,-0.01218 0.045895,-0.0406 0.073821,-0.05075c0.207522,-0.10554 0.401059,-0.22935 0.556703,-0.39579c0.067839,-0.06901 0.105743,-0.15832 0.15762,-0.23748c0.095786,-0.1299 0.201529,-0.25777 0.2594,-0.41406c0.047882,-0.12179 0.051878,-0.25372 0.075819,-0.38362c0.025939,-0.13193 0.075819,-0.24763 0.075819,-0.37956l0,-20.04352c0,-1.11838 -0.893898,-2.02769 -1.997316,-2.02769z" stroke-opacity="null" stroke-width="0" fill="#000000"/>
 <path id="svg_23" d="m291.956475,184.461561l-6.032127,-1.101508l2.222364,-1.196492c1.222294,-0.658082 2.330549,-1.295148 2.46278,-1.415703c0.328467,-0.299453 -3.762096,-6.816917 -4.275115,-6.811521c-0.225516,0.002636 -1.79695,2.526324 -3.49207,5.608797c-1.707387,3.104732 -3.406617,5.469223 -3.809767,5.301235c-4.771526,-1.987997 -8.664731,-3.999412 -8.664731,-4.476601c0,-0.325944 1.497104,-3.233519 3.326918,-6.461282l3.326919,-5.86865l9.070959,0l9.070959,0l2.367772,3.861153l2.367791,3.861153l2.470126,-1.306618c1.712344,-0.905791 2.364358,-1.035856 2.125319,-0.424046c-2.104625,5.387385 -5.245058,11.669171 -5.803284,11.608235c-0.38648,-0.042156 -3.417138,-0.572333 -6.734811,-1.178151l-0.000002,-0.000002zm-28.133,24.035427c-2.295571,-4.075972 -4.352935,-7.892253 -4.5719,-8.480648c-0.22472,-0.603779 0.430005,-2.761282 1.503091,-4.95307l1.901219,-3.88333l-1.943522,-1.183744c-2.586427,-1.575302 -1.625032,-2.060484 5.236024,-2.642445l5.422474,-0.459928l2.126948,5.794486c1.169838,3.186965 2.276639,6.206063 2.459584,6.709147c0.190791,0.52466 -0.722314,0.175576 -2.141404,-0.818679l-2.474019,-1.733382l-1.727055,3.437429c-0.949863,1.890618 -1.740523,3.648131 -1.756992,3.905586c-0.016509,0.257454 2.898791,0.552074 6.478391,0.654689l6.508348,0.186565l0.424735,4.908677c0.233614,2.699788 0.376465,4.944761 0.317479,4.988837c-0.058982,0.044032 -3.140777,0.282747 -6.848423,0.530417l-6.741187,0.450293l-4.173791,-7.410904l0,0.000006zm25.690898,7.201799c-3.940874,-6.132861 -4.009372,-5.676686 1.848008,-12.305838l3.76004,-4.255469l-0.399349,3.109765l-0.399367,3.109767l4.213551,0c2.317448,0 4.213572,-0.191086 4.213572,-0.424606c0,-0.233558 -1.28581,-2.856705 -2.857342,-5.82929c-1.571532,-2.972585 -2.851375,-5.653951 -2.844107,-5.958595c0.016317,-0.683098 8.254081,-6.323786 8.645705,-5.920001c0.155174,0.159996 1.683935,3.009588 3.397251,6.332493l3.115161,6.041555l-4.191536,6.971033c-2.305379,3.834021 -4.520338,7.344971 -4.922107,7.802065c-0.401815,0.457094 -2.648532,1.015761 -4.992725,1.241442c-4.474488,0.430835 -4.352682,0.327065 -5.008745,4.266658c-0.11481,0.689453 -1.453601,-0.874939 -3.57801,-4.180984l0,0.000004z" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000"/>
 <path id="svg_24" d="m372.26021,247.969403l-2.354183,-6.893157c0.689915,-0.506291 1.337466,-1.048023 1.948706,-1.627727l8.233587,1.969473c0.868445,-1.058149 1.615853,-2.182116 2.284586,-3.349117l-6.127532,-4.961655c0.293516,-0.72906 0.547695,-1.470776 0.729252,-2.235276l8.257795,-1.731516c0.060519,-0.637927 0.118012,-1.278386 0.118012,-1.931501s-0.060519,-1.291043 -0.118012,-1.92897l-8.257795,-1.731516c-0.184582,-0.7645 -0.438762,-1.506217 -0.729252,-2.235276l6.130558,-4.961655c-0.671759,-1.16447 -1.419167,-2.290968 -2.287612,-3.349117l-8.233587,1.966942c-0.608214,-0.577172 -1.258792,-1.118904 -1.948706,-1.627727l2.354183,-6.890625c-1.264844,-0.723997 -2.611388,-1.351798 -4.006347,-1.91125l-5.930846,5.128731c-0.868445,-0.245551 -1.758072,-0.455662 -2.671907,-0.610081l-2.066718,-6.910877c-0.765563,-0.048098 -1.528101,-0.098727 -2.308794,-0.098727s-1.54323,0.050629 -2.305768,0.098727l-2.069744,6.910877c-0.913834,0.154419 -1.800435,0.36453 -2.671907,0.610081l-5.930846,-5.128731c-1.391933,0.567046 -2.735451,1.192316 -4.000295,1.918844l2.354183,6.890625c-0.689915,0.506291 -1.340492,1.050555 -1.945681,1.625195l-8.236613,-1.969473c-0.868445,1.058149 -1.615853,2.184647 -2.284586,3.351649l6.130558,4.961655c-0.29049,0.72906 -0.54467,1.470776 -0.729252,2.235276l-8.260821,1.731516c-0.057493,0.637927 -0.118012,1.278386 -0.118012,1.92897s0.060519,1.291043 0.118012,1.931501l8.260821,1.731516c0.184582,0.7645 0.438762,1.506217 0.729252,2.235276l-6.130558,4.961655c0.668733,1.16447 1.416141,2.290968 2.284586,3.349117l8.236613,-1.969473c0.605188,0.579704 1.255766,1.118904 1.945681,1.627727l-2.354183,6.893157c1.264844,0.723997 2.611388,1.349266 4.003321,1.91125l5.930846,-5.128731c0.871471,0.245551 1.758072,0.458194 2.671907,0.610081l2.069744,6.908345c0.762537,0.050629 1.528101,0.098727 2.308794,0.098727s1.54323,-0.050629 2.308794,-0.098727l2.066718,-6.908345c0.913834,-0.154419 1.803461,-0.367061 2.671907,-0.610081l5.930846,5.128731c1.388907,-0.567046 2.735451,-1.192316 4.000295,-1.916313zm-16.981585,-12.153524c-5.679693,0 -10.285176,-3.852877 -10.285176,-8.604421s4.605483,-8.60189 10.285176,-8.60189s10.28215,3.850346 10.28215,8.60189s-4.602457,8.604421 -10.28215,8.604421zm46.87789,17.986c0.057493,-1.384707 -0.181557,-2.794728 -0.695967,-4.187029l3.764272,-4.488273c-0.568877,-0.88601 -1.210377,-1.726453 -1.939629,-2.490953l-6.421048,1.126498c-1.295103,-0.92145 -2.768737,-1.640384 -4.345252,-2.15427l-1.84885,-5.262898c-1.168014,-0.172139 -2.351157,-0.265803 -3.54943,-0.268334l-2.947267,4.9009c-0.844238,0.136699 -1.688475,0.324026 -2.517584,0.589829c-0.777667,0.248083 -1.503893,0.55692 -2.19986,0.893604l-6.070039,-2.073263c-0.898705,0.663242 -1.718735,1.379644 -2.460091,2.156801l2.744529,4.981907c-0.783719,1.253071 -1.322337,2.602337 -1.570464,4.012359l-5.722056,2.683344c0.057493,0.982205 0.229972,1.96441 0.496254,2.949147l6.366581,1.313826c0.698993,1.326483 1.637034,2.513737 2.771763,3.526319l-1.065131,5.412254c0.968301,0.582235 1.997122,1.083463 3.065279,1.518874l5.18949,-3.341523c1.621905,0.356935 3.319458,0.493634 5.029115,0.379719l4.393667,4.068051c0.605188,-0.144293 1.207351,-0.298712 1.803461,-0.488571c0.52954,-0.167076 1.02882,-0.36453 1.528101,-0.564515l0.11196,-5.480604c1.376803,-0.858164 2.550869,-1.890998 3.485885,-3.052937l6.53906,-0.339215c0.459943,-0.908793 0.844238,-1.853026 1.113547,-2.822574l-5.050297,-3.498473zm-12.596995,5.080634c-3.634156,1.159407 -7.701022,-0.36453 -9.089929,-3.404809s0.43271,-6.445089 4.066866,-7.607027c3.634156,-1.159407 7.707074,0.36453 9.095981,3.404809c1.385881,3.04028 -0.438762,6.445089 -4.072918,7.607027z" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000"/>
 <text font-style="normal" font-weight="bold" xml:space="preserve" text-anchor="start" font-family="Euphoria, sans-serif" font-size="43" id="svg_25" y="342.5" x="220.5" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000">HRMS</text>
</g>
</svg></h1>
		</div>
		<div class="emailcontent">
		    
<img class="verifyImage" src="https://1001freedownloads.s3.amazonaws.com/vector/thumb/130306/andrea_S_checkmark_on_circle_1.png" />
	<h4 class="name">Hello ${name},</h4>
		    <h4>Please click the button below to verify your email!</h4>
		    <a href=${url} class="button">Verify</a>
		</div>
        </div>
        </body>
        </html>` // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return error;
        }
        return { message: `Mail has been send to ${email}` }
    });
});

module.exports = { mail };
