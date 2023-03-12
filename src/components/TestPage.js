import React, { useRef } from 'react'
import ObjectCollector from './ObjectCollector'
import styles from "./objectCollector.module.css";

const TestPage = (props) => {

    const collectorRef = useRef()

    const displayData = () => { 
        const data = collectorRef?.current.getData()
        console.log("Data:", data)
    }

        return (
            <div>
                <button className={styles.addButton} onClick={displayData}>Get Data</button>
                <ObjectCollector ref={collectorRef} />
            </div>
        )
    }


export default TestPage