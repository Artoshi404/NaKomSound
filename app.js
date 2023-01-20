const sounds = ["ไอ้สัส","ไม่ได้แดกกูหรอก","อุ๊บ๊ะ!","ถุ๊ยยยยย!","ตบก็ยั้งลูก","ไอ้เหี้ยก็ตีจังเลย","มันช่างหอมฉุย","นี่มันทางของพี่ชัดๆ","กูจะแทงให้มิดเลย","แบบนี้มันต้องขยี้","งงเป็นไก่ตาแตก","ถ้าเองรู้ว่ากูเป็นใคร","มึงไปตายให้หนอนขึ้น","ในเมื่อทุกคนพร้อมแล้ว","ไม่คนามือพี่เลย","นี่เอ็งบ้าหรือเปล่า","นิ่มขนาดนี้","พูดกี่ครั้งแล้ว","เริ่มมีกลิ่นแล้วนะ","ของพี่กำลังขึ้น","มีอีกไหมไอ้งามไส้"]

sounds.forEach(sound=>{
    const btn = document.createElement("button")
    btn.classList.add("btn")
    btn.innerText=sound
    btn.addEventListener("click",()=>{
        stopSounds()
        document.getElementById(sound).play()
    })
    document.getElementById("controller").appendChild(btn)
})

function stopSounds(){
    sounds.forEach(sound=>{
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}