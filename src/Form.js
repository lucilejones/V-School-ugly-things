import { useContext } from "react"
import { UglyArrayContext } from "./uglyArrayContext"

function Form() {
    const { handleChange, handleSubmit, newThing } = useContext(UglyArrayContext)

    return (
        <div className="top-container">
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    placeholder="title"
                    onChange={handleChange}
                    name="title"
                    value={newThing.title}
                />
                <input
                    type="text"
                    placeholder="description"
                    onChange={handleChange}
                    name="description"
                    value={newThing.description}
                />
                <input
                    type="text"
                    placeholder="imgUrl"
                    onChange={handleChange}
                    name="imgUrl"
                    value={newThing.imgUrl}
                />
                <button className="submit-button">Add new ugly thing</button>
            </form>
        </div>
    )
}

export default Form