

export const PropValue = ({ value, setValue, onChange, parent, disabled }) => {
    const onClickAppend = () => {
        setValue([...value, { name: '', value: '' }])
    }
    const onClickRemove = (ix) => {
        setValue(value.filter((it, i) => i !== ix));
    }
    parent = parent || parent === 0 ? parent + '.' : ''
    return (
        <table className="table table-sm table-props m-1">
            <thead>
                <tr>
                    <th className="w-name">Name</th>
                    <th>Value</th>
                    <THButtom onClick={onClickAppend}
                        className="btn btn-sm btn-primary"
                        type="button"
                        disabled={disabled} >
                        <i className="fa fa-plus" />
                    </THButtom>
                </tr>
            </thead>
            <tbody>
                {
                    value?.map((it, ix) => (
                        <tr key={ix}>
                            <TDInput name={parent + ix + '.name'}
                                value={it.name}
                                onChange={onChange}
                                disabled={disabled} />
                            <TDInput name={parent + ix + '.value'}
                                value={it.value}
                                onChange={onChange}
                                disabled={disabled} />
                            <THButtom onClick={e => onClickRemove(ix)}
                                className="btn btn-sm btn-danger"
                                type="button"
                                disabled={disabled} >
                                <i className="fa fa-trash" />
                            </THButtom>
                        </tr>
                    ))
                }
                {
                    !value?.length &&
                    <tr>
                        <td colSpan={10}>No data</td>
                    </tr>
                }
            </tbody>
        </table>
    )
}

export const PropValues = ({ value, setValue, onChange, parent, disabled }) => {
    const onClickAppend = () => {
        setValue([...value, { name: '', value: [''] }])
    }
    const onClickRemove = (ix) => {
        setValue(value.filter((it, i) => i !== ix));
    }
    const onClickAppendItem = (ix) => {
        let newValues = [...value]
        newValues[ix].value.push('')
        setValue(newValues)
    }
    const onClickRemoveItem = (ix, ix2) => {
        let newValues = [...value]
        newValues[ix].value = newValues[ix].value.filter((it, i) => i !== ix2)
        setValue(newValues);
    }
    parent = parent || parent === 0 ? parent + '.' : ''
    return (
        <table className="table table-sm table-props m-1">
            <thead>
                <tr>
                    <th className="w-name">Name</th>
                    <th>Value</th>
                    <THButtom onClick={onClickAppend}
                        className="btn btn-sm btn-primary"
                        type="button"
                        disabled={disabled} >
                        <i className="fa fa-plus" />
                    </THButtom>
                </tr>
            </thead>
            <tbody>
                {value.map((it, ix) => (
                    <tr key={ix}>
                        <TDInput name={parent + ix + '.name'}
                            value={it.name}
                            onChange={onChange}
                            disabled={disabled} />
                        <td>
                            <table className="table table-sm table-props m-0 p-0">
                                <tbody>
                                    {
                                        it.value.map((it2, ix2) => (
                                            <tr key={ix2}>
                                                <TDInput name={parent + ix + '.value.' + ix2}
                                                    value={it2}
                                                    onChange={onChange}
                                                    disabled={disabled} />
                                                <THButtom onClick={e => onClickRemoveItem(ix, ix2)}
                                                    className="btn btn-sm btn-outline-danger"
                                                    type="button"
                                                    disabled={disabled} >
                                                    <i className="fa fa-trash" />
                                                </THButtom>
                                            </tr>
                                        ))
                                    }
                                    <tr>
                                        <td></td>
                                        <THButtom onClick={e => onClickAppendItem(ix)}
                                            className="btn btn-sm btn-outline-primary"
                                            type="button"
                                            disabled={disabled} >
                                            <i className="fa fa-plus" />
                                        </THButtom>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <THButtom onClick={e => onClickRemove(ix)}
                            className="btn btn-sm btn-danger"
                            type="button"
                            disabled={disabled} >
                            <i className="fa fa-trash" />
                        </THButtom>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

const TDInput = ({ disabled, ...props }) => {
    return (
        <td>
            {
                disabled ?
                    <span className="form-control form-control-sm">{props.value}</span>
                    :
                    <input className="form-control form-control-sm" {...props} />
            }
        </td>
    )
}

const THButtom = ({ disabled, ...props }) => {
    return (
        <th width={40}>
            {disabled ? null : <button {...props} />}
        </th>
    )
}