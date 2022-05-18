import { IItem } from './index';
import { useState } from 'react';

export function Keys(props: { initialData: IItem[]; sorting: 'ASC' | 'DESC' }) {
    const [id, setId] = useState(-1);
    const [name, setName] = useState('');

    if (props.sorting === 'DESC') {
        props.initialData.sort((a, b) => b.id - a.id);
    } else if (props.sorting === 'ASC') {
        props.initialData.sort((a, b) => a.id - b.id);
    }

    // return (
    //     <div>
    //         {props.initialData.map((user) =>
    //             user.id != id ? (
    //                 <div onClick={() => setId(user.id)} key={user.id}>
    //                     {user.name}
    //                 </div>
    //             ) : (
    //                 <input
    //                     autoFocus={true}
    //                     onChange={(e) => setName(e.currentTarget.value)}
    //                     key={user.id}
    //                     defaultValue={user.name}
    //                     onKeyDown={(e) => {
    //                         if (e.key == 'Escape') {
    //                             setId(0);
    //                         }
    //                         if (e.key == 'Enter') {
    //                             user.name = name;
    //                             setId(0);
    //                         }
    //                     }}
    //                 />
    //             ),
    //         )}
    //     </div>
    // );
    return (
        <div>
            {props.initialData.map((item) => {
                if (item.id != id) {
                    return (
                        <div onClick={(e) => setId(item.id)} key={item.id}>
                            {item.name}
                        </div>
                    );
                } else
                    return (
                        <input
                            autoFocus={true}
                            onChange={(e) => setName(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key == 'Escape') setId(0);
                                if (e.key == 'Enter') {
                                    item.name = name;
                                    setId(0);
                                }
                            }}
                            key={item.id}
                            defaultValue={item.name}
                        ></input>
                    );
            })}
        </div>
    );
}
