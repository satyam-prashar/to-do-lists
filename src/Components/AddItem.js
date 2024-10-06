import React, { useState } from 'react';
import "../Style/AddItem.css";

const AddItem = (props) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    } 

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleSave = () => {
        const data = {
            "title" : title,
            "guid" : createUUID(),
            "completed" : false,
            "timeCreated" : new Date(),
            "timeUpdated" : new Date(),
            "description" : description,
        }
        props.addListNode(data);
        setTitle("");
        setDescription("");
    }

    function createUUID() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
      }

    return (
        <div className='add_form'>
            <input type = "text" value = {title} placeholder='Title' onChange={handleTitleChange}/>
            <input type = "text" value = {description} placeholder='Description' onChange={handleDescriptionChange}/>
            <button onClick={handleSave}>Save 💾</button>
        </div>
    );
}

export default AddItem;