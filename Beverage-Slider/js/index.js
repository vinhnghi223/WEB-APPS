var app = {
	// Application Constructor
	initialize: function () {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	onDeviceReady: function () {
		navigator.splashscreen.hide();
	}
};

