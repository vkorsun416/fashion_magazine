db.createUser(
    {
        user: "form",
        pwd: "example",
        roles: [
            {
                role: "readWrite",
                db: "form"
            }
        ]
    }
);

let clients = db.getSiblingDB("client")

clients.createUser(
    {
        user: "root",
        pwd: "example",
        roles: [
            {
                role: "readWrite",
                db: "client"
            }
        ]
    }
);

let projects = db.getSiblingDB("project")

projects.createUser(
    {
        user: "root",
        pwd: "example",
        roles: [
            {
                role: "readWrite",
                db: "project"
            }
        ]
    }
);

let services = db.getSiblingDB("service")

services.createUser(
    {
        user: "content",
        pwd: "example",
        roles: [
            {
                role: "readWrite",
                db: "service"
            }
        ]
    }
);
