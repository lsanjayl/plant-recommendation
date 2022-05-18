const  { PythonShell }  = require('python-shell');

export const pyScript=({inputValues})=>{
           const options = {
               mode: 'text',
               //pythonPath: '/usr/bin/python', 
               pythonOptions: ['-u'],
               // make sure you use an absolute path for scriptPath
               //scriptPath: '//Users/91877/Desktop/nodeProjects/live in lab/',
               args: [inputValues]
             };
               PythonShell.run('pythonScript.py', options, function (err, results) {
                   if (err) throw err;
                   // results is an array consisting of messages collected during execution
                   console.log('results: %j', results);
                   const output = parseInt(results[0])
                   console.log(output);
                   return output;                 
                });
           
              
       
}




