import cowsay from "cowsay"
import chalk from "chalk"

console.log(cowsay)

const output = cowsay.say({
    text: 'I love js',
    e: 'xx',
    T: 'U',
    f: 'USA'
})

console.log(chalk.blue(output))