1  //import data
2  
3  /*
4  Node js<fs>
5  for your data in the .json file.
6  for each applicant data.
7  create a message: to inform him/her
8  that he/she did not get the job.
9  <meet qualificatino>
10 but be on the lookout for
11 new oprtunities from us in the future.
12 
13 */
14 /*
15 Step 1. ensure your js file can access the data.
16 */
17 const data = require("./data.json");
18 const fs = require("fs");
19 
20 /*
21 Step 2:use a for<while> a loop to go through each data point
22 -print the data
23 
24 Step 3:for each data point create a message example
25   'Dear <<sir/madam>based on gender>>
26    We regret to inform you that you wount be going
27    to next stage of the interview.
28    the reasone.you not a good fit.
29   '
30   console.log(the message)
31 
32 Step 4:create an empty array and
33 the user data including the messages.
34 output object should be
35 {
36     "id": 4,
37     "first_name": "Krystle",
38     "last_name": "Rubroe",
39     "email": "krubroe3@indiatimes.com",
40     "gender": "Female",
41     "phone": "244-641-3793",
42     "message":<>
43 }
44 
45 Step 5:write this data to a file called output.json.
46   Hint do JSON.stringify -> js object to json notation.
47   save this data to your file ie output.json
48 */
49 
50 /*
51 for-> async->
52 -map <method>
53 */
54 
55 const output = [];
56 
57 for(let i = 0; i < data.length; i++) {
58     const doc = data[i];
59     //
60     //   const first_name = doc.first_name;
61     //   const last_name = doc.last_name;
62     //   const full_name=doc.first+doc.last_name
63     const { first_name, last_name, email, gender, phone } = doc;
64     
65     let title = "";
66     if (doc.gender === "Male") {
67         title = "Sir";
68     } else {
69         title = "Madam";
70     }
71     const message = `
72     Dear ${title}, ${doc.first_name} ${last_name}. We regret to inform you
73     will not procede in the next round of interviews.
74     `;
75     output.push({ first_name, last_name, email, gender, phone, message });
76 }
77 
78 const outputText = JSON.stringify(output); //text
79 
80 fs.writeFile("output.json", outputText, (error) => {});
81