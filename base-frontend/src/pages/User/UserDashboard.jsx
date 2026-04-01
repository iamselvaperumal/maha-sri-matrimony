import { useState, useEffect } from "react";

/* ─── MOCK DATA ──────────────────────────────────────────────────────────── */
const USER = {
  name: "Kavitha Subramaniam",
  age: 27,
  location: "Chennai, Tamil Nadu",
  education: "M.Tech – IIT Madras",
  profession: "Software Engineer",
  avatar: "https://i.pravatar.cc/150?img=47",
  profileCompletion: 72,
  plan: "Premium",
};

const STATS = [
  { label: "Total Matches",  value: 124, delta: "+12 this week",  icon: "💑", color: "#FF2D6B", bg: "rgba(255,45,107,0.08)"  },
  { label: "Interests Sent", value: 38,  delta: "+5 this week",   icon: "💌", color: "#9333ea", bg: "rgba(147,51,234,0.08)"  },
  { label: "Profile Views",  value: 312, delta: "+28 this week",  icon: "👁",  color: "#16a34a", bg: "rgba(22,163,74,0.08)"   },
  { label: "Shortlisted",    value: 17,  delta: "★ 3 new",        icon: "⭐", color: "#d97706", bg: "rgba(217,119,6,0.08)"   },
];

const MATCHES = [
  { id:1, name:"Arjun Krishnamurthy", age:30, loc:"Coimbatore", edu:"MBA – IIM Bangalore",    job:"Business Analyst",  compat:94, avatar:"https://i.pravatar.cc/150?img=12" },
  { id:2, name:"Vikram Annamalai",    age:31, loc:"Madurai",     edu:"B.E – Anna University", job:"Civil Engineer",     compat:88, avatar:"https://i.pravatar.cc/150?img=15" },
  { id:3, name:"Surya Balakrishnan",  age:29, loc:"Trichy",      edu:"M.Sc – Madras Univ",   job:"Data Scientist",     compat:85, avatar:"https://i.pravatar.cc/150?img=20" },
];

const INTERESTS = [
  { id:1, name:"Murugan Palani",   age:30, loc:"Chennai",    avatar:"https://i.pravatar.cc/150?img=11", when:"2 hours ago",  edu:"B.E – Anna Univ",    job:"Mechanical Eng" },
  { id:2, name:"Senthil Kumar",    age:28, loc:"Coimbatore", avatar:"https://i.pravatar.cc/150?img=22", when:"Yesterday",    edu:"MCA – Bharathiar",   job:"Software Dev"   },
  { id:3, name:"Bala Subramanian", age:34, loc:"Madurai",    avatar:"https://i.pravatar.cc/150?img=44", when:"3 days ago",   edu:"B.Sc – Madras Univ", job:"Bank Manager"   },
];

const ACTIVITY = [
  { id:1, msg:"Arjun Krishnamurthy viewed your profile",  time:"10 min ago",  icon:"👁",  color:"#FF2D6B" },
  { id:2, msg:"Murugan Palani sent you an interest",      time:"2 hours ago", icon:"💌",  color:"#9333ea" },
  { id:3, msg:"New match found – Surya Balakrishnan",     time:"9:00 AM",     icon:"💑",  color:"#16a34a" },
  { id:4, msg:"Karthik Muthusamy viewed your profile",    time:"Yesterday",   icon:"👁",  color:"#d97706" },
  { id:5, msg:"Vikram Annamalai shortlisted your profile",time:"2 days ago",  icon:"⭐",  color:"#0ea5e9" },
];

const NAV = [
  { id:"dashboard",   label:"Dashboard",      icon:"▦" },
  { id:"profile",     label:"My Profile",     icon:"◉" },
  { id:"search",      label:"Search Matches", icon:"⌕" },
  { id:"interests",   label:"Interests",      icon:"♥" },
  { id:"messages",    label:"Messages",       icon:"✉" },
  { id:"shortlisted", label:"Shortlisted",    icon:"★" },
  { id:"settings",    label:"Settings",       icon:"⚙" },
];

/* ─── STYLES ─────────────────────────────────────────────────────────────── */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --rose:      #FF2D6B;
  --rose-lt:   #FF758C;
  --rose-g:    linear-gradient(135deg, #FF758C 0%, #FF2D6B 100%);
  --gold:      #ebb148;
  --bg:        #F5F4F2;
  --white:     #FFFFFF;
  --border:    rgba(0,0,0,0.07);
  --t1:        #111111;
  --t2:        #4A4A52;
  --t3:        #8A8A95;
  --sidebar-w: 280px;
  --topbar-h:  72px;
  --sh:        0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.05);
  --sh-hover:  0 4px 8px rgba(0,0,0,0.05), 0 12px 32px rgba(255,45,107,0.12);
  --r:         18px;
  --font:      'Inter', sans-serif;
  --font-d:    'Outfit', sans-serif;
}

html, body { font-family: var(--font); background: var(--bg); color: var(--t1); }
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-thumb { background: rgba(255,45,107,0.18); border-radius: 4px; }

/* ── Shell ── */
.D { display: flex; min-height: 100vh; }

