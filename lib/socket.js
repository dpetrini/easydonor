/*
 Socket io
*/
// const server = require('../bin/www');

// const io = require('socket.io')(server);

// var sendComments = function (socket) {
// 	fs.readFile('_comments.json', 'utf8', function(err, comments) {
// 		comments = JSON.parse(comments);
// 		socket.emit('comments', comments);
// 	});
// };


// io.on('connection', socket => {
// 	console.log('New client connected!');

// 	socket.emit('news', { hello: 'world' });
// 	// socket.on('my other event', data => {
// 	// 	console.log(data);
//     // });

// 	socket.on('fetchComments', function () {
// 		sendComments(socket);
// 	});

// 	socket.on('newComment', function (comment, callback) {
// 		fs.readFile('_comments.json', 'utf8', function(err, comments) {
// 			comments = JSON.parse(comments);
// 			comments.push(comment);
// 			fs.writeFile('_comments.json', JSON.stringify(comments, null, 4), function (err) {
// 				io.emit('comments', comments);
// 				callback(err);
// 			});
// 		});
// 	});

// 	socket.on('subscribeToTimer', interval => {
// 		console.log('client is subscribing to timer with interval ', interval);

// 		setInterval(() => {
// 			socket.emit('timer', new Date());
// 		}, interval);
// 	});

// 	socket.on('subscribeToDonorEasy', ip => {
// 		console.log('client is subscribing to subscribeToDonorEasy with IP ', ip);

// 		let idList = [ '5994b3f10142522a54fd2e1f', '5994bbe60142522a54fd2e23' ];

// 		setInterval(() => {
// 			socket.emit('donorEasy', idList);
// 		}, 5000);
// 	});

// });

// // const socketNotifyPatients = function (idList) {
// // 	// socket.on('timer', timestamp => cb(null, timestamp));
// // 	// socket.emit('donorEasy', idList);
// // 	console.log(idList);
// // };

// // socketNotifyPatients('TESTE');

// // module.exports = function (idList) {
// // 	return new socketNotifyPatients(idList);
// // };

// const sayHelloInSpanish = function(str) {
//     console.log(str);
//   return "Hola";
// };

// // module.exports = sayHelloInSpanish;

// module.exports = function(str) {
//     return new sayHelloInSpanish(str);
// };