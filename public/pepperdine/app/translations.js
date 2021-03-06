(function (angular) {

  function config($translateProvider) {

    $translateProvider
      .translations('en', { 
        // Define some general terms
        NAME: 'Name',
        NICKNAME: 'Nickname',
        TEL: 'Telephone',
        WECHAT: 'WeChat',
        LASTLOGIN: 'Last Login',
        STATUS: 'Status',
        ACTION: 'Action',
        LOGINIP: 'Login ip',
        PLEASEENTER: 'Please Enter',
        FIRSTNAME: 'First Name',
        LASTNAME: 'Last Name',
        EMAIL: 'Email',
        PASSWORD: 'Password',
        GENDER: 'Gender',
        FEMALE: 'Female',
        MALE: 'Male',
        SUBMIT: 'Submit',
        SEARCH: 'Search',
        SLUG: 'Slug',
        DESCRIPTION: 'Description',
        ADDED: 'has been added!',
        FAILEDTOADD: 'Failed to add',
        EDITED: 'has been edited!',
        FAILTOEDIT: 'Failed to edit',
        REMOVE: 'Remove',
        ADDPERMISSION: 'Add permission',
        REMOVEPERMISSION: 'Remove permission',
        USER: 'User',
        LIST: 'List',
        SUCCESSFUl: 'Successful',
        FAIL: 'Fail',
        HEIGHT: 'Height',
        WEIGHT: 'Weight',
        MEDICALCONDITION: 'Medical Condition',
        SET: 'Setting',
        OPERATOR: 'Operator',
        TYPE: 'Type',
        CANCEL: 'Cancel',
        DEACTIVATE: 'Deactivate',
        ACTIVATE: 'Activate', 
        ACCOUNTBALANCE: 'Account Balance',
        YES: 'Yes',
        NO: 'No', 
        CREDITCARD: 'Credit Card',
        DEBITCARD: 'Debit Card',
        GIFTCARD: 'Gift Card',
        REWARDPOINT: 'Reward point',
        REFUND: 'Refund',
        EDITBALANCERECORD: 'Edit Balance Record',
        CLEAR: 'Clear',
        USERINFOMATION: 'User Information',
        PLEASESEARCHUSERFIRST: 'Please select user',
        CARDSTATUS: 'Card status',
        TREATMENTNAME: 'Treatment name',
        INVOICENUMBER: 'Invoice Number',
        TIME: 'Time',
        SERVICETIME: 'Service Time',
        EFFECTIVE: 'Effective',
        INEFFECTIVE: 'Ineffective',
        PLEASEMAKESUREINFORMATIONWASENTEREDCORRECTLY: 'Please make sure all information was correct',
        CANTRESERVEPASTDATES: "Can't reserve past dates",
        ADDEVENTSUCCESS: 'Appointment Added！',
        EDITEVENTSUCCESS: 'Appointment Edited！', 
        SELECTROLE: 'Select empolyee role',
        REPLY: 'Reply',
        EVENTPAGELINK: 'Event page link',
        PLEASEENTERREPLYCONTENT: 'Please enter reply content',
        EDITKEYWORDRULE: 'Edit keyword rule',
        ADDTRANSACTIONRECORD: 'Add transaction record',
        PURCHASEDATE: 'Purchase date',
        NOTE: 'Note',
        TOTAL: 'Total',
        PRINT: 'Print',
        PAYMENTINSTRUCTION: 'Payment instruction',
        SELECTCATEGORY: 'Select categories',
        SELECTTREATMENTPRODUCT: 'Select Treatment product',
        SELECTBEAUTYPRODUCT: 'Select Beauty product',
        SELECTTIMES: 'Select # of times', 
        SUBMITTING: 'Submitting...',
        NUMTIME: '# of times',
        APPOINTMENTSTATUS: 'Appointment status',
        COMPLETE: 'Complete',
        APPOINTMENT: 'Appointment',
        HELP: 'Help',
        MANUAL: 'Manual',
        FANDQ: 'F/Q', 
        MEMBERINFO: 'Member Information',
        PURCHASEDATE: 'Purchase Date',
        CARDNAME: 'Card Name', 
        CONTACTUS:'Contact Us',
        TRIPDEALS: 'Trip Deals',
        ABOUTUS:'About Us',
        DESTINATION: 'Destination',
        UNITEDSTATES: 'United States',
        NEWYORK: 'New York',
        LOSANGELES: 'Los Angeles',
        LASVEGAS: 'Las Vegas',
        SANDIEGO: 'San Diego',
        BOSTON: 'Alaska',
        BERKELEY: 'Berkeley',
        SOUTHAMERICA:'South America',
        BRAZIL:'Brazil',
        ARGENTINA: 'Argentina',
        PERU: 'Peru',
        CHILE: 'Chile',
        COLOMBIA: 'Colombia',
        BOLIVIA: 'Bolivia',
        HOMEPAGESLOGAN:'An Adventure you have been dreaming about',
        VIDEOSLOGAN:'Take a vacation on the wild side with Gemin',
        VIDEOSLOGAN2:'Adventure Tours and never look at life the same.',
        SMASHYOURCOMFORT: 'Smash Your Comfort Zone',
        POPULARGEMINTOUR: 'Popular Gemin Tours',
        HAWAII:'Hawaii',
        HAWAII2:'Hawaii Volcanoes National Park Day tour',
        ALASKA2: 'Aurora Adventure',
        EXPLORETOUR: 'Explorer Tour',
        NEWYORK2:'Big Apple Tour',
        BOOKYOURNEXTADVENTURE: 'Book your next adventure today',
        CUSTOMIZETOUR:'Customize tour',
        NOPURCHASINGREQUIRE:'No purchase required',
        ONEONONEMENTOR:'1 on 1 guided trip planning',
        BOOKNOW:'Book Now',
        EXCLUSIVEOFFER: 'Exclusive Offers, Travel Tips and More',
        KEEPMEINFORMED:'Keep me informed',
        YOUCANCANCELANYTIME:'*Newsletters are sent bi-monthly',
        ABOUTUS2: 'A customize traveling service that brings you comfort within adventure',
        FULLCUSTOMIZESERVICE:'Fully customized travel plan',
        PERSONALCONCIERGE:'Personal Concierge',
        TRIPPLANNING: 'Trip Planning',
        CONCIERGEDOALLTHEWORK:'Concierge do all the work',
        PAY:'Pay',
        ENJOY:'Enjoy your cutomized trip!',
        MEETOURCONCIERGE:'Meet Our Concierge',
        BLOGGER: 'Blogger with 10+ years of travel experiences',
        PILOT: 'Former American Airline pilot',
        CEO: 'CEO of headed billion dollar company',
        CONCIERGE: 'Concierge Service',
        GETINTOUCH: 'Get in Touch',
        SENDAMESSAGE:'Send a message',
        TELLUSWHATYOULIKE:'Tell us your trip preference',
        LETSGETTOKNOWEACHOTHER:"Let's get to know each other.",
        COUPLEQUESTIONFIRST:'Couple easy question first',
        SHARELITTLEDETAIL:'Share little detail about yourself',
        SOWECANTAILOR:'So we can tailor trip and find a perfect concierge for you',
        QUESTION1:'What is your next ideal traveling method?',
        BACKPACKING:'Backpacking',
        TOURGROUP: 'Tour Group',
        SUPRISEME:'Suprise Me',
        LEISURETOUR:'Leisure tour',
        APPROXIMATEBUDGET: 'What is your approximate budget?',
        HOWDIDYOUHEAR:'Lastly, how did you hear of us?',
        MATCHCONCERIGE:'Start Matching concierge',
        NEWYORK3:'GEMIN provide customize concierge service for your next trip, whether it is your first time to New York or 15th time, we will provide the memorable experience for you to re-explore the city.',
        STARTEXPLORING:'Start exploring',
        WALKBROOKLYN:'Walk the Brooklyn Bridge' ,
        WALKBROOKLYN2:'Dining at',
        WALKBROOKLYN3:'With beautiful skyline views, this traditional tourist activity is actually worth revisiting.',
        SEAPORT:'Rediscover the South Street Seaport',
        SEAPORT2:'Grab lunch at',
        SEAPORT3:'or browse the Sunday farmers market before waking to the East River and ‘gramming the unobstructed Brooklyn Bridge views.',
        NEVERSLEEP:'The City that Never Sleeps',
        NEVERSLEEP2:'The city is littered with amazing venues to catch live jazz',
        NEVERSLEEP3:'Live Jazz at historic',
        NEVERSLEEP4:'(did I hear Bill Evans?) or newcomer',
        NEVERSLEEP5:'Nestled into Tribeca’s Roxy Hotel, its vaulted ceilings, vintage lighting, and top-notch craft cocktails make for a sensory experience everyone will love.',
        JUSTFORYOU:'Travel concierge, just for you.',
        CTA: 'We value customer service',
        CTA2: 'and the importance of having a memorable trip',
        CTA3: 'Unique Concepts',
        CTA4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        CTA5: 'Infinite Potential',
        CTA6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        CTA7: 'Adventure',
        CTA8: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        LA:'Los Angeles',
        LA2:'only-in-L.A. tour',
        LA3:'GEMIN provide customize concierge service for your next trip, whether it is your first time to LA or 15th time, we will provide the memorable experience for you to re-explore the city.',
        STROLLVENICE:'Stroll Venice Canals',
        EMBRACELA: 'Embrace L.A. lifestyle',
        EMBRACELA2: 'Land of opportunity'
      })
      .translations('cn', { 
        // Define some general terms
        NAME: '姓名',
        NICKNAME: '昵称',
        TEL: '电话',
        WECHAT: '微信',
        LASTLOGIN: '最后登录',
        STATUS: '状态',
        ACTION: '操作',
        LOGINIP: '登录ip',
        PLEASEENTER: '请输入',
        FIRSTNAME: '名字',
        LASTNAME: '姓氏',
        EMAIL: '邮箱',
        PASSWORD: '密码',
        GENDER: '性别',
        FEMALE: '女',
        MALE: '男',
        SUBMIT: '提交',
        SEARCH: '搜寻',
        SLUG: '缩写',
        DESCRIPTION: '描述',
        ADDED: '添加成功!',
        FAILEDTOADD: '添加失败',
        EDITED: '编辑成功!',
        FAILTOEDIT: '编辑失败',
        REMOVE: '移除',
        ADDPERMISSION: '添加权限',
        REMOVEPERMISSION: '取消权限',
        USER: '用户',
        LIST: '列表',
        SUCCESSFUl: '成功',
        FAIL: '失败',
        HEIGHT: '身高',
        WEIGHT: '体重',
        MEDICALCONDITION: '医疗问题',
        SET: '设定',
        OPERATOR: '操作人',
        TYPE: '类型',
        CANCEL: '取消',
        DEACTIVATE: '屏蔽',
        ACTIVATE: '恢复',
        ACTIVATE2: '激活', 
        PERSONALINFO: '个人信息',
        MONEYAMOUNT: '金额',
        LOADBALANCE: '储值', 
        MEMBER: '会员',
        ADDNEWMEMBER: '添加会员',
        CONTRACTED: '签约',
        REGISTERDATE: '注册日期',
        LEVEL: '等级', 
        PRODUCTCATEGORY: '产品类型',
        PRODUCTNAME: '产品名称',
        PRICE: '价格',
        DURATION: '时间',
        DESCRIPTION: '描述',
        LOADEDTIME: '添加时间',
        LASTEDIT: '最后修改', 
        DEACTIVATESELECTEDTREATMENT: '确定要屏蔽吗?',
        YOUCANACTTIVATETREATMENTAGAIN: '屏蔽后仍可恢复!',
        YESDEACTIVATE: '是的, 立刻屏蔽',
        //employee list
        STAFFLIST: '员工列表',
        ADDNEWSTAFF: '添加新员工',
        STAFF: '员工',
        NEWSTAFF: '新员工',
        TITLE: '职务',
        MUSTHAVEATLEAST: '最少 6 个字母',
        ACTIVATESUCCESS: '成功恢复',
        DEACTIVATESUCCESS: '成功屏蔽',
        YOUDONOTHAVEPERMISSIONTOACCESSTHISPAGE: "您没有权限读取此页面",
        WARNING: '提醒',
        NETWORKERRORPLEASEREFRESH: '网路错误，请刷新页面',
        SAVECHANGES: '保存变更',
        CLOSE: '关闭',
        //wechat
        WECHATSETTING: '微信公众号配置',
        WECHATACCOUNTINFO: "微信公众号信息",
        WECHATSERVERINFO: "服务器配置",
        WECHATTYPE: '类型',
        VERIFIEDSUBSCRIPTIONACCOUNT: '认证订阅号',
        VERIFIEDSERVICEACCOUNT: '认证服务号',
        WECHATNAME: '名称',
        WECHATACCOUNT: '微信号',
        ORIGINID: '原始id',
        DEVELOPERID: '开发者id',
        SERVERSETTING: '服务器配置',
        FIRSTTIMEFOLLOWREPLY: '首次关注欢迎语',
        REFOLLOWREPLY: '重新关注欢迎语',
        DEFAULTREPLY: '默认自动回复',
        KEYWORDREPLY: '关键词回复',
        SAVE: '保存',
        QRCODE: '二维码',
        PROFILEPIC: '头像',
        RULE: '规则',
        KEYWORD: '关键词',
        ADDKEYWORDRULE: '添加关键字规则',
        RULENAME: '规则名',
        SAVEANDSUBMIT: '保存并发布',
        EDITMENUNAME: '编辑菜单名称',
        MENUNAME: '菜单名称',
        SENDTEXTNOTIFICATION: '发送文字消息',
        URLREDIRECT: '跳转页面',
        SUCCESSFUlLYUPDATED: '更新成功',
        WELCOMETOWECHATACCOUNTSETTING: '欢迎来到微信公众号配置服务',
        WELCOMETOWECHATACCOUNTSETTING2: '请依序填入帐号信息',
        BASICINFO: '基本信息',
        WELCOMEMESSAGE: '欢迎语',
        SERIALNUMBER: '编号',
        SUCCESS: '成功',
        BIRTHDAY: '生日',
        EMPLISTTOASTR: '修改员工职位请到F5模块, 添加分店信息请到F1模块',
        ADDROLEUSER: '添加角色用户',
        PLEASECHOOSETHEUSERYOUWANTTOADDTO: '请选择您想添加的用户',
        YOUCANSELECTMUTIPLEUSER: '欲添加用户可以复选',
        SELECTEDUSERALREADYHASTHEROLE: '欲添加用户已拥有此权限',
        PLEASESELECTATLEASTONEUSER: "请选择至少一位用户",
        YOUCANADDSTAFFATMODULE4: '您还尚未添加新员工, 您可以到D1模块添加新员工',
        PLEASEADDBRANCHDATA: '您还尚未添加分店, 您可以到F1模块添加新分店',
        PLEASEADDSTAFFBEFOREYOUEDITBRANCHINFO: '修改前分店信息前，请至D1模块添加员工',
        ADDAPPOINTMENT: '添加预约',
        SELECTTREATMENTCARD: '选择疗程卡',
        TREATMENTCARD: '疗程卡',
        SELECTBEAUTICIAN: '选择美容师',
        APPOINTMENTDATE: '预约日期',
        APPOINTMENTTIME: '预约时间',
        SEARCHUSER: '用户查询',
        PLEASEENTERUSERTELOREMAIL: '请输入用户电话或者email任意一项',
        USERFOUND: '找到用户!',
        PLEASESELECTTREATMENTCARD: '请选择用户疗程卡。',
        USERNOTFOUND: '没找到用户, 请检查用户资讯是否正确',
        TREATMENTCARDNOTFOUND: '没找到疗程卡',
        BEAUTICIANNOTFOUND: '您尚未添加美容師, 您可以到D1模块添加新员工',
        EDITAPPOINTMENT: '编辑预约',
        COMPLETEAPPOINTMENT: '完成预约',
        CANCELAPPOINTMENT: '取消预约',
        BEAUTICIANUNAVAILABLE: '美容师已经被预约，请选择不同时间或美容师',
        ADDNEWUSER: '添加新用户',
        REGISTEREDUSER: '注册用户',
        COMMONUSER: '普通用户',
        ACCOUNTBALANCE: '账户余额',
        YES: '是',
        NO: '否',
        HEALTHINFORMATION: '健康信息',
        HEALTHMESSAGE: '健康备注(过敏等信息)',
        CREDITCARD: '信用卡',
        DEBITCARD: '储蓄卡',
        GIFTCARD: '礼品卡',
        REWARDPOINT: '奖励',
        REFUND: '退款',
        EDITBALANCERECORD: '编辑储值记录',
        CLEAR: '清空',
        USERINFOMATION: '用户信息',
        PLEASESEARCHUSERFIRST: '请先在上面查询用户',
        CARDSTATUS: '卡状态',
        TREATMENTNAME: '疗程名称',
        INVOICENUMBER: '收据号码',
        TIME: '时间',
        SERVICETIME: '服务时长',
        EFFECTIVE: '有效',
        INEFFECTIVE: '无效',
        PLEASEMAKESUREINFORMATIONWASENTEREDCORRECTLY: '请确认表单填写正确',
        CANTRESERVEPASTDATES: '不能预约过期日期',
        ADDEVENTSUCCESS: '添加预约成功！',
        EDITEVENTSUCCESS: '编辑预约成功！',
        PLEASECHOOSEBEAUTICIAN: '请选择美容师',
        SELECTROLE: '选择员工职位',
        REPLY: '回覆',
        EVENTPAGELINK: '活动页链接',
        PLEASEENTERREPLYCONTENT: '请输入回覆内容',
        EDITKEYWORDRULE: '编辑关键字规则',
        ADDTRANSACTIONRECORD: '添加新消费记录',
        PURCHASEDATE: '下单日期',
        NOTE: '备注',
        TOTAL: '总计',
        PRINT: '打印', 
        CONTACTUS:'联络我们',
        TRIPDEALS: '特价专区',
        ABOUTUS:'关于我们',
        DESTINATION: '旅游地点',
        UNITEDSTATES: '北美旅游',
        NEWYORK: '纽约',
        LOSANGELES: '洛杉矶',
        LASVEGAS: '拉斯维加斯',
        SANDIEGO: '圣地亚哥',
        ALASKA: '阿拉斯加',
        BERKELEY: '柏克莱',
        SOUTHAMERICA:'南美旅游',
        BRAZIL:'巴西',
        ARGENTINA: '阿根廷', 
        PERU: '秘鲁',
        CHILE: '智利',
        COLOMBIA: '哥伦比亚',
        BOLIVIA: '玻利维亚',
        HOMEPAGESLOGAN:'我们内心所渴求的旅行',
        VIDEOSLOGAN:'跟著GEMIN体验一趟壮丽的冒险',
        VIDEOSLOGAN2:'足以改变一切的旅行',
        SMASHYOURCOMFORT: '走出你的舒适区',
        POPULARGEMINTOUR: '热门GEMIN行程',
        HAWAII:'夏威夷',
        HAWAII2:'夏威夷火山国家公园探险一日游',
        ALASKA2: '遇见极光之旅',
        EXPLORETOUR: '查看行程',
        NEWYORK2:'世界中心的大苹果',
        BOOKYOURNEXTADVENTURE:'订制您的下个探险',
        CUSTOMIZETOUR:'量身订制',
        NOPURCHASINGREQUIRE:'无强制购物',
        ONEONONEMENTOR:'1对1旅行计画',
        BOOKNOW:'开始订制',
        EXCLUSIVEOFFER: '限时特价, 旅行指南与更多信息 ',
        KEEPMEINFORMED:'告知我',
        YOUCANCANCELANYTIME:'*新闻信息每两周发',
        ABOUTUS2: '全新型态客制化旅游服务',
        FULLCUSTOMIZESERVICE:'完全量身订做的旅程',
        PERSONALCONCIERGE:'一对一行程管家',
        TRIPPLANNING: '行程规划',
        PAY:'付款',
        CONCIERGEDOALLTHEWORK:'行程管家打理一切旅行所需',
        ENJOY:'享受您的冒险之旅',
        MEETOURCONCIERGE:'认识几个行程管家',
        BLOGGER: '超过十年旅游经验的知名部落客',
        PILOT: '前美国航空机师',
        CEO: '百亿级别公司CEO',
        CONCIERGE: '行程管家',
        GETINTOUCH: '我们重视您的需求',
        SENDAMESSAGE:'传送信息',
        MESSAGE: '信息',
        SEND: '传送',
        TELLUSWHATYOULIKE:'告诉我们您理想的旅行',
        LETSGETTOKNOWEACHOTHER:"'理解是种想像交往的练习' - Samual Liam",
        COUPLEQUESTIONFIRST:'几个简单的问题',
        SHARELITTLEDETAIL:'分享几个关于您的喜好',
        SOWECANTAILOR:'使我们能为您找到最适合您的行程管家', 
        QUESTION1:'您下个理想的旅行方式为：',
        BACKPACKING:'背包客',
        TOURGROUP: '旅行团',
        SUPRISEME:'给我惊喜',
        LEISURETOUR:'休闲行程',
        APPROXIMATEBUDGET:'您的预算为：',
        HOWDIDYOUHEAR:'最后, 您是如何知道GEMIN的?',
        SELECT:'选择',
        MATCHCONCERIGE:'开始配对管家',
        NEWYORK3:'GEMIN 为您提供客制化管家旅游服务，不管您是第一次参观纽约或是来过无数次的旅客, 我们都能为您规划特殊行程让你重新认识纽约城',
        STARTEXPLORING:'开始探索',
        WALKBROOKLYN:'漫步布鲁克林桥' ,
        WALKBROOKLYN2:'享受晚餐在',
        WALKBROOKLYN3:'一到这座城市，就迅速的爱上了她',
        SEAPORT:'重新认识 South Street Seaport',
        SEAPORT2:'午餐在',
        SEAPORT3:'或是体验每周日的农夫市集或是漫步于Ease river晀望没有阻碍的Brooklyn Bridge views.',
        NEVERSLEEP:'一座不睡觉的城市',
        NEVERSLEEP2:'杂乱的街道里隐藏著live爵士俱乐部的城市',
        NEVERSLEEP3:'听Live爵士在具有历史意义的',
        NEVERSLEEP4:'(听到 Bill Evans的琴声吗?) 或是新成立的',
        NEVERSLEEP5:'藏身于 Tribeca’s Roxy Hotel, 挑高天花板, 老式灯具, 与纽约数一数二的特调鸡尾酒.',
        JUSTFORYOU:'以您的喜好搭配的旅行管家',
        CTA: '我们相信旅行对生命的意义',
        CTA2: '与友好的客户服务',
        CTA3: '创新旅行理念',
        CTA4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        CTA5: '无限可能性',
        CTA6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        CTA7: '属于自己的冒险',
        CTA8: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        LA:'洛杉矶', 
        LA2:'only-in-L.A. tour',
        LA3:'GEMIN 为您提供客制化管家旅游服务，不管您是第一次参观洛杉矶或是来过无数次的旅客, 我们都能为您规划特殊行程让您遇上属于自己的洛杉矶' ,
        STROLLVENICE:'漫游 Venice Canals',
        EMBRACELA: 'Embrace L.A. lifestyle',
        EMBRACELA2: 'Land of opportunity'
      })
      .translations('chzn', { 
        // Define some general terms
       NAME: '姓名',
        NICKNAME: '暱稱',
        TEL: '電話',
        WECHAT: '微信',
        LASTLOGIN: '最後登錄',
        STATUS: '狀態',
        ACTION: '操作',
        LOGINIP: '登錄ip',
        PLEASEENTER: '請輸入',
        FIRSTNAME: '名字',
        LASTNAME: '姓氏',
        EMAIL: '郵箱',
        PASSWORD: '密碼',
        GENDER: '性別',
        FEMALE: '女',
        MALE: '男',
        SUBMIT: '提交',
        SEARCH: '搜尋',
        SLUG: '縮寫',
        DESCRIPTION: '描述',
        ADDED: '添加成功!',
        FAILEDTOADD: '添加失敗',
        EDITED: '編輯成功!',
        FAILTOEDIT: '編輯失敗',
        REMOVE: '移除',
        ADDPERMISSION: '添加權限',
        REMOVEPERMISSION: '取消權限',
        USER: '用戶',
        LIST: '列表',
        SUCCESSFUl: '成功',
        FAIL: '失敗',
        HEIGHT: '身高',
        WEIGHT: '體重',
        MEDICALCONDITION: '醫療問題',
        SET: '設定',
        OPERATOR: '操作人',
        TYPE: '類型',
        CANCEL: '取消',
        DEACTIVATE: '屏蔽',
        ACTIVATE: '恢復',
        ACTIVATE2: '激活', 
        PERSONALINFO: '個人信息',
        MONEYAMOUNT: '金額',
        LOADBALANCE: '儲值', 
        MEMBER: '會員',
        ADDNEWMEMBER: '添加會員',
        CONTRACTED: '簽約',
        REGISTERDATE: '註冊日期',
        LEVEL: '等級', 
        PRODUCTCATEGORY: '產品類型',
        PRODUCTNAME: '產品名稱',
        PRICE: '價格',
        DURATION: '時間',
        DESCRIPTION: '描述',
        LOADEDTIME: '添加時間',
        LASTEDIT: '最後修改', 
        DEACTIVATESELECTEDTREATMENT: '確定要屏蔽嗎?',
        YOUCANACTTIVATETREATMENTAGAIN: '屏蔽後仍可恢復!',
        YESDEACTIVATE: '是的, 立刻屏蔽',
        //employee list
        STAFFLIST: '員工列表',
        ADDNEWSTAFF: '添加新員工',
        STAFF: '員工',
        NEWSTAFF: '新員工',
        TITLE: '職務',
        MUSTHAVEATLEAST: '最少 6 個字母',
        ACTIVATESUCCESS: '成功恢復',
        DEACTIVATESUCCESS: '成功屏蔽',
        YOUDONOTHAVEPERMISSIONTOACCESSTHISPAGE: "您沒有權限讀取此頁面",
        WARNING: '提醒',
        NETWORKERRORPLEASEREFRESH: '網路錯誤，請刷新頁面',
        SAVECHANGES: '保存變更',
        CLOSE: '關閉',
        //wechat
        WECHATSETTING: '微信公眾號配置',
        WECHATACCOUNTINFO: "微信公眾號信息",
        WECHATSERVERINFO: "服務器配置",
        WECHATTYPE: '類型',
        VERIFIEDSUBSCRIPTIONACCOUNT: '認證訂閲號',
        VERIFIEDSERVICEACCOUNT: '認證服務號',
        WECHATNAME: '名稱',
        WECHATACCOUNT: '微信號',
        ORIGINID: '原始id',
        DEVELOPERID: '開發者id',
        SERVERSETTING: '服務器配置',
        FIRSTTIMEFOLLOWREPLY: '首次關注歡迎語',
        REFOLLOWREPLY: '重新關注歡迎語',
        DEFAULTREPLY: '默認自動回覆',
        KEYWORDREPLY: '關鍵詞回覆',
        SAVE: '保存',
        QRCODE: '二維碼',
        PROFILEPIC: '頭像',
        RULE: '規則',
        KEYWORD: '關鍵詞',
        ADDKEYWORDRULE: '添加關鍵字規則',
        RULENAME: '規則名',
        SAVEANDSUBMIT: '保存並發佈',
        EDITMENUNAME: '編輯菜單名稱',
        MENUNAME: '菜單名稱',
        SENDTEXTNOTIFICATION: '發送文字消息',
        URLREDIRECT: '跳轉頁面',
        SUCCESSFUlLYUPDATED: '更新成功',
        WELCOMETOWECHATACCOUNTSETTING: '歡迎來到微信公眾號配置服務',
        WELCOMETOWECHATACCOUNTSETTING2: '請依序填入帳號信息',
        BASICINFO: '基本信息',
        WELCOMEMESSAGE: '歡迎語',
        SERIALNUMBER: '編號',
        SUCCESS: '成功',
        BIRTHDAY: '生日',
        EMPLISTTOASTR: '修改員工職位請到F5模組, 添加分店信息請到F1模組',
        ADDROLEUSER: '添加角色用戶',
        PLEASECHOOSETHEUSERYOUWANTTOADDTO: '請選擇您想添加的用戶',
        YOUCANSELECTMUTIPLEUSER: '欲添加用戶可以複選',
        SELECTEDUSERALREADYHASTHEROLE: '欲添加用戶已擁有此權限',
        PLEASESELECTATLEASTONEUSER: "請選擇至少一位用戶",
        YOUCANADDSTAFFATMODULE4: '您還尚未添加新員工, 您可以到D1模組添加新員工',
        PLEASEADDBRANCHDATA: '您還尚未添加分店, 您可以到F1模組添加新分店',
        PLEASEADDSTAFFBEFOREYOUEDITBRANCHINFO: '修改前分店信息前，請至D1模組添加員工',
        ADDAPPOINTMENT: '添加預約',
        SELECTTREATMENTCARD: '選擇療程卡',
        TREATMENTCARD: '療程卡',
        SELECTBEAUTICIAN: '選擇美容師',
        APPOINTMENTDATE: '預約日期',
        APPOINTMENTTIME: '預約時間',
        SEARCHUSER: '用戶查詢',
        PLEASEENTERUSERTELOREMAIL: '請輸入用戶電話或者email任意一項',
        USERFOUND: '找到用戶!',
        PLEASESELECTTREATMENTCARD: '請選擇用戶療程卡。',
        USERNOTFOUND: '沒找到用戶, 請檢查用戶資訊是否正確',
        TREATMENTCARDNOTFOUND: '沒找到療程卡',
        BEAUTICIANNOTFOUND: '您尚未添加美容師, 您可以到D1模組添加新員工',
        EDITAPPOINTMENT: '編輯預約',
        COMPLETEAPPOINTMENT: '完成預約',
        CANCELAPPOINTMENT: '取消預約',
        BEAUTICIANUNAVAILABLE: '美容師已經被預約，請選擇不同時間或美容師',
        ADDNEWUSER: '添加新用戶',
        REGISTEREDUSER: '註冊用戶',
        COMMONUSER: '普通用戶',
        ACCOUNTBALANCE: '賬戶餘額',
        YES: '是',
        NO: '否',
        HEALTHINFORMATION: '健康信息',
        HEALTHMESSAGE: '健康備註(過敏等信息)',
        CREDITCARD: '信用卡',
        DEBITCARD: '儲蓄卡',
        GIFTCARD: '禮品卡',
        REWARDPOINT: '獎勵',
        REFUND: '退款',
        EDITBALANCERECORD: '編輯儲值記錄',
        CLEAR: '清空',
        USERINFOMATION: '用戶信息',
        PLEASESEARCHUSERFIRST: '請先在上面查詢用戶',
        CARDSTATUS: '卡狀態',
        TREATMENTNAME: '療程名稱',
        INVOICENUMBER: '收據號碼',
        TIME: '時間',
        SERVICETIME: '服務時長',
        EFFECTIVE: '有效',
        INEFFECTIVE: '無效',
        PLEASEMAKESUREINFORMATIONWASENTEREDCORRECTLY: '請確認表單填寫正確',
        CANTRESERVEPASTDATES: '不能預約過期日期',
        ADDEVENTSUCCESS: '添加預約成功！',
        EDITEVENTSUCCESS: '編輯預約成功！',
        PLEASECHOOSEBEAUTICIAN: '請選擇美容師',
        SELECTROLE: '選擇員工職位',
        REPLY: '回覆',
        EVENTPAGELINK: '活動頁連結',
        PLEASEENTERREPLYCONTENT: '請輸入回覆內容',
        EDITKEYWORDRULE: '編輯關鍵字規則',
        ADDTRANSACTIONRECORD: '添加新消費記錄',
        PURCHASEDATE: '下單日期',
        NOTE: '備註',
        TOTAL: '總計',
        PRINT: '打印', 
        CONTACTUS:'聯絡我們',
        TRIPDEALS: '特價專區',
        ABOUTUS:'關於我們',
        DESTINATION: '旅遊地點',
        UNITEDSTATES: '北美旅遊',
        NEWYORK: '紐約',
        LOSANGELES: '洛杉磯',
        LASVEGAS: '拉斯維加斯',
        SANDIEGO: '聖地亞哥',
        ALASKA: '阿拉斯加',
        BERKELEY: '柏克萊',
        SOUTHAMERICA:'南美旅遊',
        BRAZIL:'巴西',
        ARGENTINA: '阿根廷', 
        PERU: '秘魯',
        CHILE: '智利',
        COLOMBIA: '哥倫比亞',
        BOLIVIA: '玻利維亞',
        HOMEPAGESLOGAN:'我們內心所渴求的旅行',
        VIDEOSLOGAN:'跟著GEMIN體驗一趟壯麗的冒險',
        VIDEOSLOGAN2:'足以改變一切的旅行',
        SMASHYOURCOMFORT: '走出你的舒適區',
        POPULARGEMINTOUR: '熱門GEMIN行程',
        HAWAII:'夏威夷',
        HAWAII2:'夏威夷火山國家公園探險一日遊',
        ALASKA2: '遇見極光之旅',
        EXPLORETOUR: '查看行程',
        NEWYORK2:'世界中心的大蘋果',
        BOOKYOURNEXTADVENTURE:'訂製您的下個探險',
        CUSTOMIZETOUR:'量身訂製',
        NOPURCHASINGREQUIRE:'無強制購物',
        ONEONONEMENTOR:'1對1旅行計畫',
        BOOKNOW:'開始訂製',
        EXCLUSIVEOFFER: '限時特價, 旅行指南與更多信息 ',
        KEEPMEINFORMED:'告知我',
        YOUCANCANCELANYTIME:'*新聞信息每兩週發',
        ABOUTUS2: '全新型態客制化旅遊服務',
        FULLCUSTOMIZESERVICE:'完全量身訂做的旅程',
        PERSONALCONCIERGE:'一對一行程管家',
        TRIPPLANNING: '行程規劃',
        PAY:'付款',
        CONCIERGEDOALLTHEWORK:'行程管家打理一切旅行所需',
        ENJOY:'享受您的冒險之旅',
        MEETOURCONCIERGE:'認識幾個行程管家',
        BLOGGER: '超過十年旅遊經驗的知名部落客',
        PILOT: '前美國航空機師',
        CEO: '百億級別公司CEO',
        CONCIERGE: '行程管家',
        GETINTOUCH: '我們重視您的需求',
        SENDAMESSAGE:'傳送信息',
        MESSAGE: '信息',
        SEND: '傳送',
        TELLUSWHATYOULIKE:'告訴我們您理想的旅行',
        LETSGETTOKNOWEACHOTHER:"'理解是種想像交往的練習' - Samual Liam",
        COUPLEQUESTIONFIRST:'幾個簡單的問題',
        SHARELITTLEDETAIL:'分享幾個關於您的喜好',
        SOWECANTAILOR:'使我們能為您找到最適合您的行程管家', 
        QUESTION1:'您下個理想的旅行方式為：',
        BACKPACKING:'背包客',
        TOURGROUP: '旅行團',
        SUPRISEME:'給我驚喜',
        LEISURETOUR:'休閒行程',
        APPROXIMATEBUDGET:'您的預算為：',
        HOWDIDYOUHEAR:'最後, 您是如何知道GEMIN的?',
        SELECT:'選擇',
        MATCHCONCERIGE:'開始配對管家',
        NEWYORK3:'GEMIN 為您提供客制化管家旅遊服務，不管您是第一次參觀紐約或是來過無數次的旅客, 我們都能為您規劃特殊行程讓你重新認識紐約城',
        STARTEXPLORING:'開始探索',
        WALKBROOKLYN:'漫步布魯克林橋' ,
        WALKBROOKLYN2:'享受晚餐在',
        WALKBROOKLYN3:'一到這座城市，就迅速的愛上了她',
        SEAPORT:'重新認識 South Street Seaport',
        SEAPORT2:'午餐在',
        SEAPORT3:'或是體驗每週日的農夫市集或是漫步於Ease river晀望沒有阻礙的Brooklyn Bridge views.',
        NEVERSLEEP:'一座不睡覺的城市',
        NEVERSLEEP2:'雜亂的街道里隱藏著live爵士俱樂部的城市',
        NEVERSLEEP3:'聽Live爵士在具有歷史意義的',
        NEVERSLEEP4:'(聽到 Bill Evans的琴聲嗎?) 或是新成立的',
        NEVERSLEEP5:'藏身於 Tribeca’s Roxy Hotel, 挑高天花板, 老式燈具, 與紐約數一數二的特調雞尾酒.',
        JUSTFORYOU:'已您的喜好配對的旅行管家',
        CTA: '我們相信旅行對生命的意義',
        CTA2: '與友好的客戶服務',
        CTA3: '創新旅行理念',
        CTA4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        CTA5: '無限可能性',
        CTA6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        CTA7: '屬於自己的冒險',
        CTA8: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        LA:'洛杉磯', 
        LA2:'only-in-L.A. tour',
        LA3:'GEMIN 為您提供客制化管家旅遊服務，不管您是第一次參觀洛杉磯或是來過無數次的旅客, 我們都能為您規劃特殊行程讓您遇上屬於自己的洛杉磯' ,
        STROLLVENICE:'漫遊 Venice Canals',
        EMBRACELA: 'Embrace L.A. lifestyle',
        EMBRACELA2: 'Land of opportunity'
      })

    $translateProvider.preferredLanguage('cn');
    $translateProvider.useLocalStorage();
    $translateProvider.useSanitizeValueStrategy('sanitize');
  }

  function translateCtrl($translate, $scope, $rootScope) {
    $scope.changeLanguage = function (langKey) { 
      $translate.use(langKey);
    };
  }

  angular
    .module('travelAgency')
    .controller('translateCtrl', translateCtrl)
    .config(config);

})(window.angular);