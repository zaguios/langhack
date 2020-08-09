import React from 'react'

const characters = ["的", "是", "了", "就", "我", "你", "不", "在", "有", "会", "要", "说", "我们", "好", "这", "想", "一", "很", "人", "来", "个", "能", "去", "没", "知道", "吧", "那", "到", "上", "他", "都", "也", "过", "还", "给", "看", "把", "让", "对", "这个", "一个", "现在", "做", "什么", "真", "只", "着", "没有", "得", "和", "怎么", "可以", "他们", "事", "再", "呢", "点", "这样", "多", "太", "里", "用", "你们", "下", "走", "如果", "自己", "谁", "被", "因为", "听", "别", "告诉", "她", "时候", "从", "最", "啊", "已经", "出", "天", "大", "吗", "次", "这么", "为", "还有", "才", "为什么", "像", "话", "那个", "谢谢", "找", "可能", "又", "需要", "起来", "应该", "东西", "觉得", "这些", "两", "错", "干", "回", "更", "开始", "等", "快", "可", "那么", "所以", "一样", "时间", "而", "这里", "该", "就是", "一起", "拿", "喜欢", "见", "叫", "带", "问题", "小", "中", "但", "跟", "当", "它", "然后", "死", "希望", "当然", "一直", "帮", "前", "一下", "开", "看看", "所有", "相信", "看到", "打", "但是", "家", "还是", "行", "那些", "们", "几", "请", "年", "是的", "比", "起", "地方", "出来", "后", "今天", "回来", "明白", "朋友", "哦", "正", "些", "发生", "只是", "事情", "准备", "放", "哪", "一切", "一点", "爱", "时", "意思", "工作", "为了", "问", "怎么样", "一定", "件", "进", "孩子", "离开", "先生", "第一", "以为", "先", "所", "住", "认为", "吃", "找到", "肯定", "非常", "之前", "感觉", "抱歉", "而且", "发现", "新", "向", "并", "那样", "也许", "搞", "不要", "很多", "不错", "掉", "必须", "过来", "种", "一些", "这种", "最后", "将", "高兴", "地", "任何", "以", "嘿", "担心", "对不起", "成", "过去", "算", "三", "够", "生活", "手", "之", "记得", "下来", "坐", "不过", "等等", "其他", "继续", "那里", "以前", "或者", "送", "弄", "钱", "完", "却", "名字", "大家", "早", "长", "认识", "老", "重要", "完全", "别人", "车", "位", "刚", "嗯", "电话", "难", "只要", "这儿", "头", "机会", "买", "穿", "出去", "棒", "条", "得到", "小时", "变", "嘛", "嗨", "有人", "与", "马上", "不能", "总", "每", "到底", "妈妈", "来说", "杀", "关系", "喝", "好像", "接", "之后", "清楚", "根本", "真是", "玩", "结束", "留", "没什么", "情况", "女人", "多少", "月", "里面", "永远", "了解", "关于", "确定", "家伙", "另", "跑", "见到", "世界", "敢", "活", "如何", "分钟", "有些", "管", "帮助", "份", "说话", "谈", "张", "决定", "站", "唯一", "哪里", "写", "场", "岁", "愿意", "花", "明天", "总是", "受", "成为", "今晚", "定", "漂亮", "看见", "男人", "于", "打电话", "忙", "回家", "每个", "心", "原因", "停", "可是", "晚上", "谈谈", "从来", "以后", "爸爸", "本", "哪儿", "听说", "晚", "再见", "坏", "好好", "连", "办法", "上帝", "不管", "只有", "妈", "第", "出现", "回去", "亲爱", "身上", "至少", "保证", "消息", "怎样", "全", "女孩", "久", "如此", "感谢", "接受", "看来", "下去", "甚至", "注意", "噢", "此", "忘", "进来", "名", "者", "麻烦", "求", "门", "真正", "高", "特别", "集", "俩", "人们", "那儿", "远", "怎么办", "无法", "女士", "女", "宝贝", "季", "计划", "整个", "选择", "改变", "听到", "伙计", "试", "嘴", "正在", "块", "抓", "呃", "离", "其实", "安全", "确实", "第二", "衣服", "动", "挺", "换", "倒", "猜", "进去", "它们", "打算", "句", "无", "小心", "别的", "结果", "闭", "号", "么", "之间", "周", "绝对", "刚刚", "拜托", "段", "啦", "美国", "欢迎", "除了", "主意", "有点", "睡", "参加", "哇", "疯", "处理", "那边", "您", "或", "发", "刚才", "感到", "考虑", "变成", "失去", "懂", "少", "关", "奇怪", "想到", "解释", "父亲", "路", "最近", "水", "杯", "如", "帮忙", "作为", "医生", "当时", "讲", "呆", "曾经", "喂", "容易", "四", "难道", "努力", "指", "进行", "学", "害怕", "样子", "内", "外面", "由", "解决", "简单", "救", "房间", "成功", "已", "往", "是否", "糟", "上面", "直到", "处", "儿子", "半", "同意", "虽然", "真的", "保护", "生", "没关系", "拉", "信", "讨厌", "卖", "重", "同", "间", "玩笑", "待", "还要", "提", "笑", "事实上", "而已", "证明", "房子", "装", "令", "办", "理解", "危险", "保持", "不同", "糟糕", "开心", "生命", "靠", "通过", "该死", "留下", "早上", "警察", "部分", "联系", "床", "眼睛", "要求", "马", "跳", "本来", "美", "兄弟", "除非", "不行", "伤害", "有趣", "方式", "直接", "重新", "其中", "公司", "事实", "五", "加", "不好", "带来", "故事", "控制", "可爱", "突然", "多久", "赢", "家里", "女儿", "声音", "枪", "终于", "狗", "身", "男", "后面", "大概", "派", "曾", "脸", "伤", "完成", "回到", "酒", "想法", "小姐", "不再", "试试", "分", "简直", "极了", "儿", "进入", "或许", "想象", "遍", "底", "法", "使", "昨天", "不用", "放弃", "疯狂", "随便", "转", "办公室", "每天", "记", "表现", "打开", "聪明", "情", "声", "昨晚", "另外", "照片", "行动", "那种", "犯", "能够", "混蛋", "紧张", "这边", "学校", "家庭", "方法", "作", "口", "介意", "爸", "选", "教", "片", "很快", "必要", "整", "身体", "妻子", "从没", "有关", "部", "对于", "拥有", "祝", "任何人", "看上去", "辆", "呀", "怪", "秘密", "的确", "查", "母亲", "外", "怕", "二", "首先", "照顾", "检查", "兴趣", "实际上", "步", "否则", "丢", "偷", "关心", "建议", "不好意思", "正常", "气", "身边", "个人", "她们", "来自", "这次", "想想", "命", "回答", "电影", "毁", "拍", "套", "书", "错误", "结婚", "经历", "到处", "按", "知", "休息", "理由", "读", "面", "差不多", "意义", "负责", "精神", "完美", "那天", "安排", "扔", "遇到", "碰", "抓住", "下面", "傻", "睡觉", "收到", "光", "承认", "年轻", "自", "丈夫", "生气", "乱", "显然", "幸运", "游戏", "发誓", "父母", "全部", "忘记", "放松", "满", "调查", "即使", "交", "记住", "员", "经常", "比较", "哈", "阻止", "藏", "付", "明显", "照", "约会", "醒", "冷静", "意识", "队", "性", "戴", "坚持", "快乐", "面前", "电视", "哪个", "吓", "并且", "那时", "可怜", "做到", "冲", "同时", "尽", "打扰", "记录", "星期", "挂", "痛苦", "剩下", "眼", "替", "六", "见面", "存在", "代表", "足够", "值得", "男孩", "脚", "什么样", "感", "边", "强", "严重", "十", "一会儿", "国家", "道", "附近", "支持", "干什么", "就要", "正确", "万", "黑", "收", "日子", "意味着", "只能", "子", "实在", "可怕", "同样", "砸", "原来", "头发", "骗", "认真", "医院", "瞧", "影响", "方面", "既然", "行为", "消失", "撒谎", "算是", "火", "酷", "好运", "赶", "比如", "来到", "假", "死亡", "答应", "享受", "加入", "双", "包", "差", "提供", "鬼", "根", "血", "道歉", "利用", "以及", "滚", "一旦", "似乎", "咖啡", "面对", "几乎", "药", "能力", "小子", "洗", "第三", "怀疑", "现场", "受到", "清", "陪", "信息", "有意思", "浪费", "其", "甜", "报告", "讨论", "近", "位置", "多么", "之一", "不得不", "线", "腿", "搬", "证据", "原谅", "再次", "日", "说明", "店", "任务", "仍然", "小孩", "拒绝", "属于", "目标", "礼物", "最终", "大学", "自由", "破", "尽管", "自从", "首", "下午", "律师", "某个", "合作", "笔", "词", "根据", "借", "允许", "正是", "哭", "谢", "某", "群", "台", "越", "信任", "晚安", "病", "目前", "无论", "一般", "楼", "适合", "比赛", "飞", "使用", "后来", "威胁", "监狱", "美元", "舒服", "白痴", "遗憾", "反正", "混", "停止", "受伤", "球", "不然", "失望", "因", "恶心", "感受", "各位", "屁股", "安静", "居然", "通知", "寻找", "逼", "座", "脱", "追", "真实", "开玩笑", "路上", "有时候", "音乐", "饿", "愿", "城市", "反应", "热", "他妈的", "差点", "未来", "意见", "尸体", "包括", "家人", "夫人", "答案", "责任", "不在乎", "介绍", "未", "入", "试图", "恨", "样", "慢", "再说", "要是", "坐下", "通常", "一半", "烂", "躲", "合适", "撞", "活动", "厉害", "深", "一生", "经过"]
const noTones = ["de", "shi", "le", "jiu", "wo", "ni", "bu", "zai", "you", "hui", "yao", "shui", "wo men", "hao", "zhe", "xiang", "yi", "hen", "ren", "lai", "ge", "neng", "qu", "mei", "zhi dao", "ba", "na", "dao", "shang", "ta", "dou", "ye", "guo", "hai", "gei", "kan", "ba", "rang", "dui", "zhe ge", "yi ge", "xian zai", "zuo", "shen me", "zhen", "zhi", "zhao", "mei you", "de", "he", "zen me", "ke yi", "ta men", "shi", "zai", "na", "dian", "zhe yang", "duo", "tai", "li", "yong", "ni men", "xia", "zou", "ru guo", "zi ji", "shei", "bei", "yin wei", "ting", "bie", "gao su", "ta", "shi hou", "cong", "zui", "a", "yi jing", "chu", "tian", "da", "ma", "ci", "zhe me", "wei", "hai you", "cai", "wei shen me", "xiang", "hua", "nei ge", "xie xie", "zhao", "ke neng", "you", "xu yao", "qi lai", "ying gai", "dong xi", "jue de", "zhe xie", "liang", "cuo", "gan", "hui", "geng", "kai shi", "deng", "kuai", "ke", "na me", "suo yi", "yi yang", "shi jian", "er", "zhe li", "gai", "jiu shi", "yi qi", "na", "xi huan", "jian", "jiao", "dai", "wen ti", "xiao", "zhong", "dan", "gen", "dang", "ta", "ran hou", "si", "xi wang", "dang ran", "yi zhi", "bang", "qian", "yi xia", "kai", "kan kan", "suo you", "xiang xin", "kan dao", "da", "dan shi", "jia", "hai shi", "hang", "na xie", "men", "ji", "qing", "nian", "shi de", "bi", "qi", "di fang", "chu lai", "hou", "jin tian", "hui lai", "ming bai", "peng you", "e", "zheng", "xie", "fa sheng", "zhi shi", "shi qing", "zhun bei", "fang", "na", "yi qie", "yi dian", "ai", "shi", "yi si", "gong zuo", "wei le", "wen", "zen me yang", "yi ding", "jian", "jin", "hai zi", "li kai", "xian sheng", "di yi", "yi wei", "xian", "suo", "zhu", "ren wei", "chi", "zhao dao", "ken ding", "fei chang", "zhi qian", "gan jue", "bao qian", "er qie", "fa xian", "xin", "xiang", "bing", "na yang", "ye xu", "gao", "bu yao", "hen duo", "bu cuo", "diao", "bi xu", "guo lai", "chong", "yi xie", "zhe zhong", "zui hou", "jiang", "gao xing", "de", "ren he", "yi", "hai", "dan xin", "dui bu qi", "cheng", "guo qu", "suan", "san", "gou", "sheng huo", "shou", "zhi", "ji de", "xia lai", "zuo", "bu guo", "deng deng", "qi ta", "ji xu", "na li", "yi qian", "huo zhe", "song", "long", "qian", "wan", "que", "ming zi", "da jia", "zao", "chang", "ren shi", "lao", "zhong yao", "wan quan", "bie ren", "che", "wei", "gang", "2n", "dian hua", "nan", "zhi yao", "zhe er", "tou", "ji hui", "mai", "chuan", "chu qu", "bang", "tiao", "de dao", "xiao shi", "bian", "ma", "hai", "you ren", "yu", "ma shang", "bu neng", "zong", "mei", "dao di", "ma ma", "lai shuo", "sha", "guan xi", "he", "hao xiang", "jie", "zhi hou", "qing chu", "gen ben", "zhen shi", "wan", "jie shu", "liu", "mei shen me", "qing kuang", "nu ren", "duo shao", "yue", "li mian", "yong yuan", "liao jie", "guan yu", "que ding", "jia huo", "ling", "pao", "jian dao", "shi jie", "gan", "huo", "ru he", "fen zhong", "you xie", "guan", "bang zhu", "fen", "shuo hua", "tan", "zhang", "jue ding", "zhan", "wei yi", "na li", "xie", "chang", "sui", "yuan yi", "hua", "ming tian", "zong shi", "shou", "cheng wei", "jin wan", "ding", "piao liang", "kan jian", "nan ren", "yu", "da dian hua", "mang", "hui jia", "mei ge", "xin", "yuan yin", "ting", "ke shi", "wan shang", "tan tan", "cong lai", "yi hou", "ba ba", "ben", "na er", "ting shuo", "wan", "zai jian", "huai", "hao hao", "lian", "ban fa", "Shang di", "bu guan", "zhi you", "ma", "di", "chu xian", "hui qu", "qin ai", "shen shang", "zhi shao", "bao zheng", "xiao xi", "zen yang", "quan", "nu hai", "jiu", "ru ci", "gan xie", "jie shou", "kan lai", "xia qu", "shen zhi", "zhu yi", "o", "ci", "wang", "jin lai", "ming", "zhe", "ma fan", "qiu", "men", "zhen zheng", "gao", "te bie", "ji", "lia", "ren men", "na er", "yuan", "zen me ban", "wu fa", "nu shi", "nu", "bao bei", "ji", "ji hua", "zheng ge", "xuan ze", "gai bian", "ting dao", "huo ji", "shi", "zui", "zheng zai", "kuai", "zhua", "e", "li", "qi shi", "an quan", "que shi", "di er", "yi fu", "dong", "ting", "huan", "dao", "cai", "jin qu", "ta men", "da suan", "gou", "mo", "xiao xin", "bie de", "jie guo", "bi", "hao", "ma", "zhi jian", "zhou", "jue dui", "gang gang", "bai tuo", "duan", "la", "Mei guo", "huan ying", "chu le", "zhu yi", "you dian", "shui", "can jia", "wa", "feng", "chu li", "na bian", "nin", "huo", "fa", "gang cai", "gan dao", "kao lǜ", "bian cheng", "shi qu", "dong", "shao", "guan", "qi guai", "xiang dao", "jie shi", "fu qin", "lu", "zui jin", "shui", "bei", "ru", "bang mang", "zuo wei", "yi sheng", "dang shi", "jiang", "ai", "ceng jing", "wei", "rong yi", "si", "nan dao", "nu li", "zhi", "jin xing", "xue", "hai pa", "yang zi", "nei", "wai mian", "you", "jie jue", "jian dan", "jiu", "fang jian", "cheng gong", "yi", "wang", "shi fou", "zao", "shang mian", "zhi dao", "chu", "er zi", "ban", "tong yi", "sui ran", "zhen de", "bao hu", "sheng", "mei guan xi", "la", "xin", "tao yan", "mai", "chong", "tong", "jian", "wan xiao", "dai", "hai", "di", "xiao", "shi shi shang", "er yi", "zheng ming", "fang zi", "zhuang", "ling", "ban", "li jie", "wei xian", "bao chi", "bu tong", "zao gao", "kai xin", "sheng ming", "kao", "tong guo", "gai si", "liu xia", "zao shang", "jing cha", "bu fen", "lian xi", "chuang", "yan jing", "yao qiu", "ma", "tiao", "ben lai", "mei", "xiong di", "chu fei", "bu xing", "shang hai", "you qu", "fang shi", "zhi jie", "chong xin", "qi zhong", "gong si", "shi shi", "wu", "jia", "bu hao", "dai lai", "gu shi", "kong zhi", "ke ai", "tu ran", "duo jiu", "ying", "jia li", "nǚ er", "sheng yin", "qiang", "zhong yu", "gou", "shen", "nan", "hou mian", "da gai", "pa", "ceng", "lian", "shang", "wan cheng", "hui dao", "jiu", "xiang fa", "xiao jie", "bu zai", "shi shi", "fen", "jian zhi", "ji le", "er", "jin ru", "huo xu", "xiang xiang", "bian", "de", "fa", "shi", "zuo tian", "bu yong", "fang qi", "feng kuang", "sui bian", "zhuai", "ban gong shi", "mei tian", "ji", "biao xian", "da kai", "cong ming", "qing", "sheng", "zuo wan", "ling wai", "zhao pian", "xing dong", "na zhong", "fan", "neng gou", "hun dan", "jin zhang", "zhe bian", "xue xiao", "jia ting", "fang fa", "zuo", "kou", "jie yi", "ba", "xuan", "jiao", "pian", "hen kuai", "bi yao", "zheng", "shen ti", "qi zi", "cong mei", "you guan", "bu", "dui yu", "yong you", "zhu", "ren he ren", "kan shang qu", "liang", "ya", "guai", "mi mi", "di que", "cha", "mu qin", "wai", "pa", "er", "shou xian", "zhao gu", "jian cha", "xing qu", "shi ji shang", "bu", "fou ze", "diu", "tou", "guan xin", "jian yi", "bu hao yi si", "zheng chang", "qi", "shen bian", "ge ren", "ta men", "lai zi", "zhe ci", "xiang xiang", "ming", "hui da", "dian ying", "hui", "pai", "tao", "shu", "cuo wu", "jie hun", "jing li", "dao chu", "an", "zhi", "xiu xi", "li you", "dou", "mian", "cha bu duo", "yi yi", "fu ze", "jing shen", "wan mei", "na tian", "an pai", "reng", "yu dao", "peng", "zhua zhu", "xia mian", "sha", "shui jiao", "shou dao", "guang", "cheng ren", "nian qing", "zi", "zhang fu", "sheng qi", "luan", "xian ran", "xing yun", "you xi", "fa shi", "fu mu", "quan bu", "wang ji", "fang song", "man", "diao cha", "ji shi", "jiao", "ji zhu", "yuan", "jing chang", "bi jiao", "ha", "zu zhi", "cang", "fu", "ming xian", "zhao", "yue hui", "xing", "leng jing", "yi shi", "dui", "xing", "dai", "jian chi", "kuai le", "mian qian", "dian shi", "na ge", "he", "bing qie", "na shi", "ke lian", "zuo dao", "chong", "tong shi", "jin", "da rao", "ji lu", "xing qi", "gua", "tong ku", "sheng xia", "yan", "ti", "liu", "jian mian", "cun zai", "dai biao", "zu gou", "zhi de", "nan hai", "jia", "shen me yang", "gan", "bian", "jiang", "yan zhong", "shi", "yi hui er", "guo jia", "dao", "fu jin", "zhi chi", "gan shen me", "jiu yao", "zheng que", "mo", "hei", "shou", "ri zi", "yi wei zhe", "zhi neng", "zi", "shi zai", "ke pa", "tong yang", "za", "yuan lai", "tou fa", "pian", "ren zhen", "yi yuan", "qiao", "ying xiang", "fang mian", "ji ran", "xing wei", "xiao shi", "sa huang", "suan shi", "huo", "ku", "hao yun", "gan", "bi ru", "lai dao", "jia", "si wang", "da ying", "xiang shou", "jia ru", "shuang", "bao", "cha", "ti gong", "gui", "gen", "xie", "dao qian", "li yong", "yi ji", "gun", "yi dan", "si hu", "ka fei", "mian dui", "ji hu", "yao", "neng li", "xiao zi", "xi", "di san", "huai yi", "xian chang", "shou dao", "qing", "pei", "xin xi", "you yi si", "lang fei", "ji", "tian", "bao gao", "tao lun", "jin", "wei zhi", "duo me", "zhi yi", "bu de bu", "xian", "tui", "ban", "zheng ju", "yuan liang", "zai ci", "ri", "shuo ming", "dian", "ren wu", "reng ran", "xiao hai", "ju jue", "shu yu", "mu biao", "li wu", "zui zhong", "da xue", "zi you", "po", "jin guan", "zi cong", "shou", "xia wu", "lǜ shi", "mou ge", "he zuo", "bi", "ci", "gen ju", "jie", "yun xu", "zheng", "ku", "xie", "mou", "qun", "tai", "yue", "xin ren", "wan an", "bing", "mu qian", "wu lun", "yi ban", "lou", "shi he", "bi sai", "fei", "shi yong", "hou lai", "wei xie", "jian yu", "Mei yuan", "shu fu", "bai chi", "yi han", "fan zheng", "hun", "ting zhi", "shou shang", "qiu", "bu ran", "shi wang", "yin", "e xin", "gan shou", "ge wei", "pi gu", "an jing", "ju ran", "tong zhi", "xun zhao", "bi", "zuo", "tuo", "zhui", "zhen shi", "kai wan xiao", "lu shang", "you shi hou", "yin yue", "e", "yuan", "cheng shi", "fan ying", "re", "ta ma de", "cha dian", "wei lai", "yi jian", "shi ti", "bao kuo", "jia ren", "fu ren", "da an", "ze ren", "bu zai hu", "jie shao", "wei", "ru", "shi tu", "hen", "yang", "man", "zai shuo", "yao shi", "zuo xia", "tong chang", "yi ban", "lan", "duo", "he shi", "zhuang", "huo dong", "li hai", "shen", "yi sheng", "jing guo"]
const pinyin = ["de", "shì", "le", "jiù", "wǒ", "nǐ", "bú", "zài", "yǒu", "huì", "yāo", "shuì", "wǒ men", "hǎo", "zhè", "xiǎng", "yī", "hěn", "rén", "lái", "gě", "néng", "qù", "méi", "zhī dao", "bā", "nā", "dào", "shǎng", "tā", "dōu", "yě", "guō", "hái", "gěi", "kān", "bǎ", "ràng", "duì", "zhè ge", "yī gè", "xiàn zài", "zuò", "shén me", "zhēn", "zhī", "zhāo", "méi yǒu", "dé", "hé", "zěn me", "kě yǐ", "tā men", "shì", "zài", "nà", "diǎn", "zhè yàng", "duō", "tài", "lǐ", "yòng", "nǐ men5", "xià", "zǒu", "rú guǒ", "zì jǐ", "shéi", "bèi", "yīn wèi", "tīng", "bié", "gào su", "tā", "shí hou", "cōng", "zuì", "ā", "yǐ jīng", "chū", "tiān", "dà", "má", "cì", "zhè me", "wéi", "hái yǒu", "cái", "wèi shén me", "xiàng", "huà", "nèi gè", "xiè xie", "zhǎo", "kě néng", "yòu", "xū yào", "qǐ lai", "yīng gāi", "dōng xi", "jué de", "zhè xiē", "liǎng", "cuò", "gān", "huí", "gēng", "kāi shǐ", "děng", "kuài", "kě", "nà me", "suǒ yǐ", "yī yàng", "shí jiān", "ér", "zhè lǐ", "gāi", "jiù shì", "yī qǐ", "ná", "xǐ huan5", "jiàn", "jiào", "dài", "wèn tí", "xiǎo", "zhōng", "dàn", "gēn", "dāng", "tā", "rán hòu", "sǐ", "xī wàng", "dāng rán", "yī zhí", "bāng", "qián", "yī xià", "kāi", "kàn kan5", "suǒ yǒu", "xiāng xìn", "kàn dào", "dá", "dàn shì", "jiā", "hái shì", "háng", "nà xiē", "men5", "jī", "qǐng", "nián", "shì de", "bǐ", "qǐ", "dì fang", "chū lái", "hòu", "jīn tiān", "huí lai", "míng bai", "péng you", "é", "zhēng", "xiē", "fā shēng", "zhǐ shì", "shì qíng", "zhǔn bèi", "fàng", "nǎ", "yī qiè", "yī diǎn", "ài", "shí", "yì si", "gōng zuò", "wèi le", "wèn", "zěn me yàng", "yī dìng", "jiàn", "jìn", "hái zi", "lí kāi", "xiān sheng", "dì yī", "yǐ wéi", "xiān", "suǒ", "zhù", "rèn wéi", "chī", "zhǎo dào", "kěn dìng", "fēi cháng", "zhī qián", "gǎn jué", "bào qiàn", "ér qiě", "fā xiàn", "xīn", "xiàng", "bīng", "nà yàng", "yě xǔ", "gǎo", "bù yào", "hěn duō", "bù cuò", "diào", "bì xū", "guò lái", "chóng", "yī xiē", "zhè zhǒng", "zuì hòu", "jiāng", "gāo xìng", "de", "rèn hé", "yǐ", "hāi", "dān xīn", "duì bu qǐ", "chéng", "guò qu", "suàn", "sān", "gòu", "shēng huó", "shǒu", "zhī", "jì de", "xià lai", "zuò", "bù guò", "děng děng", "qí tā", "jì xù", "nà li", "yǐ qián", "huò zhě", "sòng", "lòng", "qián", "wán", "què", "míng zi", "dà jiā", "zǎo", "cháng", "rèn shi", "lǎo", "zhòng yào", "wán quán", "bié rén", "chē", "wèi", "gāng", "2n", "diàn huà", "nán", "zhǐ yào", "zhè 5r", "tóu", "jī huì", "mǎi", "chuān", "chū qù", "bàng", "tiáo", "dé dào", "xiǎo shí", "biàn", "ma", "hāi", "yǒu rén", "yú", "mǎ shàng", "bù néng", "zǒng", "měi", "dào dǐ", "mā ma", "lái shuō", "shā", "guān xì", "hē", "hǎo xiàng", "jiē", "zhī hòu", "qīng chu", "gēn běn", "zhēn shì", "wán", "jié shù", "liú", "méi shén me", "qíng kuàng", "nǚ rén", "duō shao", "yuè", "lǐ miàn", "yǒng yuǎn", "liǎo jiě", "guān yú", "què dìng", "jiā huo", "lìng", "páo", "jiàn dào", "shì jiè", "gǎn", "huó", "rú hé", "fēn zhōng", "yǒu xiē", "guǎn", "bāng zhù", "fèn", "shuō huà", "tán", "zhāng", "jué dìng", "zhàn", "wéi yī", "nǎ lǐ", "xiě", "cháng", "suì", "yuàn yì", "huā", "míng tiān", "zǒng shì", "shòu", "chéng wéi", "jīn wǎn", "dìng", "piào liang", "kàn jiàn", "nán rén", "yú", "dǎ diàn huà", "máng", "huí jiā", "měi gě", "xīn", "yuán yīn", "tíng", "kě shì", "wǎn shang", "tán tán", "cóng lái", "yǐ hòu", "bà ba", "běn", "nǎ 5r", "tīng shuō", "wǎn", "zài jiàn", "huài", "hǎo hǎo", "lián", "bàn fǎ", "Shàng dì", "bù guǎn", "zhǐ yǒu", "mā", "dì", "chū xiàn", "huí qu", "qīn ài", "shēn shàng", "zhì shǎo", "bǎo zhèng", "xiāo xi", "zěn yàng", "quán", "nǚ hái", "jiǔ", "rú cǐ", "gǎn xiè", "jiē shòu", "kàn lai", "xià qu", "shèn zhì", "zhù yì", "ō", "cǐ", "wáng", "jìn lái", "míng", "zhě", "má fan5", "qiú", "mén", "zhēn zhèng", "gāo", "tè bié", "jí", "liǎ", "rén men5", "nà 5r", "yuǎn", "zěn me bàn", "wú fǎ", "nǚ shì", "nǚ", "bǎo bèi", "jì", "jì huà", "zhěng gè", "xuǎn zé", "gǎi biàn", "tīng dào", "huǒ jì", "shì", "zuǐ", "zhèng zài", "kuài", "zhuā", "è", "lí", "qí shí", "ān quán", "què shí", "dì èr", "yī fu", "dòng", "tǐng", "huàn", "dǎo", "cāi", "jìn qù", "tā men5", "dǎ suàn", "gōu", "mó", "xiǎo xīn", "bié de", "jié guǒ", "bì", "háo", "ma", "zhī jiān", "zhōu", "jué duì", "gāng gang", "bài tuō", "duàn", "lā", "Měi guó", "huān yíng", "chú le", "zhǔ yi", "yǒu diǎn", "shuì", "cān jiā", "wā", "fēng", "chǔ lǐ", "nà bian5", "nín", "huò", "fā", "gāng cái", "gǎn dào", "kǎo lǜ", "biàn chéng", "shī qù", "dǒng", "shǎo", "guān", "qí guài", "xiǎng dào", "jiě shì", "fù qīn", "lù", "zuì jìn", "shuǐ", "bēi", "rú", "bāng máng", "zuò wéi", "yī shēng", "dāng shí", "jiǎng", "ái", "céng jīng", "wèi", "róng yì", "sì", "nán dào", "nǔ lì", "zhī", "jìn xíng", "xué", "hài pà", "yàng zi", "nèi", "wài mian5", "yóu", "jiě jué", "jiǎn dān", "jiù", "fáng jiān", "chéng gōng", "yǐ", "wǎng", "shì fǒu", "zāo", "shàng mian5", "zhí dào", "chǔ", "ér zi", "bàn", "tóng yì", "suī rán", "zhēn de", "bǎo hù", "shēng", "méi guān xi", "lā", "xìn", "tǎo yàn", "mài", "chóng", "tóng", "jiān", "wán xiào", "dāi", "hái", "dī", "xiào", "shì shí shàng", "ér yǐ", "zhèng míng", "fáng zi", "zhuāng", "líng", "bàn", "lǐ jiě", "wēi xiǎn", "bǎo chí", "bù tóng", "zāo gāo", "kāi xīn", "shēng mìng", "kào", "tōng guò", "gāi sǐ", "liú xià", "zǎo shang", "jǐng chá", "bù fèn", "lián xì", "chuáng", "yǎn jing", "yāo qiú", "mǎ", "tiào", "běn lái", "měi", "xiōng dì", "chú fēi", "bù xíng", "shāng hài", "yǒu qù", "fāng shì", "zhí jiē", "chóng xīn", "qí zhōng", "gōng sī", "shì shí", "wǔ", "jiā", "bù hǎo", "dài lái", "gù shi", "kòng zhì", "kě ài", "tū rán", "duō jiǔ", "yíng", "jiā lǐ", "nǚ ér", "shēng yīn", "qiāng", "zhōng yú", "gǒu", "shēn", "nán", "hòu mian5", "dà gài", "pā", "céng", "liǎn", "shāng", "wán chéng", "huí dào", "jiǔ", "xiǎng fǎ", "xiǎo jie", "bù zài", "shì shì", "fēn", "jiǎn zhí", "jí le", "ér", "jìn rù", "huò xǔ", "xiǎng xiàng", "biàn", "de", "fǎ", "shǐ", "zuó tiān", "bù yòng", "fàng qì", "fēng kuáng", "suí biàn", "zhuǎi", "bàn gōng shì", "měi tiān", "jì", "biǎo xiàn", "dǎ kāi", "cōng ming", "qíng", "shēng", "zuó wǎn", "lìng wài", "zhào piàn", "xíng dòng", "nà zhǒng", "fàn", "néng gòu", "hún dàn", "jǐn zhāng", "zhè biān", "xué xiào", "jiā tíng", "fāng fǎ", "zuō", "kǒu", "jiè yì", "bà", "xuǎn", "jiāo", "piān", "hěn kuài", "bì yào", "zhěng", "shēn tǐ", "qī zi", "cóng méi", "yǒu guān", "bù", "duì yú", "yōng yǒu", "zhù", "rèn hé rén", "kàn shang qu", "liàng", "yā", "guài", "mì mì", "dí què", "chá", "mǔ qīn", "wài", "pà", "èr", "shǒu xiān", "zhào gu", "jiǎn chá", "xìng qu", "shí jì shàng", "bù", "fǒu zé", "diū", "tōu", "guān xīn", "jiàn yì", "bù hǎo yì si", "zhèng cháng", "qì", "shēn biān", "gè rén", "tā men5", "lái zì", "zhè cì", "xiǎng xiang", "mìng", "huí dá", "diàn yǐng", "huǐ", "pāi", "tào", "shū", "cuò wù", "jié hūn", "jīng lì", "dào chù", "àn", "zhī", "xiū xi", "lǐ yóu", "dòu", "miàn", "chà bu duō", "yì yì", "fù zé", "jīng shen5", "wán měi", "nà tiān", "ān pái", "rēng", "yù dào", "pèng", "zhuā zhù", "xià mian5", "shǎ", "shuì jiào", "shōu dào", "guāng", "chéng rèn", "nián qīng", "zì", "zhàng fu", "shēng qì", "luàn", "xiǎn rán", "xìng yùn", "yóu xì", "fā shì", "fù mǔ", "quán bù", "wàng jì", "fàng sōng", "mǎn", "diào chá", "jí shǐ", "jiāo", "jì zhu", "yuán", "jīng cháng", "bǐ jiào", "hā", "zǔ zhǐ", "cáng", "fù", "míng xiǎn", "zhào", "yuē huì", "xǐng", "lěng jìng", "yì shí", "duì", "xìng", "dài", "jiān chí", "kuài lè", "miàn qián", "diàn shì", "nǎ ge", "hè", "bìng qiě", "nà shí", "kě lián", "zuò dào", "chōng", "tóng shí", "jǐn", "dǎ rǎo", "jì lù", "xīng qī", "guà", "tòng kǔ", "shèng xià", "yǎn", "tì", "liù", "jiàn miàn", "cún zài", "dài biǎo", "zú gòu", "zhí de", "nán hái", "jiǎ", "shén me yàng", "gǎn", "biān", "jiàng", "yán zhòng", "shí", "yī huì 5r", "guó jiā", "dào", "fù jìn", "zhī chí", "gàn shén me", "jiù yāo", "zhèng què", "mò", "hēi", "shōu", "rì zi", "yì wèi zhe", "zhǐ néng", "zǐ", "shí zài", "kě pà", "tóng yàng", "zá", "yuán lái", "tóu fa", "piàn", "rèn zhēn", "yī yuàn", "qiáo", "yǐng xiǎng", "fāng miàn", "jì rán", "xíng wéi", "xiāo shī", "sā huǎng", "suàn shì", "huǒ", "kù", "hǎo yùn", "gǎn", "bǐ rú", "lái dào", "jiǎ", "sǐ wáng", "dā ying", "xiǎng shòu", "jiā rù", "shuāng", "bāo", "chā", "tí gōng", "guǐ", "gēn", "xiě", "dào qiàn", "lì yòng", "yǐ jí", "gǔn", "yī dàn", "sì hū", "kā fēi", "miàn duì", "jī hū", "yào", "néng lì", "xiǎo zi", "xǐ", "dì sān", "huái yí", "xiàn chǎng", "shòu dào", "qīng", "péi", "xìn xī", "yǒu yì si", "làng fèi", "jī", "tián", "bào gào", "tǎo lùn", "jìn", "wèi zhi", "duō me", "zhī yī", "bù dé bù", "xiàn", "tuǐ", "bān", "zhèng jù", "yuán liàng", "zài cì", "rì", "shuō míng", "diàn", "rèn wu", "réng rán", "xiǎo hái", "jù jué", "shǔ yú", "mù biāo", "lǐ wù", "zuì zhōng", "dà xué", "zì yóu", "pò", "jǐn guǎn", "zì cóng", "shǒu", "xià wǔ", "lǜ shī", "mǒu gě", "hé zuò", "bǐ", "cí", "gēn jù", "jiè", "yǔn xǔ", "zhēng", "kū", "xiè", "mǒu", "qún", "tāi", "yuè", "xìn rèn", "wǎn ān", "bìng", "mù qián", "wú lùn", "yī bān", "lóu", "shì hé", "bǐ sài", "fēi", "shǐ yòng", "hòu lái", "wēi xié", "jiān yù", "Měi yuán", "shū fu", "bái chī", "yí hàn", "fǎn zhèng", "hún", "tíng zhǐ", "shòu shāng", "qiú", "bù rán", "shī wàng", "yīn", "è xīn", "gǎn shòu", "gè wèi", "pì gu", "ān jìng", "jū rán", "tōng zhī", "xún zhǎo", "bī", "zuò", "tuō", "zhuī", "zhēn shí", "kāi wán xiào", "lù shang", "yǒu shí hou", "yīn yuè", "è", "yuàn", "chéng shì", "fǎn yìng", "rè", "tā mā de", "chà diǎn", "wèi lái", "yì jiàn", "shī tǐ", "bāo kuò", "jiā rén", "fū ren5", "dá àn", "zé rèn", "bù zài hu", "jiè shào", "wèi", "rù", "shì tú", "hèn", "yàng", "màn", "zài shuō", "yào shi", "zuò xia", "tōng cháng", "yī bàn", "làn", "duǒ", "hé shì", "zhuàng", "huó dòng", "lì hai", "shēn", "yī shēng", "jīng guò"]

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '300px',
    },
    character: {
        display: 'block',
        fontWeight: '600',
        fontSize: '40px',
    },
    input: {
        display: 'block',
        maxWidth: '600px',
        width: '100%',
        marginTop: '60px',
        borderRadius: '5px',
        fontSize: '24px',
        padding: '5px',
    },
    checkmark: {
        color: "#239625",
        fontSize: '60px',
        opacity: 0,
        marginTop: '20px',
    },
    helpSection: {
        display: 'flex',
        flexDirection: 'column',
        margin: '20px 0',
        alignItems: 'center',
    },
    answer: {
        fontSize: '20px',
        display: 'block',
        marginTop: '30px',
        fontWeight: 600,
    },
    button: {
      margin: '0 10px',
    }
}

