import React from 'react'

export const ContentData = ({ value, onChange, disabled }) => {

    const onFormatClick = (event) => {
        try {
            if (value?.contentType?.indexOf('application/json') !== -1) {
                let content = JSON.parse(value.content)
                content = JSON.stringify(content, null, 2)
                event.target.name = 'content'
                event.target.value = content
                onChange(event)
            }
        } catch (error) {
            console.log('Error', error);
        }
    }
    const options = ['application/json', 'application/xxx-form', '']
    return (
        <div className="row">
            <label className="col-3">
                Content Type
            </label>
            <div className="col-7">
                <select name="contentType"
                    value={value.contentType}
                    onChange={onChange}
                    disabled={disabled}
                    className="custom-select">
                    {options.map(it => <option key={it}>{it}</option>)}
                </select>
            </div>
            <div className="col-2">
                <button onClick={onFormatClick} type="button"
                    className="btn btn-outline-dark">
                    Format Content
                </button>
            </div>
            <div className="col-12 mt-2">
                <textarea name="content"
                    value={value.content}
                    onChange={onChange}
                    disabled={disabled || value.contentType === ''}
                    className="p-1 w-100 font-mono"
                    rows={12} />
            </div>
        </div>
    )
}


export const ContentRaw = ({ title, value }) => {
    if (typeof value !== 'string') {
        value = JSON.stringify(value, null, 2)
    }
    title = title ? <b>{title} </b> : null
    return (
        <div className="mt-2">
            {title}
            <textarea className="p-1 w-100 font-mono" disabled value={value} rows={14} />
        </div>
    )
}