let resume = {
    Email : "kraja2796@gmail.com",
    Mobile : 8667273916,
    Address : "No:13/44B, 8th Cross Street Sakthi Nagar ,Tirupattur District - 635601",
    //OBJECTIVE
    Objective :  "A position as an active employee, involving responsibility and working with others as a team member to achieve advancement and growth for the company",
    //QUALIFICATION
    School : "Don Bosco TPT",
    College : "BE Mechanical Engineering",
    Strength : ["Never Give Up Spirit"," Self Confidence"," Flexibility and Adaptability"," Teamwork"],
    //BIO DATA
    Age : 24,
    Sex : "Male",
    Date_of_birth : "27.11.1996",
    Father_Name : "Soundararajan A",
    Nationality : "Indian",
    Languages_known : "Tamil and English",
    //DECLARATION
    Declaration : "I hereby declare that all information given above is true to the best of my knowledge." 
}
for(let resume_details in resume){
     console.log(`${resume_details} => ${resume[resume_details]}`)
}