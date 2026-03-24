import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';


// basic information 

const MARITAL_STATUS = ['Unmarried', 'Widowed', 'Divorced', 'Awaiting Divorce'];
const GENDERS = ['Male', 'Female'];
const REGISTERED_BY = ['Self', 'Parents', 'Sibling', 'Relative', 'Friend'];

//personal details
const PHYSICAL_STATUS = ['Normal', 'Physically Challenged'];
const HIGHT = [
  "4ft 6in / 137 cms",
  "4ft 7in / 140 cms",
  "4ft 8in / 142 cms",
  "4ft 9in / 145 cms",
  "4ft 10in / 147 cms",
  "4ft 11in / 150 cms",
  "5ft 0in / 152 cms",
  "5ft 1in / 155 cms",
  "5ft 2in / 157 cms",
  "5ft 3in / 160 cms",
  "5ft 4in / 163 cms",
  "5ft 5in / 165 cms",
  "5ft 6in / 168 cms",
  "5ft 7in / 170 cms",
  "5ft 8in / 173 cms",
  "5ft 9in / 175 cms",
  "5ft 10in / 178 cms",
  "5ft 11in / 180 cms",
  "6ft 0in / 183 cms",
  "6ft 1in / 185 cms",
  "6ft 2in / 188 cms",
  "6ft 3in / 191 cms",
  "6ft 4in / 193 cms",
  "6ft 5in / 196 cms",
  "6ft 6in / 198 cms",
  "6ft 7in / 201 cms",
  "6ft 8in / 203 cms",
  "6ft 9in / 206 cms",
  "6ft 10in / 208 cms",
  "6ft 11in / 211 cms",
  "7ft 0in / 213 cms",
  "7ft 1in / 216 cms",
  "7ft 2in / 218 cms"
]
const WEIGHT = [];
for (let i = 35; i <= 150; i++) {
  WEIGHT.push(`${i}kg`);
}
const COLOR = ["Dark Brown", "Brown", "Wheatish Brown", "Wheatish", "Fair", "Very Fair"];

// Community Specific Options
const COMMUNITIES = ['Kannada Devangar'];
const SUB_CASTES = ["Ladhikaru",
    "Mingilar",
    "Sidhlukolar",
    "Malaler",
    "Irumaner",
    "Thubbelar",
    "Paneiyar",
    "Annelar",
    "Sevelar",
    "Banilar",
    "Pojjelar",
    "Balithar",
    "Cinnakotlar",
    "UnisemaraPalithar",
    "Enthelar",
    "Muchaladhar",
    "Kappelar",
    "Kanjalakoontathar",
    "Ambugulnar",
    "Gudigelar",
    "Bakthimaller",
    "Maralelar",
    "Pannethar",
    "Allkulanelaru",
    "Araganathar",
    "Kallukotlar",
    "Nagular",
    "Kadubelar",
    "Allikondar",
    "Paleylar",
    "Others"];
const MOTHER_TONGUES = ['Kannadam', 'Telugu', 'Tamil', 'Other'];

//education & career
const EDUCATION = [
  "Under 10th STD",
  "10th Standard",
  "12th Standard",
  "Diploma",
  "ITI",
  "Undergraduate",
  "Postgraduate",
  "Doctorate",
  "Other"
];
const JOB = [
  "Government",
  "Private",
  "Business",
  "Self Employed",
  "Not Working",
  "Other"
]
const INCOME_TYPE = [
  "Monthly",
  "Yearly"
]

// Location 
const COUNTRIES = [
  "India",
  "Other"
]
//list the all districts in tamilnadu
const STATE = [
  "Tamilnadu",
  "others"
]
//list the all districts in tamilnadu
const DISTRICT = [
    "Ariyalur",
    "Chengalpattu",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kancheepuram",
    "Kanniyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Mayiladuthurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivaganga",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Thoothukudi",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupathur",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
    "Other"
    ]

    const DHOSAM = [
   "No Dhosam",
"Raagu Kethu Dhosam",
"Sevvai Dhosam",
"Raagu Kethu, Sevvai",
"I don't know"
    ]

const RASI_OPTIONS = [
    "மேஷம் (Mesham)",
    "ரிஷபம் (Rishabam)",
    "மிதுனம் (Mithunam)",
    "கடகம் (Kadagam)",
    "சிம்மம் (Simmam)",
    "கன்னி (Kanni)",
    "துலாம் (Thulaam)",
    "விருச்சிகம் (Viruchigam)",
    "தனுசு (Dhanusu)",
    "மகரம் (Magaram)",
    "கும்பம் (Kumbam)",
    "மீனம் (Meenam)"
]

