import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const copy = {
  th: {
    nav: ['เกี่ยวกับ', 'ประวัติ', 'ผลงาน', 'ติดต่อ'],
    role: 'Software Developer',
    hero: <>สวัสดีค่ะ ฉัน <em>วิภาวี</em><br/>สร้างซอฟต์แวร์ที่ชัดเจน ใช้งานได้จริง</>,
    intro: 'นักพัฒนาซอฟต์แวร์ผู้ชอบแปลงโจทย์ธุรกิจที่ซับซ้อน ให้เป็นระบบที่เชื่อถือได้ เข้าใจง่าย และดูดี',
    cta: 'ดูประสบการณ์', contact: 'ติดต่อฉัน',
    aboutTitle: 'สิ่งที่ฉันทำ',
    about: 'ฉันมีประสบการณ์พัฒนาเว็บแอปพลิเคชัน เชื่อมต่อ API จัดการฐานข้อมูล และแก้ปัญหาระบบทั้งฝั่ง frontend, backend และ database โดยให้ความสำคัญกับความถูกต้องของข้อมูลและประสบการณ์ของผู้ใช้',
    skills: 'ทักษะและเครื่องมือ', timeline: 'เส้นทางการทำงาน', work: 'พื้นที่ผลงาน',
    workText: 'กำลังรวบรวม case study และภาพประกอบของแต่ละโปรเจกต์',
    contactTitle: 'มาสร้างสิ่งที่มีความหมายร่วมกัน',
    download: 'ดาวน์โหลด CV', location: 'ปากเกร็ด, นนทบุรี',
    projects: ['ระบบบริหารสัญญา', 'Trading Platform UI', 'VR RPG Shooting Game']
  },
  en: {
    nav: ['About', 'Resume', 'Portfolio', 'Contact'],
    role: 'Software Developer',
    hero: <>Hello, I’m <em>Wiphawee</em>.<br/>I build software that makes sense.</>,
    intro: 'A software developer who turns complex business needs into reliable, clear, and practical digital systems.',
    cta: 'Explore experience', contact: 'Get in touch',
    aboutTitle: 'What I do',
    about: 'I build web applications, connect APIs, manage databases, and solve issues across frontend, backend, and database layers—with care for data accuracy and useful user experiences.',
    skills: 'Skills & tools', timeline: 'Experience', work: 'Selected work',
    workText: 'Case studies and project visuals are being collected for this space.',
    contactTitle: 'Let’s make something meaningful.',
    download: 'Download CV', location: 'Pak Kret, Nonthaburi',
    projects: ['Contract Management System', 'Trading Platform UI', 'VR RPG Shooting Game']
  }
};

