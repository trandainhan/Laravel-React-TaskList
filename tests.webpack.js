var context = require.context('./resources/assets/js', true, /spec\.jsx$/); //make sure you have your directory and regex test set correctly!
context.keys().forEach(context);