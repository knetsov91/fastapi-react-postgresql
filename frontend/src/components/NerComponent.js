import axios from 'axios';
import {useState, useEffect} from 'react';

export default function NerComponent() {
    const URL = "http://localhost:8000/ner"
    const [data, setData] = useState([])

    useEffect(() => {
        axios.post(URL,{text: "Madrid is capital of spain.John went there last summer."})
        .then(response => {
            console.log(response.data);
            setData(response.data)
        })
        .catch(error => {
            console.log("Err")
        });
   
    }, []);

    if (data.length < 0) {
        return (<div>
                <p>No data</p>
            </div>);
    }

    return (

      
        <div>
            <h1>Ner Component</h1>
            <form>
                <input type="text" />
                <input type="submit" />
            </form>
            {data.length}
            <p>dadsa</p>
            { 
                data.map(d => {
                    return <p key={d.entity}>{d.entity} {d.label}</p>
                })

            }
        </div>
    );
}