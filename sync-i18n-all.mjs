/**
 * Synchronise es, pt, sw, zh, ja, ru, hi, ar depuis en.json + traductions dédiées.
 * Usage: node sync-i18n-all.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, 'languages');
const en = JSON.parse(fs.readFileSync(path.join(dir, 'en.json'), 'utf8'));

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

const contactRequests = {
  es: {
    requestPlaceholder: '— Elija un servicio —',
    requestDevWeb: 'Desarrollo web y móvil (sitio, aplicación)',
    requestSiEngineer: 'Ingeniero / prestación en sistemas de información (SI)',
    requestSoftwareEng: 'Ingeniería de software — arquitectura, APIs, apps de negocio',
    requestAi: 'Inteligencia artificial (ML, visión, automatización)',
    requestInfra: 'Infraestructura IT, redes, servidores y despliegue',
    requestCyber: 'Ciberseguridad y endurecimiento de sistemas',
    requestAudit: 'Auditoría técnica, consultoría y acompañamiento SI',
    requestMaintenance: 'Mantenimiento, soporte y supervisión',
    requestTraining: 'Formación y transferencia de competencias',
    requestQuote: 'Solicitud de presupuesto detallado',
    requestPartnership: 'Alianza o colaboración a largo plazo',
    requestOther: 'Otra solicitud (precisar en el mensaje)'
  },
  pt: {
    requestPlaceholder: '— Selecione um serviço —',
    requestDevWeb: 'Desenvolvimento web e móvel (site, aplicação)',
    requestSiEngineer: 'Engenheiro / prestação em sistemas de informação (SI)',
    requestSoftwareEng: 'Engenharia de software — arquitetura, APIs, apps de negócio',
    requestAi: 'Inteligência artificial (ML, visão, automatização)',
    requestInfra: 'Infraestrutura IT, redes, servidores e implantação',
    requestCyber: 'Cibersegurança e reforço de sistemas',
    requestAudit: 'Auditoria técnica, consultoria e acompanhamento SI',
    requestMaintenance: 'Manutenção, suporte e supervisão',
    requestTraining: 'Formação e transferência de competências',
    requestQuote: 'Pedido de orçamento detalhado',
    requestPartnership: 'Parceria ou colaboração de longo prazo',
    requestOther: 'Outro pedido (especificar na mensagem)'
  },
  sw: {
    requestPlaceholder: '— Chagua huduma —',
    requestDevWeb: 'Maendeleo ya wavuti na simu (tovuti, programu)',
    requestSiEngineer: 'Mhandisi / huduma za mifumo ya habari (SI)',
    requestSoftwareEng: 'Uhandisi wa programu — usanifu, API, programu za biashara',
    requestAi: 'Akili bandia (ML, maono, uotomatishaji)',
    requestInfra: 'Miundombinu ya IT, mitandao, seva na usambazaji',
    requestCyber: 'Usalama wa mtandao na uimarishaji wa mifumo',
    requestAudit: 'Ukaguzi wa kiufundi, ushauri na mwongozo wa SI',
    requestMaintenance: 'Matengenezo, msaada na ufuatiliaji',
    requestTraining: 'Mafunzo na uhamisho wa ujuzi',
    requestQuote: 'Ombi la bei ya kina',
    requestPartnership: 'Ushirikiano wa muda mrefu',
    requestOther: 'Ombi lingine (eleza katika ujumbe)'
  },
  zh: {
    requestPlaceholder: '— 选择服务类型 —',
    requestDevWeb: 'Web 与移动开发（网站、应用）',
    requestSiEngineer: '信息系统（SI）工程师 / 服务',
    requestSoftwareEng: '软件工程 — 架构、API、业务应用',
    requestAi: '人工智能（机器学习、视觉、自动化）',
    requestInfra: 'IT 基础设施、网络、服务器与部署',
    requestCyber: '网络安全与系统加固',
    requestAudit: '技术审计、咨询与 SI 指导',
    requestMaintenance: '维护、支持与监控',
    requestTraining: '培训与知识转移',
    requestQuote: '详细报价请求',
    requestPartnership: '长期合作或伙伴关系',
    requestOther: '其他需求（请在留言中说明）'
  },
  ja: {
    requestPlaceholder: '— サービスを選択 —',
    requestDevWeb: 'Web・モバイル開発（サイト、アプリ）',
    requestSiEngineer: '情報システム（SI）エンジニア／サービス',
    requestSoftwareEng: 'ソフトウェア工学 — 設計、API、業務アプリ',
    requestAi: '人工知能（ML、画像認識、自動化）',
    requestInfra: 'ITインフラ、ネットワーク、サーバー、デプロイ',
    requestCyber: 'サイバーセキュリティとシステム強化',
    requestAudit: '技術監査、コンサルティング、SI支援',
    requestMaintenance: '保守、サポート、監視',
    requestTraining: '研修・スキル移転',
    requestQuote: '詳細見積依頼',
    requestPartnership: '長期パートナーシップ',
    requestOther: 'その他（メッセージに記載）'
  },
  ru: {
    requestPlaceholder: '— Выберите услугу —',
    requestDevWeb: 'Веб и мобильная разработка (сайт, приложение)',
    requestSiEngineer: 'Инженер / услуги информационных систем (ИС)',
    requestSoftwareEng: 'Программная инженерия — архитектура, API, бизнес-приложения',
    requestAi: 'Искусственный интеллект (ML, зрение, автоматизация)',
    requestInfra: 'IT-инфраструктура, сети, серверы и развёртывание',
    requestCyber: 'Кибербезопасность и усиление систем',
    requestAudit: 'Технический аудит, консалтинг и сопровождение ИС',
    requestMaintenance: 'Сопровождение, поддержка и мониторинг',
    requestTraining: 'Обучение и передача знаний',
    requestQuote: 'Запрос детальной сметы',
    requestPartnership: 'Партнёрство или долгосрочное сотрудничество',
    requestOther: 'Другое (уточните в сообщении)'
  },
  hi: {
    requestPlaceholder: '— सेवा चुनें —',
    requestDevWeb: 'वेब और मोबाइल विकास (साइट, ऐप)',
    requestSiEngineer: 'सूचना प्रणाली (SI) इंजीनियर / सेवाएँ',
    requestSoftwareEng: 'सॉफ्टवेयर इंजीनियरिंग — आर्किटेक्चर, API, व्यावसायिक ऐप',
    requestAi: 'कृत्रिम बुद्धिमत्ता (ML, विज़न, ऑटोमेशन)',
    requestInfra: 'IT इन्फ्रास्ट्रक्चर, नेटवर्क, सर्वर और डिप्लॉयमेंट',
    requestCyber: 'साइबर सुरक्षा और सिस्टम हार्डनिंग',
    requestAudit: 'तकनीकी ऑडिट, परामर्श और SI मार्गदर्शन',
    requestMaintenance: 'रखरखाव, समर्थन और निगरानी',
    requestTraining: 'प्रशिक्षण और ज्ञान हस्तांतरण',
    requestQuote: 'विस्तृत कोटेशन अनुरोध',
    requestPartnership: 'दीर्घकालिक साझेदारी',
    requestOther: 'अन्य (संदेश में बताएँ)'
  },
  ar: {
    requestPlaceholder: '— اختر خدمة —',
    requestDevWeb: 'تطوير الويب والجوال (موقع، تطبيق)',
    requestSiEngineer: 'مهندس / خدمات نظم المعلومات (SI)',
    requestSoftwareEng: 'هندسة البرمجيات — هندسة، واجهات برمجة، تطبيقات أعمال',
    requestAi: 'الذكاء الاصطناعي (تعلم آلي، رؤية، أتمتة)',
    requestInfra: 'بنية تحتية IT، شبكات، خوادم ونشر',
    requestCyber: 'الأمن السيبراني وتقوية الأنظمة',
    requestAudit: 'تدقيق تقني، استشارات ومرافقة SI',
    requestMaintenance: 'صيانة، دعم ومراقبة',
    requestTraining: 'تدريب ونقل المعرفة',
    requestQuote: 'طلب عرض سعر مفصل',
    requestPartnership: 'شراكة أو تعاون طويل الأمد',
    requestOther: 'طلب آخر (يُحدد في الرسالة)'
  }
};

const packs = {
  es: {
    hero: { ctaContact: 'Contactar', ctaProjects: 'Proyectos realizados', ctaProjectsDesc: 'Apps desplegadas', ctaOngoing: 'Proyectos en curso', ctaOngoingDesc: 'Desarrollos activos', ctaSkills: 'Mis competencias', ctaSkillsDesc: 'SI, desarrollo, redes e IA', scrollHint: 'Explorar' },
    projects: { title: 'Proyectos', lead: 'Realizaciones, obras en curso e innovación.', tabDone: 'Realizados', tabOngoing: 'En curso', tabFuture: 'Horizonte', statusDone: 'Realizado', statusOngoing: 'En curso', ongoingLead: 'Soluciones en desarrollo o despliegue.', filterAll: 'Todos', filterWeb: 'Web y móvil', filterNetwork: 'Red', filterDevops: 'Infraestructura', sealedLabel: 'Vista previa', revealCta: 'Abrir dossier', demo: 'Demostración', zoomHint: 'Clic en la imagen para ampliar', zoomReset: '100%', zoomIn: 'Ampliar', zoomOut: 'Reducir' },
    skills: { title: 'Ámbitos de competencia', lead: 'Competencias transversales — especialización en SI.', levelLabel: 'Nivel de dominio' },
    skillItems: en.skillItems,
    skillStacks: en.skillStacks,
    experience: { title: 'Experiencia profesional', lead: 'Trayectoria desde 2022 hasta hoy.', present: 'Hoy' },
    experienceItems: { si: { title: 'Ingeniero en sistemas de información', org: 'Lubumbashi · RDC', desc: 'Análisis, arquitectura, integración y mantenimiento de soluciones SI.' }, dev: { title: 'Desarrollo web y móvil', org: 'Proyectos clientes y soluciones propias', desc: 'Apps web y móviles, APIs REST e interfaces integradas al SI.' }, infra: { title: 'Redes e infraestructura', org: 'Cloud y servidores', desc: 'Administración de red, bases de datos, monitorización y hosting.' }, freelance: { title: 'Consultoría y formación', org: 'Misiones independientes', desc: 'Soporte técnico, despliegue y formación IT.' } },
    contact: { title: 'Contacto', lead: 'Persona física o jurídica — formulario profesional.', whatsapp: 'WhatsApp', whatsappHint: 'Respuesta rápida', phone: 'Teléfono', email: 'Correo', formTitle: 'Dossier de contacto', formLead: 'Formulario según su estatus. Campos * obligatorios.', typePhysical: 'Persona física', typePhysicalDesc: 'Particular, autónomo, estudiante', typeMoral: 'Persona jurídica', typeMoralDesc: 'Empresa, ONG, administración', sectionIdentity: 'Identidad', sectionOrganization: 'Organización', sectionRepresentative: 'Representante', sectionRequest: 'Su solicitud', firstName: 'Nombre', lastName: 'Apellidos', companyName: 'Razón social', legalForm: 'Forma jurídica', legalFormPlaceholder: '— Seleccionar —', legalSarl: 'SRL / SL', legalSa: 'SA', legalAsbl: 'ONG / sin ánimo de lucro', legalPublic: 'Entidad pública', legalOther: 'Otra', companyId: 'N° registro', repName: 'Representante', repRole: 'Cargo', formEmail: 'Correo', formPhone: 'Teléfono', requestType: 'Naturaleza de la solicitud', formSubject: 'Asunto', formMessage: 'Mensaje detallado', formSubmit: 'Enviar solicitud', assertionsTitle: 'Declaraciones obligatorias', assertAccuracy: 'Certifico que la información es exacta y completa.', assertPrivacy: 'Acepto el tratamiento confidencial de mis datos para responder a mi solicitud.', assertFollowup: 'Autorizo seguimiento por correo o teléfono.', errorRequired: 'Campo obligatorio', errorEmail: 'Correo inválido', mailHeader: 'SOLICITUD DE CONTACTO', mailType: 'Tipo', mailFooter: 'Enviado desde el portfolio K. Makina Edvais', ...contactRequests.es },
    notifications: { langChanged: 'Idioma actualizado', formSent: 'Solicitud preparada — abra su correo', formInvalid: 'Complete los campos obligatorios.' },
    future: en.future,
    projectItems: en.projectItems
  },
  pt: {
    hero: { ctaContact: 'Contactar', ctaProjects: 'Projetos realizados', ctaProjectsDesc: 'Apps em produção', ctaOngoing: 'Projetos em curso', ctaOngoingDesc: 'Desenvolvimentos ativos', ctaSkills: 'As minhas competências', ctaSkillsDesc: 'SI, desenvolvimento, redes e IA', scrollHint: 'Explorar' },
    projects: { title: 'Projetos', lead: 'Realizações, obras em curso e inovação.', tabDone: 'Realizados', tabOngoing: 'Em curso', tabFuture: 'Horizonte', statusDone: 'Concluído', statusOngoing: 'Em curso', ongoingLead: 'Soluções em desenvolvimento ou implantação.', filterAll: 'Todos', filterWeb: 'Web e móvel', filterNetwork: 'Rede', filterDevops: 'Infraestrutura', sealedLabel: 'Pré-visualização', revealCta: 'Abrir dossier', demo: 'Demonstração' },
    skills: { title: 'Domínios de competência', lead: 'Competências transversais — especialização em SI.', levelLabel: 'Nível de domínio' },
    skillItems: en.skillItems,
    skillStacks: en.skillStacks,
    experience: { title: 'Experiência profissional', lead: 'Percurso desde 2022 até hoje.', present: 'Hoje' },
    experienceItems: { si: { title: 'Engenheiro de sistemas de informação', org: 'Lubumbashi · RDC', desc: 'Análise, arquitetura, integração e manutenção de soluções SI.' }, dev: { title: 'Desenvolvimento web e móvel', org: 'Projetos de clientes', desc: 'Apps web e móveis, APIs REST e ferramentas SI.' }, infra: { title: 'Redes e infraestrutura', org: 'Cloud e servidores', desc: 'Administração de rede, bases de dados e hosting.' }, freelance: { title: 'Consultoria e formação', org: 'Missões independentes', desc: 'Suporte técnico, implantação e formação.' } },
    contact: { title: 'Contacto', lead: 'Pessoa singular ou coletiva — formulário profissional.', whatsapp: 'WhatsApp', whatsappHint: 'Resposta rápida', phone: 'Telefone', email: 'E-mail', formTitle: 'Dossier de contacto', formLead: 'Formulário conforme o seu estatuto.', typePhysical: 'Pessoa singular', typePhysicalDesc: 'Particular, freelancer', typeMoral: 'Pessoa coletiva', typeMoralDesc: 'Empresa, ONG, administração', sectionIdentity: 'Identidade', sectionOrganization: 'Organização', sectionRepresentative: 'Representante', sectionRequest: 'O seu pedido', firstName: 'Nome', lastName: 'Apelido', companyName: 'Denominação social', legalForm: 'Forma jurídica', legalFormPlaceholder: '— Selecionar —', legalSarl: 'Lda', legalSa: 'SA', legalAsbl: 'ONG', legalPublic: 'Entidade pública', legalOther: 'Outra', companyId: 'N° registo', repName: 'Representante', repRole: 'Função', formEmail: 'E-mail', formPhone: 'Telefone', requestType: 'Natureza do pedido', formSubject: 'Assunto', formMessage: 'Mensagem detalhada', formSubmit: 'Enviar pedido', assertionsTitle: 'Declarações obrigatórias', assertAccuracy: 'Certifico que a informação é exata e completa.', assertPrivacy: 'Aceito o tratamento confidencial dos meus dados.', assertFollowup: 'Autorizo recontacto por e-mail ou telefone.', errorRequired: 'Campo obrigatório', errorEmail: 'E-mail inválido', mailHeader: 'PEDIDO DE CONTACTO', mailType: 'Tipo', mailFooter: 'Enviado do portfolio K. Makina Edvais', ...contactRequests.pt },
    notifications: { langChanged: 'Idioma atualizado', formSent: 'Pedido preparado — abra o seu e-mail', formInvalid: 'Preencha os campos obrigatórios.' },
    future: en.future,
    projectItems: en.projectItems
  },
  sw: {
    hero: { ctaContact: 'Wasiliana', ctaProjects: 'Miradi yaliyokamilika', ctaProjectsDesc: 'Programu zilizowekwa', ctaOngoing: 'Miradi inayoendelea', ctaOngoingDesc: 'Maendeleo hai', ctaSkills: 'Ujuzi wangu', ctaSkillsDesc: 'SI, maendeleo, mitandao na AI', scrollHint: 'Chunguza' },
    projects: { title: 'Miradi', lead: 'Yaliyokamilika, yanayoendelea na maono.', tabDone: 'Yaliyokamilika', tabOngoing: 'Inaendelea', tabFuture: 'Horizon', statusDone: 'Imekamilika', statusOngoing: 'Inaendelea', ongoingLead: 'Suluhisho zinazoendelea.', filterAll: 'Yote', filterWeb: 'Wavuti na simu', filterNetwork: 'Mtandao', filterDevops: 'Miundombinu', sealedLabel: 'Hakiki', revealCta: 'Fungua', demo: 'Onyesho' },
    skills: { title: 'Maeneo ya utaalamu', lead: 'Ujuzi mpana — lengo SI.', levelLabel: 'Kiwango cha ujuzi' },
    skillItems: en.skillItems,
    skillStacks: en.skillStacks,
    experience: { title: 'Uzoefu wa kitaaluma', lead: 'Tangu 2022 hadi leo.', present: 'Leo' },
    experienceItems: { si: { title: 'Mhandisi wa mifumo ya habari', org: 'Lubumbashi · DRC', desc: 'Uchambuzi, usanifu na matengenezo ya suluhisho SI.' }, dev: { title: 'Maendeleo ya wavuti na simu', org: 'Miradi ya wateja', desc: 'Programu za wavuti, API na zana za SI.' }, infra: { title: 'Mitandao na miundombinu', org: 'Wingu na seva', desc: 'Usimamizi wa mtandao, hifadhidata na hosting.' }, freelance: { title: 'Ushauri na mafunzo', org: 'Kazi huru', desc: 'Msaada wa kiufundi na mafunzo.' } },
    contact: { title: 'Wasiliana', lead: 'Mtu binafsi au shirika — fomu ya kitaaluma.', whatsapp: 'WhatsApp', whatsappHint: 'Jibu la haraka', phone: 'Simu', email: 'Barua pepe', formTitle: 'Dossier ya mawasiliano', formLead: 'Fomu kulingana na hali yako.', typePhysical: 'Mtu binafsi', typePhysicalDesc: 'Mtu binafsi, mfanyakazi huru', typeMoral: 'Shirika', typeMoralDesc: 'Kampuni, NGO, serikali', sectionIdentity: 'Utambulisho', sectionOrganization: 'Shirika', sectionRepresentative: 'Mwakilishi', sectionRequest: 'Ombi lako', firstName: 'Jina', lastName: 'Jina la ukoo', companyName: 'Jina la shirika', legalForm: 'Aina ya shirika', legalFormPlaceholder: '— Chagua —', legalSarl: 'Kampuni ndogo', legalSa: 'Kampuni kubwa', legalAsbl: 'NGO', legalPublic: 'Taasisi ya umma', legalOther: 'Nyingine', companyId: 'Nambari ya usajili', repName: 'Mwakilishi', repRole: 'Wajibu', formEmail: 'Barua pepe', formPhone: 'Simu', requestType: 'Aina ya ombi', formSubject: 'Mada', formMessage: 'Ujumbe wa kina', formSubmit: 'Tuma ombi', assertionsTitle: 'Tamko lazima', assertAccuracy: 'Nathibitisha taarifa ni sahihi.', assertPrivacy: 'Nakubali matumizi ya data kwa siri.', assertFollowup: 'Ninaruhusu mawasiliano ya ufuatiliaji.', errorRequired: 'Sehemu inahitajika', errorEmail: 'Barua pepe si sahihi', mailHeader: 'OMBI LA MAWASILIANO', mailType: 'Aina', mailFooter: 'Kutoka portfolio K. Makina Edvais', ...contactRequests.sw },
    notifications: { langChanged: 'Lugha imesasishwa', formSent: 'Ombi limeandaliwa', formInvalid: 'Kamilisha sehemu zinazohitajika.' },
    future: en.future,
    projectItems: en.projectItems
  },
  zh: {
    hero: { ctaContact: '联系', ctaProjects: '已完成项目', ctaProjectsDesc: '已部署应用', ctaOngoing: '进行中项目', ctaOngoingDesc: '活跃开发', ctaSkills: '我的能力', ctaSkillsDesc: '信息系统、开发、网络与 AI', scrollHint: '浏览' },
    projects: { title: '项目', lead: '已完成、进行中与创新路线。', tabDone: '已完成', tabOngoing: '进行中', tabFuture: '展望', statusDone: '已完成', statusOngoing: '进行中', ongoingLead: '正在开发或部署的解决方案。', filterAll: '全部', filterWeb: 'Web 与移动', filterNetwork: '网络', filterDevops: '基础设施', sealedLabel: '预览', revealCta: '打开', demo: '演示' },
    skills: { title: '专业领域', lead: '综合能力 — 专注信息系统。', levelLabel: '掌握程度' },
    skillItems: en.skillItems,
    skillStacks: en.skillStacks,
    experience: { title: '职业经历', lead: '自 2022 年至今。', present: '至今' },
    experienceItems: { si: { title: '信息系统工程师', org: '卢本巴希 · 刚果（金）', desc: '需求分析、架构、集成与信息系统维护。' }, dev: { title: 'Web 与移动开发', org: '客户与自有项目', desc: 'Web/移动应用、REST API 与业务工具。' }, infra: { title: '网络与基础设施', org: '云与服务器', desc: '网络管理、数据库、监控与托管。' }, freelance: { title: '咨询与培训', org: '独立任务', desc: '技术支持、部署与 IT 培训。' } },
    contact: { title: '联系', lead: '自然人或法人 — 专业联系表。', whatsapp: 'WhatsApp', whatsappHint: '快速回复', phone: '电话', email: '电子邮件', formTitle: '联系档案', formLead: '请按身份填写，标 * 为必填。', typePhysical: '自然人', typePhysicalDesc: '个人、自由职业者', typeMoral: '法人', typeMoralDesc: '企业、NGO、机构', sectionIdentity: '身份', sectionOrganization: '组织', sectionRepresentative: '代表', sectionRequest: '您的需求', firstName: '名', lastName: '姓', companyName: '法人名称', legalForm: '法律形式', legalFormPlaceholder: '— 选择 —', legalSarl: '有限责任公司', legalSa: '股份公司', legalAsbl: '非营利', legalPublic: '公共机构', legalOther: '其他', companyId: '注册号', repName: '代表姓名', repRole: '职务', formEmail: '邮箱', formPhone: '电话', requestType: '需求性质', formSubject: '主题', formMessage: '详细留言', formSubmit: '提交', assertionsTitle: '必填声明', assertAccuracy: '本人确认信息真实完整。', assertPrivacy: '同意为回复本请求而保密处理数据。', assertFollowup: '同意通过邮件或电话跟进。', errorRequired: '必填', errorEmail: '邮箱无效', mailHeader: '联系请求', mailType: '类型', mailFooter: '来自 K. Makina Edvais 作品集', ...contactRequests.zh },
    notifications: { langChanged: '语言已更新', formSent: '请求已准备 — 请打开邮件客户端', formInvalid: '请填写必填项。' },
    future: en.future,
    projectItems: en.projectItems
  },
  ja: {
    hero: { ctaContact: 'お問い合わせ', ctaProjects: '完了プロジェクト', ctaProjectsDesc: '本番アプリ', ctaOngoing: '進行中プロジェクト', ctaOngoingDesc: '開発・展開中', ctaSkills: 'スキル', ctaSkillsDesc: 'SI、開発、ネットワーク、AI', scrollHint: '探索' },
    projects: { title: 'プロジェクト', lead: '完了・進行中・将来構想。', tabDone: '完了', tabOngoing: '進行中', tabFuture: 'Horizon', statusDone: '完了', statusOngoing: '進行中', ongoingLead: '開発または展開中のソリューション。', filterAll: 'すべて', filterWeb: 'Web・モバイル', filterNetwork: 'ネットワーク', filterDevops: 'インフラ', sealedLabel: 'プレビュー', revealCta: '開く', demo: 'デモ' },
    skills: { title: '専門領域', lead: '横断的スキル — SI が中心。', levelLabel: '習熟度' },
    skillItems: en.skillItems,
    skillStacks: en.skillStacks,
    experience: { title: '職務経歴', lead: '2022年から現在まで。', present: '現在' },
    experienceItems: { si: { title: '情報システムエンジニア', org: 'ルブンバシ · DRC', desc: '要件分析、設計、統合、SIソリューションの保守。' }, dev: { title: 'Web・モバイル開発', org: 'クライアント・自社', desc: 'Web/モバイルアプリ、REST API、業務ツール。' }, infra: { title: 'ネットワーク・インフラ', org: 'クラウド・サーバー', desc: 'ネットワーク管理、DB、監視、ホスティング。' }, freelance: { title: 'コンサル・研修', org: '独立案件', desc: '技術支援、展開、IT研修。' } },
    contact: { title: '連絡', lead: '自然人または法人 — プロ用フォーム。', whatsapp: 'WhatsApp', whatsappHint: '迅速な返信', phone: '電話', email: 'メール', formTitle: '連絡フォーム', formLead: 'ステータスに応じて入力。* は必須。', typePhysical: '自然人', typePhysicalDesc: '個人・フリーランス', typeMoral: '法人', typeMoralDesc: '企業・NGO・公的機関', sectionIdentity: '身元', sectionOrganization: '組織', sectionRepresentative: '代表者', sectionRequest: 'ご依頼', firstName: '名', lastName: '姓', companyName: '法人名', legalForm: '法人格', legalFormPlaceholder: '— 選択 —', legalSarl: 'LLC', legalSa: '株式会社', legalAsbl: 'NPO', legalPublic: '公的機関', legalOther: 'その他', companyId: '登録番号', repName: '代表者名', repRole: '役職', formEmail: 'メール', formPhone: '電話', requestType: '依頼の性質', formSubject: '件名', formMessage: '詳細', formSubmit: '送信', assertionsTitle: '必須宣言', assertAccuracy: '情報が正確であることを証明します。', assertPrivacy: '回答目的での秘密処理に同意します。', assertFollowup: 'フォローアップ連絡を許可します。', errorRequired: '必須項目', errorEmail: 'メールが無効', mailHeader: 'お問い合わせ', mailType: '種別', mailFooter: 'K. Makina Edvais ポートフォリオより', ...contactRequests.ja },
    notifications: { langChanged: '言語を更新しました', formSent: '送信準備完了 — メールを開いてください', formInvalid: '必須項目を入力してください。' },
    future: en.future,
    projectItems: en.projectItems
  },
  ru: {
    hero: { ctaContact: 'Связаться', ctaProjects: 'Реализованные проекты', ctaProjectsDesc: 'Развёрнутые приложения', ctaOngoing: 'Текущие проекты', ctaOngoingDesc: 'Активная разработка', ctaSkills: 'Мои компетенции', ctaSkillsDesc: 'ИС, разработка, сети и ИИ', scrollHint: 'Обзор' },
    projects: { title: 'Проекты', lead: 'Завершённые, текущие и планы.', tabDone: 'Реализованные', tabOngoing: 'В работе', tabFuture: 'Горизонт', statusDone: 'Готово', statusOngoing: 'В работе', ongoingLead: 'Решения в разработке или внедрении.', filterAll: 'Все', filterWeb: 'Web и мобильные', filterNetwork: 'Сеть', filterDevops: 'Инфраструктура', sealedLabel: 'Просмотр', revealCta: 'Открыть', demo: 'Демо' },
    skills: { title: 'Области компетенций', lead: 'Широкий профиль — фокус на ИС.', levelLabel: 'Уровень владения' },
    skillItems: en.skillItems,
    skillStacks: en.skillStacks,
    experience: { title: 'Профессиональный опыт', lead: 'С 2022 года по настоящее время.', present: 'Настоящее время' },
    experienceItems: { si: { title: 'Инженер информационных систем', org: 'Лубумбаши · ДР Конго', desc: 'Анализ, архитектура, интеграция и сопровождение ИС.' }, dev: { title: 'Web и мобильная разработка', org: 'Проекты заказчиков', desc: 'Приложения, REST API, интерфейсы для ИС.' }, infra: { title: 'Сети и инфраструктура', org: 'Облако и серверы', desc: 'Администрирование сетей, БД, мониторинг, хостинг.' }, freelance: { title: 'Консалтинг и обучение', org: 'Самостоятельные заказы', desc: 'Техподдержка, внедрение, обучение.' } },
    contact: { title: 'Контакты', lead: 'Физическое или юридическое лицо — профессиональная форма.', whatsapp: 'WhatsApp', whatsappHint: 'Быстрый ответ', phone: 'Телефон', email: 'Эл. почта', formTitle: 'Контактное досье', formLead: 'Форма по вашему статусу. * — обязательно.', typePhysical: 'Физическое лицо', typePhysicalDesc: 'Частное лицо, фрилансер', typeMoral: 'Юридическое лицо', typeMoralDesc: 'Компания, НКО, госорган', sectionIdentity: 'Личные данные', sectionOrganization: 'Организация', sectionRepresentative: 'Представитель', sectionRequest: 'Запрос', firstName: 'Имя', lastName: 'Фамилия', companyName: 'Наименование', legalForm: 'Орг.-правовая форма', legalFormPlaceholder: '— Выбрать —', legalSarl: 'ООО', legalSa: 'АО', legalAsbl: 'НКО', legalPublic: 'Госучреждение', legalOther: 'Другое', companyId: 'Рег. номер', repName: 'Представитель', repRole: 'Должность', formEmail: 'Email', formPhone: 'Телефон', requestType: 'Характер запроса', formSubject: 'Тема', formMessage: 'Подробное сообщение', formSubmit: 'Отправить', assertionsTitle: 'Обязательные заявления', assertAccuracy: 'Подтверждаю точность данных.', assertPrivacy: 'Согласен на конфиденциальную обработку данных.', assertFollowup: 'Разрешаю связь для уточнений.', errorRequired: 'Обязательное поле', errorEmail: 'Неверный email', mailHeader: 'ЗАПРОС КОНТАКТА', mailType: 'Тип', mailFooter: 'С портфолио K. Makina Edvais', ...contactRequests.ru },
    notifications: { langChanged: 'Язык обновлён', formSent: 'Запрос подготовлен — откройте почту', formInvalid: 'Заполните обязательные поля.' },
    future: en.future,
    projectItems: en.projectItems
  },
  hi: {
    hero: { ctaContact: 'संपर्क', ctaProjects: 'पूर्ण परियोजनाएँ', ctaProjectsDesc: 'लाइव ऐप', ctaOngoing: 'चल रही परियोजनाएँ', ctaOngoingDesc: 'सक्रिय विकास', ctaSkills: 'मेरे कौशल', ctaSkillsDesc: 'SI, विकास, नेटवर्क और AI', scrollHint: 'देखें' },
    projects: { title: 'परियोजनाएँ', lead: 'पूर्ण, चल रही और नवाचार।', tabDone: 'पूर्ण', tabOngoing: 'चल रही', tabFuture: 'क्षितिज', statusDone: 'पूर्ण', statusOngoing: 'चल रही', ongoingLead: 'विकास या तैनाती में।', filterAll: 'सभी', filterWeb: 'वेब और मोबाइल', filterNetwork: 'नेटवर्क', filterDevops: 'इन्फ्रास्ट्रक्चर', sealedLabel: 'पूर्वावलोकन', revealCta: 'खोलें', demo: 'डेमो' },
    skills: { title: 'क्षेत्रों में दक्षता', lead: 'व्यापक कौशल — SI केंद्र।', levelLabel: 'प्रवीणता स्तर' },
    skillItems: en.skillItems,
    skillStacks: en.skillStacks,
    experience: { title: 'व्यावसायिक अनुभव', lead: '2022 से आज तक।', present: 'वर्तमान' },
    experienceItems: { si: { title: 'सूचना प्रणाली इंजीनियर', org: 'लुबुम्बाशी · डीआर कांगो', desc: 'विश्लेषण, आर्किटेक्चर, एकीकरण और SI रखरखाव।' }, dev: { title: 'वेब और मोबाइल विकास', org: 'ग्राहक परियोजनाएँ', desc: 'ऐप, REST API, व्यावसायिक उपकरण।' }, infra: { title: 'नेटवर्क और इन्फ्रास्ट्रक्चर', org: 'क्लाउड और सर्वर', desc: 'नेटवर्क प्रशासन, DB, मॉनिटरिंग, होस्टिंग।' }, freelance: { title: 'परामर्श और प्रशिक्षण', org: 'स्वतंत्र', desc: 'तकनीकी सहायता, तैनाती, प्रशिक्षण।' } },
    contact: { title: 'संपर्क', lead: 'व्यक्ति या संस्था — पेशेवर फ़ॉर्म।', whatsapp: 'WhatsApp', whatsappHint: 'त्वरित उत्तर', phone: 'फ़ोन', email: 'ईमेल', formTitle: 'संपर्क दस्तावेज़', formLead: 'स्थिति के अनुसार भरें। * अनिवार्य।', typePhysical: 'प्राकृतिक व्यक्ति', typePhysicalDesc: 'व्यक्ति, फ्रीलांसर', typeMoral: 'कानूनी इकाई', typeMoralDesc: 'कंपनी, NGO, सार्वजनिक', sectionIdentity: 'पहचान', sectionOrganization: 'संगठन', sectionRepresentative: 'प्रतिनिधि', sectionRequest: 'आपका अनुरोध', firstName: 'नाम', lastName: 'उपनाम', companyName: 'कानूनी नाम', legalForm: 'कानूनी रूप', legalFormPlaceholder: '— चुनें —', legalSarl: 'LLC', legalSa: 'निगम', legalAsbl: 'NGO', legalPublic: 'सार्वजनिक', legalOther: 'अन्य', companyId: 'पंजीकरण', repName: 'प्रतिनिधि', repRole: 'पद', formEmail: 'ईमेल', formPhone: 'फ़ोन', requestType: 'अनुरोध का प्रकार', formSubject: 'विषय', formMessage: 'विस्तृत संदेश', formSubmit: 'भेजें', assertionsTitle: 'अनिवार्य घोषणाएँ', assertAccuracy: 'मैं जानकारी सही होने की पुष्टि करता/करती हूँ।', assertPrivacy: 'गोपनीय प्रसंस्करण स्वीकार है।', assertFollowup: 'फॉलो-अप संपर्क की अनुमति है।', errorRequired: 'अनिवार्य', errorEmail: 'अमान्य ईमेल', mailHeader: 'संपर्क अनुरोध', mailType: 'प्रकार', mailFooter: 'K. Makina Edvais पोर्टफोलियो से', ...contactRequests.hi },
    notifications: { langChanged: 'भाषा अपडेट', formSent: 'अनुरोध तैयार — ईमेल खोलें', formInvalid: 'अनिवार्य फ़ील्ड भरें।' },
    future: en.future,
    projectItems: en.projectItems
  },
  ar: {
    hero: { ctaContact: 'تواصل', ctaProjects: 'المشاريع المنجزة', ctaProjectsDesc: 'تطبيقات منشورة', ctaOngoing: 'مشاريع جارية', ctaOngoingDesc: 'تطوير نشط', ctaSkills: 'كفاءاتي', ctaSkillsDesc: 'SI، تطوير، شبكات وذكاء اصطناعي', scrollHint: 'استكشف' },
    projects: { title: 'المشاريع', lead: 'منجزة، جارية ومستقبلية.', tabDone: 'منجزة', tabOngoing: 'جارية', tabFuture: 'أفق', statusDone: 'منجز', statusOngoing: 'جاري', ongoingLead: 'حلول قيد التطوير أو النشر.', filterAll: 'الكل', filterWeb: 'ويب وجوال', filterNetwork: 'شبكة', filterDevops: 'بنية تحتية', sealedLabel: 'معاينة', revealCta: 'فتح', demo: 'عرض' },
    skills: { title: 'مجالات الكفاءة', lead: 'كفاءات متنوعة — تركيز على SI.', levelLabel: 'مستوى الإتقان' },
    skillItems: en.skillItems,
    skillStacks: en.skillStacks,
    experience: { title: 'المسار المهني', lead: 'من 2022 حتى اليوم.', present: 'اليوم' },
    experienceItems: { si: { title: 'مهندس نظم المعلومات', org: 'لوبومباشي · ج.ك.د', desc: 'تحليل، هندسة، تكامل وصيانة حلول SI.' }, dev: { title: 'تطوير الويب والجوال', org: 'مشاريع العملاء', desc: 'تطبيقات، REST API وأدوات أعمال.' }, infra: { title: 'الشبكات والبنية التحتية', org: 'سحابة وخوادم', desc: 'إدارة الشبكات، قواعد البيانات والاستضافة.' }, freelance: { title: 'استشارات وتدريب', org: 'مهام مستقلة', desc: 'دعم تقني، نشر وتدريب.' } },
    contact: { title: 'التواصل', lead: 'شخص طبيعي أو اعتباري — نموذج مهني.', whatsapp: 'واتساب', whatsappHint: 'رد سريع', phone: 'هاتف', email: 'بريد', formTitle: 'ملف التواصل', formLead: 'نموذج حسب صفتكم. * إلزامي.', typePhysical: 'شخص طبيعي', typePhysicalDesc: 'فرد، مستقل', typeMoral: 'شخص اعتباري', typeMoralDesc: 'شركة، منظمة، جهة عامة', sectionIdentity: 'الهوية', sectionOrganization: 'المؤسسة', sectionRepresentative: 'الممثل', sectionRequest: 'طلبكم', firstName: 'الاسم', lastName: 'اللقب', companyName: 'الاسم القانوني', legalForm: 'الشكل القانوني', legalFormPlaceholder: '— اختر —', legalSarl: 'شركة ذات مسؤولية', legalSa: 'مساهمة', legalAsbl: 'منظمة', legalPublic: 'عامة', legalOther: 'أخرى', companyId: 'رقم التسجيل', repName: 'الممثل', repRole: 'الوظيفة', formEmail: 'البريد', formPhone: 'الهاتف', requestType: 'طبيعة الطلب', formSubject: 'الموضوع', formMessage: 'رسالة مفصلة', formSubmit: 'إرسال', assertionsTitle: 'إقرارات إلزامية', assertAccuracy: 'أقر بصحة المعلومات.', assertPrivacy: 'أوافق على المعالجة السرية لبياناتي.', assertFollowup: 'أسمح بالمتابعة عبر البريد أو الهاتف.', errorRequired: 'حقل إلزامي', errorEmail: 'بريد غير صالح', mailHeader: 'طلب تواصل', mailType: 'النوع', mailFooter: 'من portfolio K. Makina Edvais', ...contactRequests.ar },
    notifications: { langChanged: 'تم تحديث اللغة', formSent: 'تم تجهيز الطلب — افتح البريد', formInvalid: 'أكمل الحقول الإلزامية.' },
    future: en.future,
    projectItems: en.projectItems
  }
};

for (const code of Object.keys(packs)) {
  const file = path.join(dir, `${code}.json`);
  let base = {};
  try { base = JSON.parse(fs.readFileSync(file, 'utf8')); } catch { /* */ }
  const merged = deepMerge(deepMerge({}, en), base);
  deepMerge(merged, packs[code]);
  delete merged.projects?.repo;
  fs.writeFileSync(file, JSON.stringify(merged, null, 2) + '\n');
  console.log('OK', code);
}
