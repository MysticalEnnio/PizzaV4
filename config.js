export default {
    logger: {
        timestamps: false,
    },
    auth: {
        enabled: false, //if true, user must be authenticated to access
    },
    priority: {
        enabled: true,
        freeChange: true, //if true, user can change priority on their own
        reverse: true, //if true, the highest priority is the lowest number
    },
    sessionTimeout: 3, //in hours
};
