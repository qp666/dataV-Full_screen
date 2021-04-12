let a = [{
    name: '张三',
    age: 20,
    special: [{ id: 1, value: '打篮球' }, { id: 2, value: '打羽毛球' }]
}]

let b = {};
for (let i = 0; i < a.length; i++) {
    b[a[i].name] = { age: a[i].age }
    for (let x = 0; x < a[i].special.length; x++) {

        b[a[i].name]['special_' + (x + 1)] = a[i].special[x].value
    }

}
// let b = a.map(item => {
//     let obj = {}
//     obj[item.name] = { age: item.age }
//     item.special.forEach((item2, index) => {
//         obj[item.name]['special_' + (index + 1)] = item2.value
//     })
//     return obj
// })
console.log(b)