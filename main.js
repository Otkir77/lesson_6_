let arr=['BMW', 'MERS', 'McLaren', 'Porsche']

console.log(arr)
alert(arr)
alert(`Sizning arrayingiz uzunligi: ${arr.length}`)


if (confirm ('Arraydan 1 ta olib tashlaymiz')) { 
   arr.pop()
  alert(`Endi Arrayni uzunligi ${arr.length} ga teng`)
  console.log(arr)
} else  {
   console.log(arr)
}