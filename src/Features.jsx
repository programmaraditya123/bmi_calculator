import React from "react";
import Accordian from "./Accordian";
import './Features.css'

const  Features =()=>{
    return(<>
        <h1>BODY MASS INDEX</h1>
        <Accordian
        title1="Values of BMI"
        para1="If the value of BMI is between 18.5 to 24.9, then the person falls under the normal category. If the value of BMI is between 25 to 29.9, then the person falls under the overweight category. If the value of BMI is between 30 to 34.9, then the person falls under the obesity category."
        title2="What is BMI normal range?"
        para2="between 18.5 and 24.9 – This is described as the 'healthy range'. between 25 and 29.9 – This is described as overweight. between 30 and 39.9 – This is described as obesity. 40 or over – This is described as severe obesity."
        title3="What is the formula of BMI?"
        para3="The formula for BMI is weight in kilograms divided by height in meters squared. If height has been measured in centimeters, divide by 100 to convert this to meters. When using English measurements, pounds should be divided by inches squared."

        />
        <h1>TAX CALCULATOR</h1>
        <Accordian
        title1="What are the benefits of tax calculator?"
        para1="Helps You Manage Your Expenses in Advance
        With the help of an income tax calculator, you can get an accurate estimate of the amount of income tax you will have to pay. By using it and planning your income tax payment in advance, you can manage your other financial requirements and expenses."
        title2="How is tax amount calculated?"
        para2="The government sets the tax rates, which are based on several income brackets. The following formula is used to calculate income taxes: Gross Salary - Deductions = Taxable Income; Income Tax = (Taxable Income x Applicable Tax Rate) - Tax Rebate."
        title3="How much income is tax free?"
        para3="Budget 2023 has further tweaked the tax slabs under the new income tax regime. There will not be any tax for income of up to Rs 3 lakh. Income above Rs 3 lakh and up to Rs 5 lakh, will be taxed at 5 per cent. For income of above Rs 6 lakh and up to Rs 9 lakh, the income tax will be applicable at a 10 per cent rate."
         />

        <h1>AGE CALCULAOTR</h1>
        <Accordian
        title1="What is the importance of age calculator?"
        para1="The Age Calculator can determine the age or interval between two dates. The calculated age will be displayed in years, months, weeks, days, hours, minutes, and seconds. The age of a person can be counted differently in different cultures. This calculator is based on the most common age system."
        title2="What is the formula for the age calculator?"
        para2="Age Calculator Formula
        The date of birth is subtracted from the given date, which gives the age of the person. i.e., Age formula = Given date - Date of birth. The steps to calculate a person's age from his date of birth to a given date are listed below."
        title3="What is significance of age?"
        para3="Age plays a very important factor in growth related studies. Age is considered as a dynamic factor which helps in the study of various developmental phases that leads to the maturation of an individual. Age is used a parameter to determine the growth of a population or an individual."
        />
        <h1>CALCULATOR</h1>
        <Accordian
        title1="Who invented calculator his name?"
        para1="The correct answer is Blaise Pascal. Blaise Pascal invented the calculator. In 1645 Pascal published an eighteen-page pamphlet describing his calculating machine. Pascal's invention of the mechanical calculator in the early 1640s was born out of a desire to help his father in collecting taxes."
        title2="What is the real name of the human calculator?"
        para2="Shakuntala Devi (4 November 1929 – 21 April 2013) was an Indian mental calculator and writer, popularly known as the Human Computer. Her talent earned her a place in the 1982 edition of The Guinness Book of World Records."
        title3="What is the logic of calculator?"        
        para3="Thus, when you input numbers into a calculator, the integrated circuit converts those numbers to binary strings of 0s and 1s. The integrated circuits then use those strings of 0s and 1s to turn transistors on and off with electricity to perform the desired calculations."
        />
        <h1>EMI CALCULATOR</h1>
        <Accordian
        title1="What is the logic behind EMI calculation?"
        para1="Equated Monthly Installment (EMI) Formula
        The EMI flat-rate formula is calculated by adding together the principal loan amount and the interest on the principal and dividing the result by the number of periods multiplied by the number of months."
        title2="What is the best way to calculate EMI?"
        para2="The formula for calculating the Personal Loan EMI is: EMI = [P x R x (1+R)^N]/[(1+R)^N-1], where P is the principal loan amount, R is the monthly interest rate, and N is the number of monthly instalments or the loan tenure in months."
        title3="How EMI actually works?"
        para3="EMI or Equated Monthly Instalment is simply the cost of your purchase that is divided into equal parts that you will have to pay monthly in order to fulfil the payment. The number of months and the monthly amount you owe is predetermined. The EMI is dependent on the following factors: Principal borrowed."
         />
        <h1>LOAN CALCULATOR</h1>
        <Accordian
        title1="What is the importance of loan calculator?"
        para1="The foremost benefit of using a personal loan EMI calculator is the precision it provides. By considering variables such as the loan amount, interest rate and tenure, it delivers the exact EMI amount you will have to pay. This precision is invaluable for accurate financial planning."
        title2="How does a loan calculator work?"
        para2="To use a loan calculator, you enter the loan amount, interest rate, and term into the calculator. It will then calculate the monthly payment for the loan. A loan calculator can be a valuable tool for businesses considering a loan."
        title3="What is the principal of a loan?"
        para3="A loan principal is the original amount of money borrowed via a loan. The loan will generate interest, and this will be added to the original amount. This is the basic way interest and loan repayment works, allowing borrowers to get the money they need and lenders to make a profit on the loans they offer."
         />
        <h1>pH CALCULATOR</h1>
        <Accordian
        title1="What is an interesting fact about the pH scale?"
        para1="The scale runs from 0 to 14, with acids having a pH less than 7, 7 being neutral, and bases having a pH higher than 7. Acids and bases react with each other in what is called a neutralization reaction. The reaction produces salt and water and leaves the solution closer to a neutral pH than before."        
        title2="Why do we need to calculate pH?"
        para2="pH is an important quantity that reflects the chemical conditions of a solution. The pH can control the availability of nutrients, biological functions, microbial activity, and the behavior of chemicals."
        title3="What is the full form of pH?"
        para3="The pH full form is the potential of Hydrogen. In simple terms, it is the ratio of hydronium ions to hydroxide ions. Usually, the range of the pH scale lies between 0 to 14. It is also known as the strength of hydrogen in any solution."
        />
    </>)
};

export default Features;