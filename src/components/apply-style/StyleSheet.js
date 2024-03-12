
import './css/StyleSheet.css'
import styles from './css/StyleSheet.module.css'

const StyleSheet = () => {

    // style properties should be camel case
    const inlineStyle = {
        fontSize: "40px",
        color: "blue",
        backgroundColor: "aliceblue",
        padding: "10px"
    }
    return (
        <>
            <h1 style={inlineStyle}>Inline Style. css-properties should be in camelCase</h1>
            <h1 className="primary">Style from .css file. accessible to all the child components</h1>
            <h1 className={styles.success}>Style from .css file. only accessible within the component.</h1>
            <hr />
        </>
    )
}

export default StyleSheet