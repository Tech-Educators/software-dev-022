import { Popover } from "radix-ui"

export const Popover2 = () => {
    return (
        <div>
            {/* All of the content of our popover needs to go in here */}
            <Popover.Root>
                {/* splits into 2 parts: the button and the popup when the button is clicked */}
                {/* the button will be inside a trigger component */}
                <Popover.Trigger>
                    Click me for more information
                </Popover.Trigger>

                {/* The popovr itself will be in a Content component */}

                <Popover.Content>
                    <p className="bg-amber-400">Bees dont have knees</p>
                </Popover.Content>
            </Popover.Root>
        </div>
    )
}


// Popover.Portal - the content will be a direct child of the body element instead of a sibling to the 'trigger' elemeent.