import { displaysUsersName } from "./hello.js"
import Goodbye from "./anotherDirectory/goodbye.js"
import howAreYou from "./howareyou.js"

function main() {
    console.log('This is the main function')
    // doing some really important stuff about logging the user in.
    displaysUsersName('Connor')
    howAreYou()
    Goodbye()
}

main()
