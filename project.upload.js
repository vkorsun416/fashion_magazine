const http = require('http');

function sendEntity(entity, item) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify(item);

        const req = http.request({
            hostname: 'localhost',
            port: 80,
            path: `/api/project/${entity}/`,
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

const projectList = [
    {
        slug: "apple",
        property: [{
            property: "TITLE",
            value: "Apple",
        }, {
            property: "DESCRIPTION",
            value: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        `,
        }, {
            property: "BRAND",
            value: "Reebok",
        }],
        image: [{
            image: "MAIN",
            url: "/apple/apple_project.png",
        }, {
            image: "SWIPER",
            url: [
                "/apple/apple_swiper_3.png",
                "/apple/apple_swiper_2.png",
                "/apple/apple_swiper_1.png",
            ]
        }, {
            image: "VIDEO",
            url: "/apple/apple.gif"
        }],
        status: ["ON_MAIN"],
    },
    {
        slug: "unicef",
        property: [{
            property: "TITLE",
            value: "Unicef",
        }, {
            property: "DESCRIPTION",
            value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        }, {
            property: "BRAND",
            value: "Puma",
        }],
        image: [{
            image: "MAIN",
            url: "/unicef/unicef_project.png",
        }, {
            image: "SWIPER",
            url: [
                "/unicef/unicef_swiper_3.png",
                "/unicef/unicef_swiper_2.png",
                "/unicef/unicef_swiper_1.png",
            ]
        }, {
            image: "VIDEO",
            url: "/unicef/unicef.gif"
        }],
        status: ["ON_MAIN"],
    },
    {
        slug: "nike",
        property: [{
            property: "TITLE",
            value: "Air New Zealand",
        }, {
            property: "DESCRIPTION",
            value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        }, {
            property: "BRAND",
            value: "Air Max",
        }],
        image: [{
            image: "MAIN",
            url: "/nike/nike_project.png",
        }, {
            image: "SWIPER",
            url: [
                "/nike/nike_swiper_3.png",
                "/nike/nike_swiper_2.png",
                "/nike/nike_swiper_1.png",
            ]
        }, {
            image: "VIDEO",
            url: "/nike/nike.gif"
        }],
        status: ["ON_MAIN"],
    },
    {
        slug: "miles",
        property: [{
            property: "TITLE",
            value: "Les Miles International",
        }, {
            property: "DESCRIPTION",
            value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        }, {
            property: "BRAND",
            value: "Miles",
        }
        ],
        image: [{
            image: "MAIN",
            url: "/miles/miles_project.png",
        }, {
            image: "SWIPER",
            url: [
                "/miles/miles_swiper_3.png",
                "/miles/miles_swiper_2.png",
                "/miles/miles_swiper_1.png",
            ]
        }, {
            image: "VIDEO",
            url: "/miles/miles.gif"
        }],
        status: ["ON_MAIN"],
    },
    {
        slug: "banana",
        property: [{
            property: "TITLE",
            value: "Banana",
        }, {
            property: "DESCRIPTION",
            value: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        `,
        }, {
            property: "BRAND",
            value: "Reebok",
        }],
        image: [{
            image: "MAIN",
            url: "/apple/apple_project.png",
        }, {
            image: "SWIPER",
            url: [
                "/apple/apple_swiper_3.png",
                "/apple/apple_swiper_2.png",
                "/apple/apple_swiper_1.png",
            ]
        }, {
            image: "VIDEO",
            url: "/apple/apple.gif"
        }],
        status: []
    },
    {
        slug: "lorem",
        property: [{
            property: "TITLE",
            value: "Lorem",
        }, {
            property: "DESCRIPTION",
            value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        }, {
            property: "BRAND",
            value: "Puma",
        }],
        image: [{
            image: "MAIN",
            url: "/unicef/unicef_project.png",
        }, {
            image: "SWIPER",
            url: [
                "/unicef/unicef_swiper_3.png",
                "/unicef/unicef_swiper_2.png",
                "/unicef/unicef_swiper_1.png",
            ]
        }, {
            image: "VIDEO",
            url: "/miles/miles.gif"
        }],
        status: []
    },
    {
        slug: "spike",
        property: [{
            property: "TITLE",
            value: "Spike",
        }, {
            property: "DESCRIPTION",
            value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        }, {
            property: "BRAND",
            value: "Air Max",
        }],
        image: [{
            image: "MAIN",
            url: "/nike/nike_project.png",
        }, {
            image: "SWIPER",
            url: [
                "/nike/nike_swiper_3.png",
                "/nike/nike_swiper_2.png",
                "/nike/nike_swiper_1.png",
            ]
        }, {
            image: "VIDEO",
            url: "/nike/nike.gif"
        }],
        status: []
    },
    {
        slug: "zara",
        property: [{
            property: "TITLE",
            value: "Zara",
        }, {
            property: "DESCRIPTION",
            value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        }, {
            property: "BRAND",
            value: "Miles",
        }],
        image: [{
            image: "MAIN",
            url: "/miles/miles_project.png",
        }, {
            image: "SWIPER",
            url: [
                "/miles/miles_swiper_3.png",
                "/miles/miles_swiper_2.png",
                "/miles/miles_swiper_1.png",
            ]
        }, {
            image: "VIDEO",
            url: "/unicef/unicef.gif"
        }],
        status: []
    },
];

async function populate() {
    await sendEntity("property", {
        _id: `TITLE`
    }).then(res => {
        console.log(res);
    })

    await sendEntity("property", {
        _id: `DESCRIPTION`
    }).then(res => {
        console.log(res);
    })

    await sendEntity("property", {
        _id: `BRAND`
    }).then(res => {
        console.log(res);
    })

    await sendEntity("image", {
        _id: `MAIN`
    }).then(res => {
        console.log(res);
    })

    await sendEntity("image", {
        _id: `SWIPER`
    }).then(res => {
        console.log(res);
    })

    await sendEntity("image", {
        _id: `VIDEO`
    }).then(res => {
        console.log(res);
    })

    await sendEntity("status", {
        _id: `ON_MAIN`
    }).then(res => {
        console.log(res);
    })

    for (const item of projectList) {
        await sendEntity("content", item)
            .then(res => {
                console.log(res);
            });
    }
}

populate().then(res => {
    console.log(res);
})
