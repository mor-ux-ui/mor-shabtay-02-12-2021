export const getRandomDate = (start, end) => {
    var date = new Date(+start + Math.random() * (end - start));
    return date;
}
export const getRandomStore = () => {
    const stors = ["ebay", "amazon", "next", "shein", "aliexpress", "iherb"]
    const randomStoreIndex = Math.floor(Math.random() * stors.length);
    return stors[randomStoreIndex];
}
export const numberWithCommas = (num) => {
    return num.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}