import styles from "./cooltext.module.css"

export default function CoolText() {
    console.log(styles)
    return (
        <div>
            <h2>I am some cool text being modified by the global css file</h2>
            {/* if you have a one-off value, you can use []'s */}
            <h2 className="animate-bounce text-[#2787F5] bg-sam">I am using tailwind!</h2>
            <p className="text-sam">This also using tailwind</p>
            <div className={styles.box}>
                <h2 className={styles.text}>I am using the module system!</h2>
            </div>
        </div>
    )
}