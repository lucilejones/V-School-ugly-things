import { useContext, useState } from "react"
import { UglyArrayContext } from "./uglyArrayContext"

function UglyThing(props) {
    const { removeThing, editThing } = useContext(UglyArrayContext)
    const [editMode, setEditMode] = useState(false)
    const [newEditThing, setNewEditThing] = useState({
        ...props.uglyThing
    })

    function handleThingChange(event) {
        const { name, value } = event.target
        setNewEditThing(prevNewEditThing => ({
            ...prevNewEditThing,
            [name]: value
        }))
    }

    function handleEditMode() {
        setEditMode(prevEditMode => !prevEditMode)
    }

    function save() {
        editThing(props.uglyThing._id, newEditThing)
        setEditMode(prevEditMode => !prevEditMode)
    }

    return (
        <>
            {editMode ?
                <div className="new-input-form">
                    <input
                        type="text"
                        placeholder="title"
                        onChange={handleThingChange}
                        name="title"
                        value={newEditThing.title}
                    />
                    <input
                        type="text"
                        placeholder="description"
                        onChange={handleThingChange}
                        name="description"
                        value={newEditThing.description}
                    />
                    <input
                        type="text"
                        placeholder="imgUrl"
                        onChange={handleThingChange}
                        name="imgUrl"
                        value={newEditThing.imgUrl}
                    />
                    <button onClick={save}>Save</button>
                </div> :
                <div className="thing-container">
                    <p className="thing-title">{props.uglyThing.title}</p>
                    <p className="thing-description">{props.uglyThing.description}</p>
                    <img src={props.uglyThing.imgUrl} alt={props.uglyThing.description} />
                    <div className="button-container">
                        <button onClick={handleEditMode}>Edit</button>
                        <button onClick={() => removeThing(props.uglyThing._id)}>Delete</button>
                    </div>
                </div>
            }
        </>

    )
}

export default UglyThing