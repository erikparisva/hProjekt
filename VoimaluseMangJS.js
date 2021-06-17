function voimaluseMang() {
    var voimalus = document.getElementById("voimalus").value;
    var valitudNumber = document.getElementById("valitudnumber").value;
    var arvutiNumber = Math.floor(Math.random() * voimalus) + 1;
    document.getElementById('voimaluseMangVastus').innerHTML = "MÄNGISID VÕIMALUSEGA 1-" + voimalus + ". VALISID NUMBRI: " + valitudNumber + ", ARVUTI VALIS NUMBRI: " + arvutiNumber + ".";
    if (Number(valitudNumber) > Number(voimalus)) {
        document.getElementById('voimaluseMangVastus').innerHTML = "PALUN VALI NUMBER 1-" + voimalus + " PIIRES, TOLGUS.";
        document.getElementById("voimaluseMangVastus").style.color = "red";
        document.getElementById('voimaluseMangVastus2').innerHTML = "";
    } else if (valitudNumber == arvutiNumber) {
        document.getElementById('voimaluseMangVastus2').innerHTML = "Unlucky, hakka tegema jorss.".toUpperCase();
        document.getElementById("voimaluseMangVastus").style.color = "#333";
        document.getElementById("voimaluseMangVastus2").style.color = "red";
    } else {
        document.getElementById('voimaluseMangVastus2').innerHTML = "Sul vedas, ei pea tegema.".toUpperCase();
        document.getElementById("voimaluseMangVastus").style.color = "#333";
        document.getElementById("voimaluseMangVastus2").style.color = "limegreen";
    }
}