/* ── Sidebar ── */
.D-sb {
  width: var(--sidebar-w);
  min-height: 100vh; height: 100vh;
  position: sticky; top: 0; flex-shrink: 0;
  background: var(--white);
  border-right: 1px solid var(--border);
  display: flex; flex-direction: column;
  overflow-y: auto; z-index: 60;
}
.D-sb-logo {
  padding: 32px 24px 24px;
  border-bottom: 1px solid var(--border);
  display: flex; align-items: center; gap: 14px;
}
.D-sb-logo-mark {
  width: 48px; height: 48px; border-radius: 16px;
  background: var(--rose-g); flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 24px;
  box-shadow: 0 6px 18px rgba(255,45,107,0.3);
}
.D-sb-brand { font-family: var(--font-d); font-size: 20px; font-weight: 800; background: var(--rose-g); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1.1; }
.D-sb-tag { font-size: 10px; font-weight: 700; color: var(--gold); letter-spacing: 1.8px; text-transform: uppercase; margin-top: 2px; }

.D-sb-me {
  padding: 20px 22px;
  border-bottom: 1px solid var(--border);
  display: flex; align-items: center; gap: 14px;
  background: rgba(255,45,107,0.022);
}
.D-sb-me-ava {
  width: 48px; height: 48px; border-radius: 50%;
  background: var(--rose-g); padding: 2.5px; flex-shrink: 0;
}
.D-sb-me-ava img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; border: 2.5px solid var(--white); }
.D-sb-me-name { font-size: 14px; font-weight: 700; color: var(--t1); }
.D-sb-me-tag { font-size: 12px; color: var(--t3); margin-top: 2px; }
.D-pro-badge {
  margin-left: auto; flex-shrink: 0;
  background: linear-gradient(135deg, var(--gold), #f59e0b);
  color: #fff; font-size: 10px; font-weight: 800;
  padding: 3px 10px; border-radius: 100px; letter-spacing: 0.8px;
}

.D-sb-nav-title {
  padding: 20px 24px 8px;
  font-size: 10px; font-weight: 700; color: var(--t3);
  letter-spacing: 2px; text-transform: uppercase;
}
.D-sb-nav-item {
  display: flex; align-items: center; gap: 14px;
  padding: 13px 14px; margin: 2px 12px;
  border-radius: 12px; cursor: pointer;
  color: var(--t2); font-size: 14px; font-weight: 500;
  transition: all 0.18s ease; user-select: none; position: relative;
}
.D-sb-nav-item:hover { background: rgba(255,45,107,0.07); color: var(--rose); }
.D-sb-nav-item.on {
  background: linear-gradient(135deg, rgba(255,45,107,0.1), rgba(255,117,140,0.06));
  color: var(--rose); font-weight: 700;
  box-shadow: 0 2px 10px rgba(255,45,107,0.1);
}
.D-sb-nav-item.on::before {
  content: ''; position: absolute; left: 0; top: 50%; transform: translateY(-50%);
  width: 3px; height: 60%; background: var(--rose-g); border-radius: 0 3px 3px 0;
}
.D-sb-nav-ico { width: 22px; text-align: center; font-size: 17px; flex-shrink: 0; }

.D-sb-footer {
  margin: auto 16px 20px;
  border-radius: 16px; padding: 22px 20px;
  background: linear-gradient(135deg, #fff0f4, #fffdf0);
  border: 1px solid rgba(255,45,107,0.14);
}
.D-sb-footer h4 { font-family: var(--font-d); font-size: 14px; font-weight: 800; color: var(--t1); margin-bottom: 6px; }
.D-sb-footer p  { font-size: 12.5px; color: var(--t2); line-height: 1.6; margin-bottom: 16px; }

/* ── Main area ── */
.D-main { flex: 1; display: flex; flex-direction: column; min-width: 0; }

/* ── Topbar ── */
.D-top {
  height: var(--topbar-h);
  background: rgba(255,255,255,0.94);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--border);
  padding: 0 40px;
  display: flex; align-items: center; gap: 16px;
  position: sticky; top: 0; z-index: 50;
}
.D-top-search {
  flex: 1; max-width: 380px;
  display: flex; align-items: center; gap: 10px;
  background: var(--bg); border: 1.5px solid rgba(0,0,0,0.08);
  border-radius: 14px; padding: 12px 18px;
  transition: all 0.2s;
}
.D-top-search:focus-within { background: var(--white); border-color: var(--rose); box-shadow: 0 0 0 3px rgba(255,45,107,0.1); }
.D-top-search input { flex: 1; border: none; background: transparent; outline: none; font-size: 14px; color: var(--t1); font-family: var(--font); }
.D-top-search input::placeholder { color: var(--t3); }
.D-top-right { margin-left: auto; display: flex; align-items: center; gap: 12px; }
.D-top-ico {
  width: 44px; height: 44px; border-radius: 12px;
  background: var(--white); border: 1.5px solid rgba(0,0,0,0.08);
  display: flex; align-items: center; justify-content: center;
  font-size: 18px; cursor: pointer; position: relative;
  transition: all 0.18s; box-shadow: var(--sh);
}
.D-top-ico:hover { border-color: rgba(255,45,107,0.3); color: var(--rose); }
.D-dot { position: absolute; top: 9px; right: 9px; width: 7px; height: 7px; background: var(--rose); border-radius: 50%; border: 2px solid var(--white); animation: blink 2s infinite; }
@keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0.3;} }
.D-top-avatar {
  display: flex; align-items: center; gap: 10px;
  background: var(--white); border: 1.5px solid rgba(0,0,0,0.08);
  border-radius: 50px; padding: 6px 16px 6px 6px;
  cursor: pointer; box-shadow: var(--sh); transition: all 0.18s;
}
.D-top-avatar:hover { border-color: rgba(255,45,107,0.28); }
.D-top-avatar img { width: 34px; height: 34px; border-radius: 50%; object-fit: cover; }
.D-top-avatar-info span:first-child { display: block; font-size: 13.5px; font-weight: 700; color: var(--t1); }
.D-top-avatar-info span:last-child  { display: block; font-size: 11px; color: var(--t3); }

