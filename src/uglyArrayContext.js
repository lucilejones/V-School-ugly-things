import axios from "axios"
import React, { useEffect, useState } from "react"

const UglyArrayContext = React.createContext()

function UglyArrayContextProvider(props) {
    const [listData, setListData] = useState([])
    console.log(listData)
    const [newThing, setNewThing] = useState({
        title: "",
        description: "",
        imgUrl: ""
    })

    useEffect(() => {
        axios.get("https://api.vschool.io/lucijones/thing/")
            .then(response => setListData(response.data))
            .catch(error => console.log(error))
    }, [])

    function handleChange(event) {
        const { name, value } = event.target
        setNewThing(prevNewThing => {
            return {
                ...prevNewThing,
                [name]: value
            }
        })
    }

    function addThing() {
        setNewThing(newThing)
        axios.post("https://api.vschool.io/lucijones/thing/", newThing)
            .then(response => setListData([...listData, response.data]))
    }

    function removeThing(id) {
        console.log("Delete item with this id: ", id)
        axios.delete(`https://api.vschool.io/lucijones/thing/${id}`)
            .then(setListData(listData.filter((uglyThing) => uglyThing._id !== id)))
    }

    function editThing(id, update) {
        console.log("edit thing with this id: ", id)
        axios.put(`https://api.vschool.io/lucijones/thing/${id}`, update)
            .then(setListData(prevListData => prevListData.map(item => item._id === id ?
                { ...item, title: update.title, description: update.description, imgUrl: update.imgUrl } : item)))
    }

    function handleSubmit(event) {
        event.preventDefault()
        addThing()
        setNewThing({
            title: "",
            description: "",
            imgUrl: ""
        })
    }

    return (
        <UglyArrayContext.Provider value={{
            listData,
            handleChange,
            handleSubmit,
            newThing,
            removeThing,
            editThing
        }}>
            {props.children}
        </UglyArrayContext.Provider>
    )
}

export { UglyArrayContext, UglyArrayContextProvider }

