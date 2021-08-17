function initializeOnDB(name) {
    firebase
        .database()
        .ref("users/ids: " + 1 + "/name: " + name)
        .set({
            score: 0,
            tasks: 0,
            tips: 0,
            lastLevel: 0,
        });
}

function saveOnDB(name) {
    var data = {
        score: localStorage.score,
        tasks: localStorage.tasks,
        tips: localStorage.tips,
        lastLevel: localStorage.currentLevel,
    };

    var updates = {};
    updates["users/ids: " + 1 + "/name: " + name] = data;

    firebase.database().ref().update(updates);
}

async function getOnDB(name) {
    var score = 0;

    const dbRef = await firebase.database().ref("users/ids: " + 1 + "/name: " + name);
    dbRef.get().then((snapshot) => {
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

async function existOnDB(name) {
    var exist = false;

    const dbRef = await firebase.database().ref("users/ids: " + 1 + "/name: " + name);
    dbRef
        .get()
        .then((snapshot) => {
            console.log(snapshot.val());
            exist = true;
        })
        .catch((error) => {
            console.error(error);
        });
    return exist;
}

async function Login(name, password) {
    var success = false;

    const dbRef = await firebase.database().ref("users/ids: " + 1);
    dbRef
        .get()
        .then((snapshot) => {
            if (snapshot.val().password === password) {
                console.log("Login bem sucedido");
                success = true;
            }
        })
        .catch((error) => {
            console.error(error);
        });
    return success;
}

function Register(name, password, numId) {
    firebase
        .database()
        .ref("users/ids: " + numId)
        .set({
            name: name,
            password: password,
        });
}

async function getNumIds() {
    var numId = 0;
    const dbRef = await firebase.database().ref("users");
    dbRef
        .get()
        .then((snapshot) => {
            return snapshot.val().numIds;
        })
        .catch((error) => {
            console.error(error);
        });
        console.log(numId)
    return numId;
}

function updateNumIds(ids) {
    firebase.database().ref("users").set({
        numIds: ids
    });
}
