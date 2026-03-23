const formatDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const time = `${date.getHours()}`.padStart(2, "0");
    const month = `${date.getMonth()}`.padStart(2, "0");
    const thisDate = `${date.getDate()}`.padStart(2, "0");
    const minute = `${date.getMinutes()}`.padStart(2, "0");
    return `${thisDate}-${month}-${year} ${time}:${minute}`;
};

module.exports = formatDate;
