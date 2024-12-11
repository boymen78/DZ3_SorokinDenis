import Person from "../../components/user/User";
import styles from "./mainPage.module.css";

const numbers = [
    {
        id: 1,
        name: "Anna",
        age: 22,
    },
    {
        id: 2,
        name: "John",
        age: 25,
    },
    {
        id: 3,
        name: "Tom",
        age: 25,
    },
];

const MainPage = () => {
    return (
        <div>
            <h2 className={styles.title}>MainPage</h2>
            {numbers.map((el) => (
                <Person key={el.id} age={el.age} name={el.name} />
            ))}
        </div>
    );
};

export default MainPage;