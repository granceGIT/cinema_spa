const request = (token=false,baseUrl = "http://localhost:8000/api")=>{
    const headers = {
        'Accept':'application/json',
    }

    if (token){
        headers['Authorization'] = `Bearer ${token}`
    }

    const get = async (url)=>{
        const resp = await fetch(baseUrl+url,{headers})
        const json = await resp.json();
        return resp.ok ? Promise.resolve(json.data) : Promise.reject(json.error)
    }

    const post = async (url,data,method="POST")=>{
        const resp = await fetch(baseUrl+url,{
            method,
            headers:{...headers,
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        const json = await resp.json();
        return resp.ok ? Promise.resolve(json.data) : Promise.reject(json.error)
    }

    return {
        get,
        post
    }
}

export default request