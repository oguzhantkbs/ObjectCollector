import { forwardRef, useImperativeHandle, useState } from "react";
import styles from "./objectCollector.module.css";

const ObjectCollector = forwardRef((props, ref) => {
    const [datas, setDatas] = useState([]); // objeler için state

    const addObject = () => setDatas([...datas, { text: "", value: "" }]);

    const deleteData = (index) => { // silme fonksiyonu
        const newObjects = [...datas];
        newObjects.splice(index, 1);
        setDatas(newObjects);
    };

    const handleChange = (event, index, key) => { // değişiklik fonksiyonu
        const newObjects = [...datas];
        newObjects[index][key] = event.target.value;
        setDatas(newObjects);
    };

    useImperativeHandle(ref, () => ({ // parent bileşenin bu bileşen içerisindeki getData fonksiyonunu çağırabilmesi için
        getData() {
            return datas;
        },
    }));

    return (
        <>
            <button className={styles.addButton} onClick={addObject}>+ Add</button>
            {datas.map((object, index) => (  // objeleri ekrana basma ve indexleri kullanarak silme ve değişiklik fonksiyonlarını çağırma
                <div key={index} className={styles.inputs}>
                    <label>Text : </label>
                    <input
                        className={styles.input}
                        type="text"
                        value={object.text}
                        onChange={(event) => handleChange(event, index, "text")}
                    />
                    <label>Value : </label>
                    <textarea
                        className={styles.textArea}
                        type="text"
                        value={object.value}
                        onChange={(event) => handleChange(event, index, "value")}
                    />
                    <button className={styles.deleteButton} onClick={() => deleteData(index)}>Delete</button>
                </div>
            ))}

        </>
    );
});

export default ObjectCollector;