const experiences = [
  { time: 'Oct 2025 — Oct 2026', company: 'Raise You Up Solution Co., Ltd.', title: 'Programmer', note: 'React · NestJS · SQL Server · UAT · Reporting' },
  { time: 'May 2025 — Sep 2025', company: 'Next Triple Nine Co., Ltd.', title: 'Programmer', note: 'React · Express.js · MySQL · OAuth · Firebase' },
  { time: 'Jul 2024 — Feb 2025', company: 'Demo Corporation Co., Ltd.', title: 'Junior Game Developer', note: 'Unity · C# · 3D assets · UI/UX' },
  { time: 'Jun 2023 — Jul 2024', company: 'Gosoft (Thailand) Co., Ltd.', title: 'Support Software Engineer · Part-time', note: 'POS support · SQL Server · Remote debugging' }
];
const skillGroups = [
  ['Frontend', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MUI'],
  ['Backend', 'Node.js', 'Express.js', 'NestJS', 'REST API'],
  ['Data', 'SQL Server', 'MySQL', 'Firebase'],
  ['Workflow', 'Figma', 'Draw.io', 'Jira', 'Postman', 'Git']
];

function Icon({name}) { const d={home:'M3 11.5 12 4l9 7.5V21h-6v-6H9v6H3z',book:'M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 0-3 3zM5 4v19',grid:'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z',mail:'M3 6h18v12H3zM3 7l9 7 9-7',arrow:'M5 12h14M13 6l6 6-6 6',pin:'M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z'}[name]; return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={d}/></svg> }

function App(){
  const [lang,setLang]=useState('th'); const t=copy[lang];
  useEffect(()=>{ const observer=new IntersectionObserver((entries)=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add('seen')),{threshold:.13}); document.querySelectorAll('.reveal').forEach(e=>observer.observe(e)); return()=>observer.disconnect();},[]);
  const go=(id)=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  return <main>
    <div className="page-shell">
      <aside className="sidebar">
        <div className="portrait-wrap"><img src="/portrait.png" alt="Wiphawee Sringern"/><span className="portrait-spark s1">✦</span><span className="portrait-spark s2">✦</span></div>
        <h1>WIPHAWEE<br/>SRINGERN</h1><p className="role">{t.role}</p>
        <div className="side-line" />
        <nav aria-label="Portfolio navigation">{t.nav.map((n,i)=><button key={n} onClick={()=>go(['about','resume','portfolio','contact'][i])}><Icon name={['home','book','grid','mail'][i]}/><span>{n}</span></button>)}</nav>
        <div className="side-bottom"><a href="/cv-wiphawee.pdf" target="_blank" rel="noreferrer">PDF <span>{t.download}</span></a><p><Icon name="pin"/>{t.location}</p></div>
      </aside>
      <div className="content">
        <header><div className="tab-nav">{t.nav.map((n,i)=><button key={n} onClick={()=>go(['about','resume','portfolio','contact'][i])}>{n}</button>)}</div><div className="lang" aria-label="Language"><button className={lang==='th'?'selected':''} onClick={()=>setLang('th')}>TH</button><span>/</span><button className={lang==='en'?'selected':''} onClick={()=>setLang('en')}>EN</button></div></header>
        <section id="about" className="hero"><div className="hero-copy"><h2>{t.hero}</h2><p>{t.intro}</p><div className="actions"><button className="button mint" onClick={()=>go('resume')}>{t.cta}<Icon name="arrow"/></button><button className="button cream" onClick={()=>go('contact')}>{t.contact}</button></div></div><div className="flower-scene" aria-hidden="true"><div className="sun-rays">✦</div><div className="flower"><i/><i/><i/><i/><i/><b>•ᴗ•</b></div><span className="swirl">⌁</span></div></section>
        <section className="about-section reveal"><div className="section-heading"><h2>{t.aboutTitle}</h2><span>✦</span></div><p className="about-copy">{t.about}</p><div className="skills-grid">{skillGroups.map(([name,...skills])=><article key={name}><h3>{name}</h3><p>{skills.join(' · ')}</p></article>)}</div></section>
        <section id="resume" className="resume reveal"><div className="section-heading"><h2>{t.timeline}</h2><span>⌁</span></div><ol>{experiences.map((x,i)=><li key={x.company}><span className="dot"/><div><time>{x.time}</time><h3>{x.title}</h3><h4>{x.company}</h4><p>{x.note}</p></div></li>)}</ol><div className="education"><h3>{lang==='th'?'การศึกษา':'Education'}</h3><p><b>B.Sc. Digital Information and Technology</b> · Panyapiwat Institute of Management · GPA 3.92 · 2021 — 2024</p></div></section>
        <section id="portfolio" className="portfolio reveal"><div className="section-heading"><h2>{t.work}</h2><span>✦</span></div><p>{t.workText}</p><div className="project-grid">{t.projects.map((x,i)=><article className={'project p'+i} key={x}><div className="project-art"><Icon name="grid"/><span>{i===0?'React · Express.js · MySQL':i===1?'React · Tailwind · OAuth':'Unity · C# · 3D'}</span></div><h3>{x}</h3><p>{lang==='th'?'เพิ่มรายละเอียดและภาพผลงานภายหลัง':'Project details and visuals coming soon'}</p></article>)}</div></section>
        <section id="contact" className="contact reveal"><div><h2>{t.contactTitle}</h2><p>{lang==='th'?'พร้อมพูดคุยเรื่องโอกาสใหม่ ๆ และไอเดียที่น่าสนใจ':'Open to thoughtful opportunities and interesting ideas.'}</p></div><a className="email-link" href="mailto:nanwipawee2545@gmail.com">nanwipawee2545@gmail.com <Icon name="arrow"/></a></section>
      </div>
    </div><footer>© {new Date().getFullYear()} Wiphawee Sringern · Built with care</footer>
  </main>
}
createRoot(document.getElementById('root')).render(<App/>);
