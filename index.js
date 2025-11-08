const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const records = [
    { roll: "25BMS0338" },
    { roll: "25BMS0344" },
    { roll: "25BMS0355" },
    { roll: "25BMS0323" },
    { roll: "25BMS0311" },
    { roll: "25BMS0350" },
    { roll: "25BMS0307" },
    { roll: "25BMS03" },
];

// Student data
const students = [
    {
    rollNumber: "25BMS0350",
    name: "Rashi Sengar",
    email: "rashi.25bms0338@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 109 },
    internals: { Stats: 58, FA: 64, FOM: 65, remark: "Rishi CR 🐸" },
    classTest: { Stats: 18, FA: 12, FOM: 31 }
    },
  {
    rollNumber: "25BMS0338",
    name: "Piyush Barala",
    email: "piyush.25bms0338@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 129 },
    internals: { Stats: 58, FA: 64, FOM: 65, remark: "He is BATMAN" },
    classTest: { Stats: 9.5, FA: 99, FOM: 24 }
  },
  {
    rollNumber: "25BMS0311",
    name: "Ashish Meena",
    email: "ashish.25bms0311@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 69 },
    internals: { Stats: 13, FA: 21, FOM: 22, remark: "Has much potential but needs improvement" },
    classTest: { Stats: 15, FA: 12, FOM: 22 }
  },
  {
    rollNumber: "25BMS0344",
    name: "Priyanshu Jha",
    email: "priyanshu.25bms0344@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 221 },
    internals: { Stats: 69, FA: 69, FOM: 70, remark: "Never misses a class and is favorite of EVS faculty" },
    classTest: { Stats: 18.5, FA: 35, FOM: 31 }
  },
  {
    rollNumber: "25BMS0355",
    name: "Shreyash Kumar",
    email: "shreyash.25bms0355@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 99 },
    internals: { Stats: 62, FA: 59, FOM: 45, remark: "Best Student" },
    classTest: { Stats: 12, FA: 23, FOM: 27 }
  },
  {
    rollNumber: "25BMS0307",
    name: "Anuj Ahirwar",
    email: "anuj.25bms0307@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 189 },
    internals: { Stats: 12, FA: 29, FOM: 27, remark: "Mischievous but talented student" },
    classTest: { Stats: 8, FA: 23, FOM: 25 }
  },





  {
    rollNumber: "25BMS0301",
    name: "Abdul Sameeh Malik",
    email: "abdul.25bms0301@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 106 },
    internals: { Stats: 63, FA: 59, FOM: 43, remark: "Shows up only for the free notes 📎" },
    classTest: { Stats: 17, FA: 14, FOM: 29 }
  },
  {
    rollNumber: "25BMS0303",
    name: "Ake Rhi",
    email: "ake.25bms0303@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 102 },
    internals: { Stats: 59, FA: 46, FOM: 51, remark: "Needs coffee and a calculator ☕🧮" },
    classTest: { Stats: 17, FA: 11, FOM: 23 }
  },
  {
    rollNumber: "25BMS0304",
    name: "Akshad Dhama",
    email: "akshad.25bms0304@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 135 },
    internals: { Stats: 67, FA: 42, FOM: 52, remark: "Turns group study into group nap 😴" },
    classTest: { Stats: 19, FA: 11, FOM: 23 }
  },
  {
    rollNumber: "25BMS0305",
    name: "Akshay Singh",
    email: "akshay.25bms0305@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 113 },
    internals: { Stats: 61, FA: 62, FOM: 68, remark: "Writes poetry in the margins ✍️" },
    classTest: { Stats: 18, FA: 15, FOM: 30 }
  },
  {
    rollNumber: "25BMS0306",
    name: "Akshita Jain",
    email: "akshita.25bms0306@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 109 },
    internals: { Stats: 40, FA: 41, FOM: 54, remark: "Turns group study into group nap 😴" },
    classTest: { Stats: 12, FA: 11, FOM: 24 }
  },
  {
    rollNumber: "25BMS0307",
    name: "Anuj Ahirwar",
    email: "anuj.25bms0307@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 101 },
    internals: { Stats: 48, FA: 48, FOM: 41, remark: "Has a PhD in 'maybe later' procrastination 🐢" },
    classTest: { Stats: 14, FA: 12, FOM: 18 }
  },
  {
    rollNumber: "25BMS0308",
    name: "Arpit Gupta",
    email: "arpit.25bms0308@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 125 },
    internals: { Stats: 66, FA: 58, FOM: 55, remark: "Calculates attendance like it's a sport 🧮🏅" },
    classTest: { Stats: 18, FA: 14, FOM: 27 }
  },
  {
    rollNumber: "25BMS0309",
    name: "Arsh Dhama",
    email: "arsh.25bms0309@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 110 },
    internals: { Stats: 41, FA: 36, FOM: 56, remark: "Always in first row — suspiciously awake 👀" },
    classTest: { Stats: 12, FA: 9, FOM: 25 }
  },
  {
    rollNumber: "25BMS0315",
    name: "Ayush Kumar Shrivastava",
    email: "ayush.25bms0315@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 124 },
    internals: { Stats: 64, FA: 58, FOM: 46, remark: "Teaches more than listens — multitasker 👩‍🏫" },
    classTest: { Stats: 18, FA: 15, FOM: 21 }
  },
  {
    rollNumber: "25BMS0316",
    name: "Bhavya Gambhir",
    email: "bhavya.25bms0316@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 108 },
    internals: { Stats: 70, FA: 70, FOM: 70, remark: "Topper of the class 😅" },
    classTest: { Stats: 39, FA: 40, FOM: 39 }
  },
  {
    rollNumber: "25BMS0317",
    name: "Chirag",
    email: "chirag.25bms0317@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 94 },
    internals: { Stats: 49, FA: 45, FOM: 48, remark: "Homework: legendary for being late 🐢" },
    classTest: { Stats: 14, FA: 11, FOM: 22 }
  },
  {
    rollNumber: "25BMS0318",
    name: "Debasish Roy",
    email: "debasish.25bms0318@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 130 },
    internals: { Stats: 66, FA: 48, FOM: 47, remark: "Kala Jadu expert" },
    classTest: { Stats: 19, FA: 11, FOM: 24 }
  },
  {
    rollNumber: "25BMS0319",
    name: "Devarsh Khatri",
    email: "devarsh.25bms0319@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 115 },
    internals: { Stats: 49, FA: 44, FOM: 56, remark: "Always in hood (or group chat) 📲" },
    classTest: { Stats: 14, FA: 12, FOM: 28 }
  },
  {
    rollNumber: "25BMS0321",
    name: "Diya",
    email: "diya.25bms0321@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 139 },
    internals: { Stats: 45, FA: 68, FOM: 64, remark: "Benchmark student — copies the benchmark 😉" },
    classTest: { Stats: 13, FA: 19, FOM: 29 }
  },
  {
    rollNumber: "25BMS0322",
    name: "Garv",
    email: "garv.25bms0322@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 121 },
    internals: { Stats: 62, FA: 44, FOM: 47, remark: "Shayari expert " },
    classTest: { Stats: 18, FA: 11, FOM: 21 }
  },
  {
    rollNumber: "25BMS0323",
    name: "Himanshu Prajapat",
    email: "himanshu.25bms0323@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 110 },
    internals: { Stats: 53, FA: 43, FOM: 62, remark: "Answers in style! ✍️" },
    classTest: { Stats: 16, FA: 11, FOM: 27 }
  },
  {
    rollNumber: "25BMS0324",
    name: "Jaikant Oraon",
    email: "jaikant.25bms0324@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 111 },
    internals: { Stats: 53, FA: 45, FOM: 61, remark: "Brings good energy — Singer" },
    classTest: { Stats: 16, FA: 12, FOM: 27 }
  },
  {
    rollNumber: "25BMS0325",
    name: "K Rajanglungba",
    email: "k.25bms0325@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 90 },
    internals: { Stats: 46, FA: 35, FOM: 44, remark: "Attendance detective — finds excuses 🔎" },
    classTest: { Stats: 14, FA: 8, FOM: 19 }
  },
  {
    rollNumber: "25BMS0326",
    name: "Kanishk Mehra",
    email: "kanishk.25bms0326@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 133 },
    internals: { Stats: 55, FA: 54, FOM: 43, remark: "Class's unofficial morale officer 🙌" },
    classTest: { Stats: 16, FA: 13, FOM: 19 }
  },
  {
    rollNumber: "25BMS0327",
    name: "Kaushal Gaggar",
    email: "kaushal.25bms0327@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 116 },
    internals: { Stats: 46, FA: 67, FOM: 58, remark: "I have some personal matter with Kaushal" },
    classTest: { Stats: 14, FA: 17, FOM: 27 }
  },
  {
    rollNumber: "25BMS0328",
    name: "Kavya Singh",
    email: "kavya.25bms0328@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 122 },
    internals: { Stats: 43, FA: 53, FOM: 45, remark: "Answers the question before the question is asked 🤯" },
    classTest: { Stats: 12, FA: 13, FOM: 21 }
  },
  {
    rollNumber: "25BMS0334",
    name: "Kumar Harsh",
    email: "kumar.25bms0334@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 110 },
    internals: { Stats: 57, FA: 48, FOM: 61, remark: "Topper in School 🎧" },
    classTest: { Stats: 17, FA: 12, FOM: 29 }
  },
  {
    rollNumber: "25BMS0339",
    name: "Pooja Singh",
    email: "pooja.25bms0339@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 103 },
    internals: { Stats: 47, FA: 50, FOM: 59, remark: "Writes answers in diagrams — artistic 🖊️" },
    classTest: { Stats: 13, FA: 12, FOM: 26 }
  },
  {
    rollNumber: "25BMS0340",
    name: "Prachi",
    email: "prachi.25bms0340@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 119 },
    internals: { Stats: 57, FA: 46, FOM: 48, remark: "Silent but sneaky in tests 😈" },
    classTest: { Stats: 17, FA: 11, FOM: 23 }
  },
  {
    rollNumber: "25BMS0341",
    name: "Pradumya Kumar",
    email: "pradumya.25bms0341@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 116 },
    internals: { Stats: 55, FA: 61, FOM: 46, remark: "Teaches more than listens — multitasker 👩‍🏫" },
    classTest: { Stats: 16, FA: 15, FOM: 21 }
  },
  {
    rollNumber: "25BMS0342",
    name: "Pranjul Soni",
    email: "pranjul.25bms0342@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 104 },
    internals: { Stats: 66, FA: 60, FOM: 57, remark: "Calculator whisperer 🧮" },
    classTest: { Stats: 19, FA: 15, FOM: 29 }
  },
  {
    rollNumber: "25BMS0343",
    name: "Prateek Banthia",
    email: "prateek.25bms0343@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 118 },
    internals: { Stats: 52, FA: 58, FOM: 69, remark: "Answers the question before the question is asked 🤯" },
    classTest: { Stats: 15, FA: 15, FOM: 31 }
  },
  {
    rollNumber: "25BMS0346",
    name: "Punay Sachdeva",
    email: "punay.25bms0346@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 117 },
    internals: { Stats: 47, FA: 40, FOM: 45, remark: "Finds creative excuses for absence 🎭" },
    classTest: { Stats: 14, FA: 10, FOM: 20 }
  },
  {
    rollNumber: "25BMS0348",
    name: "Punit Kumar",
    email: "punit.25bms0348@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 101 },
    internals: { Stats: 44, FA: 44, FOM: 39, remark: "Writes answers in diagrams — artistic 🖊️" },
    classTest: { Stats: 13, FA: 11, FOM: 19 }
  },
  {
    rollNumber: "25BMS0349",
    name: "Pushpak Kumar",
    email: "pushpak.25bms0349@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 88 },
    internals: { Stats: 40, FA: 38, FOM: 46, remark: "Attendance detective — finds excuses 🔎" },
    classTest: { Stats: 11, FA: 9, FOM: 18 }
  },
  {
    rollNumber: "25BMS0351",
    name: "Ritika",
    email: "ritika.25bms0351@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 105 },
    internals: { Stats: 50, FA: 52, FOM: 39, remark: "Answers in memes and gifs 😂" },
    classTest: { Stats: 14, FA: 13, FOM: 20 }
  },
  {
    rollNumber: "25BMS0353",
    name: "Sangam Kumar",
    email: "sangam.25bms0353@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 107 },
    internals: { Stats: 60, FA: 53, FOM: 49, remark: "Organized binder, chaotic life 📚" },
    classTest: { Stats: 18, FA: 13, FOM: 22 }
  },
  {
    rollNumber: "25BMS0354",
    name: "Saransh Walke",
    email: "saransh.25bms0354@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 92 },
    internals: { Stats: 50, FA: 48, FOM: 51, remark: "Thinks  ✍️" },
    classTest: { Stats: 15, FA: 12, FOM: 23 }
  },
  {
    rollNumber: "25BMS0356",
    name: "Shubhang Jain",
    email: "shubhang.25bms0356@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 127 },
    internals: { Stats: 57, FA: 62, FOM: 55, remark: "Class's unofficial morale officer 🙌" },
    classTest: { Stats: 17, FA: 16, FOM: 27 }
  },
  {
    rollNumber: "25BMS0359",
    name: "Sudhanshu Pandey",
    email: "sudhanshu.25bms0359@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 99 },
    internals: { Stats: 41, FA: 44, FOM: 47, remark: "Finds creative excuses for absence 🎭" },
    classTest: { Stats: 12, FA: 11, FOM: 20 }
  },
  {
    rollNumber: "25BMS0360",
    name: "Suman Saurav",
    email: "suman.25bms0360@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 118 },
    internals: { Stats: 56, FA: 49, FOM: 59, remark: "Brings snacks, gets mercy points 🍪" },
    classTest: { Stats: 16, FA: 12, FOM: 28 }
  },
  {
    rollNumber: "25BMS0361",
    name: "Tanmay Jain",
    email: "tanmay.25bms0361@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 96 },
    internals: { Stats: 44, FA: 47, FOM: 61, remark: "Writes answers in diagrams — artistic 🖊️" },
    classTest: { Stats: 13, FA: 12, FOM: 27 }
  },
  {
    rollNumber: "25BMS0363",
    name: "Tanuj",
    email: "tanuj.25bms0363@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 112 },
    internals: { Stats: 50, FA: 36, FOM: 46, remark: "Very good at group photos, not so much at attendance 📸" },
    classTest: { Stats: 15, FA: 9, FOM: 23 }
  },
  {
    rollNumber: "25BMS0365",
    name: "Vaibhav Singh",
    email: "vaibhav.25bms0365@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 128 },
    internals: { Stats: 66, FA: 63, FOM: 63, remark: "Class presenter — with style 🎤" },
    classTest: { Stats: 19, FA: 17, FOM: 30 }
  },
  {
    rollNumber: "25BMS0366",
    name: "Vaibhav Yadav",
    email: "vaibhav.25bms0366@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 122 },
    internals: { Stats: 56, FA: 47, FOM: 55, remark: "Organized binder, chaotic life 📚" },
    classTest: { Stats: 17, FA: 12, FOM: 25 }
  },
  {
    rollNumber: "25BMS0367",
    name: "Vedika Somani",
    email: "vedika.25bms0367@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 108 },
    internals: { Stats: 46, FA: 48, FOM: 61, remark: "Has an answer for every trick question 🔮" },
    classTest: { Stats: 14, FA: 12, FOM: 28 }
  },
  {
    rollNumber: "25BMS0370",
    name: "Vishesh",
    email: "vishesh.25bms0370@ddu.du.ac.in",
    department: "BMS",
    semester: 1,
    attan: { total: 249, attended: 106 },
    internals: { Stats: 45, FA: 53, FOM: 42, remark: "Classroom vibe: 100% energy, 0% pen ✏️" },
    classTest: { Stats: 10, FA: 12, FOM: 23 }
  },
];

