import React, { FC, useState } from 'react'
import { AppProps, Users } from '../../common/types';
import User from './User';
import axios from 'axios';
// const Apps = ({ title }: { title: string }) => {
//     return <div>App</div>;
//   };
const example:FC<AppProps> = ({title}) => {
    const [users, setUsers] = useState<Users[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);


    const handleClick = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.get(
                'https://randomuser.me/api/?results=10'
            );
            // console.log(data);
            setUsers(data.results);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <div>
            <div>{title}</div>
            <button onClick={handleClick}>Show Users</button>
            {isLoading && <p>Loading...</p>}
            <ul>
                {users.map(({ name, email, login }) => (
                    <User key={login.uuid} name={name} email={email} login={login} />
                ))}
            </ul>
        </div>
    )
}

export default example