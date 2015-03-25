'use strict';

//session just to test

var Hapi   = require( 'hapi' );
var server = new Hapi.Server();

server.connection( {
	'port' : 8001
} );

server.route( [ {
	'method'  : 'GET',
	'path'    : '/session',
	'handler' : function ( request, reply ) {
		reply( 'session' );
	}
} ] );

server.start( function onStart() {
	console.log( 'started ' + server.info.uri );
} );