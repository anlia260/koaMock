var adCreate = {
    api: '/authed/ad/api/create',
    type:'get',
    response: {
        "status": 0,
        "msg": "操作成功",
        "data": {
            "campaigns": [{
                "id": "101",
                "name": "百度推广",
                "daily_budget": "100.5"
            },
            {
                "id": "57",
                "name": "聚义堂",
                "daily_budget": "100.5"
            },{
                "id": "1",
                "name": "聚义堂2",
                "daily_budget": "100.5"
            }],
            "subjects": [{
                "code": "111111",
                "name": "网址"
            }],
            "platforms": [{
                "id": 1,
                "name": "易乐游",
                "screenshot_image_path": "/images/1.jpg"
            }, {
                "id": 2,
                "name": "易乐a游",
                "screenshot_image_path": "/images/1.jpg"
            }, {
                "id": 3,
                "name": "易乐b游",
                "screenshot_image_path": "/images/1.jpg"
            }],
            "pay_mode": ["CPC", "CPM"]
        }
    }
}
var getSpace = {
    api: '/authed/ad/api/get-space',
    type:'get',
    response: {
        "status": "0",
        "msg": "操作成功",
        "data": {
            "items": [{
                "platform_id": 1,
                "id": 1,
                "is_cpt": true,
                "code": 1,
                "name": "搜索弹出框",
                "desc": "搜索弹出框",
                "preview_image_path": "http://imgcache.qq.com/qzonestyle/sns/gdt/create/images/ad/160x210_01x.jpg",
                "target": "网吧"
            }, {
                "id": 2,
                "platform_id": 2,
                "is_cpt": false,
                "code": 2,
                "name": "搜索结果框",
                "desc": "搜索弹出框",
                "preview_image_path": "http://imgcache.qq.com/qzonestyle/sns/gdt/create/images/ad/160x210_01x.jpg",
                "target": "网吧"
            }]
        }
    }
}
var getIdeaType = {
    api: '/authed/ad/api/get-idea-type',
    type:'get',
    response: {
        "status": "0",
        "msg": "操作成功",
        "data": {
            "items": [{
                "id": "1",
                "code": "***123",
                "name": "图片",
                "config": [{
                    'type': 'image',
                    'name': 'img_url_1',
                    'size': '100kb',
                    'format': 'image/png|image/jpeg',
                    'width': '100',
                    'height': '200',
                    'desc': '图片说明'
                }, {
                    'type': 'image',
                    'name': 'img_url_2',
                    'size': '50kb',
                    'format': 'image/png|image/jpeg',
                    'width': '100',
                    'height': '200',
                    'desc': '图片说明'
                }, {
                    'type': 'txt',
                    'name': 'title',
                    'length': '200',
                    'color': '#000000',
                    'bold': 'bold',
                    'desc': '说明'
                }, {
                    'type': 'link',
                    'name': 'link_name',
                    'length': '200',
                    'color': '#000000',
                    'bold': 'bold',
                    'desc': '说明'
                }]
            },
            {
                "id": "2",
                "code": "99392A9C886",
                "name": "单文本",
                "config": [ {
                    'type': 'txt',
                    'name': 'txt_1',
                    'length': '200',
                    'color': '#000000',
                    'bold': 'bold',
                    'desc': '说明'
                }]
            }]
        }
    }
}
var getArea = {
    api: '/authed/ad/api/get-area',
    type:'get',
    response: {
        "status": "0",
        "msg": "操作成功",
        "data":getAr()
    }
}

