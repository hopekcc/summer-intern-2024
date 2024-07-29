const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

// DEBUG
// dotenv config
// const dotenv = require('dotenv');
// dotenv.config();

// verify valid path from environment variable
// console.log(`GIT_PATH: ${process.env.GIT_PATH}`);


function processListeners(process){
    process.on('exit', (code) => {
        console.log(`Child process exited with code ${code}`);
    });
    
    process.on('close', (code) => {
        console.log(`Child process close all stdio with code ${code}`);
         // test to see if process is completed
        //  exec("pwd", (error, stdout, stderr) => {
        //     if (error) {
        //         console.error(`exec error: \n${error}`);
        //         return;
        //     }
        //     console.log(`stdout: \n${stdout}`);
        //     if (stderr != "")
        //         console.error(`stderr: \n${stderr}`);
        // });
    });
}

async function switchBranch(user){
    // const child = exec(`./scripts/fetchRepo.sh "${process.env.GIT_PATH}" ${user} "${process.env.WEB_PATH}"`, (error, stdout, stderr) => {
    //     if (error) {
    //         console.error(`exec error: \n${error}`);
    //         return;
    //     }
    //     console.log(`stdout: \n${stdout}`);
    //     if (stderr != "")
    //         console.error(`stderr: \n${stderr}`);
    // });

    // processListeners(child);

    try {
        // const {stdout, stderr} = await exec(`pwd`)
        const {stdout, stderr} = await exec(`./scripts/fetchRepo.sh "${process.env.GIT_PATH}" ${user} "${process.env.WEB_PATH}"`);
        console.log(`stdout: \n${stdout}`);
        if (stderr != "")
            console.error(`stderr: \n${stderr}`);
    }
    catch (error) {
        throw new Error(`exec error: \n${error}`);
    }
}

module.exports = {
    switchBranch
}