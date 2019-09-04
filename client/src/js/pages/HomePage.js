import React from 'react';

import { useFetch } from '../hooks/useFetch';

const Home = () => {
    const [data, loading] = useFetch(
        "/api/users"
    );

      
    return(
        <React.Fragment>
            {
                loading ? (
                    "Loading..."
                    ) : (
                        <ul>
                            {data.users.map((user) =>
                                <li key={user.id}>
                                    <b>{user.name}</b> with <u>{user.job}</u> job has salary <i>{user.Salary}</i>
                                </li>
                            )}
                        </ul>
                )
            }
        </React.Fragment>
    );
};

export default Home;