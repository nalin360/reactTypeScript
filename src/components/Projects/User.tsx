import { FC } from 'react';
import { Users } from '../../common/types';


const User:FC<Users> = ({ name, email , login }) => {
    return (
        
      <li>
        <div>
          Name: {name.first} {name.last}
        </div>
        <div>Email: {email}</div>
        <hr />
      </li>
    );
  };
  
  export default User;