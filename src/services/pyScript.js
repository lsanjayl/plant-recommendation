// import PythonShell from "python-shell"
import {useNavigate} from "react-router-dom"
const PyScript=({values})=>{
  const navigate = useNavigate();
  // const options = {
  //   mode: 'text',
  //   //pythonPath: '/usr/bin/python', 
  //   pythonOptions: ['-u'],
  //   // make sure you use an absolute path for scriptPath
  //   //scriptPath: '//Users/91877/Desktop/nodeProjects/live in lab/',
  //   args: [values]
  // };
  //   PythonShell.run('pythonScript.py', options, function (err, results) {
  //       if (err) throw err;
  //       // results is an array consisting of messages collected during execution
  //       console.log('results: %j', results);
  //       const output = parseInt(results[0])
  //       console.log(output);                
  //    });
  const submit=()=>{
    navigate("./suggestion",{state:{value:["wheat","maize","corn"]}});
    console.log(values)
}
                return(
                  <button type="button" id="btn" className="btn btn-secondary btn-green" onClick={()=>submit()}>SUBMIT</button>
                )
           
}
export default PyScript;




