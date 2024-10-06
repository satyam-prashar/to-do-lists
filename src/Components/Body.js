import React, { useEffect, useState } from 'react';
import data from "../Data/sample";
import ListItem from "./ListItem";
import AddItem from "./AddItem";
import '../Style/Body.css';

const Body = () => {
    const [dataList, setDataList] = useState([]);
    const [showAddFields, setShowAddFields] = useState(false);
    const [filter, setFilter] = useState('all');

    const DeleteListNode = (index) => {
        setDataList(prevList => {
            return prevList.filter((item,i) => item.guid !== index);
        });
    }

    const AddListNode = (node) => {
        setDataList([node, ...dataList]);
    }

    const updateListNode = (node, index) => {
        setDataList(prevList => {
            return prevList.map((item, i) => (item.guid===index ? node : item));
        });
    }

    const switchShowAddFields = () => {
        setShowAddFields(!showAddFields);
    }

    const handleFilter = (event) => {
        setFilter(event.target.value);
    }

    const filteredList = filter !== 'all' ? dataList.filter(item => item.completed.toString() === filter) : dataList;

    
    useEffect(()=>{
        setDataList(data);
    },[])

    return (
        <div className='mainBody'>
            <div className='top'>
                <div className='add_filter_section'>
                    <div>
                        <button onClick = {switchShowAddFields}>{!showAddFields ?"➕ Add To List " : "❌ Close"}</button>
                    </div>
                    <div className='filterTag'>
                        <select value={filter} onChange={handleFilter}>
                            <option value="all">All</option>
                            <option value="false">Pending</option>
                            <option value="true">Completed</option>
                        </select>
                    </div>
                </div>
                {showAddFields && <AddItem addListNode = {AddListNode}/>}
            </div>
            <div className='list'>
                {filteredList.map((sample, index) => (
                    <>
                    <ListItem key={index} index = {index} sample = {filteredList[index]} updateListNode = {updateListNode} delete = {() => DeleteListNode(filteredList[index].guid)}/>  
                    </>
                ))}
            </div>
        </div>
    );
}

export default Body;