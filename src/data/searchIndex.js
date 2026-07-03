// 从 content.js 数据构建搜索索引
import {
  siteInfo, aboutContent, campusScenery, majorsContent,
  admissionsContent, lifeContent, guideContent, faqContent
} from './content';

const index = [];

function add(title, snippet, path, keywords) {
  index.push({ title, snippet, path, keywords: keywords.toLowerCase() });
}

// 学校概况
add(siteInfo.name, `公办本科院校，${siteInfo.motto}`, '/about', '邵阳学院 学校 大学 本科 校训');
add('办学历史', `始建于${siteInfo.founded}年`, '/about', '历史 建校 创办');
add('在校学生', `${siteInfo.students}人`, '/about', '学生 人数 规模');
add('教职工', `${siteInfo.faculty}人`, '/about', '老师 教师 教职工 师资');
add('本科专业数', `${siteInfo.majors}个本科专业`, '/majors', '专业 本科');
add('四大校区', `${siteInfo.campuses}个校区`, '/about', '校区 校园');

aboutContent.campuses.forEach(c => {
  add(c.name, c.description.substring(0, 50), '/about', `校区 ${c.name}`);
});
aboutContent.features.forEach(f => {
  add(f, '学校特色', '/about', `特色 ${f}`);
});

// 校园风光
campusScenery.landmarks.forEach(l => {
  add(l.name, l.description.substring(0, 50), '/campus', `建筑 风景 ${l.name}`);
});
add('花园式单位', '湖南省"花园式单位"，校园环境优美', '/campus', '花园 环境 绿化');

// 院系专业
majorsContent.categories.forEach(cat => {
  cat.colleges.forEach(col => {
    add(col.name, col.majors.join('、'), '/majors', `学院 专业 ${col.name} ${col.majors.join(' ')}`);
    col.majors.forEach(m => {
      add(m, `所属学院：${col.name}`, '/majors', `专业 ${m}`);
    });
  });
});
majorsContent.highlights.items.forEach(h => {
  add(h.label, h.value, '/majors', `重点 一流 特色 ${h.label} ${h.value}`);
});

// 招生信息
add('招生咨询电话', siteInfo.phone, '/admissions', '电话 招生 咨询 联系方式');
add('面向全国招生', '面向全国30个省（自治区、直辖市）招生', '/admissions', '招生 省份 全国');
admissionsContent.contact.items.forEach(item => {
  add(item.label, item.value, '/admissions', `招生 ${item.label} ${item.value}`);
});

// 校园生活
add('宿舍条件', '所有宿舍配备空调、热水、直饮水、洗衣机', '/life', '宿舍 住宿 空调 寝室');
lifeContent.dormitory.types.forEach(d => {
  add(d.type, `${d.fee}，${d.config}`, '/life', `宿舍 ${d.type}`);
});
lifeContent.canteen.highlights.forEach(h => {
  add(h, '食堂特色', '/life', '食堂 吃饭 伙食');
});
lifeContent.scholarship.items.forEach(s => {
  add(s.name, s.amount, '/life', `奖学金 助学金 ${s.name}`);
});

// 新生指南
guideContent.process.steps.forEach(s => {
  add(s.title, s.desc, '/guide', `报到 流程 ${s.title}`);
});
guideContent.checklist.categories.forEach(cat => {
  cat.items.forEach(item => {
    add(item, `属于${cat.name}`, '/guide', `清单 必备 ${cat.name} ${item}`);
  });
});
guideContent.warnings.items.forEach(w => {
  add(w, '防骗提醒', '/guide', '防骗 提醒 安全');
});
guideContent.messages.items.forEach(m => {
  add(`学长学姐寄语（${m.author}）`, m.text.substring(0, 60), '/guide', '寄语 学长 学姐');
});

// 常见问题
faqContent.questions.forEach(q => {
  add(q.q, q.a.substring(0, 60), '/faq', `问题 ${q.q} ${q.a}`);
});

// 学校地址
add('学校地址', siteInfo.location, '/about', '地址 位置 邵阳 在哪');

// 联系电话（首页）
add('咨询电话', '15364075803', '/', '电话 手机 联系');

export default index;
