const http = require('http');

function sendEntity(entity, item) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify(item);

        const req = http.request({
            hostname: 'localhost',
            port: 80,
            path: `/api/client/${entity}/`,
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

const clientList = [
    {
        slug: "apple",
        property: [{
            property: "NAME",
            value: "Apple",
        }, {
            property: "LINK",
            value: "https://www.apple.com",
        }]
    }, {
        slug: "les_miles_international",
        property: [{
            property: "NAME",
            value: "Les Miles International",
        }, {
            property: "LINK",
            value: "https://www.lesmills.com",
        }]
    }, {
        slug: "unicef",
        property: [{
            property: "NAME",
            value: "Unicef",
        }, {
            property: "LINK",
            value: "https://www.unicef.org",
        }]
    }, {
        slug: "air_new_zealand",
        property: [{
            property: "NAME",
            value: "Air New Zealand",
        }, {
            property: "LINK",
            value: "https://www.airnewzealand.com",
        }]
    }, {
        slug: "nike",
        property: [{
            property: "NAME",
            value: "Nike",
        }, {
            property: "LINK",
            value: "https://www.nike.com/",
        }]
    }, {
        slug: "reebok",
        property: [{
            property: "NAME",
            value: "Reebok",
        }, {
            property: "LINK",
            value: "https://www.lesmills.com",
        }]
    }, {
        slug: "aqua",
        property: [{
            property: "NAME",
            value: "Aqua",
        }, {
            property: "LINK",
            value: "https://www.aquaofficial.com",
        }]
    }, {
        slug: "jaguar",
        property: [{
            property: "NAME",
            value: "Jaguar",
        }, {
            property: "LINK",
            value: "https://www.jaguarlandrover.com",
        }]
    }, {
        slug: "less_miles",
        property: [{
            property: "NAME",
            value: "Less Miles",
        }, {
            property: "LINK",
            value: "https://www.prestarrs.com",
        }]
    }, {
        slug: "puma",
        property: [{
            property: "NAME",
            value: "Puma",
        }, {
            property: "LINK",
            value: "https://ua.puma.com",
        }]
    }, {
        slug: "zara",
        property: [{
            property: "NAME",
            value: "Zara",
        }, {
            property: "LINK",
            value: "https://www.zara.com",
        }]
    }, {
        slug: "something",
        property: [{
            property: "NAME",
            value: "Something",
        }, {
            property: "LINK",
            value: "https://www.prestarrs.com",
        }]
    }]

async function populate() {
    await sendEntity("property", {
        _id: `NAME`
    }).then(res => {
        console.log(res);
    })

    await sendEntity("property", {
        _id: `LINK`
    }).then(res => {
        console.log(res);
    })


    for (const item of clientList) {
        await sendEntity("content", item)
            .then(res => {
                console.log(res);
            });
    }
}

populate().then(res => {
    console.log(res);


})
