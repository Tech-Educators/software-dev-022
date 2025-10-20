export default function Layout({children}) {
    return (
        <div>
            <p>This will render on every segement inside /dogs</p>
            {/* children is standin for the page that should be on that route */}
            {children}
        </div>
    )
}