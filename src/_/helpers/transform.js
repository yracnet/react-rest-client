
export const transformFetchRequest = (requestForm) => {
    let { method, target, path, headers, contentType, content, fetch } = requestForm
    headers = [...headers] //fix reference
    let body = undefined
    if (['HEAD', 'GET'].indexOf(method) === -1) {
        headers.unshift({ name: 'content-type', value: contentType })
        body = parseContent(content, contentType);
    }
    headers = headers.reduce((map, it) => {
        map[it.name] = map[it.name] ? map[it.name] + ', ' + it.value : it.value;
        return map;
    }, {})
    headers = cleanEmpty(headers)
    fetch = cleanEmpty(fetch)
    return {
        method,
        url: target + path,
        headers,
        body,
        ...fetch
    }
}

export const transformFetchResponse = async (response) => {
    let { status, statusText } = response
    let contentType = response.headers.get('content-type')
    let headers = {}
    let headersList = []
    response.headers.forEach((value, name) => {
        headers[name] = value;
        headersList.push({ name, value })
    });
    let content = await response.text();
    let body = parseContent(content, contentType);
    let raw = {
        status,
        statusText,
        headers,
        body
    }
    return {
        headers: headersList,
        contentType,
        content,
        raw
    }
}

export const transformErrorResponse = (error) => {
    let raw = {
        status: '999',
        statusText: 'Error Network',
        headers: {},
        body: 'Error: ' + error.message
    }
    return {
        headers: [],
        contentType: '',
        content: 'Error: ' + error.message,
        raw
    }
}
const cleanEmpty = (obj) => {
    return Object.entries(obj)
        .reduce(
            (map, [k, v]) => {
                if (v) {
                    map[k] = v
                }
                return map;
            }, {});
}
const parseContent = (content, contentType) => {
    try {
        if (contentType.indexOf('application/json') !== -1) {
            return JSON.parse(content, null, 2)
        }
    } catch (error) {
        console.log('Error Parse Body', error);
    }
    return content
}