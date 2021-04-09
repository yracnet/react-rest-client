export const Fetch = ({ value, onChange }) => {
    return (
        <div className="row">
            <FormItem label="Cache"
                name="fetch.cache"
                value={value.fetch.cache}
                onChange={onChange}
                options={['', 'default', 'no-store', 'reload', 'no-cache', 'force-cache', 'only-if-cached']} />
            <FormItem label="Credentials"
                name="fetch.credentials"
                value={value.fetch.credentials}
                onChange={onChange}
                options={['', 'omit', 'same-origin']} />
            <FormItem label="Mode"
                name="fetch.mode"
                value={value.fetch.mode}
                onChange={onChange}
                options={['', 'cors', 'no-cors', 'same-origin', 'navigate']} />
            <FormItem label="Redirect"
                name="fetch.redirect"
                value={value.fetch.redirect}
                onChange={onChange}
                options={['', 'follow', 'error', 'manual']} />
        </div>
    )
}

const FormItem = ({ label, name, value, onChange, options = [] }) => {
    return (
        <>
            <label className="col-2">
                {label}
            </label>
            <div className="col-4">
                <select className="custom-select"
                    name={name}
                    value={value}
                    onChange={onChange}>
                    {options.map(it => <option key={it}>{it}</option>)}
                </select>
            </div>
        </>
    )
}