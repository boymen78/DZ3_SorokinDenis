import styles from "./user.module.css";

const Person = ({ age, name }) => {
    return (
        <div className={styles.person}>
            <p>Age: {age}</p>
            <p>Name: {name}</p>
        </div>
    );
};

export default Person;