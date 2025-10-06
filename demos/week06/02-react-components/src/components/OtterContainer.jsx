import { OtterCard } from "./OtterCard"
export function OtterContainer() {
    return (
        <div>
            <p>This will hold all the otters</p>
            {/* We can invoke the same component many times */}
            <OtterCard />
            <OtterCard />
            <OtterCard />
            <OtterCard />
            <OtterCard />
            <OtterCard />
            <OtterCard />
            <OtterCard />
        </div>
    )
}

