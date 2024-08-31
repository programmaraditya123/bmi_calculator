import React from "react";
import './Belowbody.css';
import bmichart from './bmichart.gif';
//import Nutritionchart from './Nutritionchart';

const Belowbody =()=>{
    return(<div className="bmi">
    <h2>Learn About BMI</h2>
    <h3>BMI introduction</h3>
    <p>BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass. It is widely used as a general indicator of whether a person has a healthy body weight for their height. Specifically, the value obtained from the calculation of BMI is used to categorize whether a person is underweight, normal weight, overweight, or obese depending on what range the value falls between. These ranges of BMI vary based on factors such as region and age, and are sometimes further divided into subcategories such as severely underweight or very severely obese. Being overweight or underweight can have significant health effects, so while BMI is an imperfect measure of healthy body weight, it is a useful indicator of whether any additional testing or action is required. Refer to the table below to see the different categories based on BMI that are used by the calculator.</p>
     <h3>BMI table for adults</h3>
     <p>This is the World Health Organization's (WHO) recommended body weight based on BMI values for adults. It is used for both men and women, age 20 or older.</p>
     <table>
        <tr>
            <th>classification</th>
            <th>BMI range -kg/m<sup>2</sup></th>
        </tr>
        <tr>
            <td>Severe Thinness</td>
            <td> less than 6</td>
        </tr>
        <tr>
            <td>Moderate Thinness</td>
            <td>16-17</td>
        </tr>
        <tr>
            <td>Mild Thinness</td>
            <td>17-18.5</td>
        </tr>
        <tr>
            <td>Normal</td>
            <td>18.5-25</td>
        </tr>
        <tr>
            <td>OverWeight</td>
            <td>25-30</td>
        </tr>
        <tr>
            <td>Obese class-1</td>
            <td>30-35</td>
        </tr>
        <tr>
            <td>Obese class-2</td>
            <td>35-40</td>
        </tr>
        <tr>
            <td>Obese class-3</td>
            <td>greater than 40</td>
        </tr>

     </table>
     <h3>BMI chart for adults</h3>
     <p>This is a graph of BMI categories based on the World Health Organization data. The dashed lines represent subdivisions within a major categorization.</p>
     <img src={bmichart} alt="bmichart"/>
     <h3>BMI table for children and teens, age 2-20</h3>
     <p>The Centers for Disease Control and Prevention (CDC) recommends BMI categorization for children and teens between age 2 and 20.</p>
     <table>
        <tr>
            <th>Category</th>
            <th>Percentile Range</th>
        </tr>
        <tr>
            <td>underweight</td>
            <td>less than 5%</td>
        </tr>
        <tr>
            <td>Healthy Weight</td>
            <td>55-85%</td>
        </tr>
        <tr>
            <td>At risk of Overweight</td>
            <td>85%-95%</td>
        </tr>
        <tr>
            <td>Overweight</td>
            <td>greater than 95%</td>
        </tr>
     </table>
        <h3>Risks associated with being overweight</h3>
        <p>Being overweight increases the risk of a number of serious diseases and health conditions. Below is a list of said risks, according to the Centers for Disease Control and Prevention (CDC):</p>
        <ul>
            <li>High blood pressure</li>
            <li>Higher levels of LDL cholesterol, which is widely considered "bad cholesterol," lower levels of HDL cholesterol, considered to be good cholesterol in moderation, and high levels of triglycerides.</li>
            <li>Type II diabetes</li>
            <li>Coronary heart disease</li>
            <li>Stroke</li>
            <li>Gallbladder disease</li>
            <li>Osteoarthritis, a type of joint disease caused by breakdown of joint cartilage</li>
            <li>Sleep apnea and breathing problems</li>
            <li>Certain cancers (endometrial, breast, colon, kidney, gallbladder, liver)</li>
            <li>Low quality of life</li>
            <li>Mental illnesses such as clinical depression, anxiety, and others</li>
            <li>Body pains and difficulty with certain physical functions</li>
            <li>Generally, an increased risk of mortality compared to those with a healthy BMI</li>
        </ul>
        <p>As can be seen from the list above, there are numerous negative, in some cases fatal, outcomes that may result from being overweight. Generally, a person should try to maintain a BMI below 25 kg/m2, but ideally should consult their doctor to determine whether or not they need to make any changes to their lifestyle in order to be healthier.</p>
        <h3>Risks associated with being underweight</h3>
        <p>Being underweight has its own associated risks, listed below:</p>
        <ul>
            <li>Malnutrition, vitamin deficiencies, anemia (lowered ability to carry blood vessels)</li>
            <li>Osteoporosis, a disease that causes bone weakness, increasing the risk of breaking a bone</li>
            <li>A decrease in immune function</li>
            <li>Growth and development issues, particularly in children and teenagers</li>
            <li>Possible reproductive issues for women due to hormonal imbalances that can disrupt the menstrual cycle. Underweight women also have a higher chance of miscarriage in the first trimester</li>
            <li>Potential complications as a result of surgery</li>
            <li>Generally, an increased risk of mortality compared to those with a healthy BMI</li>
        </ul>
        <p>In some cases, being underweight can be a sign of some underlying condition or disease such as anorexia nervosa, which has its own risks. Consult your doctor if you think you or someone you know is underweight, particularly if the reason for being underweight does not seem obvious.</p>
        <h3>Limitations of BMI</h3>
        <p>Although BMI is a widely used and useful indicator of healthy body weight, it does have its limitations. BMI is only an estimate that cannot take body composition into account. Due to a wide variety of body types as well as distribution of muscle, bone mass, and fat, BMI should be considered along with other measurements rather than being used as the sole method for determining a person's healthy body weight.</p>
        <h4>In adults:</h4>
        <p>BMI cannot be fully accurate because it is a measure of excess body weight, rather than excess body fat. BMI is further influenced by factors such as age, sex, ethnicity, muscle mass, body fat, and activity level, among others. For example, an older person who is considered a healthy weight, but is completely inactive in their daily life may have significant amounts of excess body fat even though they are not heavy. This would be considered unhealthy, while a younger person with higher muscle composition of the same BMI would be considered healthy. In athletes, particularly bodybuilders who would be considered overweight due to muscle being heavier than fat, it is entirely possible that they are actually at a healthy weight for their body composition. Generally, according to the CDC:</p>
        <ul>
            <li>Older adults tend to have more body fat than younger adults with the same BMI.</li>
            <li>Women tend to have more body fat than men for an equivalent BMI.</li>
            <li>Muscular individuals and highly trained athletes may have higher BMIs due to large muscle mass.</li>
        </ul>
        <h4>In children and adolescents:</h4>
        <p>The same factors that limit the efficacy of BMI for adults can also apply to children and adolescents. Additionally, height and level of sexual maturation can influence BMI and body fat among children. BMI is a better indicator of excess body fat for obese children than it is for overweight children, whose BMI could be a result of increased levels of either fat or fat-free mass (all body components except for fat, which includes water, organs, muscle, etc.). In thin children, the difference in BMI can also be due to fat-free mass.</p>
        <p>That being said, BMI is fairly indicative of body fat for 90-95% of the population, and can effectively be used along with other measures to help determine an individual's healthy body weight.</p>
        <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
    <mi>BMI</mi>
    <mo>=</mo>
    <mn>703</mn>
    <mo>×</mo>
    <mfrac>
      <mrow>
        <mi>mass</mi>
        <mo>(</mo>
        <mi>lbs</mi>
        <mo>)/</mo>
      </mrow>
      <msup>
        <mi>height</mi>
        <mn>2</mn>
      </msup>
      <mo>(</mo>
      <mi>in</mi>
      <mo>)</mo>
    </mfrac>
  </math>

  <p>For example, if the mass is 160 lbs and the height is 70 inches:</p>

  <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
    <mi>BMI</mi>
    <mo>=</mo>
    <mn>703</mn>
    <mo>×</mo>
    <mfrac>
      <mn>160</mn>
      <msup>
        <mn>70</mn>
        <mn>2</mn>
      </msup>
    </mfrac>
  </math>

  <p>This gives a BMI of approximately 22.96 kg/m<sup>2</sup>.</p>
  <h3>BMI Prime</h3>
  <p>BMI prime is the ratio of a person's measured BMI to the upper limit of BMI that is considered "normal," by institutions such as the WHO and the CDC. Though it may differ in some countries, such as those in Asia, this upper limit, which will be referred to as BMIupper is 25 kg/m2.</p>
  <p>The BMI prime formula is:</p>
  <h4 style={{textAlign:"center"}}>BMI Prime=BMI/25</h4>
  <p>Since BMI prime is a ratio of two BMI values, BMI prime is a dimensionless value. A person who has a BMI prime less than 0.74 is classified as underweight; from 0.74 to 1 is classified as normal; greater than 1 is classified as overweight; and greater than 1.2 is classified as obese. The table below shows a person's weight classification based on their BMI prime:</p>
  <table>
        <tr>
            <th>classification</th>
            <th>BMI</th>
            <th>BMI Prime</th>
        </tr>
        <tr>
            <td>Severe Thinness</td>
            <td> less than 6</td>
            <td>less than 0.64</td>
        </tr>
        <tr>
            <td>Moderate Thinness</td>
            <td>16-17</td>
            <td>0.64-0.68</td>
        </tr>
        <tr>
            <td>Mild Thinness</td>
            <td>17-18.5</td>
            <td>0.68-0.74</td>
        </tr>
        <tr>
            <td>Normal</td>
            <td>18.5-25</td>
            <td>0.74-1</td>
        </tr>
        <tr>
            <td>OverWeight</td>
            <td>25-30</td>
            <td>1-1.2</td>
        </tr>
        <tr>
            <td>Obese class-1</td>
            <td>30-35</td>
            <td>1.2-1.4</td>
        </tr>
        <tr>
            <td>Obese class-2</td>
            <td>35-40</td>
            <td>1.4-1.6</td>
        </tr>
        <tr>
            <td>Obese class-3</td>
            <td>greater than 40</td>
            <td>greater than 16</td>
        </tr>

     </table>
     <p>BMI prime allows us to make a quick assessment of how much a person's BMI differs from the upper limit of BMI that is considered normal. It also allows for comparisons between groups of people who have different upper BMI limits.</p>
     <h3>Ponderal Index</h3>
     <p>The Ponderal Index (PI) is similar to BMI in that it measures the leanness or corpulence of a person based on their height and weight. The main difference between the PI and BMI is the cubing rather than squaring of the height in the formula (provided below). While BMI can be a useful tool when considering large populations, it is not reliable for determining leanness or corpulence in individuals. Although the PI suffers from similar considerations, the PI is more reliable for use with very tall or short individuals, while BMI tends to record uncharacteristically high or low body fat levels for those on the extreme ends of the height and weight spectrum. Below is the equation for computing the PI of an individual using USC, again using a 5'10", 160-pound individual as an example:</p>
     
            
     
    </div>)

};

export default Belowbody;