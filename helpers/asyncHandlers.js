const handleAsync = (task, res) => {
    task
        .then((result) => {
            res.status(result.code).json(result);
        })
        .catch((error) => {
            const code = error.statusCode || 500;
            const message = error.message || 'Internal Server Error';
            res.status(code).json({ code: code, msg:message, type:"Failure", data:null });
        });
};

module.exports = handleAsync;
