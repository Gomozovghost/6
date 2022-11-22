let cikle = [false, false, false, true, false, false, false, false, false, false]
let dmg = false
for (let i = 0, x = 0; i < cikle.length; ++i) {if (cikle[i]) {if (dmg) {console.log(`Танк подорвался на mine ${i+1}`); break}
else{dmg = true; console.log(`Танк переместился на позицию! Танк поврежден ${i+1}`)}}
else{console.log(`Танк переместился на позицию ${i+1}`)}} 