/* ── Scroll area ── */
.D-body { flex: 1; overflow-y: auto; padding: 40px 44px 60px; }

/* ── Page title row ── */
.D-page-title { font-family: var(--font-d); font-size: 28px; font-weight: 800; color: var(--t1); margin-bottom: 4px; }
.D-page-sub   { font-size: 15px; color: var(--t3); margin-bottom: 36px; }

/* ── Hero banner ── */
.D-hero {
  border-radius: 24px; padding: 44px 48px;
  background: linear-gradient(125deg, #fff2f5 0%, #fffdf0 60%, #fff9f5 100%);
  border: 1px solid rgba(255,45,107,0.13);
  box-shadow: 0 8px 40px rgba(255,45,107,0.09);
  margin-bottom: 32px;
  display: grid; grid-template-columns: 1fr auto; gap: 32px; align-items: center;
  position: relative; overflow: hidden;
  animation: fadeUp 0.5s ease forwards;
}
.D-hero::before {
  content: ''; position: absolute; top: -100px; right: -80px;
  width: 360px; height: 360px; border-radius: 50%; pointer-events: none;
  background: radial-gradient(circle, rgba(255,117,140,0.16) 0%, transparent 70%);
}
.D-hero::after {
  content: ''; position: absolute; bottom: -100px; left: 35%;
  width: 300px; height: 300px; border-radius: 50%; pointer-events: none;
  background: radial-gradient(circle, rgba(235,177,72,0.1) 0%, transparent 70%);
}
.D-hero-left { position: relative; z-index: 1; }
.D-hero-greeting { font-size: 14px; color: var(--t3); font-weight: 500; margin-bottom: 8px; }
.D-hero-name {
  font-family: var(--font-d); font-size: 36px; font-weight: 900;
  color: var(--t1); margin-bottom: 10px; line-height: 1.1;
}
.D-hero-name span { background: var(--rose-g); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.D-hero-desc { font-size: 15px; color: var(--t2); line-height: 1.75; max-width: 520px; margin-bottom: 28px; }
.D-hero-desc strong { color: var(--rose); font-weight: 700; }
.D-hero-btns { display: flex; gap: 12px; align-items: center; }

.D-prog-label { display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; color: var(--t2); margin-bottom: 8px; }
.D-prog-label strong { color: var(--rose); }
.D-prog-track { background: rgba(255,45,107,0.1); border-radius: 100px; height: 8px; overflow: hidden; }
.D-prog-fill {
  height: 100%; border-radius: 100px; background: var(--rose-g);
  transition: width 1.4s cubic-bezier(.4,0,.2,1); position: relative; overflow: hidden;
}
.D-prog-fill::after {
  content: ''; position: absolute; top: 0; left: -60%; width: 50%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent);
  animation: shimmer 2.5s infinite;
}
@keyframes shimmer { to { left: 150%; } }

.D-hero-right { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; gap: 12px; flex-shrink: 0; }
.D-hero-ava-ring { width: 96px; height: 96px; border-radius: 50%; padding: 3px; background: linear-gradient(135deg, var(--rose), var(--gold)); position: relative; }
.D-hero-ava-ring img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; border: 3px solid var(--white); }
.D-hero-ava-online { position: absolute; bottom: 4px; right: 4px; width: 14px; height: 14px; background: #22c55e; border-radius: 50%; border: 2.5px solid var(--white); }

/* ── Stat cards ── */
.D-stats {
  display: grid; grid-template-columns: repeat(4,1fr); gap: 20px;
  margin-bottom: 36px;
  animation: fadeUp 0.5s ease 0.1s forwards; opacity: 0;
}
.D-stat {
  background: var(--white); border-radius: var(--r);
  border: 1px solid var(--border); padding: 28px 26px;
  box-shadow: var(--sh); transition: transform 0.22s, box-shadow 0.22s;
  position: relative; overflow: hidden;
}
.D-stat:hover { transform: translateY(-4px); box-shadow: var(--sh-hover); }
.D-stat-glow { position: absolute; top: -30px; right: -30px; width: 110px; height: 110px; border-radius: 50%; opacity: 0.09; }
.D-stat-ico-wrap { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 18px; }
.D-stat-num { font-family: var(--font-d); font-size: 42px; font-weight: 900; line-height: 1; margin-bottom: 6px; }
.D-stat-lbl { font-size: 14px; font-weight: 500; color: var(--t2); margin-bottom: 10px; }
.D-stat-delta { font-size: 12px; font-weight: 600; display: inline-flex; align-items: center; gap: 4px; padding: 3px 12px; border-radius: 100px; }

/* ── Section title ── */
.D-sec { margin-bottom: 20px; }
.D-sec-title { font-family: var(--font-d); font-size: 24px; font-weight: 800; color: var(--t1); }
.D-sec-sub   { font-size: 13.5px; color: var(--t3); margin-top: 4px; }

/* ── Buttons ── */
.Btn {
  display: inline-flex; align-items: center; gap: 6px;
  border: none; border-radius: 50px; font-family: var(--font-d);
  font-weight: 700; cursor: pointer; transition: all 0.2s;
}
.Btn-rose { background: var(--rose-g); color: #fff; padding: 13px 28px; font-size: 14px; box-shadow: 0 4px 18px rgba(255,45,107,0.3); }
.Btn-rose:hover { transform: translateY(-2px); box-shadow: 0 8px 26px rgba(255,45,107,0.42); }
.Btn-outline { background: var(--white); color: var(--t1); border: 1.5px solid rgba(0,0,0,0.1) !important; padding: 12px 26px; font-size: 14px; box-shadow: var(--sh); }
.Btn-outline:hover { border-color: rgba(255,45,107,0.3) !important; color: var(--rose); }
.Btn-sm { padding: 9px 20px !important; font-size: 13px !important; }
.Btn-xs { padding: 7px 16px !important; font-size: 12px !important; }

/* ── Two-column layout ── */
.D-cols { display: grid; grid-template-columns: 1fr 360px; gap: 28px; animation: fadeUp 0.5s ease 0.2s forwards; opacity: 0; }

/* ── Match cards ── */
.D-matches { display: flex; flex-direction: column; gap: 16px; margin-bottom: 32px; }
.D-match-card {
  background: var(--white); border-radius: var(--r);
  border: 1px solid var(--border); box-shadow: var(--sh);
  display: flex; gap: 0; overflow: hidden;
  transition: transform 0.22s, box-shadow 0.22s;
}
.D-match-card:hover { transform: translateY(-3px); box-shadow: var(--sh-hover); }
.D-match-photo { width: 110px; height: 130px; flex-shrink: 0; position: relative; }
.D-match-photo img { width: 100%; height: 100%; object-fit: cover; }
.D-match-photo-over { position: absolute; inset: 0; background: linear-gradient(to right, transparent 60%, rgba(255,255,255,0.08)); }
.D-match-badge {
  position: absolute; top: 10px; left: 10px;
  background: var(--rose-g); color: #fff; font-size: 11px; font-weight: 800;
  padding: 4px 11px; border-radius: 100px; letter-spacing: 0.3px;
}
.D-match-info { flex: 1; padding: 20px 24px; display: flex; align-items: center; gap: 24px; }
.D-match-name { font-family: var(--font-d); font-size: 18px; font-weight: 800; color: var(--t1); margin-bottom: 4px; }
.D-match-meta { font-size: 13px; color: var(--t3); margin-bottom: 10px; }
.D-match-tags { display: flex; gap: 8px; flex-wrap: wrap; }
.D-tag {
  background: rgba(255,45,107,0.06); color: var(--t2);
  border: 1px solid rgba(255,45,107,0.12); border-radius: 100px;
  font-size: 12px; font-weight: 500; padding: 4px 12px;
}
.D-match-compat { flex-shrink: 0; text-align: center; padding: 0 8px; }
.D-compat-ring { position: relative; width: 68px; height: 68px; margin: 0 auto 6px; }
.D-compat-ring svg { transform: rotate(-90deg); }
.D-compat-num { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-family: var(--font-d); font-size: 16px; font-weight: 900; color: var(--rose); }
.D-compat-lbl { font-size: 11px; color: var(--t3); font-weight: 500; }
.D-match-actions { flex-shrink: 0; display: flex; flex-direction: column; gap: 8px; justify-content: center; padding-right: 20px; }

/* ── Interest cards ── */
.D-interest {
  background: var(--white); border-radius: var(--r); border: 1px solid var(--border);
  box-shadow: var(--sh); display: flex; align-items: center; gap: 16px;
  padding: 20px 22px; margin-bottom: 14px;
  transition: transform 0.2s, box-shadow 0.2s;
}
.D-interest:hover { transform: translateY(-2px); box-shadow: var(--sh-hover); }
.D-interest-ava { width: 52px; height: 52px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(255,45,107,0.18); flex-shrink: 0; }
.D-interest-name { font-size: 15px; font-weight: 700; color: var(--t1); margin-bottom: 3px; }
.D-interest-meta { font-size: 12.5px; color: var(--t3); }
.D-interest-time { font-size: 11.5px; color: var(--t3); margin-top: 3px; }
.D-interest-btns { margin-left: auto; display: flex; gap: 8px; flex-shrink: 0; }

/* ── Right column cards ── */
.D-card { background: var(--white); border-radius: var(--r); border: 1px solid var(--border); box-shadow: var(--sh); padding: 28px; margin-bottom: 20px; }
.D-card-title { font-family: var(--font-d); font-size: 17px; font-weight: 800; color: var(--t1); margin-bottom: 4px; }
.D-card-sub   { font-size: 12.5px; color: var(--t3); margin-bottom: 22px; }

/* ── Activity list ── */
.D-act-row { display: flex; align-items: center; gap: 14px; padding: 13px 0; border-bottom: 1px solid var(--border); cursor: pointer; transition: background 0.14s; }
.D-act-row:last-child { border-bottom: none; }
.D-act-ico { width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
.D-act-msg { font-size: 13px; color: var(--t1); line-height: 1.5; }
.D-act-time { font-size: 11px; color: var(--t3); margin-top: 2px; }
.D-act-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; margin-left: auto; }

/* ── Horoscope bars ── */
.D-horo-row { margin-bottom: 16px; }
.D-horo-lbl { display: flex; justify-content: space-between; font-size: 13px; font-weight: 500; color: var(--t2); margin-bottom: 7px; }
.D-horo-lbl strong { color: var(--rose); font-weight: 700; }
.D-bar-track { background: rgba(255,45,107,0.08); border-radius: 100px; height: 7px; overflow: hidden; }
.D-bar-fill  { height: 100%; border-radius: 100px; background: var(--rose-g); transition: width 1.4s cubic-bezier(.4,0,.2,1); }

/* ── Profile tips ── */
.D-tip { display: flex; gap: 12px; align-items: flex-start; padding: 12px 0; border-bottom: 1px solid var(--border); font-size: 13.5px; color: var(--t2); line-height: 1.6; }
.D-tip:last-child { border-bottom: none; padding-bottom: 0; }
.D-tip-arrow { color: var(--rose); font-weight: 900; font-size: 15px; flex-shrink: 0; margin-top: 1px; }

/* ── Placeholder ── */
.D-ph { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 400px; gap: 18px; text-align: center; }
.D-ph-ico { width: 96px; height: 96px; border-radius: 50%; background: linear-gradient(135deg, rgba(255,45,107,0.08), rgba(235,177,72,0.08)); border: 1px solid rgba(255,45,107,0.18); display: flex; align-items: center; justify-content: center; font-size: 42px; }
.D-ph h2 { font-family: var(--font-d); font-size: 26px; color: var(--t1); font-weight: 800; }
.D-ph p  { font-size: 15px; color: var(--t3); max-width: 320px; line-height: 1.7; }

/* ── Animations ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Responsive ── */
@media (max-width: 1200px) {
  .D-stats { grid-template-columns: repeat(2,1fr); }
  .D-cols  { grid-template-columns: 1fr; }
}
@media (max-width: 900px) {
  .D-sb { width: 72px; }
  .D-sb-logo-mark, .D-sb-me-ava { margin: 0 auto; }
  .D-sb-brand, .D-sb-tag, .D-sb-me-name, .D-sb-me-tag, .D-pro-badge, .D-sb-nav-item span:last-child, .D-sb-nav-title, .D-sb-footer { display: none; }
  .D-sb-nav-item { justify-content: center; padding: 13px 0; margin: 2px 8px; }
  .D-sb-logo { justify-content: center; }
  .D-sb-me { justify-content: center; }
  .D-body { padding: 28px 20px 40px; }
  .D-top { padding: 0 20px; }
}
@media (max-width: 640px) {
  .D-stats { grid-template-columns: 1fr 1fr; }
  .D-match-card { flex-direction: column; }
  .D-match-photo { width: 100%; height: 200px; }
}
`;

/* ─── SIDEBAR ─────────────────────────────────────────────────────────────── */
function Sidebar({ active, setActive }) {
  return (
    <aside className="D-sb">
      {/* Logo */}
      <div className="D-sb-logo">
        <div className="D-sb-logo-mark">🪷</div>
        <div>
          <div className="D-sb-brand">MahaSri</div>
          <div className="D-sb-tag">Matrimony</div>
        </div>
      </div>

      {/* User */}
      <div className="D-sb-me">
        <div className="D-sb-me-ava">
          <img src={USER.avatar} alt="you" />
        </div>
        <div>
          <div className="D-sb-me-name">{USER.name.split(" ")[0]}</div>
          <div className="D-sb-me-tag">Premium Member</div>
        </div>
        <div className="D-pro-badge">PRO</div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, paddingTop: 8 }}>
        <div className="D-sb-nav-title">Navigation</div>
        {NAV.map(n => (
          <div
            key={n.id}
            className={`D-sb-nav-item${active === n.id ? " on" : ""}`}
            onClick={() => setActive(n.id)}
          >
            <span className="D-sb-nav-ico">{n.icon}</span>
            <span>{n.label}</span>
          </div>
        ))}
        <div style={{ borderTop: "1px solid var(--border)", margin: "12px 12px 0", paddingTop: 4 }}>
          <div className="D-sb-nav-item" style={{ color: "var(--t3)" }}>
            <span className="D-sb-nav-ico">↩</span>
            <span>Logout</span>
          </div>
        </div>
      </nav>

      {/* Upgrade card */}
      <div className="D-sb-footer">
        <h4>✨ Upgrade to Gold</h4>
        <p>Unlock unlimited messaging and priority listing in search results.</p>
        <button className="Btn Btn-rose" style={{ width: "100%", justifyContent: "center", fontSize: 13, padding: "10px 0" }}>
          Upgrade Now
        </button>
      </div>
    </aside>
  );
}

/* ─── TOPBAR ──────────────────────────────────────────────────────────────── */
function TopBar() {
  const [nd, setNd] = useState(false);
  return (
    <header className="D-top">
      <div className="D-top-search">
        <span style={{ color: "var(--t3)", fontSize: 16 }}>🔍</span>
        <input placeholder="Search by name, city, profession…" />
      </div>

      <div className="D-top-right">
        <div style={{ position: "relative" }}>
          <button className="D-top-ico" onClick={() => setNd(v => !v)}>
            🔔 <span className="D-dot" />
          </button>
          {nd && (
            <div style={{
              position: "absolute", right: 0, top: 52,
              background: "var(--white)", border: "1px solid var(--border)",
              borderRadius: 18, width: 320, boxShadow: "0 20px 60px rgba(0,0,0,0.12)", zIndex: 300,
            }}>
              <div style={{ padding: "16px 20px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-d)", fontSize: 16, fontWeight: 800 }}>Notifications</span>
                <span style={{ background: "rgba(255,45,107,0.1)", color: "var(--rose)", fontSize: 11, fontWeight: 700, padding: "2px 10px", borderRadius: 100 }}>5 new</span>
              </div>
              {ACTIVITY.slice(0, 4).map(a => (
                <div key={a.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 20px", cursor: "pointer", transition: "background 0.14s" }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: `${a.color}14`, border: `1px solid ${a.color}28`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>{a.icon}</div>
                  <div>
                    <div style={{ fontSize: 13, color: "var(--t1)", lineHeight: 1.5 }}>{a.msg}</div>
                    <div style={{ fontSize: 11, color: "var(--t3)", marginTop: 2 }}>{a.time}</div>
                  </div>
                </div>
              ))}
              <div style={{ padding: "12px 20px", borderTop: "1px solid var(--border)", textAlign: "center" }}>
                <span style={{ fontSize: 13, color: "var(--rose)", fontWeight: 700, cursor: "pointer" }}>View all notifications →</span>
              </div>
            </div>
          )}
        </div>

        <div className="D-top-avatar">
          <img src={USER.avatar} alt="me" />
          <div className="D-top-avatar-info">
            <span>{USER.name.split(" ")[0]}</span>
            <span>Premium</span>
          </div>
          <span style={{ fontSize: 11, color: "var(--t3)", marginLeft: 4 }}>▾</span>
        </div>

        <button className="Btn Btn-outline" style={{ padding: "10px 20px", fontSize: 13 }}>
          Sign out
        </button>
      </div>
    </header>
  );
}

/* ─── HERO ────────────────────────────────────────────────────────────────── */
function Hero() {
  const h = new Date().getHours();
  const greet = h < 12 ? "Good morning ☀️" : h < 17 ? "Good afternoon 🌤️" : "Good evening 🌙";
  const [prog, setProg] = useState(0);
  useEffect(() => { const t = setTimeout(() => setProg(USER.profileCompletion), 400); return () => clearTimeout(t); }, []);

  const steps = [
    { label: "Personal Bio",   done: true  },
    { label: "Profile Photos", done: true  },
    { label: "Family Details", done: false },
    { label: "Horoscope",      done: false },
    { label: "Partner Prefs",  done: true  },
  ];

  return (
    <div className="D-hero">
      <div className="D-hero-left">
        <div className="D-hero-greeting">{greet}</div>
        <h1 className="D-hero-name">Welcome back, <span>{USER.name.split(" ")[0]}!</span></h1>
        <p className="D-hero-desc">
          You have <strong>3 new interest requests</strong> and <strong>28 profile views</strong> this week.
          Your profile is actively getting noticed — keep it updated to attract better matches!
        </p>

        {/* Progress */}
        <div style={{ marginBottom: 28 }}>
          <div className="D-prog-label">
            <span>Profile Completion</span>
            <strong>{USER.profileCompletion}%</strong>
          </div>
          <div className="D-prog-track">
            <div className="D-prog-fill" style={{ width: `${prog}%` }} />
          </div>
        </div>

        {/* Steps */}
        <div style={{ display: "flex", gap: 22, flexWrap: "wrap", marginBottom: 28 }}>
          {steps.map(s => (
            <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: s.done ? "var(--t1)" : "var(--t3)", fontWeight: s.done ? 600 : 400 }}>
              <span style={{ fontSize: 14, color: s.done ? "#16a34a" : "var(--t3)" }}>{s.done ? "✓" : "○"}</span>
              {s.label}
            </div>
          ))}
        </div>

        <div className="D-hero-btns">
          <button className="Btn Btn-rose">Complete Profile →</button>
          <button className="Btn Btn-outline">Preview Profile</button>
        </div>
      </div>

      <div className="D-hero-right">
        <div className="D-hero-ava-ring">
          <img src={USER.avatar} alt="you" />
          <div className="D-hero-ava-online" />
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "var(--font-d)", fontSize: 16, fontWeight: 800, color: "var(--t1)" }}>{USER.name.split(" ")[0]}</div>
          <div style={{ fontSize: 12.5, color: "var(--t3)", marginTop: 3 }}>{USER.age} yrs • {USER.location.split(",")[0]}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(235,177,72,0.1)", border: "1px solid rgba(235,177,72,0.28)", borderRadius: 100, padding: "4px 14px" }}>
          <span style={{ fontSize: 12 }}>⭐</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: "var(--gold)" }}>Premium Member</span>
        </div>
      </div>
    </div>
  );
}

/* ─── STAT CARDS ──────────────────────────────────────────────────────────── */
function Stats() {
  return (
    <div className="D-stats">
      {STATS.map(s => (
        <div key={s.label} className="D-stat">
          <div className="D-stat-glow" style={{ background: s.color }} />
          <div className="D-stat-ico-wrap" style={{ background: s.bg, border: `1px solid ${s.color}22` }}>
            <span style={{ fontSize: 24 }}>{s.icon}</span>
          </div>
          <div className="D-stat-num" style={{ color: s.color }}>{s.value}</div>
          <div className="D-stat-lbl">{s.label}</div>
          <div className="D-stat-delta" style={{ background: s.bg, color: s.color, border: `1px solid ${s.color}22` }}>
            ↑ {s.delta}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── MATCHES ─────────────────────────────────────────────────────────────── */
function Matches() {
  const [sent, setSent] = useState({});
  return (
    <div style={{ marginBottom: 36 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <div className="D-sec">
          <div className="D-sec-title">Suggested Matches</div>
          <div className="D-sec-sub">Curated based on your preferences &amp; horoscope compatibility</div>
        </div>
        <button className="Btn Btn-outline Btn-sm">View All →</button>
      </div>

      <div className="D-matches">
        {MATCHES.map(m => {
          const r = 30, circ = 2 * Math.PI * r, pct = (m.compat / 100) * circ;
          return (
            <div key={m.id} className="D-match-card">
              <div className="D-match-photo">
                <img src={m.avatar} alt={m.name} />
                <div className="D-match-photo-over" />
                <div className="D-match-badge">{m.compat}% Match</div>
              </div>

              <div className="D-match-info">
                <div style={{ flex: 1 }}>
                  <div className="D-match-name">{m.name}</div>
                  <div className="D-match-meta">{m.age} yrs • {m.loc}</div>
                  <div className="D-match-tags">
                    <span className="D-tag">🎓 {m.edu}</span>
                    <span className="D-tag">💼 {m.job}</span>
                  </div>
                </div>

                <div className="D-match-compat">
                  <div className="D-compat-ring">
                    <svg width="68" height="68" viewBox="0 0 68 68">
                      <circle cx="34" cy="34" r={r} fill="none" stroke="rgba(255,45,107,0.1)" strokeWidth="6" />
                      <circle cx="34" cy="34" r={r} fill="none" stroke="url(#rg)" strokeWidth="6"
                        strokeDasharray={`${pct} ${circ}`} strokeLinecap="round" />
                      <defs>
                        <linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#FF758C" />
                          <stop offset="100%" stopColor="#FF2D6B" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="D-compat-num">{m.compat}%</div>
                  </div>
                  <div className="D-compat-lbl">Compatibility</div>
                </div>

                <div className="D-match-actions">
                  <button
                    className={`Btn Btn-sm ${sent[m.id] ? "Btn-outline" : "Btn-rose"}`}
                    onClick={() => setSent(p => ({ ...p, [m.id]: !p[m.id] }))}
                  >
                    {sent[m.id] ? "✓ Interested" : "Send Interest"}
                  </button>
                  <button className="Btn Btn-outline Btn-sm">View Profile</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── INTERESTS ───────────────────────────────────────────────────────────── */
function Interests() {
  const [list, setList] = useState(INTERESTS);
  const remove = id => setList(l => l.filter(r => r.id !== id));
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <div className="D-sec">
          <div className="D-sec-title">Interest Requests</div>
          <div className="D-sec-sub">{list.length} pending requests awaiting your response</div>
        </div>
        {list.length > 0 && (
          <div style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--rose)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800 }}>
            {list.length}
          </div>
        )}
      </div>

      {list.length === 0 ? (
        <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--r)", padding: "48px 20px", textAlign: "center", boxShadow: "var(--sh)" }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🎉</div>
          <div style={{ fontSize: 15, color: "var(--t2)", fontWeight: 500 }}>All caught up! No pending requests.</div>
        </div>
      ) : (
        list.map(r => (
          <div key={r.id} className="D-interest">
            <img src={r.avatar} alt={r.name} className="D-interest-ava" />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="D-interest-name">{r.name}</div>
              <div className="D-interest-meta">{r.age} yrs • {r.loc} • {r.edu}</div>
              <div className="D-interest-time">Sent {r.when}</div>
            </div>
            <div className="D-interest-btns">
              <button className="Btn Btn-rose Btn-xs" onClick={() => remove(r.id)}>✓ Accept</button>
              <button className="Btn Btn-outline Btn-xs" onClick={() => remove(r.id)}>✕ Decline</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

/* ─── ACTIVITY ────────────────────────────────────────────────────────────── */
function Activity() {
  return (
    <div className="D-card">
      <div className="D-card-title">Recent Activity</div>
      <div className="D-card-sub">Latest interactions on your profile</div>
      {ACTIVITY.map((a, i) => (
        <div key={a.id} className="D-act-row" style={{ borderBottom: i < ACTIVITY.length - 1 ? "1px solid var(--border)" : "none" }}>
          <div className="D-act-ico" style={{ background: `${a.color}12`, border: `1px solid ${a.color}20` }}>{a.icon}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="D-act-msg">{a.msg}</div>
            <div className="D-act-time">{a.time}</div>
          </div>
          {i < 2 && <div className="D-act-dot" style={{ background: a.color }} />}
        </div>
      ))}
      <div style={{ paddingTop: 16, textAlign: "center" }}>
        <span style={{ fontSize: 13, color: "var(--rose)", fontWeight: 700, cursor: "pointer" }}>View all activity →</span>
      </div>
    </div>
  );
}

/* ─── HOROSCOPE ───────────────────────────────────────────────────────────── */
function Horoscope() {
  const items = [
    { label: "Rashi",      value: "Mithuna (Gemini)", pct: 85 },
    { label: "Nakshatra",  value: "Arudra",            pct: 90 },
    { label: "Guna Score", value: "28 / 36",           pct: 78 },
  ];
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 600); return () => clearTimeout(t); }, []);

  return (
    <div className="D-card">
      <div className="D-card-title">✦ Horoscope Match</div>
      <div className="D-card-sub">Based on your birth chart details</div>
      {items.map(it => (
        <div key={it.label} className="D-horo-row">
          <div className="D-horo-lbl"><span>{it.label}</span><strong>{it.value}</strong></div>
          <div className="D-bar-track">
            <div className="D-bar-fill" style={{ width: loaded ? `${it.pct}%` : "0%" }} />
          </div>
        </div>
      ))}
      <button className="Btn Btn-rose" style={{ width: "100%", justifyContent: "center", marginTop: 8, fontSize: 13, padding: "11px 0" }}>
        View Full Horoscope
      </button>
    </div>
  );
}

/* ─── TIPS ────────────────────────────────────────────────────────────────── */
function Tips() {
  const tips = [
    "Add a family photo — profiles with family photos get 40% more interest",
    "Complete your horoscope details for accurate AI-powered match suggestions",
    "Write a personal bio of 100+ words to stand out from other members",
  ];
  return (
    <div className="D-card" style={{ background: "linear-gradient(135deg, #fff4f7, #fffdf6)", border: "1px solid rgba(255,45,107,0.12)" }}>
      <div className="D-card-title">💡 Profile Tips</div>
      <div className="D-card-sub">Improve your profile for better matches</div>
      {tips.map((t, i) => (
        <div key={i} className="D-tip">
          <span className="D-tip-arrow">→</span> {t}
        </div>
      ))}
    </div>
  );
}

/* ─── PLACEHOLDER ─────────────────────────────────────────────────────────── */
function Placeholder({ id, setActive }) {
  const nav = NAV.find(n => n.id === id);
  return (
    <div className="D-ph">
      <div className="D-ph-ico">{nav?.icon}</div>
      <h2>{nav?.label}</h2>
      <p>This section is on its way. Head back to your dashboard to explore your matches.</p>
      <button className="Btn Btn-rose" onClick={() => setActive("dashboard")}>← Back to Dashboard</button>
    </div>
  );
}

/* ─── APP ROOT ────────────────────────────────────────────────────────────── */
export default function UserDashboard() {
  const [active, setActive] = useState("dashboard");

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="D">
        <Sidebar active={active} setActive={setActive} />

        <div className="D-main">
          <TopBar />

          <main className="D-body">
            {active === "dashboard" ? (
              <>
                {/* Page heading */}
                <div className="D-page-title">Dashboard</div>
                <div className="D-page-sub">Welcome back! Here's an overview of your matrimony activity.</div>

                <Hero />
                <Stats />

                <div className="D-cols">
                  {/* Left column */}
                  <div>
                    <Matches />
                    <Interests />
                  </div>

                  {/* Right column */}
                  <div>
                    <Activity />
                    <Horoscope />
                    <Tips />
                  </div>
                </div>
              </>
            ) : (
              <Placeholder id={active} setActive={setActive} />
            )}
          </main>
        </div>
      </div>
    </>
  );
}
