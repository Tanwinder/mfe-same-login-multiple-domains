import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {callList} from './compAaction'
import {List} from '../../presentational/List';

const CompA = () => {
    const dispatch = useDispatch();
    const [itemsVal, setItemsVal] = useState('even');
    const items = useSelector(state => state?.compA?.items);
    useEffect(() => {
        dispatch(callList(itemsVal));
    }, [itemsVal])
    const onClickBtn = (e) => {
        const gh = e.target?.dataset?.type;
        setItemsVal(gh);
    }
    return(
        <div>
            <div>
                <button onClick={onClickBtn} data-type="even">Even</button>
                <button onClick={onClickBtn} data-type="odd">Odd</button>
            </div>
            <List items={items}/>
        </div>
    )
}

export default CompA;