const http = require('http');

function sendEntity(entity, item) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify(item);

        const req = http.request({
            hostname: 'localhost',
            port: 80,
            path: `/api/form/${entity}/`,
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        }, res => {
            res.on('data', response => {
                resolve(response.toString());
            });
        });

        req.write(data);

        req.on('error', error => {
            console.error(error);

            reject(error);
        })

        req.end();
    });
}

async function populate() {
    await sendEntity("form", {
        field: [
            {
                slug: "NAME",
                name: "NAME",
            }, {
                slug: "EMAIL",
                name: "EMAIL",
            }, {
                slug: "MESSAGE",
                name: "MESSAGE",
            }],
        name: "FOR_CLIENT",
        _id: "FOR_CLIENT"
    }).then(res => {
        console.log(res);
    })
}

populate().then(res => {
    console.log(res);

})
