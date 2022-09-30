import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '../styles/ToDoActivity.module.css'
import reducer from './Reducer'



const TodoActivity = () => {

    const [url, dispatch] = React.useReducer( reducer, '' )
    const [activity, setActivity] = useState( '' )



    useEffect( () => {
        const getAtivity = async () => {
            const URL_BASE = `http://www.boredapi.com/api/activity${url}`

            try {
                const response = await axios.get( URL_BASE )
                setActivity( response.data );
            } catch ( error ) {
                console.log( error.response );
            }
        }
        getAtivity()
    }, [url] )


    return (
        <div className={styles.container}>
            <header>

                <h1>TRY SOME NEW TODAY</h1>
            </header>
            <section>
                <main>
                    <p>{activity.activity}</p>
                </main>
                <div className={styles.text_choose}>
                    <p>CHOOSE A CATEGORY</p>
                </div>

            </section>

            <div className={styles.buttons}>
                <button onClick={() => dispatch( '' )}>all categories</button>
                <button onClick={() => dispatch( '?type=recreational' )}>recreational</button>
                <button onClick={() => dispatch( '?type=social' )}>social</button>
                <button onClick={() => dispatch( '?type=busywork' )}>busywork</button>
                <button onClick={() => dispatch( '?type=music' )}>music</button>
                <button onClick={() => dispatch( '?type=cooking' )}>cooking</button>
                <button onClick={() => dispatch( '?type=education' )}>education</button>
            </div>



        </div>

    )
}

export default TodoActivity

