import { useContext } from "react"
import { UglyArrayContext } from "./uglyArrayContext"
import UglyThing from "./UglyThing"

function List() {
    const { listData } = useContext(UglyArrayContext)

    const displayList = listData.map(function (uglyThing) {
        return (
            <UglyThing
                key={uglyThing._id}
                uglyThing={uglyThing}
            />
        )
    })

    return (
        <main>
            {displayList}
        </main>
    )
}

export default List