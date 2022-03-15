let liveTH = document.getElementById("liveth")
let legth = document.getElementById("op")
let volume = document.getElementById("op1")
let mass = document.getElementById("op2")

newnumb = prompt("enter your number")
liveTH.textContent = newnumb

let mtrtofeet = newnumb * 3.28084
mtrtofeet = mtrtofeet.toFixed(3)
let feettomtr = newnumb / 3.28084
feettomtr = feettomtr.toFixed(3)

let ltetogal = newnumb * 0.264172
ltetogal = ltetogal.toFixed(3)
let galtoltr = newnumb / 0.264172
galtoltr = galtoltr.toFixed(3)

let kiltopnds = newnumb * 2.20462
kiltopnds = kiltopnds.toFixed(3)
let pndstokil = newnumb / 2.20462
pndstokil = pndstokil.toFixed(3)

let legthh = newnumb + "meters" + " = " + mtrtofeet + "feet" + " | " + newnumb + "feet" + " = " + feettomtr + "meters"
let vlm = newnumb + "litres" + " = " + ltetogal + "gallons" + " | " + newnumb + "gallons" + " = " + galtoltr + "litres"
let  mss = newnumb + "kilos" + " = " + kiltopnds + "pounds" + " | " + newnumb + "pounds" + " = " + pndstokil + "kilos"

legth.textContent = legthh
volume.textContent = vlm
mass.textContent = mss