// Middleware
app.use(express.json());

// CORS middleware - ENABLED
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  
  next();
});

// Helper function to generate OTP
function generateOTP() {
  return Math.floor(Math.random() * 900000 + 100000);
}

// GET endpoint - Validate login with roll number
app.get("/login/validate/:roll", (req, res) => {
  const roll = req.params.roll.toUpperCase();
  const isValid = records.some(record => record.roll === roll);
  
  res.json({
    success: isValid,
    message: isValid ? "Valid roll number" : "Invalid roll number"
  });
});

// GET endpoint - Generate OTP for login
app.get("/login/otp", (req, res) => {
  const otp = generateOTP();
  res.json({ otp: otp });
});

// GET endpoint - Fetch student by roll number
app.get('/student/:rollNumber', (req, res) => {
  const rollNumber = req.params.rollNumber.toUpperCase();
  const student = students.find(s => s.rollNumber === rollNumber);
  
  if (student) {
    res.json({
      success: true,
      data: student
    });
  } else {
    res.status(404).json({
      success: false,
      message: 'Student not found'
    });
  }
});

// POST endpoint - Fetch student by roll number (alternative method)
app.post('/api/student', (req, res) => {
  const { rollNumber } = req.body;
  
  if (!rollNumber) {
    return res.status(400).json({
      success: false,
      message: 'Roll number is required'
    });
  }
  
  const student = students.find(s => s.rollNumber === rollNumber.toUpperCase());
  
  if (student) {
    res.json({
      success: true,
      data: student
    });
  } else {
    res.status(404).json({
      success: false,
      message: 'Student not found'
    });
  }
});

// GET all students
app.get('/api/students', (req, res) => {
  res.json({
    success: true,
    data: students
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'API is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Student API running on PORT: ${PORT}`);
});


