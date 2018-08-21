const express = require('express');
const { fromExpress } = require('webtask-tools');
const bodyParser = require('body-parser');
const Pusher = require('pusher');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let pusher;

app.post('/pusher/auth', (req, res) => {
	if (!pusher) {
		pusher = new Pusher({
			appId: req.webtaskContext.secrets.app_id,
			key: req.webtaskContext.secrets.key,
			secret: req.webtaskContext.secrets.secret,
			cluster: req.webtaskContext.secrets.cluster,
			encrypted: true
		});
	}
	const socketId = req.body.socket_id;
	const channel = req.body.channel_name;
	var presenceData = {
		user_id: `doge_${Date.now()}_${Math.random()
			.toString(36)
			.slice(2)}`
	};
	const auth = pusher.authenticate(socketId, channel, presenceData);
	res.send(auth);
});

module.exports = fromExpress(app);