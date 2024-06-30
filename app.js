// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

function getUserData({ firstName, favoriteColor = 'green' }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}
console.log(getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' })); // Your name is Alejandro and you like purple
//รับค่า parameter ตามค่าที่กำหนดใน object
console.log(getUserData({ firstName: 'Melissa' })); // Your name is Melissa and you like green
//รับค่า parameter firstName ตามค่าที่กำหนด ส่วน favoriteColor นั้นไม่มีการกำหนดค่าจึงใช้เป็นค่าเริ่มต้นคือ 'green'
console.log(getUserData({})); // Your name is undefined and you like green
// firstName ไม่มีการกำหนดค่าให้จึงเป็น undefined ส่วน favoriteColor นั้นไม่มีการกำหนดค่าจึงใช้เป็นค่าเริ่มต้นคือ 'green'