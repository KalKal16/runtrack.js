function jsonValueKey(jsonString, key) {
    const jsonObject = JSON.parse(jsonString);
    if (key in jsonObject) {
        return jsonObject[key];
    } else {
        return null;
    }
}
// const jsonString = `{
//     "name": "La plateforme",
//     "address": "8 rue d'hozier",
//     "city": "Marseille",
//     "nb_staff": "11",
//     "creation": "2019"
// }`;
// const key = "city";
// const city = jsonValueKey(jsonString, key);
// console.log("city:", city);