info:
	tsuru app info -a pso-weatherjbc
deploy: 
	tsuru app deploy -a pso-weatherjbc .
log:
	tsuru app log -f -a pso-weatherjbc
start: 
	npm start