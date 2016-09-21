(function(ext) {
	// To use: http://scratchx.org/?url=https://coulthard.github.io/scratch-robot/sample.js

	// Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    var baseurl = 'http://10.0.0.133/pcf8574/drive';
    
    ext.robot_fwd = function() {
       console.log('In robot_forward');
       $.get('http://10.0.0.133/pcf8574/drive?cmd=fwd');
    };
    ext.robot_back = function() {
       console.log('In robot_back');
       $.get('http://10.0.0.133/pcf8574/drive?cmd=back');
    };
    ext.robot_left = function() {
       console.log('In robot_left');
       $.get('http://10.0.0.133/pcf8574/drive?cmd=left');
    };
    ext.robot_right = function() {
       console.log('In robot_right');
       $.get('http://10.0.0.133/pcf8574/drive?cmd=right');
    };
    
    ext.drive_robot = function(dir, duration) {
    	$.get(baseurl + '?cmd=' + dir + '&duration=' + duration);
    };


    // Block and block menu descriptions
    var descriptor = {
        blocks: [
	    // Block type, block name, function name
	    [ ' ', 'robot forwards', 'robot_fwd' ],
	    [ ' ', 'robot back', 'robot_back' ],
	    [ ' ', 'robot left', 'robot_left' ],
	    [ ' ', 'robot right', 'robot_right' ],
	    [ ' ', 'drive robot %m.robotDirection for %n secs', 'drive_robot', 'forwards', 3 ],
        ],
        
        menus: {
        	robotDirection: ['forwards', 'back', 'left', 'right', 'spin-left', 'spin-right']        	
        }              

    };

    // Register the extension
    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});
