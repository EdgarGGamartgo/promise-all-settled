const axios = require('axios')

const urls = ['https://jsonplaceolder.typicode.com/posts', 'https://jsonplaceholder.typicode.com/posts/1']

const myAsyncCalls = async () => {
    return await Promise.allSettled(
        urls.map(async (url) => {
            try {
                return await axios.get(url)
            } catch(e) {
                return await Promise.reject(new Error(e))
            }
        })
    )
} 

// (async () => console.log(await myAsyncCalls()))()


(async () => {
    const myPromises = await myAsyncCalls()
    myPromises.forEach(promise => {
        if (promise.status === 'fulfilled') {
            console.log(promise.value.data)
        } else {
            console.log(promise.reason)
        }
    });
})()


