/*let js = 'amazing';
if (js === 'amazing') alert('JS is fun');
console.log(60 + 20 + 30);

let johnHeight = 1.76,
    johnMass = 85,
    markMass = 95,
    markheight = 1.88,
    johnBMI,
    markBMI;

johnBMI = johnMass / johnHeight ** 2;
markBMI = markMass / markheight ** 2;

let markHigherBMI = markBMI > johnBMI;

if (markHigherBMI == true) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}`);
} else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`);
}
*/
// let dolphinsFirstMatchScore = 97,
//     dolphinsSecondMatchScore = 112,
//     dolphinsThirdMatchScore = 101,
//     KoalasFirstMatchScore = 109,
//     KoalasSecondMatchScore = 95,
//     KoalasThirdMatchScore = 106;

// let dolphinsAvgScore = (dolphinsFirstMatchScore + dolphinsSecondMatchScore + dolphinsThirdMatchScore) / 3;
// let KoalasAvgScore = (KoalasFirstMatchScore + KoalasSecondMatchScore + KoalasThirdMatchScore) / 3;

// if (dolphinsAvgScore >= 100 && dolphinsAvgScore == KoalasAvgScore)
//     console.log("It's Draw..!!");
// else if (dolphinsAvgScore >= 100 && dolphinsAvgScore > KoalasAvgScore)
//     console.log(`Dolphins ${dolphinsAvgScore} is the winner`);
// else if (KoalasAvgScore >= 100 && KoalasAvgScore > dolphinsAvgScore)
//     console.log(`Koalas ${KoalasAvgScore} is the winner`);
// else
//     console.log("No team wins..!!");

let bill = 40, tip, total;
tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.2);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill + tip}`);