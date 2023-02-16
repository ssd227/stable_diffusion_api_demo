

// 请求后端API汇总

// stable diffusion模型 /key?=promtMsg
async function fetchDiffusion (promtMsg) {
    const response = await fetch("/model_generate/"+promtMsg);
    console.log("fetch response", response)

    const body = await response.json();
    console.log("fetch json body", body)
    if (response.status !== 200) {
        throw Error(body.message)
    }
    return body.imgUrl;
    };

export {fetchDiffusion};


// test
async function fetchTest () {

    const response = await fetch("/test");
    const body = await response.json();
    if (response.status !== 200) {
        throw Error(body.message)
    }
    return body;
};

export {fetchTest};