const PLANET_OPTIONS = [
    "மேஷம் (Mesham)",
    "ரிஷபம் (Rishabam)",
    "மிதுனம் (Mithunam)",
    "கடகம் (Kadagam)",
    "சிம்மம் (Simmam)",
    "கன்னி (Kanni)",
    "துலாம் (Thulaam)",
    "விருச்சிகம் (Viruchigam)",
    "தனுசு (Dhanusu)",
    "மகரம் (Magaram)",
    "கும்பம் (Kumbam)",
    "மீனம் (Meenam)"
];

const NAKSHATRA_OPTIONS = [
    "அஸ்வினி (Ashwini)",
    "பரணி (Bharani)",
    "கிருத்திகை (Krittikai)",
    "ரோகிணி (Rohini)",
    "மிருகசீரிடம் (Mrigashiram)",
    "திருவாதிரை (Thiruvathirai)",
    "புனர்பூசம் (Punarvasu)",
    "பூசம் (Poosam)",
    "ஆயில்யம் (Aayilyam)",
    "மகம் (Magam)",
    "பூரம் (Pooradam)",
    "உத்திரம் (Uthiram)",
    "ஹஸ்தம் (Hastham)",
    "சித்திரை (Chithirai)",
    "சுவாதி (Swathi)",
    "விசாகம் (Visagam)",
    "அனுஷம் (Anusham)",
    "கேட்டை (Kettai)",
    "மூலம் (Moolam)",
    "பூராடம் (Pooradam)",
    "உத்திராடம் (Uthiradam)",
    "திருவோணம் (Thiruvonam)",
    "அவிட்டம் (Avittam)",
    "சதயம் (Sathayam)",
    "பூரட்டாதி (Poorattathi)",
    "உத்திரட்டாதி (Uthirattathi)",
    "ரேவதி (Revathi)"
];

const BIRTHDASA = [
    "சூரியன் (Sun)",
    "சந்திரன் (Moon)",
    "செவ்வாய் (Mars)",
    "புதன் (Mercury)",
    "வியாழன்/குரு (Jupiter)",
    "வெள்ளி/சுக்கிரன் (Venus)",
    "சனி (Saturn)",
    "ராகு (Rahu)",
    "கேது (Kethu)"
]

export default function RegisterPage() {
  const [lang, setLang] = useState('en');

  const [form, setForm] = useState({
    name: '', email: '', password: '', gender: '', maritalStatus: '', registeredBy: '',
    physicalStatus: 'Normal', height: '', weight: '', color: '',
    caste: 'Kannada Devangar', subCaste: '', motherTongue: 'Kannadam', gothram: '',
    education: '', educationDetails: '', profession: '', professionDetails: '', incomeType: '', incomeAmount: '',
    country: 'India', state: 'Tamilnadu', district: '', city: '',
    contactNumber: '', whatsappNumber: '', address: '',
    fatherName: '', fatherOccupation: '', fatherSubCaste: '', fatherGothram: '',
    motherName: '', motherOccupation: '', motherSubCaste: '', motherGothram: '',
    numberOfBrothers: '', brothersMarried: '', numberOfSisters: '', sistersMarried: '',
    assetsDetails: '', expectations: '', pavunDetails: '',
    rasi: '', nakshatra: '', patham: '', lagnam: '', dhosam: '', 
    dobDate: '', dobMonth: '', dobYear: '', tobHour: '', tobMin: '', tobSession: 'AM', placeOfBirth: '', 
    birthDasa: '', dasaRemainingYear: '', dasaRemainingMonth: '', dasaRemainingDay: '',
    
    rasiChart: Array(12).fill(''),
    navamsamChart: Array(12).fill(''),
    
    agreeTerms: true
  });

  const [showPassword, setShowPassword] = useState(false);
  const [photoPreview, setPhotoPreview] = useState(null);

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleChartChange = (chartType, index, value) => {
    setForm(prev => {
      const newChart = [...prev[chartType]];
      newChart[index] = value;
      return { ...prev, [chartType]: newChart };
    });
  };

  const navigate = useNavigate();

  const handlePhotoUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPhotoPreview(URL.createObjectURL(file));
      // In a real app, you would also save the file object to form state here.
    }
  };

// ── Paste these maps at the top of your RegisterPage.jsx (outside the component) ──

const RASI_MAP = {
  "Mesham (Aries)": "Mesha",
  "Rishabam (Taurus)": "Rishabha",
  "Mithunam (Gemini)": "Mithuna",
  "Kadagam (Cancer)": "Karka",
  "Simmam (Leo)": "Simha",
  "Kanni (Virgo)": "Kanya",
  "Thulaam (Libra)": "Tula",
  "Viruchigam (Scorpio)": "Vrischika",
  "Dhanusu (Sagittarius)": "Dhanus",
  "Magaram (Capricorn)": "Makara",
  "Kumbam (Aquarius)": "Kumbha",
  "Meenam (Pisces)": "Meena",
};

