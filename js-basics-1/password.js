const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })  

console.log(`Welcome to the password validator tool!`)

reader.question("Please enter your new password ", function(answer){
    if(answer.length >= 10){
        console.log(`Congratulations on setting up your new password!`)
    }

    else{
        console.log(`New Password must be at least 10 characters in length`)
    }
})