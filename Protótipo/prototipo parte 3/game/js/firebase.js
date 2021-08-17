function initializeOnDB(userId) {
    firebase
        .database()
        .ref("users/id: " + userId)
        .set({
            score: 0,
            tasks: 0,
            tips: 0,
            lastLevel: 0
        });
}

function saveOnDB(userId) {
    var data = {
        score: localStorage.score,
        tasks: localStorage.tasks,
        tips: localStorage.tips,
        lastLevel: localStorage.currentLevel
    }

    var updates = {}
    updates["users/id: " + userId] = data

    firebase.database().ref().update(updates);
}

async function getOnDB(userId) {
    var score = 0;

    const dbRef = await firebase.database().ref("users/id: " + userId);
    dbRef.get()
        .then((snapshot) => {
            score = snapshot.val().score;
            localStorage.setItem("score", score);
            localStorage.setItem("tasks", snapshot.val().tasks);
            localStorage.setItem("tips", snapshot.val().tips);
            localStorage.setItem("currentLevel", snapshot.val().lastLevel);
            localStorage.setItem("levelPass", false);            
            localStorage.setItem("dificuldade", "Normal");
            localStorage.setItem("tipsLeft", "0");
        });

    return score;
}

async function existOnDB(userId) {
    var exist = false;

    const dbRef = await firebase.database().ref("users/id: " + userId);
    dbRef.get()
        .then((snapshot) => {
            console.log(snapshot.val());
            exist = true;
        })
        .catch((error) => {
            console.error(error);
        });
    return exist;
}
