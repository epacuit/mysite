
deploy: 
	gatsby build && aero deploy --directory public
 
clean: 
	rm -rf .cache public