function  getAr(){

    let arr = []
    for (var i = 0; i < 100; i++) {
        arr.push({
            'id': '2',
            'value': '湖南省'+i,
            'children': [{
                'id': i,
                'value': '湖南省-长沙市',
            }]
        })
    }
    return arr;
}
var getTags = {
    api: '/authed/ad/api/get-tags',
    type:'get',
    response: {
    "status": 0,
    "msg": "",
    "data": {
        "items": [
            {
                "tag_category": "游戏偏好",
                "childrens": [
                    {
                        "tag_group": "种类",
                        "identity": "game_type",
                        "ui_type": "checkbox",
                        "ui_detail": {
                            "hasSwitch":true
                        },
                        "data_api": "",
                        "res": [
                            {
                                "name": "网络游戏",
                                "sort": 1
                            },
                            {
                                "name": "网页游戏",
                                "sort": 2
                            },
                            {
                                "name": "单机游戏",
                                "sort": 3
                            },
                            {
                                "name": "手机游戏",
                                "sort": 4
                            }
                        ]
                    },
                    {
                        "tag_group": "类型",
                        "identity": "game_category",
                        "ui_type": "checkbox",
                        "ui_detail": {
                            "hasSwitch":true
                        },
                        "data_api": "",
                        "res": [
                            {
                                "name": "MOBA",
                                "sort": 1
                            },
                            {
                                "name": "策略",
                                "sort": 2
                            },
                            {
                                "name": "大型角色扮演",
                                "sort": 3
                            },
                            {
                                "name": "第三人称射击",
                                "sort": 4
                            },
                            {
                                "name": "第一人称射击",
                                "sort": 5
                            },
                            {
                                "name": "动作角色扮演",
                                "sort": 6
                            },
                            {
                                "name": "格斗",
                                "sort": 7
                            },
                            {
                                "name": "即时战略",
                                "sort": 8
                            },
                            {
                                "name": "集换卡牌",
                                "sort": 9
                            },
                            {
                                "name": "竞速",
                                "sort": 10
                            },
                            {
                                "name": "社交",
                                "sort": 11
                            },
                            {
                                "name": "体育",
                                "sort": 12
                            },
                            {
                                "name": "音乐",
                                "sort": 13
                            },
                            {
                                "name": "战略角色扮演",
                                "sort": 14
                            }
                        ]
                    }
                ]
            },
            {
                "tag_category": "位置特征",
                "childrens": [
                    {
                        "tag_group": "省市地区",
                        "identity": "region",
                        "ui_type": "tree_select",
                        "ui_detail": {
                            "hasSwitch":true
                        },
                        "data_api": "/authed/ad/api/get-area",
                        "res": ""
                    }
                ]
            },
            {
                "tag_category": "基本信息",
                "childrens": [
                    {
                        "tag_group": "性别",
                        "identity": "sex",
                        "ui_type": "radio_group",
                        "ui_detail": {
                            "hasSwitch":true
                        },
                        "data_api": "",
                        "res": [
                            {
                                "name": "男",
                                "id": 1
                            },
                            {
                                "name": "女",
                                "id": 2
                            }
                            
                        ]
                    }
                ]
            }
        ]
    }
}
}
var login = {
    api: '/auth/api/login',
    type:'post',
    response: {
        "status": 0,
        "msg": "操作成功",
        "data": {
             account: "admin@admin.com",
             nickname:"王小二",
             id:1
        }
    }
}
var logout = {
    api: '/auth/api/logout',
    type:'post',
    response: {
        "status": "0",
        "msg": "操作成功",
        "data": {}
    }
}
var saveAD = {
    api: '/authed/ad/active-store',
    type:'post',
    response: {
        "status": 0,
        "msg": "操作成功",
        "data": {}
    }
}
var campaignList = {
    api: '/authed/campaign/list',
    type:'get',
    response: {"status":0,"msg":"","data":{"items":[{"_id":"57ee0034fa240603b328ba38","name":"\u805a\u4e49\u5802","daily_budget":null,"created_at":{"date":"2016-09-30 06:03:32.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 06:03:32.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57ee00cafa240603b328ba39","name":"\u767e\u5ea6\u63a8\u5e7f\u8ba1\u5212\u6d4b\u8bd5\u3002","daily_budget":null,"created_at":{"date":"2016-09-30 06:06:02.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 06:06:02.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57ee02d4fa24060b736c9f74","name":"gthtgrtghgrb","daily_budget":null,"created_at":{"date":"2016-09-30 06:14:44.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 06:14:44.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57ee0335fa240603b328ba3b","name":"tyjhhtrgjtr","daily_budget":null,"created_at":{"date":"2016-09-30 06:16:21.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 06:16:21.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57ee08dcfa240603b5627029","name":"\u56fd\u5e86\u63a8\u5e7f\u8ba1\u5212","daily_budget":null,"created_at":{"date":"2016-09-30 06:40:28.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 06:40:28.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57ee0911fa240603ae57b0d9","name":"\u4e2d\u79cb\u63a8\u5e7f\u8ba1\u5212","daily_budget":null,"created_at":{"date":"2016-09-30 06:41:21.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 06:41:21.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57ee0c625de14f4d7f65ef76","name":"\u5355\u673a\u6e38\u620f\u63a8\u5e7f","daily_budget":null,"created_at":{"date":"2016-09-30 06:55:30.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 06:55:30.000000","timezone_type":1,"timezone":"+00:00"}}],"currentpage":1,"perpage":20,"total":7}}
}

var campaignEdit = {
    api: '/authed/campaign/edit',
    type:'get',
    response: {
        'status':0,
        'msg':'操作成功',
        'data':{
            "id": "1",
            "name": "dsdasdsa",
            "daily_budget": "dsdasdsa"
        }
    }
}
var adList = {
    api: '/authed/ad/list',
    type:'get',
    response: {
        "status":0,
        "msg":"",
        "data":{
            "items":[
                {
                    "_id": "57edd0ddfa240603b1026222",
                    "daily_budget": 0,
                    "campaign_id": "百度推广计划",
                    "campaign_name": "campaign_name",
                    "start_at": "2016-09-01",
                    "end_at": "2016-09-30",
                    "name": "edrfafdvvdsf",
                    "subject_type_code": "111111",
                    "subject_detail": "vrfedsbvrfebre",
                    "platform_id":1,
                    "space_id": 1,
                    "version": 2,
                    "status": 3,
                    "index_status": 1,
                    "pay_mode": 'CPT',
                    "pay_weight": 0,
                    "idea": {
                        "idea_type_code": "99392A9C886",
                        "detail": [
                            {
                                "type": "txt",
                                "name": "txt_1",
                                "value": "brfesbresb"
                            }
                        ]
                    },
                    "targeting": {
                        "user_tag_groups": [
                            {
                                "identity": "game_type",
                                "tags": [
                                    {
                                        "name": "网页游戏"
                                    },
                                    {
                                        "name": "单机游戏"
                                    }
                                ]
                            },
                            {
                                "identity": "game_category",
                                "tags": [
                                    {
                                        "name": "大型角色扮演"
                                    },
                                    {
                                        "name": "第三人称射击"
                                    }
                                ]
                            }
                        ]
                    },
                    "created_at": '2016-09-30 03:07:38',
                    "updated_at": '2016-09-30 03:07:38'
                },
                {
                    "_id": "57edd6fa5de14f43aa555f51",
                    "campaign_id": "101",
                    "campaign_name": "百度推广计划",
                    "name": "测试广告2",
                    "start_at": "2016-09-01",
                    "end_at": "2016-09-30",
                    "subject_type_code": "****",
                    "subject_detail": "vrfedsbvrfebre",
                    "platform_id":1,
                    "version": 2,
                    "status": 2,
                    "index_status": 2,
                    "space_id":1,
                    "pay_mode": 'CPT',
                    "pay_weight": 11,
                    "idea": {
                        "idea_type_code": "***123",
                        "detail": {
                            "img_url_1": "/test.jpg",
                            "img_url_2": "/test.jpg",
                            "title": "测试title",
                            "link_nmae": "http://wwww.google.com"
                        }
                    },
                    "targeting": {
                        "user_tag_groups": [
                            {
                                "identity": "sex",
                                "tags": [
                                    {
                                        "name": "女"
                                    }
                                ]
                            },
                            {
                                "identity": "area",
                                "tags": [
                                    {
                                        "name": "湖北省-武汉市"
                                    },
                                    {
                                        "name": "广东省-广州市"
                                    }
                                ]
                            }
                        ]
                    },
                    "created_at": '2016-09-30 03:07:38',
                    "updated_at": '2016-09-30 03:07:38'
                },
                {
                    "_id": "57edd6fa5de14f43aa555f51",
                    "campaign_id": "101",
                    "campaign_name": "百度推广计划",
                    "name": "测试广告2",
                    "start_at": "2016-09-01",
                    "end_at": "2016-09-30",
                    "subject_type_code": "****",
                    "subject_detail": "vrfedsbvrfebre",
                    "platform_id":1,
                    "version": 2,
                    "status": 4,
                    "index_status": 3,
                    "space_id":1,
                    "pay_mode": 'CPT',
                    "pay_weight": 11,
                    "idea": {
                        "idea_type_code": "***123",
                        "detail": {
                            "img_url_1": "/test.jpg",
                            "img_url_2": "/test.jpg",
                            "title": "测试title",
                            "link_nmae": "http://wwww.google.com"
                        }
                    },
                    "targeting": {
                        "user_tag_groups": [
                            {
                                "identity": "sex",
                                "tags": [
                                    {
                                        "name": "女"
                                    }
                                ]
                            },
                            {
                                "identity": "area",
                                "tags": [
                                    {
                                        "name": "湖北省-武汉市"
                                    },
                                    {
                                        "name": "广东省-广州市"
                                    }
                                ]
                            }
                        ]
                    },
                    "created_at": '2016-09-30 03:07:38',
                    "updated_at": '2016-09-30 03:07:38'
                },
                {
                    "_id": "57edd6fa5de14f43aa555f51",
                    "campaign_id": "101",
                    "campaign_name": "百度推广计划",
                    "name": "测试广告2",
                    "start_at": "2016-09-01",
                    "end_at": "2016-09-30",
                    "subject_type_code": "****",
                    "subject_detail": "vrfedsbvrfebre",
                    "platform_id":1,
                    "version": 2,
                    "status": 5,
                    "index_status": 4,
                    "space_id":1,
                    "pay_mode": 'CPT',
                    "pay_weight": 11,
                    "idea": {
                        "idea_type_code": "***123",
                        "detail": {
                            "img_url_1": "/test.jpg",
                            "img_url_2": "/test.jpg",
                            "title": "测试title",
                            "link_nmae": "http://wwww.google.com"
                        }
                    },
                    "targeting": {
                        "user_tag_groups": [
                            {
                                "identity": "sex",
                                "tags": [
                                    {
                                        "name": "女"
                                    }
                                ]
                            },
                            {
                                "identity": "area",
                                "tags": [
                                    {
                                        "name": "湖北省-武汉市"
                                    },
                                    {
                                        "name": "广东省-广州市"
                                    }
                                ]
                            }
                        ]
                    },
                    "created_at": '2016-09-30 03:07:38',
                    "updated_at": '2016-09-30 03:07:38'
                }
            ],
        "currentpage":"1",
        "perpage":20,
        "total":26
        }
    }
}

var upload = {
    api: '/authed/upload-file',
    type:'post',
    response:{
      "status": 0,
      "msg": "操作成功",
      "data": {
        "uploaded": "20160927/test.jpg",
        "url": "https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB111.png"
      }
    }
}
var adUpdate ={
    "api": '/authed/ad/api/update',
    "type":'get',
    response:{
      "status": "0",
      "msg": "操作成功",
      "data":  {
            "id": "dfbvfdbfbfgrbtfgrbtgrtbr",
            "version": "1",
            "campaign_id": "57",
            "start_at": "2016-09-01",
            "end_at": "2016-09-30",
            "name": "edrfafdvvdsf",
            "subject_type_code": "111111",
            "subject_detail": "vrfedsbvrfebre",
            "platform_id":1,
            "space_id": 1,
            "res_url": "https://os.alipayobjects.com/rmsportal/",
            "pay_mode": 'CPT',
            "pay_weight": 0,
            "idea_type": {
                "idea_type_code": "99392A9C886",
                "detail": [
                    {
                        "type": "txt",
                        "name": "txt_1",
                        "value": "brfesbresb"
                    },
                    {
                        "type": "image",
                        "name": "img_url_1",
                        "value": "NDbkJhpzmLxtPhB.png"
                    }
                ]
            },
            "targeting": [
                    {
                        "identity": "game_type",
                        "tags": [
                            {
                                "name": "网页游戏"
                            },
                            {
                                "name": "单机游戏"
                            }
                        ]
                    },
                    {
                        "identity": "game_category",
                        "tags": [
                            {
                                "name": "大型角色扮演"
                            },
                            {
                                "name": "第三人称射击"
                            }
                        ]
                    }
                ]
            
        }
    }
}
 
var adDel ={
    "api": '/authed/ad/delete',
    "type":'post',
    response:{
      "status": 0,
      "msg": "操作成功",
      "data":{}
    }
}
var adPub ={
    "api": '/authed/ad/api/put-ad',
    "type":'get',
    response:{
      "status": "0",
      "msg": "操作成功",
      "data":{}
    }
}

var campaignDel ={
    "api": '/authed/campaign/delete',
    "type":'post',
    response:{
      "status": 100,
      "msg": "操作成功",
      "data":{}
    }
}

var campaignSatistical ={
    "api": '/authed/st/ad-statistic',
    "type":'get',
    response:{
      "status": "0",
      "msg": "操作成功",
      "data":{
        'count':3,
        'campaign_id':'57ee0911fa240603ae57b0d9',
        'put_count':11,
        'pv_count':11,
        'click_count':11,
        'table':getTable(),
      }
    }
}

var campaignAdd ={
    "api": '/authed/campaign/store',
    "type":'post',
    response:{
      "status": 0,
      "msg": "操作成功",
      "data":{}
    }
}


var adSatistical ={
    "api": '/authed/st/adlist-statistic',
    "type":'get',
    response:{
      "status": 0,
      "msg": "操作成功",
      "data":{
        'ad_id':Math.random(),
        'table':getTable(),
      }
    }
}

function getTable(){
    var arr = {};
    for (var i = 0; i < 24; i++) {
        arr[i] = {
            'pv':Math.floor(Math.random()*1000),
            'click':Math.floor(Math.random()*1000),
            'date':"2010-09-15 18:00"
        }
    }
    return arr;
}





module.exports = [
    adCreate, 
    getSpace, 
    getIdeaType, 
    getArea, 
    getTags,
    login,
    logout,
    saveAD,
    adList,
    upload,
    adUpdate,
    adDel,
    adPub,
    adSatistical,
    campaignList,
    campaignAdd,
    campaignSatistical,
    campaignDel,
    campaignEdit
    
]