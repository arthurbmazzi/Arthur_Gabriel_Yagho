function saveOnDB(userId, name) {
    firebase
        .database()
        .ref("users/id: " + userId + "/name: " + name)
        .set({
            score: localStorage.score,
            tasks: localStorage.tasks,
            tips: localStorage.tips,
            lastLevel: localStorage.currentLevel
        });
}

function getOnDB(userId, name) {
    var score = 0;

    const dbRef = firebase.database().ref();
    dbRef
        .child("users")
        .child(userId)
        .child(name)
        .get()
        .then((snapshot) => {
            score = snapshot.child("score");
            localStorage.setItem("score", me.save.score);
            localStorage.setItem("tasks", snapshot.child("tasks"));
            localStorage.setItem("tips", snapshot.child("tips"));
            localStorage.setItem("currentLevel", snapshot.child("lastLevel"));
            localStorage.setItem("levelPass", false);
        });

    return score;
}

function existOnDB(userId, name) {
    var exist = false;

    const dbRef = firebase.database().ref();
    dbRef
        .child("users")
        .child(userId)
        .child(name)
        .get()
        .then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                exist = true;
            } else {
                console.log("No data available");
            }
        })
        .catch((error) => {
            console.error(error);
        });
    return exist;
}