class Learner extends React.PureComponent {
    randomIndex = () => {
        return Math.floor(Math.random() * characters.length)
    }

    state = {
        activeIndex: this.randomIndex(),
        input: '',
        showAnswer: false
    }

    focusTextInput = () => {
        if (this.textInput) {
            this.textInput.focus()
        }
    }

    handleKeyDown = (event) => {
        if (event.keyCode === 16) {
            this.skip()
        }

        if (event.keyCode === 17) {
            this.showAnswer()
        }
    }

    componentDidMount() {
        this.focusTextInput()

        document.addEventListener("keydown", this.handleKeyDown)
    }

    setTextInputRef = element => {
        this.textInput = element;
    }

    handleChange = (e) => {
        if (e.target.value.split(' ').join('') === noTones[this.state.activeIndex].split(' ').join('')) {
            this.setState({input: '', activeIndex: this.randomIndex(), showAnswer: false})

            const checkmark = document.getElementById("checkmark")
            checkmark.style.opacity = 1

            const fadeEffect = setInterval(() => {
                if (checkmark.style.opacity > 0) {
                    checkmark.style.opacity -= 0.01
                } else {
                    clearInterval(fadeEffect);
                }
            }, 20);
        } else {
            this.setState({input: e.target.value})
        }
    }

    renderAnswer = () => {
        return(
            <div style={styles.answer}>
                {pinyin[this.state.activeIndex]}
            </div>
        )
    }

    showAnswer = () => {
        this.setState({showAnswer: true})
        this.focusTextInput()
    }

    skip = () => {
        this.setState({
            activeIndex: this.randomIndex(),
            input: '',
            showAnswer: false
        })
        this.focusTextInput()
    }

    render() {
        const character = characters[this.state.activeIndex]
        return (
            <div style={styles.container}>
                <div style={styles.character}>
                    { character }
                </div>
                <input ref={this.setTextInputRef} style={styles.input} type="text" value={this.state.input} onChange={this.handleChange} />
                <div style={styles.helpSection}>
                    <div style={styles.buttons}>
                        <button style={styles.button} onClick={this.showAnswer}>
                            Show Answer
                        </button>
                        <button style={styles.button} onClick={this.skip}>
                            Skip
                        </button>
                    </div>
                    {
                        this.state.showAnswer && this.renderAnswer()
                    }
                </div>
                <div id="checkmark" style={styles.checkmark}>
                    ✓
                </div>
            </div>
        )
    }
}

export default Learner