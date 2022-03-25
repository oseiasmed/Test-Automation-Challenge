module.exports = {
	launch: {
		headless: false,
		"slowMo":50,
		defaultViewport: null,
		
	},
	
	"jest": {
		"reporters": [
		  "jest-step-by-step-report",
		  
		]
	  },
}
