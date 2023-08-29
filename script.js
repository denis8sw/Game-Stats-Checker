
const userInp = document.getElementById("userinp")
const mainBtn = document.getElementById("mainbtn")

const theMain = document.getElementById("themain")
const secondMain = document.getElementById("secondmain")
const theRank = document.getElementById("therank")

const theWins = document.getElementById("thewins")
const theLosses = document.getElementById("thelosses")
const theKills = document.getElementById("thekills")
const theDeaths = document.getElementById("thedeaths")
const theKd = document.getElementById("thekd")
const winPer = document.getElementById("winper")
const theHours = document.getElementById("thehours")
const theMatches = document.getElementById("thematches")

const theWins2 = document.getElementById("thewins2")
const theLosses2 = document.getElementById("thelosses2")
const theKills2 = document.getElementById("thekills2")
const theDeaths2 = document.getElementById("thedeaths2")
const theKd2 = document.getElementById("thekd2")
const winPer2 = document.getElementById("winper2")
const theHours2 = document.getElementById("thehours2")
const theMatches2 = document.getElementById("thematches2")

const theWins3 = document.getElementById("thewins3")
const theLosses3 = document.getElementById("thelosses3")
const theKills3 = document.getElementById("thekills3")
const theDeaths3 = document.getElementById("thedeaths3")
const theKd3 = document.getElementById("thekd3")
const winPer3 = document.getElementById("winper3")
const theHours3 = document.getElementById("thehours3")
const theMatches3 = document.getElementById("thematches3")



const platinum3Image = document.getElementById('platinum3image');
const unrankedImage = document.getElementById('unrankedimage');
const copper5Image = document.getElementById('copper5image');
const platinum3Image2 = document.getElementById('platinum3image2');

const isCheating = document.getElementById("cheater")
const isPaid = document.getElementById("paid")

const serverDown = document.getElementById("serverdown")

const theNames = document.getElementById("thenames")

const theSeasonRanks = document.getElementById("theseasonranks")

const theRp = document.getElementById("rp")


serverDown.style.display = "none"

theMain.style.display = "none"
secondMain.style.display = "none"

