import styles from './BenifitItem.module.css'

function BenifitItem({children,title,description}) {
    return (
        <div className={styles.benifit}>
            <div className={styles.header}>
                {children}
            <h3>{title}</h3>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default BenifitItem
