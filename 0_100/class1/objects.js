const allusers = [{
    firstName: "jatin",
    gender: "male"
}, {
    firstName: "abc",
    gender: "female"
}, {
    firstName: "xyzn",
    gender: "male"
}];

for(let i = 0; i < allusers.length ; i++)
{
    if(allusers[i]["gender"] == "male")
    {
        console.log(allusers[i]["firstName"]);
    }
}