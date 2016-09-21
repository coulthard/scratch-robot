(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.my_first_block = function() {
       console.log('In my_first_block');
    };

    ext.robot_fwd = function() {
       console.log('In robot_forward');

        $.ajax({
              url: 'http://10.0.0.133/pcf8574/drive?cmd=fwd',
              dataType: 'jsonp',
              success: function( data ) {
              }
        });

    };
    ext.robot_back = function() {
       console.log('In robot_back');
       $.get('http://10.0.0.133/pcf8574/drive?cmd=back');
    };
    ext.robot_left = function() {
       console.log('In robot_left');
    };
    ext.robot_right = function() {
       console.log('In robot_right');
    };


    // Block and block menu descriptions
    var descriptor = {
        blocks: [
	    // Block type, block name, function name
	    [ ' ', 'my first block', 'my_first_block' ],
	    [ ' ', 'robot forwards', 'robot_fwd' ],
	    [ ' ', 'robot back', 'robot_back' ],
	    [ ' ', 'robot left', 'robot_left' ],
	    [ ' ', 'robot right', 'robot_right' ],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});
