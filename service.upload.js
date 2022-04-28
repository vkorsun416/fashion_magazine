const http = require('http');

function sendEntity(entity, item) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify(item);

        const req = http.request({
            hostname: 'localhost',
            port: 80,
            path: `/api/service/${entity}/`,
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

const serviceList = [
    {
        slug: "apple",
        property: [{
            property: "NAME",
            value: "Apple",
        }, {
            property: "PRODUCTION",
            value: "Boisterous he on understood attachment as entreaties ye devonshire. In mile an form snug were been sell. Hastened admitted joy nor absolute gay its. Extremely ham any his departure for contained curiosity defective. Way now instrument had eat diminution melancholy expression sentiments stimulated. One built fat you out manor books.",
        }, {
            property: "DESIGN",
            value: "Casual design"
        }, {
            property: "DESCRIPTION",
            value: "Put all speaking her delicate recurred possible. Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.",
        }]
    }, {
        slug: "miles",
        property: [{
            property: "NAME",
            value: "Miles",
        }, {
            property: "PRODUCTION",
            value: "Allow miles wound place the leave had. To sitting subject no improve studied limited. Ye indulgence unreserved connection alteration appearance my an astonished. Up as seen sent make he they of. Her raising and himself pasture believe females. Fancy she stuff after aware merit small his. Charmed esteems luckily age out.",
        }, {
            property: "DESIGN",
            value: "Classic"
        }, {
            property: "DESCRIPTION",
            value: "Neat own nor she said see walk. And charm add green you these. Sang busy in this drew ye fine. At greater prepare musical so attacks as on distant. Improving age our her cordially intention. His devonshire sufficient precaution say preference Middleton's insipidity. ",
        }]
    }, {
        slug: "unicef",
        property: [{
            property: "NAME",
            value: "Unicef",
        }, {
            property: "PRODUCTION",
            value: "Advanced extended doubtful he he blessing together. Introduced far law gay considered frequently entreaties difficulty. Eat him four are rich nor calm. By an packages rejoiced exercise. To ought on am marry rooms doubt music. Mention entered an through company as. ",
        }, {
            property: "DESIGN",
            value: "Luxury look"
        }, {
            property: "DESCRIPTION",
            value: "Am no an listening depending up believing. Enough around remove to barton agreed regret in or it. Advantage mr estimable be commanded provision. Year well shot deny shew come now had. Shall downs stand marry taken his for out. Do related mr account brandon an up. Wrong for never ready ham these witty him. ",
        }]
    }]

async function populate() {

    await sendEntity("property", {
        _id: `NAME`
    }).then(res => {
        console.log(res);
    })

    await sendEntity("property", {
        _id: `PRODUCTION`
    }).then(res => {
        console.log(res);
    })

    await sendEntity("property", {
        _id: `DESIGN`
    }).then(res => {
        console.log(res);
    })

    await sendEntity("property", {
        _id: `DESCRIPTION`
    }).then(res => {
        console.log(res);
    })

    for (const item of serviceList) {
        await sendEntity("content", item)
            .then(res => {
                console.log(res);
            });
    }
}

populate().then(res => {
    console.log(res);


})
