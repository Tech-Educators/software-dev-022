import SlowComponent from "@/component/SlowComponent";

export default function SlowPage() {
    return (
        <div>
            <p>This whole page is slowed down by the slow page component. If only the user could see something was happening</p>
            <SlowComponent />
        </div>
    )
}