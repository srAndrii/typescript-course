import React, { useState, useEffect} from 'react';
import Card, {CardVariant} from "./component/Сard";
import UserList from "./component/UserList";
import {IUser} from "./types/types";
import axios from "axios";

const App = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {

        fetchUsers()
    }, []);

    async function fetchUsers(){
        try{
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        }catch (e){
            alert(e)
        }
    }

    return (
        <div>
            <Card onClick={(num)=>console.log('click',num)} variant={CardVariant.outline} width='200px' height='200px' >
                <button>Кнопка</button>
                <div>dfbfd</div>
            </Card>
            <UserList users={users}/>
        </div>
    );
};

export default App;
