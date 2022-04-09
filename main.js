let msgs = ["The pen is mightier than the sword the pen itself is not enough to make an effective writer. In fact, though we may all like to think of ourselves as the next Shakespeare, inspiration alone is not the key to effective essay writing.",
    "At the end of an essay you should include a short conclusion, the purpose of which is to sum up or draw a conclusion from your argument or comparison of viewpoints.Neither the conclusion, nor the introduction, should totally summarise your whole argument.",
    "She had been an angel for coming up on 10 years and in all that time nobody had told her this was possible. The fact that it could ever happen never even entered her mind. Yet there she stood, with the undeniable evidence sitting on the ground before her.",
    "There wasn't a bird in the sky, but that was not what caught her attention. It was the clouds. The deep green that isn't the color of clouds, but came with these. She knew what was coming and she hoped she was prepared.",
    "All he could think about was how it would all end. There was still a bit of uncertainty in the equation, but the basics were there for anyone to see. No matter how much he tried to see the positive, it wasn't anywhere to be seen.",
    "He had done everything right. There had been no mistakes throughout the entire process. It had been perfection and he knew it without a doubt, but the results still stared back at him with the fact that he had lost.",
    "People often threw around the chances of something happening as being 1,000,000 to 1 as an exaggeration of an unlikely event, but he could see that they may actually be accurate in this situation. Whatever the odds of it happening, he knew they were big.",
    "Sleeping in his car was never the plan but sometimes things don't work out as planned. This had been his life for the last three months and he was just beginning to get used to it. He didn't actually enjoy it",
    `The trail to the left had a "Danger! Do Not Pass" sign telling people to take the trail to the right. This wasn't the way Zeke approached his hiking. Rather than a warning, Zeke read the sign as an invitation to explore an area that would be adventurous and exciting.`,
    "There was only one way to do things in the Statton house. That one way was to do exactly what the father, Charlie, demanded. He made the decisions and everyone else followed without question. That was until today."
]

const msg = document.querySelector("#msg")
const input = document.querySelector("#inputTextArea")
input.disabled = true
const startBtn = document.querySelector(".submit-btn")

let startTime, finishTime
startBtn.addEventListener('click', function() {
    if (this.innerText == "Start") {
        input.disabled = false
        let l = 0
        let k = 0
        let i = 0
        let j = 0
        let watch = document.querySelector(".watch")

        startTimer = setInterval(() => {
            watch.innerHTML = `${l}${k}:${j}${i}`
            if (i < 10) {
                i++
            }
            if (i >= 10) {
                j++
                i = 0
            }
            if (j >= 6) {
                k++
                j = 0
                i = 0
            }
            if (k >= 10) {
                l++
                k = 0
                j = 0
                i = 0
            }
            console.log("set interval ", i)
        }, 1000)
        showMsg()
        this.innerText = "Finish"
    } else {
        input.disabled = true
        this.innerText = "Start"
        clearInterval(startTimer)
        showResult()
    }
})

function showMsg() {
    let randomNumber = Math.floor(Math.random() * msgs.length)
        // console.log(randomNumber)
    msg.innerHTML = msgs[randomNumber]
    let date = new Date()
    startTime = date.getTime()
}



const timer = () => {
    let l = 0
    let k = 0
    let i = 0
    let j = 0
    let watch = document.querySelector(".watch")
    watch.innerHTML = `${l}${k}:${j}${i}`
    if (i < 10) {
        alert(i)
        i++
    }
    if (i >= 10) {
        alert("ok")
        j++
        i = 0
    }
    if (j >= 6) {
        alert("ok")
        k++
        j = 0
        i = 0
    }
    if (k >= 10) {
        l++
        k = 0
        j = 0
        i = 0
    }
    alert("ok")

}




function showResult() {
    let date = new Date()
    finishTime = date.getTime()
    let timeTaken = (finishTime - startTime) / 1000
    console.log("Time taken is: " + timeTaken.toFixed(1)) //show the result upto 1 decimal point
    let userInput = input.value
    let originalMsg = msg.innerHTML
    let wordCount = wordCounter(userInput)
    console.log("word Count is: ", wordCount)
    let speed = Math.floor((wordCount / timeTaken) * 60)
    const hiddenClass = document.querySelectorAll(".hidden")
    hiddenClass.forEach((currElement) => {
        currElement.classList.toggle("hidden")
    })
    let speedOutput = document.getElementById("speed")
    let accuracyOutput = document.getElementById("accuracy")
    if (speed <= 15) {
        speedOutput.style.color = "red"
    } else if (speed > 15 && speed < 28) {
        speedOutput.style.color = "yellow"
    } else {
        speedOutput.style.color = "green"
    }
    console.log("speed is:", speed)
    document.getElementById("speed").innerHTML = `${speed} words per min`
    let accuracy = FindAccuracy(originalMsg, userInput)
    if (accuracy <= 33) {
        accuracyOutput.style.color = "red"
    } else if (accuracy > 33 && accuracy <= 70) {
        accuracyOutput.style.color = "rgb(255, 187, 0)"
    } else {
        accuracyOutput.style.color = "green"
    }
    console.log("Accuracy is: ", accuracy)
    document.getElementById("accuracy").innerHTML = `${accuracy} %`


}

function wordCounter(str) {
    let words = str.split(" ")
    let wordCount = words.length
    return wordCount
}

function FindAccuracy(str1, str2) {
    str1Array = str1.split(" ")
    str2Array = str2.split(" ")
    let wordsMatched = 0
    str1Array.forEach((currElement, index) => {
        if (currElement == str2Array[index]) {
            ++wordsMatched
        }
    })
    let accuracy = Math.floor((wordsMatched / str1Array.length) * 100)
    return accuracy
}