async function getStats() {
  const username = userInp.value


  try {
    const response = await fetch(`http://localhost:3000/stats?username=${username}`);
    const data = await response.json();


    theMain.style.display = "flex"
    secondMain.style.display = "flex"
    serverDown.style.display = "none"

    theWins.innerHTML = `Wins: ${data.wins}`;
    theLosses.innerHTML = `Losses: ${data.losses}`;
    theKills.innerHTML = `Kills: ${data.kills}`;
    theDeaths.innerHTML = `Deaths: ${data.deaths}`;
    winPer.innerHTML = `Win: ${data.winp}`;
    theKd.innerHTML = `Kd: ${data.kd}`;
    theHours.innerHTML = `Time Played: ${data.hours}`;
    theMatches.innerHTML = `Matches Played: ${data.matches}`;

    theWins2.innerHTML = `Wins: ${data.wins2}`;
    theLosses2.innerHTML = `Losses: ${data.losses2}`;
    theKills2.innerHTML = `Kills: ${data.kills2}`;
    theDeaths2.innerHTML = `Deaths: ${data.deaths2}`;
    winPer2.innerHTML = `Win: ${data.winp2}`;
    theKd2.innerHTML = `Kd: ${data.kd2}`;
    theHours2.innerHTML = `Time Played: ${data.hours2}`;
    theMatches2.innerHTML = `Matches Played: ${data.matches2}`;

    theWins3.innerHTML = `Wins: ${data.wins3}`;
    theLosses3.innerHTML = `Losses: ${data.losses3}`;
    theKills3.innerHTML = `Kills: ${data.kills3}`;
    theDeaths3.innerHTML = `Deaths: ${data.deaths3}`;
    winPer3.innerHTML = `Win: ${data.winp3}`;
    theKd3.innerHTML = `Kd: ${data.kd3}`;
    theHours3.innerHTML = `Time Played: ${data.hours3}`;
    theMatches3.innerHTML = `Matches Played: ${data.matches3}`;

    let theNicknames = [];
    let theSesranks = [];
    let history = [];

    theSesranks = data.seasonranks;
    console.log(data.rowTexts)


    const seasonWithLineBreaks = theSesranks.join("<br><br>");
    theSeasonRanks.innerHTML = seasonWithLineBreaks;


    const matches2Number = parseInt(theMatches2.innerHTML.match(/\d+/)[0]);
    const kdNumber2 = parseFloat(theKd2.innerHTML.match(/\d+(\.\d+)?/)[0]);
    const winPercentage = parseFloat(winPer2.innerHTML.match(/\d+(\.\d+)?/)[0]);

    if (kdNumber2 > 2.0) {
      isCheating.innerText = "POSSIBLY";
      isCheating.style.color = "orange";

      isPaid.innerText = "POSSIBLY"
      isPaid.style.color = "orange"
    } else {
      isCheating.innerText = "CLEAN";
      isCheating.style.color = "green";
      isPaid.innerText = "NO"
      isPaid.style.color = "green"

    }

    // Cheater Detection Logic 1: Low Games Played and High KD
    if (matches2Number < 50 && kdNumber2 > 2.0) {
      isCheating.innerText = "DETECTED";
      isCheating.style.color = "red";

      isPaid.innerText = "POSSIBLY"
      isPaid.style.color = "orange"
    } else {
      isCheating.innerText = "CLEAN";
      isCheating.style.color = "green";
      isPaid.innerText = "NO"
      isPaid.style.color = "green"

    }

    // Cheater Detection Logic 2: Low Games Played and High Win Rate
    if (matches2Number < 50 && winPercentage > 80) {
      isCheating.innerText = "DETECTED";
      isCheating.style.color = "red";
      isPaid.innerText = "POSSIBLY"
      isPaid.style.color = "orange"
    } else {
      isCheating.innerText = "CLEAN";
      isCheating.style.color = "green";
      isPaid.innerText = "NO"
      isPaid.style.color = "green"
    }

    // Cheater Detection Logic 3: High KD and High Win Rate
    if (kdNumber2 > 2.5 && winPercentage > 75) {
      isCheating.innerText = "DETECTED";
      isCheating.style.color = "red";
      isPaid.innerText = "POSSIBLY"
      isPaid.style.color = "orange"
    } else {
      isCheating.innerText = "CLEAN";
      isCheating.style.color = "green";
      isPaid.innerText = "NO"
      isPaid.style.color = "green"
    }

    // Cheater Detection Logic 4: Low Games Played and Low Win Rate
    if (matches2Number < 30 && winPercentage < 40) {
      isCheating.innerText = "DETECTED";
      isCheating.style.color = "red";
      isPaid.innerText = "POSSIBLY"
      isPaid.style.color = "orange"
    } else {
      isCheating.innerText = "CLEAN";
      isCheating.style.color = "green";
      isPaid.innerText = "NO"
      isPaid.style.color = "green"
    }

    // Cheater Detection Logic 5: High KD with Average Win Rate
    if (kdNumber2 > 2.2 && winPercentage > 50 && winPercentage < 60) {
      isCheating.innerText = "DETECTED";
      isCheating.style.color = "red";
      isPaid.innerText = "POSSIBLY"
      isPaid.style.color = "orange"
    } else {
      isCheating.innerText = "CLEAN";
      isCheating.style.color = "green";
      isPaid.innerText = "NO"
      isPaid.style.color = "green"
    }

    // Cheater Detection Logic 6: Suspicious Win Rate with Average KD
    if (kdNumber2 > 1.5 && winPercentage > 70 && winPercentage < 80) {
      isCheating.innerText = "DETECTED";
      isCheating.style.color = "red";
      isPaid.innerText = "POSSIBLY"
      isPaid.style.color = "orange"
    } else {
      isCheating.innerText = "CLEAN";
      isCheating.style.color = "green";
      isPaid.innerText = "NO"
      isPaid.style.color = "green"
    }

    // Cheater Detection Logic 7: Low Games Played and High Kills
    if (matches2Number < 40 && data.kills2 > 500) {
      isCheating.innerText = "DETECTED";
      isCheating.style.color = "red";
      isPaid.innerText = "POSSIBLY"
      isPaid.style.color = "orange"
    } else {
      isCheating.innerText = "CLEAN";
      isCheating.style.color = "green";
      isPaid.innerText = "NO"
      isPaid.style.color = "green"
    }

    // Cheater Detection Logic 8: Low Games Played and High Deaths
    if (matches2Number < 40 && data.deaths2 > 500) {
      isCheating.innerText = "DETECTED";
      isCheating.style.color = "red";
      isPaid.innerText = "POSSIBLY"
      isPaid.style.color = "orange"
    } else {
      isCheating.innerText = "CLEAN";
      isCheating.style.color = "green";
      isPaid.innerText = "NO"
      isPaid.style.color = "green"
    }

    // Cheater Detection Logic 9: High Kills and High Deaths
    if (data.kills2 > 1000 && data.deaths2 > 1000) {
      isCheating.innerText = "DETECTED";
      isCheating.style.color = "red";
      isPaid.innerText = "POSSIBLY"
      isPaid.style.color = "orange"
    } else {
      isCheating.innerText = "CLEAN";
      isCheating.style.color = "green";
      isPaid.innerText = "NO"
      isPaid.style.color = "green"
    }

    // Cheater Detection Logic 10: Suspicious Kill-Death Ratio
    if (kdNumber2 > 3.0 || kdNumber2 < 0.5) {
      isCheating.innerText = "DETECTED";
      isCheating.style.color = "red";
      isPaid.innerText = "POSSIBLY"
      isPaid.style.color = "orange"
    } else {
      isCheating.innerText = "CLEAN";
      isCheating.style.color = "green";
      isPaid.innerText = "NO"
      isPaid.style.color = "green"
    }

    // Cheater Detection Logic 11: High Games Played with Low KD
    if (matches2Number > 200 && kdNumber2 < 1.0) {
      isCheating.innerText = "DETECTED";
      isCheating.style.color = "red";
      isPaid.innerText = "POSSIBLY"
      isPaid.style.color = "orange"
    } else {
      isCheating.innerText = "CLEAN";
      isCheating.style.color = "green";
      isPaid.innerText = "NO"
      isPaid.style.color = "green"
    }

    // Cheater Detection Logic 12: Suspicious Win Rate with Low Games Played
    if (matches2Number < 50 && winPercentage > 60 && winPercentage < 70) {
      isCheating.innerText = "DETECTED";
      isCheating.style.color = "red";
      isPaid.innerText = "POSSIBLY"
      isPaid.style.color = "orange"
    } else {
      isCheating.innerText = "CLEAN";
      isCheating.style.color = "green";

      isPaid.innerText = "NO"
      isPaid.style.color = "green"
    }

    if (data.nicknames && data.nicknames.length > 0) {
      theNicknames = data.nicknames;
      console.log(theNicknames);

      const namesWithLineBreaks = theNicknames.join("<br><br>");

      theNames.innerHTML = namesWithLineBreaks;

    } else {
      console.log("No nicknames found");
      theNames.innerHTML = "No History"
      isPaid.innerText = "POSSIBLY"
      isPaid.style.color = "orange"
    }

    if(data.rowTexts && data.rowTexts.length > 1) {
      const htmlString = data.rowTexts.join("<br><br>");
      theRp.innerHTML = htmlString;

      theRp.style.top = "-29px"
      theRp.style.fontSize = "13px"
    } else {
      theRp.innerHTML = "No History"
      theRp.style.top = "0"
      theRp.style.fontSize = "15px"
    }


  } catch (error) {
    console.error(error);

    serverDown.style.display = "block"
    theMain.style.display = "none"
    secondMain.style.display = "none"

  }
}



mainBtn.addEventListener("click", getStats)
