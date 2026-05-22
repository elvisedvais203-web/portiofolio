/**
 * Synchronise les textes formels dans toutes les langues du portfolio.
 * Usage: node sync-lang-formal.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, 'languages');

const packs = {
  fr: JSON.parse(fs.readFileSync(path.join(dir, 'fr.json'), 'utf8')),
  en: null,
  pt: {
    meta: { title: 'Kadièbwe Makina Edvais | Engenheiro de Sistemas de Informação', description: 'Engenheiro de sistemas de informação — desenvolvimento, infraestruturas e soluções digitais. Lubumbashi, RDC.', keywords: 'Engenheiro SI, desenvolvimento, Lubumbashi, Congo', ogTitle: 'Kadièbwe Makina Edvais | Engenheiro SI', ogDescription: 'Sistemas de informação e soluções digitais para organizações.' },
    stage: { discover: 'Consultar o perfil', next: 'Página seguinte', prev: 'Voltar', finish: 'Contacto' },
    brand: { short: 'K. Makina Edvais', line1: 'Kadièbwe Makina', line2: 'Edvais' },
    hero: { eyebrow: 'Engenheiro de sistemas de informação', description: 'Concebo, implemento e mantenho soluções digitais fiáveis. A minha prática abrange desenvolvimento, redes e inteligência artificial, com especialização em sistemas de informação (SI).', country: 'República Democrática do Congo', ctaCv: 'Currículo PDF' },
    typing: { titles: ['Especialista em Sistemas de Informação', 'Engenheiro SI', 'Desenvolvimento de software', 'Administração de redes', 'Infraestruturas cloud'] },
    about: { title: 'Perfil profissional', subtitle: 'Especialista em Sistemas de Informação (SI)', p1: 'Licenciado pela UPL (SI, Engenharia de Software e IA). Atuo em desenvolvimento, redes, IA e implementação, com foco na arquitetura e manutenção de sistemas de informação.', p2: 'Perfil versátil, com exigência na estabilidade e qualidade dos sistemas entregues.', university: 'Formação' },
    skills: { title: 'Domínios de competência', lead: 'Competências transversais — especialização em SI.' },
    projects: { title: 'Realizações', lead: 'Seleção de projetos em produção. Clique para consultar o detalhe.', filterAll: 'Todos', filterWeb: 'Web', filterNetwork: 'Rede', filterDevops: 'Infraestrutura', sealedLabel: 'Projeto', revealCta: 'Abrir', demo: 'Demonstração', repo: 'Repositório' },
    experience: { title: 'Percurso profissional' },
    experienceItems: { si: { title: 'Sistemas de Informação (SI)', desc: 'Análise, arquitetura, integração e manutenção de soluções SI.' }, dev: { title: 'Desenvolvimento de software', desc: 'Aplicações web e móveis, APIs e ferramentas de apoio ao SI.' }, infra: { title: 'Redes e infraestrutura', desc: 'Administração de rede, cloud, bases de dados e supervisão.' }, freelance: { title: 'Prestação de serviços e formação', desc: 'Missões, acompanhamento técnico e formação em informática.' } },
    contact: { title: 'Contacto', lead: 'Para uma solicitação formal, utilize o formulário abaixo.', formSubmit: 'Enviar mensagem' },
    footer: { rights: 'Todos os direitos reservados.' },
    loader: { text: 'A carregar…' },
    a11y: { skip: 'Ir para o conteúdo principal' },
    nav: { home: 'Início', about: 'Perfil', skills: 'Competências', projects: 'Projetos', experience: 'Percurso', contact: 'Contacto' }
  },
  es: {
    meta: { title: 'Kadièbwe Makina Edvais | Ingeniero en Sistemas de Información', description: 'Ingeniero en sistemas de información — desarrollo, infraestructuras y soluciones digitales. Lubumbashi, RDC.', keywords: 'Ingeniero SI, desarrollo, Lubumbashi, Congo', ogTitle: 'Kadièbwe Makina Edvais | Ingeniero SI', ogDescription: 'Sistemas de información y soluciones digitales para organizaciones.' },
    stage: { discover: 'Consultar el perfil', next: 'Página siguiente', prev: 'Volver', finish: 'Contacto' },
    brand: { short: 'K. Makina Edvais', line1: 'Kadièbwe Makina', line2: 'Edvais' },
    hero: { eyebrow: 'Ingeniero en sistemas de información', description: 'Diseño, despliego y mantengo soluciones digitales fiables. Mi práctica abarca desarrollo, redes e inteligencia artificial, con especialización en sistemas de información (SI).', country: 'República Democrática del Congo', ctaCv: 'Currículum PDF' },
    typing: { titles: ['Especialista en Sistemas de Información', 'Ingeniero SI', 'Desarrollo de software', 'Administración de redes', 'Infraestructura cloud'] },
    about: { title: 'Perfil profesional', subtitle: 'Especialista en Sistemas de Información (SI)', p1: 'Graduado de la UPL (SI, Ingeniería de Software e IA). Intervengo en desarrollo, redes, IA y despliegue, con enfoque en arquitectura y mantenimiento de sistemas de información.', p2: 'Perfil versátil, con exigencia en la fiabilidad de los sistemas entregados.', university: 'Formación' },
    skills: { title: 'Ámbitos de competencia', lead: 'Competencias transversales — especialización en SI.' },
    projects: { title: 'Realizaciones', lead: 'Selección de proyectos en producción. Pulse para ver el detalle.', filterAll: 'Todos', filterWeb: 'Web', filterNetwork: 'Red', filterDevops: 'Infraestructura', sealedLabel: 'Proyecto', revealCta: 'Abrir', demo: 'Demostración', repo: 'Repositorio' },
    experience: { title: 'Trayectoria profesional' },
    experienceItems: { si: { title: 'Sistemas de Información (SI)', desc: 'Análisis, arquitectura, integración y mantenimiento de soluciones SI.' }, dev: { title: 'Desarrollo de software', desc: 'Aplicaciones web y móviles, APIs y herramientas de apoyo al SI.' }, infra: { title: 'Redes e infraestructura', desc: 'Administración de red, cloud, bases de datos y supervisión.' }, freelance: { title: 'Servicios y formación', desc: 'Misiones, acompañamiento técnico y formación en informática.' } },
    contact: { title: 'Contacto', lead: 'Para una solicitud formal, utilice el formulario.', formSubmit: 'Enviar mensaje' },
    footer: { rights: 'Todos los derechos reservados.' },
    loader: { text: 'Cargando…' },
    a11y: { skip: 'Ir al contenido principal' },
    nav: { home: 'Inicio', about: 'Perfil', skills: 'Competencias', projects: 'Proyectos', experience: 'Trayectoria', contact: 'Contacto' }
  },
  sw: {
    meta: { title: 'Kadièbwe Makina Edvais | Mhandisi wa Mifumo ya Habari', description: 'Mhandisi wa mifumo ya habari — maendeleo, miundombinu na suluhisho za kidijitali. Lubumbashi, DRC.', ogTitle: 'Kadièbwe Makina Edvais', ogDescription: 'Mifumo ya habari kwa mashirika.' },
    stage: { discover: 'Angalia wasifu', next: 'Ukurasa unaofuata', prev: 'Rudi', finish: 'Wasiliana' },
    brand: { short: 'K. Makina Edvais', line1: 'Kadièbwe Makina', line2: 'Edvais' },
    hero: { eyebrow: 'Mhandisi wa mifumo ya habari', description: 'Nabuni, kutengeneza na kudumisha suluhisho za kidijitali za kuaminika. Nina uzoefu wa maendeleo, mitandao na AI, na utaalamu katika mifumo ya habari (SI).', country: 'Jamhuri ya Kidemokrasia ya Kongo', ctaCv: 'PDF CV' },
    typing: { titles: ['Mtaalamu wa Mifumo ya Habari', 'Mhandisi SI', 'Maendeleo ya programu', 'Usimamizi wa mitandao', 'Miundombinu ya wingu'] },
    about: { title: 'Wasifu wa kitaaluma', subtitle: 'Mtaalamu wa Mifumo ya Habari (SI)', p1: 'Shahada kutoka UPL (SI, Uhandisi wa Programu na AI). Ninafanya kazi katika maendeleo, mitandao, AI na usambazaji.', p2: 'Wasifu anuwai, kwa msisitizo wa uaminifu wa mifumo.', university: 'Elimu' },
    skills: { title: 'Maeneo ya utaalamu', lead: 'Ujuzi mpana — lengo SI.' },
    projects: { title: 'Miradi', lead: 'Bofya mradi kuona maelezo.', filterAll: 'Yote', filterWeb: 'Wavuti', filterNetwork: 'Mtandao', filterDevops: 'Miundombinu', sealedLabel: 'Mradi', revealCta: 'Fungua', demo: 'Onyesho', repo: 'Chanzo' },
    experience: { title: 'Uzoefu' },
    experienceItems: { si: { title: 'Mifumo ya Habari (SI)', desc: 'Uchambuzi, usanifu na matengenezo ya suluhisho SI.' }, dev: { title: 'Maendeleo ya programu', desc: 'Programu za wavuti na simu, API.' }, infra: { title: 'Mitandao na miundombinu', desc: 'Usimamizi wa mtandao, wingu, hifadhidata.' }, freelance: { title: 'Huduma na mafunzo', desc: 'Kazi huru na mafunzo ya TEHAMA.' } },
    contact: { title: 'Wasiliana', lead: 'Tumia fomu kwa ombi la rasmi.', formSubmit: 'Tuma ujumbe' },
    footer: { rights: 'Haki zote zimehifadhiwa.' },
    loader: { text: 'Inapakia…' },
    a11y: { skip: 'Nenda kwenye maudhui' },
    nav: { home: 'Nyumbani', about: 'Wasifu', skills: 'Ujuzi', projects: 'Miradi', experience: 'Uzoefu', contact: 'Wasiliana' }
  },
  ar: {
    meta: { title: 'كادييبوي ماكينا إدوايس | مهندس نظم المعلومات', description: 'مهندس نظم معلومات — تطوير وبنى تحتية وحلول رقمية. لوبومباشي، جمهورية الكونغو الديمقراطية.', ogTitle: 'كادييبوي ماكينا إدوايس', ogDescription: 'نظم معلومات وحلول رقمية للمؤسسات.' },
    stage: { discover: 'استعراض الملف المهني', next: 'الصفحة التالية', prev: 'رجوع', finish: 'التواصل' },
    brand: { short: 'K. Makina Edvais', line1: 'Kadièbwe Makina', line2: 'Edvais' },
    hero: { eyebrow: 'مهندس نظم المعلومات', description: 'أصمم وأنشر وأصون حلولاً رقمية موثوقة. ممارستي تشمل التطوير والشبكات والذكاء الاصطناعي، مع تخصص في نظم المعلومات (SI).', country: 'جمهورية الكونغو الديمقراطية', ctaCv: 'السيرة الذاتية PDF' },
    typing: { titles: ['أخصائي نظم المعلومات', 'مهندس SI', 'تطوير البرمجيات', 'إدارة الشبكات', 'البنية السحابية'] },
    about: { title: 'الملف المهني', subtitle: 'أخصائي نظم المعلومات (SI)', p1: 'خريج UPL (نظم المعلومات، هندسة البرمجيات والذكاء الاصطناعي). أعمل في التطوير والشبكات والذكاء الاصطناعي والنشر.', p2: 'ملف متعدد التخصصات مع التزام بموثوقية الأنظمة.', university: 'التعليم' },
    skills: { title: 'مجالات الكفاءة', lead: 'كفاءات متنوعة — تركيز على SI.' },
    projects: { title: 'الإنجازات', lead: 'انقر على مشروع لعرض التفاصيل.', filterAll: 'الكل', filterWeb: 'ويب', filterNetwork: 'شبكة', filterDevops: 'بنية تحتية', sealedLabel: 'مشروع', revealCta: 'فتح', demo: 'عرض', repo: 'المصدر' },
    experience: { title: 'المسار المهني' },
    experienceItems: { si: { title: 'نظم المعلومات (SI)', desc: 'تحليل وهندسة وصيانة حلول SI.' }, dev: { title: 'تطوير البرمجيات', desc: 'تطبيقات ويب وموبايل وواجهات برمجة.' }, infra: { title: 'الشبكات والبنية التحتية', desc: 'إدارة الشبكات والسحابة وقواعد البيانات.' }, freelance: { title: 'خدمات وتدريب', desc: 'عمل مستقل ودعم تقني وتدريب.' } },
    contact: { title: 'التواصل', lead: 'لطلب رسمي، يرجى استخدام النموذج.', formSubmit: 'إرسال الرسالة' },
    footer: { rights: 'جميع الحقوق محفوظة.' },
    loader: { text: 'جارٍ التحميل…' },
    a11y: { skip: 'انتقل إلى المحتوى' },
    nav: { home: 'الرئيسية', about: 'الملف', skills: 'الكفاءات', projects: 'المشاريع', experience: 'المسار', contact: 'التواصل' }
  },
  zh: {
    meta: { title: 'Kadièbwe Makina Edvais | 信息系统工程师', description: '信息系统工程师 — 开发、基础设施与数字解决方案。刚果（金）卢本巴希。', ogTitle: 'Kadièbwe Makina Edvais', ogDescription: '面向机构的信息系统与数字解决方案。' },
    stage: { discover: '查阅简介', next: '下一页', prev: '返回', finish: '联系' },
    brand: { short: 'K. Makina Edvais', line1: 'Kadièbwe Makina', line2: 'Edvais' },
    hero: { eyebrow: '信息系统工程师', description: '我设计、部署并维护可靠的数字解决方案。实践涵盖开发、网络与人工智能，专业方向为信息系统（SI）。', country: '刚果民主共和国', ctaCv: '下载简历 PDF' },
    typing: { titles: ['信息系统专家', 'SI 工程师', '软件开发', '网络管理', '云基础设施'] },
    about: { title: '专业简介', subtitle: '信息系统（SI）专家', p1: '毕业于 UPL（信息系统、软件工程与人工智能）。从事开发、网络、人工智能与部署，专注于信息系统架构与维护。', p2: '能力全面，注重系统可靠性与交付质量。', university: '教育背景' },
    skills: { title: '专业领域', lead: '综合能力 — 专注信息系统。' },
    projects: { title: '项目成果', lead: '点击查看项目详情。', filterAll: '全部', filterWeb: 'Web', filterNetwork: '网络', filterDevops: '基础设施', sealedLabel: '项目', revealCta: '打开', demo: '演示', repo: '源码' },
    experience: { title: '职业经历' },
    experienceItems: { si: { title: '信息系统（SI）', desc: '需求分析、架构、集成与维护。' }, dev: { title: '软件开发', desc: 'Web/移动应用、API 与业务工具。' }, infra: { title: '网络与基础设施', desc: '网络管理、云部署、数据库与监控。' }, freelance: { title: '服务与培训', desc: '自由职业、技术支持与 IT 培训。' } },
    contact: { title: '联系', lead: '正式事宜请使用下方表单。', formSubmit: '发送' },
    footer: { rights: '版权所有。' },
    loader: { text: '加载中…' },
    a11y: { skip: '跳到主要内容' },
    nav: { home: '首页', about: '简介', skills: '能力', projects: '项目', experience: '经历', contact: '联系' }
  },
  ja: {
    meta: { title: 'Kadièbwe Makina Edvais | 情報システムエンジニア', description: '情報システム、開発、インフラストラクチャ。ルブンバシ（DRC）。', ogTitle: 'Kadièbwe Makina Edvais', ogDescription: '組織向け情報システムソリューション。' },
    stage: { discover: 'プロフィールを見る', next: '次のページ', prev: '戻る', finish: '連絡' },
    brand: { short: 'K. Makina Edvais', line1: 'Kadièbwe Makina', line2: 'Edvais' },
    hero: { eyebrow: '情報システムエンジニア', description: '信頼性の高いデジタルソリューションを設計・導入・保守します。開発、ネットワーク、AIを幅広く扱い、情報システム（SI）を専門としています。', country: 'コンゴ民主共和国', ctaCv: '履歴書 PDF' },
    typing: { titles: ['情報システム専門家', 'SIエンジニア', 'ソフトウェア開発', 'ネットワーク管理', 'クラウド基盤'] },
    about: { title: 'プロフィール', subtitle: '情報システム（SI）専門家', p1: 'UPL卒（情報システム、ソフトウェア工学、AI）。開発・ネットワーク・AI・導入に従事。', p2: '多能なプロフィールで、システムの信頼性を重視。', university: '学歴' },
    skills: { title: '専門領域', lead: '横断的スキル — SIが中心。' },
    projects: { title: '実績', lead: 'クリックして詳細を表示。', filterAll: 'すべて', filterWeb: 'Web', filterNetwork: 'ネットワーク', filterDevops: 'インフラ', sealedLabel: 'プロジェクト', revealCta: '開く', demo: 'デモ', repo: 'ソース' },
    experience: { title: '経歴' },
    experienceItems: { si: { title: '情報システム（SI）', desc: '要件定義、アーキテクチャ、統合、保守。' }, dev: { title: 'ソフトウェア開発', desc: 'Web/モバイル、API。' }, infra: { title: 'ネットワーク・インフラ', desc: 'ネットワーク、クラウド、DB。' }, freelance: { title: '業務・研修', desc: 'フリーランス、技術支援、教育。' } },
    contact: { title: 'お問い合わせ', lead: '正式なご依頼はフォームをご利用ください。', formSubmit: '送信' },
    footer: { rights: 'All rights reserved.' },
    loader: { text: '読み込み中…' },
    a11y: { skip: 'コンテンツへ' },
    nav: { home: 'ホーム', about: 'プロフィール', skills: 'スキル', projects: 'プロジェクト', experience: '経歴', contact: '連絡' }
  },
  ru: {
    meta: { title: 'Kadièbwe Makina Edvais | Инженер информационных систем', description: 'Инженер ИС — разработка, инфраструктура и цифровые решения. Лубумбаши, ДР Конго.', ogTitle: 'Kadièbwe Makina Edvais', ogDescription: 'Информационные системы для организаций.' },
    stage: { discover: 'Открыть профиль', next: 'Далее', prev: 'Назад', finish: 'Контакты' },
    brand: { short: 'K. Makina Edvais', line1: 'Kadièbwe Makina', line2: 'Edvais' },
    hero: { eyebrow: 'Инженер информационных систем', description: 'Проектирую, внедряю и сопровождаю надёжные цифровые решения. Практика включает разработку, сети и ИИ, со специализацией в информационных системах (ИС).', country: 'Демократическая Республика Конго', ctaCv: 'Резюме PDF' },
    typing: { titles: ['Специалист по ИС', 'Инженер ИС', 'Разработка ПО', 'Администрирование сетей', 'Облачная инфраструктура'] },
    about: { title: 'Профессиональный профиль', subtitle: 'Специалист по информационным системам (ИС)', p1: 'Выпускник UPL (ИС, программная инженерия и ИИ). Разработка, сети, ИИ и внедрение.', p2: 'Универсальный профиль с акцентом на надёжность систем.', university: 'Образование' },
    skills: { title: 'Области компетенций', lead: 'Широкий профиль — фокус на ИС.' },
    projects: { title: 'Реализованные проекты', lead: 'Нажмите, чтобы открыть детали.', filterAll: 'Все', filterWeb: 'Web', filterNetwork: 'Сеть', filterDevops: 'Инфраструктура', sealedLabel: 'Проект', revealCta: 'Открыть', demo: 'Демо', repo: 'Исходники' },
    experience: { title: 'Опыт' },
    experienceItems: { si: { title: 'Информационные системы (ИС)', desc: 'Анализ, архитектура, интеграция и сопровождение.' }, dev: { title: 'Разработка ПО', desc: 'Web/мобильные приложения, API.' }, infra: { title: 'Сети и инфраструктура', desc: 'Сети, облако, базы данных.' }, freelance: { title: 'Услуги и обучение', desc: 'Фриланс, поддержка, обучение.' } },
    contact: { title: 'Контакты', lead: 'Для официального запроса используйте форму.', formSubmit: 'Отправить' },
    footer: { rights: 'Все права защищены.' },
    loader: { text: 'Загрузка…' },
    a11y: { skip: 'К содержанию' },
    nav: { home: 'Главная', about: 'Профиль', skills: 'Навыки', projects: 'Проекты', experience: 'Опыт', contact: 'Контакты' }
  },
  hi: {
    meta: { title: 'Kadièbwe Makina Edvais | सूचना प्रणाली अभियंता', description: 'सूचना प्रणाली अभियंता — विकास, अवसंरचना और डिजिटल समाधान। लुबुमबाशी, डीआर कांगो।', ogTitle: 'Kadièbwe Makina Edvais', ogDescription: 'संगठनों के लिए सूचना प्रणाली समाधान।' },
    stage: { discover: 'प्रोफ़ाइल देखें', next: 'अगला पृष्ठ', prev: 'वापस', finish: 'संपर्क' },
    brand: { short: 'K. Makina Edvais', line1: 'Kadièbwe Makina', line2: 'Edvais' },
    hero: { eyebrow: 'सूचना प्रणाली अभियंता', description: 'मैं विश्वसनीय डिजिटल समाधान डिज़ाइन, तैनात और बनाए रखता हूँ। विकास, नेटवर्क और AI में अनुभव, SI में विशेषज्ञता।', country: 'लोकतांत्रिक गणराज्य कांगो', ctaCv: 'रिज़्यूमे PDF' },
    typing: { titles: ['सूचना प्रणाली विशेषज्ञ', 'SI अभियंता', 'सॉफ्टवेयर विकास', 'नेटवर्क प्रशासन', 'क्लाउड अवसंरचना'] },
    about: { title: 'व्यावसायिक प्रोफ़ाइल', subtitle: 'सूचना प्रणाली (SI) विशेषज्ञ', p1: 'UPL स्नातक (SI, सॉफ्टवेयर इंजीनियरिंग और AI)। विकास, नेटवर्क, AI और तैनाती।', p2: 'बहु-क्षेत्रीय प्रोफ़ाइल, सिस्टम विश्वसनीयता पर जोर।', university: 'शिक्षा' },
    skills: { title: 'क्षेत्रों में दक्षता', lead: 'व्यापक कौशल — SI केंद्र।' },
    projects: { title: 'परियोजनाएँ', lead: 'विवरण के लिए क्लिक करें।', filterAll: 'सभी', filterWeb: 'वेब', filterNetwork: 'नेटवर्क', filterDevops: 'अवसंरचना', sealedLabel: 'परियोजना', revealCta: 'खोलें', demo: 'डेमो', repo: 'स्रोत' },
    experience: { title: 'अनुभव' },
    experienceItems: { si: { title: 'सूचना प्रणाली (SI)', desc: 'विश्लेषण, आर्किटेक्चर, एकीकरण, रखरखाव।' }, dev: { title: 'सॉफ्टवेयर विकास', desc: 'वेब/मोबाइल ऐप, API।' }, infra: { title: 'नेटवर्क और अवसंरचना', desc: 'नेटवर्क, क्लाउड, डेटाबेस।' }, freelance: { title: 'सेवाएँ और प्रशिक्षण', desc: 'फ्रीलांस, तकनीकी सहायता, प्रशिक्षण।' } },
    contact: { title: 'संपर्क', lead: 'औपचारिक अनुरोध के लिए फॉर्म का उपयोग करें।', formSubmit: 'भेजें' },
    footer: { rights: 'सर्वाधिकार सुरक्षित।' },
    loader: { text: 'लोड हो रहा है…' },
    a11y: { skip: 'मुख्य सामग्री पर जाएँ' },
    nav: { home: 'मुखपृष्ठ', about: 'प्रोफ़ाइल', skills: 'कौशल', projects: 'परियोजनाएँ', experience: 'अनुभव', contact: 'संपर्क' }
  }
};

function deepMerge(target, source) {
  for (const k of Object.keys(source)) {
    if (source[k] && typeof source[k] === 'object' && !Array.isArray(source[k])) {
      target[k] = target[k] && typeof target[k] === 'object' ? { ...target[k] } : {};
      deepMerge(target[k], source[k]);
    } else {
      target[k] = source[k];
    }
  }
  return target;
}

// Formal FR master
packs.fr = {
  ...packs.fr,
  meta: {
    title: 'Kadièbwe Makina Edvais | Ingénieur des systèmes informatiques',
    description: 'Ingénieur des systèmes informatiques — conception, développement et infrastructures numériques. Lubumbashi, République démocratique du Congo.',
    keywords: 'Ingénieur SI, systèmes informatiques, développement, Lubumbashi, Congo',
    ogTitle: 'Kadièbwe Makina Edvais | Ingénieur SI',
    ogDescription: 'Solutions de systèmes informatiques et services numériques pour organisations et entreprises.'
  },
  brand: { short: 'K. Makina Edvais', line1: 'Kadièbwe Makina', line2: 'Edvais' },
  stage: {
    discover: 'Parcourir le dossier professionnel',
    next: 'Page suivante',
    prev: 'Retour',
    finish: 'Prendre contact'
  },
  hero: {
    eyebrow: 'Ingénieur des systèmes informatiques',
    description: 'Je conçois, déploie et maintiens des solutions numériques fiables. Ma pratique couvre le développement, les réseaux et l’intelligence artificielle, avec une spécialisation en systèmes informatiques (SI).',
    country: 'République démocratique du Congo',
    ctaContact: 'Me contacter',
    ctaCv: 'Télécharger le curriculum vitæ',
    ctaProjects: 'Consulter les réalisations',
    badge: 'Disponible pour mission',
    pill1: 'Systèmes informatiques',
    pill2: 'Développement logiciel',
    pill3: 'Réseaux & infrastructures'
  },
  typing: {
    titles: [
      'Ingénieur des systèmes informatiques',
      'Spécialiste SI',
      'Architecte de solutions numériques',
      'Développement web & mobile',
      'Administration réseau & systèmes'
    ]
  },
  about: {
    tag: 'Profil',
    title: 'Présentation professionnelle',
    lead: 'Un parcours technique structuré, orienté fiabilité et service.',
    subtitle: 'Spécialiste en systèmes informatiques (SI)',
    p1: 'Diplômé de l’Université Protestante de Lubumbashi (UPL) en systèmes informatiques, génie logiciel et intelligence artificielle. J’interviens sur l’ensemble du cycle de vie des solutions : analyse, conception, réalisation, déploiement et maintenance.',
    p2: 'Mon approche est volontairement réaliste : une base large en technologies complémentaires, avec une expertise affirmée en systèmes informatiques et en qualité de service.',
    university: 'Formation académique',
    phone: 'Téléphone'
  },
  skills: {
    tag: 'Compétences',
    title: 'Domaines de compétence',
    lead: 'Compétences transversales — spécialisation en systèmes informatiques.',
    levelLabel: 'Niveau de maîtrise'
  },
  skillItems: {
    frontend: 'Interfaces & expérience utilisateur',
    backend: 'Serveurs & API',
    databases: 'Bases de données',
    ai: 'Intelligence artificielle',
    infrastructure: 'Réseaux & systèmes',
    cybersecurity: 'Cybersécurité',
    iot: 'Systèmes embarqués',
    devops: 'Intégration & déploiement'
  },
  projects: {
    tag: 'Projets',
    title: 'Réalisations',
    lead: 'Sélection de projets déployés. Cliquez pour consulter le dossier.',
    filterAll: 'Tous',
    filterWeb: 'Web & mobile',
    filterNetwork: 'Réseau',
    filterDevops: 'Infrastructure',
    catWeb: 'Web & mobile',
    catNetwork: 'Réseau & supervision',
    catDevops: 'Infrastructure & déploiement',
    sealedLabel: 'Aperçu',
    revealCta: 'Ouvrir le dossier',
    demo: 'Démonstration',
    repo: 'Dépôt source'
  },
  projectItems: {
    nextalk: { title: 'NexTalk', desc: 'Plateforme de communication : messagerie, appels et canaux.' },
    congolove: { title: 'CongoLove', desc: 'Réseau social et rencontres — profils, vérification et mise en relation.' },
    netcontrol: { title: 'NetControl', desc: 'Supervision réseau et administration des postes de travail.' },
    edvaselve: { title: 'Edvaselve Marketplace', desc: 'Place de marché multivendeur — Lubumbashi.' },
    solola: { title: 'SOLOLA', desc: 'Service web de communication — production Render.' },
    congoloveStack: { title: 'Infrastructure CongoLove', desc: 'PostgreSQL, Valkey, services Node.js, domaine mail.' }
  },
  experience: {
    tag: 'Parcours',
    title: 'Expérience professionnelle'
  },
  experienceItems: {
    si: { title: 'Systèmes informatiques (SI)', desc: 'Analyse des besoins, architecture, intégration et maintenance des solutions SI.' },
    dev: { title: 'Développement logiciel', desc: 'Applications web et mobiles, API et outils métiers au service du SI.' },
    infra: { title: 'Réseaux & infrastructures', desc: 'Administration réseau, déploiement cloud, bases de données et supervision.' },
    freelance: { title: 'Prestations & formation', desc: 'Missions techniques, accompagnement et formation en informatique.' }
  },
  contact: {
    tag: 'Contact',
    title: 'Prise de contact',
    lead: 'Pour toute demande professionnelle, veuillez utiliser le formulaire ci-dessous.',
    formName: 'Nom et prénom',
    formEmail: 'Adresse électronique',
    formSubject: 'Objet du message',
    formMessage: 'Votre message',
    formSubmit: 'Transmettre le message'
  },
  footer: {
    desc: 'Ingénieur des systèmes informatiques — solutions numériques',
    rights: 'Tous droits réservés.'
  },
  notifications: {
    langChanged: 'Langue actualisée',
    formSent: 'Message préparé — merci d’ouvrir votre client de messagerie',
    cvDownloaded: 'Curriculum vitæ téléchargé',
    cvPdfError: 'Échec de génération du PDF. Veuillez recharger la page.'
  },
  cv: {
    title: 'INGÉNIEUR DES SYSTÈMES INFORMATIQUES',
    education: 'FORMATION',
    profile: 'PROFIL',
    skills: 'COMPÉTENCES'
  }
};

packs.en = {
  ...JSON.parse(fs.readFileSync(path.join(dir, 'en.json'), 'utf8')),
  meta: {
    title: 'Kadièbwe Makina Edvais | Information Systems Engineer',
    description: 'Information systems engineer — design, development and digital infrastructure. Lubumbashi, Democratic Republic of the Congo.',
    keywords: 'IS engineer, information systems, software development, Lubumbashi, Congo',
    ogTitle: 'Kadièbwe Makina Edvais | Information Systems Engineer',
    ogDescription: 'Information systems and digital services for organizations and businesses.'
  },
  brand: { short: 'K. Makina Edvais', line1: 'Kadièbwe Makina', line2: 'Edvais' },
  stage: {
    discover: 'View professional profile',
    next: 'Next section',
    prev: 'Previous',
    finish: 'Contact'
  },
  hero: {
    eyebrow: 'Information systems engineer',
    description: 'I design, deploy and maintain reliable digital solutions. My practice spans development, networking and artificial intelligence, with a specialization in information systems (IS).',
    country: 'Democratic Republic of the Congo',
    ctaCv: 'Download résumé (PDF)',
    ctaContact: 'Contact',
    ctaProjects: 'View portfolio'
  },
  typing: {
    titles: [
      'Information systems engineer',
      'IS specialist',
      'Digital solutions architect',
      'Web & mobile development',
      'Network & systems administration'
    ]
  },
  about: {
    title: 'Professional presentation',
    subtitle: 'Information systems (IS) specialist',
    p1: 'Graduate of Université Protestante de Lubumbashi (UPL) in information systems, software engineering and artificial intelligence. I work across the solution lifecycle: analysis, design, implementation, deployment and maintenance.',
    p2: 'My approach is deliberately realistic: broad exposure to complementary technologies, with proven expertise in information systems and service quality.',
    university: 'Academic background',
    lead: 'A structured technical background focused on reliability and service.'
  },
  skills: {
    title: 'Areas of competence',
    lead: 'Cross-functional skills — specialization in information systems.'
  },
  skillItems: {
    frontend: 'User interfaces & UX',
    backend: 'Servers & APIs',
    databases: 'Databases',
    ai: 'Artificial intelligence',
    infrastructure: 'Networks & systems',
    cybersecurity: 'Cybersecurity',
    iot: 'Embedded systems',
    devops: 'Integration & deployment'
  },
  projects: {
    title: 'Portfolio',
    lead: 'Selected deployed projects. Click to open the dossier.',
    sealedLabel: 'Preview',
    revealCta: 'Open dossier',
    demo: 'Live demo',
    repo: 'Source repository'
  },
  projectItems: {
    nextalk: { title: 'NexTalk', desc: 'Communication platform: messaging, calls and channels.' },
    congolove: { title: 'CongoLove', desc: 'Social and dating network — profiles, verification and matching.' },
    netcontrol: { title: 'NetControl', desc: 'Network supervision and workstation administration.' },
    edvaselve: { title: 'Edvaselve Marketplace', desc: 'Multi-vendor marketplace — Lubumbashi.' },
    solola: { title: 'SOLOLA', desc: 'Web communication service — production on Render.' },
    congoloveStack: { title: 'CongoLove infrastructure', desc: 'PostgreSQL, Valkey, Node.js services, mail domain.' }
  },
  experience: { title: 'Professional experience' },
  experienceItems: {
    si: { title: 'Information systems (IS)', desc: 'Requirements, architecture, integration and maintenance of IS solutions.' },
    dev: { title: 'Software development', desc: 'Web and mobile applications, APIs and business tools supporting IS.' },
    infra: { title: 'Networks & infrastructure', desc: 'Network administration, cloud deployment, databases and monitoring.' },
    freelance: { title: 'Consulting & training', desc: 'Technical assignments, support and IT training.' }
  },
  contact: {
    title: 'Contact',
    lead: 'For professional inquiries, please use the form below.',
    formName: 'Full name',
    formEmail: 'Email address',
    formSubject: 'Subject',
    formMessage: 'Your message',
    formSubmit: 'Submit message'
  },
  footer: { desc: 'Information systems engineer — digital solutions', rights: 'All rights reserved.' },
  cv: { title: 'INFORMATION SYSTEMS ENGINEER' }
};

for (const [code, patch] of Object.entries(packs)) {
  if (code === 'fr') {
    fs.writeFileSync(path.join(dir, 'fr.json'), JSON.stringify(packs.fr, null, 2) + '\n');
    continue;
  }
  const file = path.join(dir, `${code}.json`);
  let base = {};
  try { base = JSON.parse(fs.readFileSync(file, 'utf8')); } catch { /* new */ }
  const merged = deepMerge(base, patch);
  if (code === 'en') Object.assign(merged, packs.en);
  fs.writeFileSync(file, JSON.stringify(merged, null, 2) + '\n');
  console.log('Updated', code);
}
