import React, { useEffect, useState } from 'react';
import "../Style/listItem.css";

const ListItem = (props) => {

    const [listItem, setListItem] = useState({});

    const [isChecked, setIsChecked] = useState(false);
    const [updateState, setUpdateState] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    } 

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleSave = () => {
        const data = {
            "title" : title,
            "guid" : props.sample.guid,
            "completed" : isChecked,
            "timeCreated" : props.sample.timeCreated,
            "timeUpdated" : new Date(),
            "description" : description,
        }
        props.updateListNode(data, props.sample.guid);
        switchUpdateState();
    }

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const switchUpdateState = () => {
        setUpdateState(!updateState);
    }

    const switchShowDescription = () => {
        setShowDescription(!showDescription);
    }

    useEffect(()=>{
        setListItem(props.sample);
        setIsChecked(props.sample.completed);
        setTitle(props.sample.title);
        setDescription(props.sample.description);
    },[props]);

    return (
        <div className='listDisplay' >
            { !updateState &&
                <div className='listitem' onClick={switchShowDescription}>
                    <div className='listContent'>
                        <p>{isChecked ? 'Completed ✅' : 'Pending ⏲'}</p>
                        <h2> {listItem.title} </h2>
                        <button onClick={props.delete}>Delete 🗑</button>
                    </div>
                    { showDescription &&
                        <div>
                            <div>
                                <p className = 'desc_time'>
                                    {listItem.timeUpdated ? 
                                    listItem.timeUpdated.toString() : listItem.timeCreated.toString()}
                                </p>
                            </div>
                            <div>
                                <p> {listItem.description} </p>
                            </div>
                        </div>
                    }
                </div>
            }
            { updateState &&
                <div className='update_form'>
                    <p>Completed <input className='checkbox_completed' type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/> </p>
                    <input className='textfield' type = "text" value = {title} placeholder='Title' onChange={handleTitleChange}/>
                    <input className='textfield' type = "text" value = {description} placeholder='Description' onChange={handleDescriptionChange}/>
                    <button onClick={handleSave}>Save 💾</button>
                </div>
            }
            <button onClick={switchUpdateState} className='updateButton'>{!updateState ? "Edit 🖊" : "Close"}</button>
        </div>
    );
}

export default ListItem;