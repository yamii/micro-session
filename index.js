'use strict';

exports.register = function ( server, options, next ) {

	server.route( {
		'method'  : 'GET',
		'path'    : '/v1/session',
		'handler' : function ( request, reply ) {
			reply( 'session route' );
		}
	} );
	return next();
};

exports.register.attributes = {
	'pkg': require( './package.json' )
};