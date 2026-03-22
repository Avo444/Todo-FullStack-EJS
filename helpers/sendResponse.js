const sendResponse = (
    res,
    data,
    statusCode = 200,
    extenstion = "application/json",
) => {
    res.set({
        "Content-Type": extenstion,
    });
    res.status(statusCode);
    extenstion === "application/json" ? res.json(data) : res.render(...data);
};

module.exports = sendResponse;
