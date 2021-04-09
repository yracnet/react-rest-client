import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RestResumen } from '_/components'
import { serviceStore } from '_/store'

export const List = () => {
    const [value, setValue] = useState([])
    const onRemoveClick = (it) => {
        serviceStore.remove(it.id)
        const value = serviceStore.values()
        setValue(value)
    }
    const onReloadClick = () => {
        const value = serviceStore.values()
        setValue(value)
    }
    useEffect(onReloadClick, [setValue])
    return (
        <div>
            {
                value?.map((it, ix) => (
                    <div key={it.id}
                        className="p-2 my-1 border rounded border-dark">
                        <RestResumen value={it} full>
                            <Link to={'/request/' + it.id}
                                className="btn btn-outline-primary">
                                <i className="fa fa-play mr-1" />
                                Run
                            </Link>
                            <button onClick={e => onRemoveClick(it)}
                                className="btn btn-outline-danger">
                                <i className="fa fa-trash mr-1" />
                                Remove
                            </button>
                        </RestResumen>
                    </div>
                ))
            }
        </div>
    )
}
/*

                            <Link to={'/service/' + it.id}
                                className="btn btn-outline-dark">
                                <i className="fa fa-pencil mr-1" />
                                Edit
                            </Link>

*/