const DASA_MAP = {
  "Surya Dasa": "Sun",
  "Chandra Dasa": "Moon",
  "Kuja Dasa": "Mars",
  "Rahu Dasa": "Rahu",
  "Guru Dasa": "Jupiter",
  "Sani Dasa": "Saturn",
  "Budha Dasa": "Mercury",
  "Ketu Dasa": "Ketu",
  "Sukra Dasa": "Venus",
};

const PLANET_MAP = {
  "லக்னம்/Lagnam": "Lagnam",
  "சூரியன்/Sun": "Sun",
  "சந்திரன்/Moon": "Moon",
  "சுக்கிரன்/Venus": "Venus",
  "சனி/Saturn": "Saturn",
  "குரு/Jupiter": "Jupiter",
  "ராகு/Raagu": "Rahu",
  "செவ்வாய்/Mars": "Mars",
  "புதன்/Mercury": "Mercury",
  "கேது/Kethu": "Ketu",
  "மாந்தி/Maanthi": "Maanthi",
};

// ── Replace your handleSubmit with this ──

const handleSubmit = (e) => {
  e.preventDefault();

  // ── helpers ──
  const pad = (n) => String(n).padStart(2, "0");

  const buildDob = () => {
    const { dobDate, dobMonth, dobYear } = form;
    if (!dobDate || !dobMonth || !dobYear) return null;
    return `${dobYear}-${pad(dobMonth)}-${pad(dobDate)}`;
  };

  const buildBirthTime = () => {
    const dob = buildDob();
    if (!dob) return null;
    let h = parseInt(form.tobHour) || 0;
    const m = parseInt(form.tobMin) || 0;
    if (form.tobSession === "PM" && h !== 12) h += 12;
    if (form.tobSession === "AM" && h === 12) h = 0;
    return `${dob}T${pad(h)}:${pad(m)}:00`;
  };

  const buildSiblings = () => {
    const siblings = [];
    const numBro = parseInt(form.numberOfBrothers) || 0;
    const marBro = parseInt(form.brothersMarried) || 0;
    for (let i = 0; i < numBro; i++) {
      siblings.push({ relation: "BROTHER", isMarried: i < marBro, gender: "MALE" });
    }
    const numSis = parseInt(form.numberOfSisters) || 0;
    const marSis = parseInt(form.sistersMarried) || 0;
    for (let i = 0; i < numSis; i++) {
      siblings.push({ relation: "SISTER", isMarried: i < marSis, gender: "FEMALE" });
    }
    return siblings;
  };

  const buildChart = (chartArr) =>
    chartArr.map((planet, i) => ({
      houseNo: i + 1,
      planet: PLANET_MAP[planet] || planet || "",
    }));

  // ── build final payload ──
  const payload = {
    username: form.name,
    password: form.password,

    userProfile: {
      fullName: form.name,
      dob: buildDob(),
      birthTime: buildBirthTime(),
      birthPlace: form.placeOfBirth,
      contactNumber: form.contactNumber,
      whatsappNumber: form.whatsappNumber,
      address: form.address,
    },

    familyDetails: [
      {
        relationType: "FATHER",
        name: form.fatherName,
        occupation: form.fatherOccupation,
        subCaste: form.fatherSubCaste,
        gothram: form.fatherGothram,
      },
      {
        relationType: "MOTHER",
        name: form.motherName,
        occupation: form.motherOccupation,
        subCaste: form.motherSubCaste,
        gothram: form.motherGothram,
      },
    ],

    siblings: buildSiblings(),

    educationDetails: [
      {
        degree: form.education,
        fieldOfStudy: form.educationDetails,
        institution: "",          // not collected in form — leave blank or add a field
      },
    ],

    workDetails: {
      companyName: form.professionDetails,
      designation: form.profession,
      salary:
        form.incomeType === "Monthly"
          ? (parseInt(form.incomeAmount) || 0) * 12
          : parseInt(form.incomeAmount) || 0,
      location: form.city || form.district,
      workMode: "HYBRID",         // not collected — default value
    },

    astroDetails: {
      rasi: RASI_MAP[form.rasi] || form.rasi,
      nakshatra: form.nakshatra,
      patham: form.patham,
      lagnam: RASI_MAP[form.lagnam] || form.lagnam,
      birthDasa: DASA_MAP[form.birthDasa] || form.birthDasa,
      dasaBalYear: parseInt(form.dasaRemainingYear) || 0,
      dasaBalMonth: parseInt(form.dasaRemainingMonth) || 0,
      dasaBalDay: parseInt(form.dasaRemainingDay) || 0,
    },

    rasiChart: buildChart(form.rasiChart),
    navamsamChart: buildChart(form.navamsamChart),

    userPreferences: {
      assetsDetails: form.assetsDetails,
      expectations: form.expectations,
      pavunDetails: form.pavunDetails,
    },
  };

  console.log("Payload:", JSON.stringify(payload, null, 2));

  // TODO: replace with your API call, e.g.:
  // await axios.post('/api/register', payload);

  alert("Registration submitted successfully!");
  navigate('/dashboard');
};

  const renderAstroGrid = (chartType, title) => {
    // Indices mapping to form a hollow 4x4 grid (12 outer boxes)
    // 0  1  2  3
    // 11    C   4
    // 10    C   5
    // 9  8  7  6
    const gridOrder = [0, 1, 2, 3, 11, null, null, 4, 10, null, null, 5, 9, 8, 7, 6];

    return (
      <div className="astro-chart-wrapper">
        <div className="astro-grid">
          {gridOrder.map((boxIndex, idx) => {
            if (boxIndex === null) {
              // We render a single center block instead of 4 hollow cells.
              if (idx === 5) {
                return <div key={idx} className="astro-center">{title}</div>;
              }
              return null; // Skip rendering separate cells for the center
            }
            return (
              <div key={idx} className="astro-box">
                <select 
                  className="form-select"
                  value={form[chartType][boxIndex]}
                  onChange={(e) => handleChartChange(chartType, boxIndex, e.target.value)}
                >
                  <option value="">Select</option>
                  {PLANET_OPTIONS.map(planet => (
                    <option key={planet} value={planet}>{planet}</option>
                  ))}
                </select>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-bg-dots"></div>

      <div className="auth-container register-container">
        {/* Top Header */}
        <div className="auth-top-bar">
          <button className="lang-toggle" onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}>
            {lang === 'en' ? 'தமிழ்' : 'English'}
          </button>
          <div className="help-text">Help Line <span className="help-number">9363358156</span></div>
        </div>

        <div className="auth-heading">
          <h1>Create Your Account</h1>
          <p className="auth-subtitle">Register yourself in our website to access thousands of profiles and find your life partner.</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>

          {/* ----- Basic Information ----- */}
          <div className="section-header">Basic Information</div>
          <div className="form-row-3">
            <div className="form-group">
              <label className="form-label">Name <span className="required">*</span></label>
              <div className="input-wrapper">
                <span className="input-icon">👤</span>
                <input type="text" className="form-input" placeholder="Enter your name" value={form.name} onChange={e => handleChange('name', e.target.value)} required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Email <span className="required">*</span></label>
              <div className="input-wrapper">
                <span className="input-icon">✉️</span>
                <input type="email" className="form-input" placeholder="" value={form.email} onChange={e => handleChange('email', e.target.value)} required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">New Password <span className="required">*</span></label>
              <div className="input-wrapper">
                <span className="input-icon">🔑</span>
                <input type={showPassword ? "text" : "password"} className="form-input" placeholder="New Password for login." value={form.password} onChange={e => handleChange('password', e.target.value)} required />
                <button type="button" className="eye-btn" onClick={() => setShowPassword(!showPassword)}>👁️</button>
              </div>
            </div>
          </div>
          
          <div className="form-row-3">
            <div className="form-group">
              <label className="form-label">Gender <span className="required">*</span></label>
              <div className="input-wrapper select-wrapper">
                <select className="form-input form-select" value={form.gender} onChange={e => handleChange('gender', e.target.value)} required>
                  <option value="">-- Select --</option>
                  {GENDERS.map(g => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Marital Status <span className="required">*</span></label>
              <div className="input-wrapper select-wrapper">
                <select className="form-input form-select" value={form.maritalStatus} onChange={e => handleChange('maritalStatus', e.target.value)} required>
                  <option value="">-- Select --</option>
                  {MARITAL_STATUS.map(ms => <option key={ms} value={ms}>{ms}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Registered By <span className="required">*</span></label>
              <div className="input-wrapper select-wrapper">
                <select className="form-input form-select" value={form.registeredBy} onChange={e => handleChange('registeredBy', e.target.value)} required>
                  <option value="">-- Select --</option>
                  {REGISTERED_BY.map(rb => <option key={rb} value={rb}>{rb}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* ----- Personal Details ----- */}
          <div className="section-header">Personal Details</div>
          <div className="form-row-4">
            <div className="form-group">
              <label className="form-label">Physical Status <span className="required">*</span></label>
              <div className="input-wrapper select-wrapper highlight-green">
                <select className="form-input form-select" value={form.physicalStatus} onChange={e => handleChange('physicalStatus', e.target.value)} required>
                  {PHYSICAL_STATUS.map(ps => <option key={ps} value={ps}>{ps}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Height <span className="required">*</span></label>
              <div className="input-wrapper select-wrapper">
                <span className="input-icon">#</span>
                <select className="form-input form-select" value={form.height} onChange={e => handleChange('height', e.target.value)} required>
                  <option value="">-- Select --</option>
                   {HIGHT.map(h => <option key={h} value={h}>{h}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Weight <span className="required">*</span></label>
              <div className="input-wrapper select-wrapper">
                <span className="input-icon">#</span>
                <select className="form-input form-select" value={form.weight} onChange={e => handleChange('weight', e.target.value)} required>
                  <option value="">-- Select --</option>
                   {WEIGHT.map(w => <option key={w} value={w}>{w}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Color <span className="required">*</span></label>
              <div className="input-wrapper select-wrapper">
                <select className="form-input form-select" value={form.color} onChange={e => handleChange('color', e.target.value)} required>
                  <option value="">-- Select --</option>
                  {COLOR.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* ----- Religious & Social Background ----- */}
          <div className="section-header">Religious & Social Background</div>
          <div className="form-row-4">
            <div className="form-group">
              <label className="form-label">Caste <span className="required">*</span></label>
              <div className="input-wrapper select-wrapper highlight-green">
                <select className="form-input form-select" value={form.caste} onChange={e => handleChange('caste', e.target.value)} required>
                  {COMMUNITIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Sub-Caste <span className="required">*</span></label>
              <div className="input-wrapper select-wrapper">
                <select className="form-input form-select" value={form.subCaste} onChange={e => handleChange('subCaste', e.target.value)} required>
                  <option value="">-- Select --</option>
                  {SUB_CASTES.map(sc => <option key={sc} value={sc}>{sc}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Mother Tongue <span className="required">*</span></label>
              <div className="input-wrapper select-wrapper">
                <select className="form-input form-select" value={form.motherTongue} onChange={e => handleChange('motherTongue', e.target.value)} required>
                  {MOTHER_TONGUES.map(mt => <option key={mt} value={mt}>{mt}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Gothram</label>
              <div className="input-wrapper">
                <span className="input-icon">⌨️</span>
                <input type="text" className="form-input" value={form.gothram} onChange={e => handleChange('gothram', e.target.value)} />
              </div>
            </div>
          </div>

          {/* ----- Education & Career ----- */}
          <div className="section-header">Education & Career</div>
          <div className="form-row-4">
            <div className="form-group">
              <label className="form-label">Education <span className="required">*</span></label>
              <div className="input-wrapper select-wrapper">
                <span className="input-icon">🎓</span>
                <select className="form-input form-select" value={form.education} onChange={e => handleChange('education', e.target.value)} required>
                  <option value="">-- Select --</option>
                   {EDUCATION.map(e => <option key={e} value={e}>{e}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Education Details <span className="required">*</span></label>
              <div className="input-wrapper">
                <span className="input-icon">🎓</span>
                <input type="text" className="form-input" value={form.educationDetails} onChange={e => handleChange('educationDetails', e.target.value)} required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Profession/Job <span className="required">*</span></label>
              <div className="input-wrapper select-wrapper">
                <select className="form-input form-select" value={form.job} onChange={e => handleChange('job', e.target.value)} required>
                  <option value="">-- Select --</option>
                   {JOB.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Profession/Job Details <span className="required">*</span></label>
              <div className="input-wrapper">
                <span className="input-icon">✏️</span>
                <input type="text" className="form-input" value={form.professionDetails} onChange={e => handleChange('professionDetails', e.target.value)} required />
              </div>
            </div>
          </div>
          <div className="form-row-2">
            <div className="form-group">
              <label className="form-label">Income - Monthly / Yearly <span className="required">*</span></label>
              <div className="input-wrapper select-wrapper">
                <span className="input-icon">📅</span>
                <select className="form-input form-select" value={form.incomeType} onChange={e => handleChange('incomeType', e.target.value)} required>
                  <option value="">-- Select --</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Amount <span className="required">*</span></label>
              <div className="input-wrapper">
                <span className="input-icon">💵</span>
                <input type="number" className="form-input" value={form.incomeAmount} onChange={e => handleChange('incomeAmount', e.target.value)} required />
              </div>
            </div>
          </div>

          {/* ----- Location ----- */}
          <div className="section-header">Location</div>
          <div className="form-row-4">
            <div className="form-group">
              <label className="form-label">Country <span className="required">*</span></label>
              <div className="input-wrapper select-wrapper highlight-green">
                <span className="input-icon">🌍</span>
                <select className="form-input form-select" value={form.country} onChange={e => handleChange('country', e.target.value)} required>
                  <option value="India">India</option>
                  <option value="Other">Other</option>

                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">State <span className="required">*</span></label>
              <div className="input-wrapper select-wrapper">
                <span className="input-icon">📍</span>
                <select className="form-input form-select" value={form.state} onChange={e => handleChange('state', e.target.value)} required>
                  <option value="Tamilnadu">Tamilnadu</option>
                  <option value="Karnataka">Others</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">District <span className="required">*</span></label>
              <div className="input-wrapper select-wrapper">
                <span className="input-icon">📍</span>
                <select className="form-input form-select" value={form.district} onChange={e => handleChange('district', e.target.value)} required>
                  <option value="">-- Select --</option>
                  {DISTRICT.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">City <span className="required">*</span></label>
              <div className="input-wrapper">
                <span className="input-icon">📍</span>
                <input type="text" className="form-input" value={form.city} onChange={e => handleChange('city', e.target.value)} required />
              </div>
            </div>
          </div>

          {/* ----- Contact Details ----- */}
          <div className="section-header">Contact Details</div>
          <div className="form-row-3">
            <div className="form-group">
              <label className="form-label">Contact Number <span className="required">*</span></label>
              <div className="input-wrapper">
                <span className="input-icon">📞</span>
                <input type="tel" className="form-input" value={form.contactNumber} onChange={e => handleChange('contactNumber', e.target.value)} required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Whatsapp Number <span className="required">*</span></label>
              <div className="input-wrapper">
                <span className="input-icon">💬</span>
                <input type="tel" className="form-input" value={form.whatsappNumber} onChange={e => handleChange('whatsappNumber', e.target.value)} required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Address <span className="required">*</span></label>
              <div className="input-wrapper">
                <input type="text" className="form-input" value={form.address} onChange={e => handleChange('address', e.target.value)} required />
              </div>
            </div>
          </div>

          {/* ----- Family Details ----- */}
          <div className="section-header">Family Details</div>
          <div className="form-row-4">
            <div className="form-group">
              <label className="form-label">Father Name <span className="required">*</span></label>
              <div className="input-wrapper"><span className="input-icon">👤</span><input type="text" className="form-input" value={form.fatherName} onChange={e => handleChange('fatherName', e.target.value)} required /></div>
            </div>
            <div className="form-group">
              <label className="form-label">Father Occupation <span className="required">*</span></label>
              <div className="input-wrapper"><span className="input-icon">💼</span><input type="text" className="form-input" value={form.fatherOccupation} onChange={e => handleChange('fatherOccupation', e.target.value)} required /></div>
            </div>
            <div className="form-group">
              <label className="form-label">Father Sub-Caste <span className="required">*</span></label>
              <div className="input-wrapper select-wrapper">
                <select className="form-input form-select" value={form.fatherSubCaste} onChange={e => handleChange('fatherSubCaste', e.target.value)} required>
                  <option value="">-- Select --</option>
                  {SUB_CASTES.map(sc => <option key={sc} value={sc}>{sc}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Father Gothram</label>
              <div className="input-wrapper"><span className="input-icon">⌨️</span><input type="text" className="form-input" value={form.fatherGothram} onChange={e => handleChange('fatherGothram', e.target.value)} /></div>
            </div>

            <div className="form-group">
              <label className="form-label">Mother Name <span className="required">*</span></label>
              <div className="input-wrapper"><span className="input-icon">👤</span><input type="text" className="form-input" value={form.motherName} onChange={e => handleChange('motherName', e.target.value)} required /></div>
            </div>
            <div className="form-group">
              <label className="form-label">Mother Occupation <span className="required">*</span></label>
              <div className="input-wrapper"><span className="input-icon">💼</span><input type="text" className="form-input" value={form.motherOccupation} onChange={e => handleChange('motherOccupation', e.target.value)} required /></div>
            </div>
            <div className="form-group">
              <label className="form-label">Mother Sub-Caste <span className="required">*</span></label>
              <div className="input-wrapper select-wrapper">
                <select className="form-input form-select" value={form.motherSubCaste} onChange={e => handleChange('motherSubCaste', e.target.value)} required>
                  <option value="">-- Select --</option>
                  {SUB_CASTES.map(sc => <option key={sc} value={sc}>{sc}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Mother Gothram</label>
              <div className="input-wrapper"><span className="input-icon">⌨️</span><input type="text" className="form-input" value={form.motherGothram} onChange={e => handleChange('motherGothram', e.target.value)} /></div>
            </div>

            <div className="form-group">
              <label className="form-label">Number of Brothers <span className="required">*</span></label>
              <div className="input-wrapper select-wrapper">
                <span className="input-icon">#</span>
                <select className="form-input form-select" value={form.numberOfBrothers} onChange={e => handleChange('numberOfBrothers', e.target.value)} required>
                  <option value="">-- Select --</option>
                  {[0,1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Married <span className="required">*</span></label>
              <div className="input-wrapper select-wrapper">
                <span className="input-icon">#</span>
                <select className="form-input form-select" value={form.brothersMarried} onChange={e => handleChange('brothersMarried', e.target.value)} required>
                  <option value="">-- Select --</option>
                  {[0,1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Number of Sisters <span className="required">*</span></label>
              <div className="input-wrapper select-wrapper">
                <span className="input-icon">#</span>
                <select className="form-input form-select" value={form.numberOfSisters} onChange={e => handleChange('numberOfSisters', e.target.value)} required>
                  <option value="">-- Select --</option>
                  {[0,1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Married <span className="required">*</span></label>
              <div className="input-wrapper select-wrapper">
                <span className="input-icon">#</span>
                <select className="form-input form-select" value={form.sistersMarried} onChange={e => handleChange('sistersMarried', e.target.value)} required>
                  <option value="">-- Select --</option>
                  {[0,1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* ----- Assets, Expectation and Pavun Details ----- */}
          <div className="section-header">Assets, Expectation and Pavun Details</div>
          <div className="form-row-3">
            <div className="form-group">
              <label className="form-label">Assets Details <span className="required">*</span></label>
              <div className="input-wrapper"><input type="text" className="form-input" value={form.assetsDetails} onChange={e => handleChange('assetsDetails', e.target.value)} required /></div>
            </div>
            <div className="form-group">
              <label className="form-label">Expectations <span className="required">*</span></label>
              <div className="input-wrapper"><input type="text" className="form-input" value={form.expectations} onChange={e => handleChange('expectations', e.target.value)} required /></div>
            </div>
            <div className="form-group">
              <label className="form-label">Pavun Details <span className="required">*</span></label>
              <div className="input-wrapper"><input type="text" className="form-input" value={form.pavunDetails} onChange={e => handleChange('pavunDetails', e.target.value)} required /></div>
            </div>
          </div>

          {/* ----- Astro Details ----- */}
          <div className="section-header">Astro Details</div>
          <div className="form-row-4">
            <div className="form-group">
              <label className="form-label">Rasi <span className="required">*</span></label>
              <div className="input-wrapper select-wrapper">
                <select className="form-input form-select" value={form.rasi} onChange={e => handleChange('rasi', e.target.value)} required>
                  <option value="">-- Select --</option>
                  {RASI_OPTIONS.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Nakshatra <span className="required">*</span></label>
              <div className="input-wrapper select-wrapper">
                <select className="form-input form-select" value={form.nakshatra} onChange={e => handleChange('nakshatra', e.target.value)} required>
                  <option value="">-- Select --</option>
                 {NAKSHATRA_OPTIONS.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Patham</label>
              <div className="input-wrapper select-wrapper">
                <select className="form-input form-select" value={form.patham} onChange={e => handleChange('patham', e.target.value)}>
                  <option value="">-- Select --</option>
                  {[1,2,3,4].map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Lagnam</label>
              <div className="input-wrapper select-wrapper">
                <select className="form-input form-select" value={form.lagnam} onChange={e => handleChange('lagnam', e.target.value)}>
                  <option value="">-- Select --</option>
                  {RASI_OPTIONS.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Dhosam <span className="required">*</span></label>
              <div className="input-wrapper select-wrapper">
                <select className="form-input form-select" value={form.dhosam} onChange={e => handleChange('dhosam', e.target.value)} required>
                  <option value="">-- Select --</option>
                  {DHOSAM.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group" style={{ gridColumn: "span 2" }}>
              <label className="form-label">Date of Birth <span className="required">*</span></label>
              <div className="date-grid">
                <div className="input-wrapper select-wrapper"><select className="form-input form-select" value={form.dobDate} onChange={e => handleChange('dobDate', e.target.value)}><option value="">Date</option>{[...Array(31)].map((_,i) => <option key={i+1} value={i+1}>{i+1}</option>)}</select></div>
                <div className="input-wrapper select-wrapper"><select className="form-input form-select" value={form.dobMonth} onChange={e => handleChange('dobMonth', e.target.value)}><option value="">Month</option>{[...Array(12)].map((_,i) => <option key={i+1} value={i+1}>{i+1}</option>)}</select></div>
                <div className="input-wrapper select-wrapper"><select className="form-input form-select" value={form.dobYear} onChange={e => handleChange('dobYear', e.target.value)}><option value="">Year</option>{[...Array(50)].map((_,i) => <option key={1980+i} value={1980+i}>{1980+i}</option>)}</select></div>
              </div>
            </div>
            <div className="form-group" style={{ gridColumn: "span 2" }}>
              <label className="form-label">Time of Birth <span className="required">*</span></label>
              <div className="date-grid">
                <div className="input-wrapper select-wrapper"><select className="form-input form-select" value={form.tobHour} onChange={e => handleChange('tobHour', e.target.value)}><option value="">Hour</option>{[...Array(12)].map((_,i) => <option key={i+1} value={i+1}>{i+1}</option>)}</select></div>
                <div className="input-wrapper select-wrapper"><select className="form-input form-select" value={form.tobMin} onChange={e => handleChange('tobMin', e.target.value)}><option value="">Min</option>{[...Array(60)].map((_,i) => <option key={i} value={i}>{i}</option>)}</select></div>
                <div className="input-wrapper select-wrapper"><select className="form-input form-select" value={form.tobSession} onChange={e => handleChange('tobSession', e.target.value)}><option value="AM">AM</option><option value="PM">PM</option></select></div>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Place of Birth <span className="required">*</span></label>
              <div className="input-wrapper"><span className="input-icon">📍</span><input type="text" className="form-input" value={form.placeOfBirth} onChange={e => handleChange('placeOfBirth', e.target.value)} required /></div>
            </div>

            <div className="form-group">
              <label className="form-label">Birth Dasa</label>
              <div className="input-wrapper select-wrapper">
                <select className="form-input form-select" value={form.birthDasa} onChange={e => handleChange('birthDasa', e.target.value)}>
                  <option value="">-- Select --</option>
                  {BIRTHDASA.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group" style={{ gridColumn: "span 2" }}>
              <label className="form-label">Dasa Remaining</label>
              <div className="date-grid">
                <div className="input-wrapper select-wrapper"><select className="form-input form-select" value={form.dasaRemainingYear} onChange={e => handleChange('dasaRemainingYear', e.target.value)}><option value="">Year</option>{[...Array(20)].map((_,i) => <option key={i} value={i}>{i}</option>)}</select></div>
                <div className="input-wrapper select-wrapper"><select className="form-input form-select" value={form.dasaRemainingMonth} onChange={e => handleChange('dasaRemainingMonth', e.target.value)}><option value="">Month</option>{[...Array(12)].map((_,i) => <option key={i} value={i}>{i}</option>)}</select></div>
                <div className="input-wrapper select-wrapper"><select className="form-input form-select" value={form.dasaRemainingDay} onChange={e => handleChange('dasaRemainingDay', e.target.value)}><option value="">Day</option>{[...Array(31)].map((_,i) => <option key={i} value={i}>{i}</option>)}</select></div>
              </div>
            </div>
          </div>

          {/* ----- Astro Charts (Rasi & Navamsam) ----- */}
          <div className="astro-charts-container">
            {renderAstroGrid('rasiChart', 'Rasi')}
            {renderAstroGrid('navamsamChart', 'Navamsam')}
            
            {/* ----- Photo Upload Section inside charts container due to flex layout visually ----- */}
            <div className="photo-upload-section">
              <label className="form-label">Upload your Photo <span className="required">*</span></label>
              <div className="photo-placeholder-box">
                {photoPreview ? (
                  <img src={photoPreview} alt="Preview" />
                ) : (
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="#d1d5db"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                )}
              </div>
              <div className="upload-btn-wrapper">
                <button type="button" className="upload-btn">Upload your Photo</button>
                <input type="file" accept="image/jpeg, image/png, image/jpg" onChange={handlePhotoUpload} required />
              </div>
              <span style={{fontSize: '11px', color: '#71717a'}}>Only jpeg, jpg, png files less than 2 MB are allowed.</span>
            </div>
          </div>

          {/* Terms and Submit */}
          <label className="terms-check-label">
            <input type="checkbox" checked={form.agreeTerms} onChange={e => handleChange('agreeTerms', e.target.checked)} required />
            <span>By signing up you agree to our <Link to="/terms" className="terms-link">terms and conditions.</Link></span>
          </label>

          <button type="submit" className="auth-btn-primary">
            Register 📝
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <br/>
          <Link to="/login" className="auth-link">Login to your account</Link>
        </p>

      </div>
    </div>
  );
}
