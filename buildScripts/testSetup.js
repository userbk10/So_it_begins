//This file isn't transpiled

require('babel-register')();

//Disable webpack features that mocha doesn't understand.
//When mocha sees the "require css", it ignores it and treats it like a normal, empty function
require.extensions['.css'] = function () {};
