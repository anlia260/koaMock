var adCreate = {
    api: '/authed/ad/api/create',
    type:'get',
    response: {
        "status": "0",
        "info": "操作成功",
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
                "code": "*****",
                "name": "网址"
            }],
            "platforms": [{
                "id": "1",
                "name": "易乐游",
                "screenshot_image_path": "/images/1.jpg"
            }, {
                "id": "2",
                "name": "易乐a游",
                "screenshot_image_path": "/images/1.jpg"
            }, {
                "id": "3",
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
        "info": "操作成功",
        "data": {
            "items": [{
                "platform_id": "1",
                "id": "1",
                "is_cpt": "1",
                "code": "**a***",
                "name": "搜索弹出框",
                "preview_image_path": "http://imgcache.qq.com/qzonestyle/sns/gdt/create/images/ad/160x210_01x.jpg",
                "target": "网吧"
            }, {
                "id": "2",
                "platform_id": "2",
                "is_cpt": "2",
                "code": "*****",
                "name": "搜索结果框",
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
        "info": "操作成功",
        "data": {
            "items": [{
                "id": "1",
                "code": "***123",
                "name": "图片",
                "config": [{
                    'type': 'image',
                    'name': 'img_url_1',
                    'size': '100kb',
                    'format': 'jpg/png',
                    'resolution': '500*600',
                    'desc': '图片说明'
                }, {
                    'type': 'image',
                    'name': 'img_url_2',
                    'size': '50kb',
                    'format': 'jpg',
                    'resolution': '100*600',
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
                    'name': 'title',
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
        "info": "操作成功",
        "data": [{
            'id': '1',
            'name': '湖北省',
            'children': [{
                'id': '1-1',
                'name': '湖北省-武汉市',
            }]
        }, {
            'id': '2',
            'name': '湖南省',
            'children': [{
                'id': '2-1',
                'name': '湖南省-长沙市',
            }]
        }]
        
    }
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
        "status": "0",
        "info": "操作成功",
        "data": {
             account: "admin@admin.com",
             nickname:"王小二"

        }
    }
}
var logout = {
    api: '/auth/api/logout',
    type:'post',
    response: {
        "status": "0",
        "info": "操作成功",
        "data": {}
    }
}
var saveAD = {
    api: '/authed/ad/active-store',
    type:'post',
    response: {
        "status": 0,
        "info": "操作成功",
        "data": {}
    }
}
var campaignList = {
    api: '/authed/campaign/list',
    type:'get',
    response: {"status":0,"msg":"","data":{"items":[{"_id":"57ee0034fa240603b328ba38","name":"\u805a\u4e49\u5802","daily_budget":null,"created_at":{"date":"2016-09-30 06:03:32.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 06:03:32.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57ee00cafa240603b328ba39","name":"\u767e\u5ea6\u63a8\u5e7f\u8ba1\u5212\u6d4b\u8bd5\u3002","daily_budget":null,"created_at":{"date":"2016-09-30 06:06:02.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 06:06:02.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57ee02d4fa24060b736c9f74","name":"gthtgrtghgrb","daily_budget":null,"created_at":{"date":"2016-09-30 06:14:44.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 06:14:44.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57ee0335fa240603b328ba3b","name":"tyjhhtrgjtr","daily_budget":null,"created_at":{"date":"2016-09-30 06:16:21.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 06:16:21.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57ee08dcfa240603b5627029","name":"\u56fd\u5e86\u63a8\u5e7f\u8ba1\u5212","daily_budget":null,"created_at":{"date":"2016-09-30 06:40:28.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 06:40:28.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57ee0911fa240603ae57b0d9","name":"\u4e2d\u79cb\u63a8\u5e7f\u8ba1\u5212","daily_budget":null,"created_at":{"date":"2016-09-30 06:41:21.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 06:41:21.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57ee0c625de14f4d7f65ef76","name":"\u5355\u673a\u6e38\u620f\u63a8\u5e7f","daily_budget":null,"created_at":{"date":"2016-09-30 06:55:30.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 06:55:30.000000","timezone_type":1,"timezone":"+00:00"}}],"currentpage":1,"perpage":20,"total":7}}
}
var adList = {
    api: '/authed/ad/list',
    type:'get',
    response: {"status":0,"msg":"","data":{"items":[{"_id":"57edcd54fa240603af756622","daily_budget":0,"campaign_id":57,"name":"yjhghmnhjmjh","subject_type_code":"111111","subject_detail":["http:\/\/localhost:3001\/#\/ad\/create?_k=j2zij5"],"start_at":null,"end_at":null,"platform_id":1,"space_id":1,"pay_mode":0,"pay_weight":0,"idea":{"idea_type_code":"99392A9C886","detail":[{"type":"txt","name":"txt_1","value":"http:\/\/localhost:3001\/#\/ad\/create?_k=j2zij5"}]},"targeting":{"user_tag_groups":[{"identity":"game_type","tags":[{"name":"\u7f51\u9875\u6e38\u620f"},{"name":"\u5355\u673a\u6e38\u620f"}]},{"identity":"game_category","tags":[{"name":"\u5927\u578b\u89d2\u8272\u626e\u6f14"},{"name":"\u7b2c\u4e09\u4eba\u79f0\u5c04\u51fb"},{"name":"\u97f3\u4e50"},{"name":"\u6218\u7565\u89d2\u8272\u626e\u6f14"},{"name":"\u4f53\u80b2"}]}]},"status":2,"index_status":1,"created_at":{"date":"2016-09-30 02:26:28.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 02:26:28.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57edd0ddfa240603b1026222","daily_budget":0,"campaign_id":57,"name":"edrfafdvvdsf","subject_type_code":"111111","subject_detail":["vrfedsbvrfebre"],"start_at":null,"end_at":null,"platform_id":1,"space_id":1,"pay_mode":0,"pay_weight":0,"idea":{"idea_type_code":"99392A9C886","detail":[{"type":"txt","name":"txt_1","value":"brfesbresb"}]},"targeting":{"user_tag_groups":[{"identity":"game_type","tags":[{"name":"\u7f51\u9875\u6e38\u620f"},{"name":"\u5355\u673a\u6e38\u620f"}]},{"identity":"game_category","tags":[{"name":"\u5927\u578b\u89d2\u8272\u626e\u6f14"},{"name":"\u7b2c\u4e09\u4eba\u79f0\u5c04\u51fb"}]}]},"status":2,"index_status":1,"created_at":{"date":"2016-09-30 02:41:33.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 02:41:33.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57edd506fa240603b1026223","daily_budget":0,"campaign_id":57,"name":"\u53c8\u7a81\u7136\u5c31","subject_type_code":"*****","subject_detail":["\u805a\u4e49\u5802"],"start_at":null,"end_at":null,"platform_id":1,"space_id":1,"pay_mode":0,"pay_weight":0,"idea":{"idea_type_code":"99392A9C886","detail":[{"type":"txt","name":"txt_1","value":"\u53ca\u5408\u540c\u4eba\u5458\u4e5f"}]},"targeting":{"user_tag_groups":[{"identity":"game_type","tags":[{"name":"\u7f51\u9875\u6e38\u620f"},{"name":"\u5355\u673a\u6e38\u620f"}]},{"identity":"game_category","tags":[{"name":"\u7b2c\u4e00\u4eba\u79f0\u5c04\u51fb"},{"name":"\u7b2c\u4e09\u4eba\u79f0\u5c04\u51fb"}]}]},"status":2,"index_status":1,"created_at":{"date":"2016-09-30 02:59:18.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 02:59:18.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57edd6fa5de14f43aa555f51","campaign_id":1,"name":"\u6d4b\u8bd5\u5e7f\u544a2","start_at":{"date":"2016-09-01 03:07:38.000000","timezone_type":1,"timezone":"+00:00"},"end_at":{"date":"2016-09-30 03:07:38.000000","timezone_type":1,"timezone":"+00:00"},"subject_type_code":"****","subject_detail":["http:\/\/www.douyu2.com"],"platform_id":1,"space_id":1,"pay_mode":0,"pay_weight":11,"idea":{"idea_type_code":"***123","detail":{"img_url_1":"\/test.jpg","img_url_2":"\/test.jpg","title":"\u6d4b\u8bd5title","link_nmae":"http:\/\/wwww.google.com"}},"targeting":{"user_tag_groups":[{"identity":"sex","tags":[{"name":"\u5973"}]},{"identity":"area","tags":[{"name":"\u6e56\u5317\u7701-\u6b66\u6c49\u5e02"},{"name":"\u5e7f\u4e1c\u7701-\u5e7f\u5dde\u5e02"}]}]},"status":2,"index_status":1,"created_at":{"date":"2016-09-30 03:07:38.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 03:07:38.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57edd7005de14f43b23ea091","campaign_id":1,"name":"\u6d4b\u8bd5\u5e7f\u544a2","start_at":{"date":"2016-09-01 03:07:44.000000","timezone_type":1,"timezone":"+00:00"},"end_at":{"date":"2016-09-30 03:07:44.000000","timezone_type":1,"timezone":"+00:00"},"subject_type_code":"****","subject_detail":["http:\/\/www.douyu2.com"],"platform_id":1,"space_id":1,"pay_mode":0,"pay_weight":11,"idea":{"idea_type_code":"***123","detail":{"img_url_1":"\/test.jpg","img_url_2":"\/test.jpg","title":"\u6d4b\u8bd5title","link_nmae":"http:\/\/wwww.google.com"}},"targeting":{"user_tag_groups":[{"identity":"sex","tags":[{"name":"\u5973"}]},{"identity":"area","tags":[{"name":"\u6e56\u5317\u7701-\u6b66\u6c49\u5e02"},{"name":"\u5e7f\u4e1c\u7701-\u5e7f\u5dde\u5e02"}]}]},"status":2,"index_status":1,"created_at":{"date":"2016-09-30 03:07:44.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 03:07:44.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57edd7175de14f4d7f65ef71","campaign_id":1,"name":"\u6d4b\u8bd5\u5e7f\u544a2","start_at":{"date":"2016-09-01 03:08:07.000000","timezone_type":1,"timezone":"+00:00"},"end_at":{"date":"2016-09-30 03:08:07.000000","timezone_type":1,"timezone":"+00:00"},"subject_type_code":"****","subject_detail":["http:\/\/www.douyu2.com"],"platform_id":1,"space_id":1,"pay_mode":0,"pay_weight":11,"idea":{"idea_type_code":"***123","detail":{"img_url_1":"\/test.jpg","img_url_2":"\/test.jpg","title":"\u6d4b\u8bd5title","link_nmae":"http:\/\/wwww.google.com"}},"targeting":{"user_tag_groups":[{"identity":"sex","tags":[{"name":"\u5973"}]},{"identity":"area","tags":[{"name":"\u6e56\u5317\u7701-\u6b66\u6c49\u5e02"},{"name":"\u5e7f\u4e1c\u7701-\u5e7f\u5dde\u5e02"}]}]},"status":2,"index_status":1,"created_at":{"date":"2016-09-30 03:08:07.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 03:08:07.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57edd7185de14f43aa555f52","campaign_id":1,"name":"\u6d4b\u8bd5\u5e7f\u544a2","start_at":{"date":"2016-09-01 03:08:08.000000","timezone_type":1,"timezone":"+00:00"},"end_at":{"date":"2016-09-30 03:08:08.000000","timezone_type":1,"timezone":"+00:00"},"subject_type_code":"****","subject_detail":["http:\/\/www.douyu2.com"],"platform_id":1,"space_id":1,"pay_mode":0,"pay_weight":11,"idea":{"idea_type_code":"***123","detail":{"img_url_1":"\/test.jpg","img_url_2":"\/test.jpg","title":"\u6d4b\u8bd5title","link_nmae":"http:\/\/wwww.google.com"}},"targeting":{"user_tag_groups":[{"identity":"sex","tags":[{"name":"\u5973"}]},{"identity":"area","tags":[{"name":"\u6e56\u5317\u7701-\u6b66\u6c49\u5e02"},{"name":"\u5e7f\u4e1c\u7701-\u5e7f\u5dde\u5e02"}]}]},"status":2,"index_status":1,"created_at":{"date":"2016-09-30 03:08:08.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 03:08:08.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57edd7335de14f43b23ea092","campaign_id":1,"name":"\u6d4b\u8bd5\u5e7f\u544a2","start_at":{"date":"2016-09-01 03:08:35.000000","timezone_type":1,"timezone":"+00:00"},"end_at":{"date":"2016-09-30 03:08:35.000000","timezone_type":1,"timezone":"+00:00"},"subject_type_code":"****","subject_detail":["http:\/\/www.douyu2.com"],"platform_id":1,"space_id":1,"pay_mode":0,"pay_weight":11,"idea":{"idea_type_code":"***123","detail":{"img_url_1":"\/test.jpg","img_url_2":"\/test.jpg","title":"\u6d4b\u8bd5title","link_nmae":"http:\/\/wwww.google.com"}},"targeting":{"user_tag_groups":[{"identity":"sex","tags":[{"name":"\u5973"}]},{"identity":"area","tags":[{"name":"\u6e56\u5317\u7701-\u6b66\u6c49\u5e02"},{"name":"\u5e7f\u4e1c\u7701-\u5e7f\u5dde\u5e02"}]}]},"status":2,"index_status":1,"created_at":{"date":"2016-09-30 03:08:35.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 03:08:35.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57edd7335de14f4d7f65ef72","campaign_id":1,"name":"\u6d4b\u8bd5\u5e7f\u544a2","start_at":{"date":"2016-09-01 03:08:35.000000","timezone_type":1,"timezone":"+00:00"},"end_at":{"date":"2016-09-30 03:08:35.000000","timezone_type":1,"timezone":"+00:00"},"subject_type_code":"****","subject_detail":["http:\/\/www.douyu2.com"],"platform_id":1,"space_id":1,"pay_mode":0,"pay_weight":11,"idea":{"idea_type_code":"***123","detail":{"img_url_1":"\/test.jpg","img_url_2":"\/test.jpg","title":"\u6d4b\u8bd5title","link_nmae":"http:\/\/wwww.google.com"}},"targeting":{"user_tag_groups":[{"identity":"sex","tags":[{"name":"\u5973"}]},{"identity":"area","tags":[{"name":"\u6e56\u5317\u7701-\u6b66\u6c49\u5e02"},{"name":"\u5e7f\u4e1c\u7701-\u5e7f\u5dde\u5e02"}]}]},"status":2,"index_status":1,"created_at":{"date":"2016-09-30 03:08:35.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 03:08:35.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57edd7345de14f43aa555f53","campaign_id":1,"name":"\u6d4b\u8bd5\u5e7f\u544a2","start_at":{"date":"2016-09-01 03:08:36.000000","timezone_type":1,"timezone":"+00:00"},"end_at":{"date":"2016-09-30 03:08:36.000000","timezone_type":1,"timezone":"+00:00"},"subject_type_code":"****","subject_detail":["http:\/\/www.douyu2.com"],"platform_id":1,"space_id":1,"pay_mode":0,"pay_weight":11,"idea":{"idea_type_code":"***123","detail":{"img_url_1":"\/test.jpg","img_url_2":"\/test.jpg","title":"\u6d4b\u8bd5title","link_nmae":"http:\/\/wwww.google.com"}},"targeting":{"user_tag_groups":[{"identity":"sex","tags":[{"name":"\u5973"}]},{"identity":"area","tags":[{"name":"\u6e56\u5317\u7701-\u6b66\u6c49\u5e02"},{"name":"\u5e7f\u4e1c\u7701-\u5e7f\u5dde\u5e02"}]}]},"status":2,"index_status":1,"created_at":{"date":"2016-09-30 03:08:36.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 03:08:36.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57edd7405de14f43b23ea093","campaign_id":1,"name":"\u6d4b\u8bd5\u5e7f\u544a2","start_at":{"date":"2016-09-01 03:08:48.000000","timezone_type":1,"timezone":"+00:00"},"end_at":{"date":"2016-09-30 03:08:48.000000","timezone_type":1,"timezone":"+00:00"},"subject_type_code":"****","subject_detail":["http:\/\/www.douyu2.com"],"platform_id":1,"space_id":1,"pay_mode":0,"pay_weight":11,"idea":{"idea_type_code":"***123","detail":{"img_url_1":"\/test.jpg","img_url_2":"\/test.jpg","title":"\u6d4b\u8bd5title","link_nmae":"http:\/\/wwww.google.com"}},"targeting":{"user_tag_groups":[{"identity":"sex","tags":[{"name":"\u5973"}]},{"identity":"area","tags":[{"name":"\u6e56\u5317\u7701-\u6b66\u6c49\u5e02"},{"name":"\u5e7f\u4e1c\u7701-\u5e7f\u5dde\u5e02"}]}]},"status":2,"index_status":1,"created_at":{"date":"2016-09-30 03:08:48.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 03:08:48.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57edd7405de14f4d7f65ef73","campaign_id":1,"name":"\u6d4b\u8bd5\u5e7f\u544a2","start_at":{"date":"2016-09-01 03:08:48.000000","timezone_type":1,"timezone":"+00:00"},"end_at":{"date":"2016-09-30 03:08:48.000000","timezone_type":1,"timezone":"+00:00"},"subject_type_code":"****","subject_detail":["http:\/\/www.douyu2.com"],"platform_id":1,"space_id":1,"pay_mode":0,"pay_weight":11,"idea":{"idea_type_code":"***123","detail":{"img_url_1":"\/test.jpg","img_url_2":"\/test.jpg","title":"\u6d4b\u8bd5title","link_nmae":"http:\/\/wwww.google.com"}},"targeting":{"user_tag_groups":[{"identity":"sex","tags":[{"name":"\u5973"}]},{"identity":"area","tags":[{"name":"\u6e56\u5317\u7701-\u6b66\u6c49\u5e02"},{"name":"\u5e7f\u4e1c\u7701-\u5e7f\u5dde\u5e02"}]}]},"status":2,"index_status":1,"created_at":{"date":"2016-09-30 03:08:48.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 03:08:48.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57edd7415de14f43aa555f54","campaign_id":1,"name":"\u6d4b\u8bd5\u5e7f\u544a2","start_at":{"date":"2016-09-01 03:08:49.000000","timezone_type":1,"timezone":"+00:00"},"end_at":{"date":"2016-09-30 03:08:49.000000","timezone_type":1,"timezone":"+00:00"},"subject_type_code":"****","subject_detail":["http:\/\/www.douyu2.com"],"platform_id":1,"space_id":1,"pay_mode":0,"pay_weight":11,"idea":{"idea_type_code":"***123","detail":{"img_url_1":"\/test.jpg","img_url_2":"\/test.jpg","title":"\u6d4b\u8bd5title","link_nmae":"http:\/\/wwww.google.com"}},"targeting":{"user_tag_groups":[{"identity":"sex","tags":[{"name":"\u5973"}]},{"identity":"area","tags":[{"name":"\u6e56\u5317\u7701-\u6b66\u6c49\u5e02"},{"name":"\u5e7f\u4e1c\u7701-\u5e7f\u5dde\u5e02"}]}]},"status":2,"index_status":1,"created_at":{"date":"2016-09-30 03:08:49.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 03:08:49.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57edd7415de14f43b23ea094","campaign_id":1,"name":"\u6d4b\u8bd5\u5e7f\u544a2","start_at":{"date":"2016-09-01 03:08:49.000000","timezone_type":1,"timezone":"+00:00"},"end_at":{"date":"2016-09-30 03:08:49.000000","timezone_type":1,"timezone":"+00:00"},"subject_type_code":"****","subject_detail":["http:\/\/www.douyu2.com"],"platform_id":1,"space_id":1,"pay_mode":0,"pay_weight":11,"idea":{"idea_type_code":"***123","detail":{"img_url_1":"\/test.jpg","img_url_2":"\/test.jpg","title":"\u6d4b\u8bd5title","link_nmae":"http:\/\/wwww.google.com"}},"targeting":{"user_tag_groups":[{"identity":"sex","tags":[{"name":"\u5973"}]},{"identity":"area","tags":[{"name":"\u6e56\u5317\u7701-\u6b66\u6c49\u5e02"},{"name":"\u5e7f\u4e1c\u7701-\u5e7f\u5dde\u5e02"}]}]},"status":2,"index_status":1,"created_at":{"date":"2016-09-30 03:08:49.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 03:08:49.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57edd7415de14f4d7f65ef74","campaign_id":1,"name":"\u6d4b\u8bd5\u5e7f\u544a2","start_at":{"date":"2016-09-01 03:08:49.000000","timezone_type":1,"timezone":"+00:00"},"end_at":{"date":"2016-09-30 03:08:49.000000","timezone_type":1,"timezone":"+00:00"},"subject_type_code":"****","subject_detail":["http:\/\/www.douyu2.com"],"platform_id":1,"space_id":1,"pay_mode":0,"pay_weight":11,"idea":{"idea_type_code":"***123","detail":{"img_url_1":"\/test.jpg","img_url_2":"\/test.jpg","title":"\u6d4b\u8bd5title","link_nmae":"http:\/\/wwww.google.com"}},"targeting":{"user_tag_groups":[{"identity":"sex","tags":[{"name":"\u5973"}]},{"identity":"area","tags":[{"name":"\u6e56\u5317\u7701-\u6b66\u6c49\u5e02"},{"name":"\u5e7f\u4e1c\u7701-\u5e7f\u5dde\u5e02"}]}]},"status":2,"index_status":1,"created_at":{"date":"2016-09-30 03:08:49.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 03:08:49.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57edd7425de14f43aa555f55","campaign_id":1,"name":"\u6d4b\u8bd5\u5e7f\u544a2","start_at":{"date":"2016-09-01 03:08:50.000000","timezone_type":1,"timezone":"+00:00"},"end_at":{"date":"2016-09-30 03:08:50.000000","timezone_type":1,"timezone":"+00:00"},"subject_type_code":"****","subject_detail":["http:\/\/www.douyu2.com"],"platform_id":1,"space_id":1,"pay_mode":0,"pay_weight":11,"idea":{"idea_type_code":"***123","detail":{"img_url_1":"\/test.jpg","img_url_2":"\/test.jpg","title":"\u6d4b\u8bd5title","link_nmae":"http:\/\/wwww.google.com"}},"targeting":{"user_tag_groups":[{"identity":"sex","tags":[{"name":"\u5973"}]},{"identity":"area","tags":[{"name":"\u6e56\u5317\u7701-\u6b66\u6c49\u5e02"},{"name":"\u5e7f\u4e1c\u7701-\u5e7f\u5dde\u5e02"}]}]},"status":2,"index_status":1,"created_at":{"date":"2016-09-30 03:08:50.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 03:08:50.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57edd7425de14f43b23ea095","campaign_id":1,"name":"\u6d4b\u8bd5\u5e7f\u544a2","start_at":{"date":"2016-09-01 03:08:50.000000","timezone_type":1,"timezone":"+00:00"},"end_at":{"date":"2016-09-30 03:08:50.000000","timezone_type":1,"timezone":"+00:00"},"subject_type_code":"****","subject_detail":["http:\/\/www.douyu2.com"],"platform_id":1,"space_id":1,"pay_mode":0,"pay_weight":11,"idea":{"idea_type_code":"***123","detail":{"img_url_1":"\/test.jpg","img_url_2":"\/test.jpg","title":"\u6d4b\u8bd5title","link_nmae":"http:\/\/wwww.google.com"}},"targeting":{"user_tag_groups":[{"identity":"sex","tags":[{"name":"\u5973"}]},{"identity":"area","tags":[{"name":"\u6e56\u5317\u7701-\u6b66\u6c49\u5e02"},{"name":"\u5e7f\u4e1c\u7701-\u5e7f\u5dde\u5e02"}]}]},"status":2,"index_status":1,"created_at":{"date":"2016-09-30 03:08:50.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 03:08:50.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57edd7425de14f4d7f65ef75","campaign_id":1,"name":"\u6d4b\u8bd5\u5e7f\u544a2","start_at":{"date":"2016-09-01 03:08:50.000000","timezone_type":1,"timezone":"+00:00"},"end_at":{"date":"2016-09-30 03:08:50.000000","timezone_type":1,"timezone":"+00:00"},"subject_type_code":"****","subject_detail":["http:\/\/www.douyu2.com"],"platform_id":1,"space_id":1,"pay_mode":0,"pay_weight":11,"idea":{"idea_type_code":"***123","detail":{"img_url_1":"\/test.jpg","img_url_2":"\/test.jpg","title":"\u6d4b\u8bd5title","link_nmae":"http:\/\/wwww.google.com"}},"targeting":{"user_tag_groups":[{"identity":"sex","tags":[{"name":"\u5973"}]},{"identity":"area","tags":[{"name":"\u6e56\u5317\u7701-\u6b66\u6c49\u5e02"},{"name":"\u5e7f\u4e1c\u7701-\u5e7f\u5dde\u5e02"}]}]},"status":2,"index_status":1,"created_at":{"date":"2016-09-30 03:08:50.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 03:08:50.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57edd8bffa240603b5627023","daily_budget":0,"campaign_id":57,"name":"\u963f\u65af\u987f\u8428","subject_type_code":"111111","subject_detail":["\u6492\u65e6\u6492\u65e6"],"start_at":null,"end_at":null,"platform_id":1,"space_id":1,"pay_mode":0,"pay_weight":33,"idea":{"idea_type_code":"99392A9C886","detail":[{"type":"txt","name":"txt_1","value":"\u963f\u65af\u987f\u8428\u7684"}]},"targeting":{"user_tag_groups":[{"identity":"game_type","tags":[{"name":"\u7f51\u7edc\u6e38\u620f"},{"name":"\u7f51\u9875\u6e38\u620f"}]},{"identity":"game_category","tags":[{"name":"MOBA"},{"name":"\u7b56\u7565"}]}]},"status":2,"index_status":1,"created_at":{"date":"2016-09-30 03:15:11.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 03:15:11.000000","timezone_type":1,"timezone":"+00:00"}},{"_id":"57edf0effa240603b058acd3","daily_budget":0,"campaign_id":57,"name":"uyuyjuyuyj","subject_type_code":"111111","subject_detail":["http:\/\/aa.com\/#\/ad\/create?_k=t5t5p1"],"start_at":null,"end_at":null,"platform_id":1,"space_id":1,"pay_mode":0,"pay_weight":0,"idea":{"idea_type_code":"99392A9C886","detail":[{"type":"txt","name":"txt_1","value":"http:\/\/aa.com\/#\/ad\/create?_k=t5t5p1"}]},"targeting":{"user_tag_groups":[{"identity":"game_type","tags":[{"name":"\u5355\u673a\u6e38\u620f"},{"name":"\u624b\u673a\u6e38\u620f"}]},{"identity":"game_category","tags":[{"name":"\u7b2c\u4e09\u4eba\u79f0\u5c04\u51fb"},{"name":"\u7b2c\u4e00\u4eba\u79f0\u5c04\u51fb"},{"name":"\u6218\u7565\u89d2\u8272\u626e\u6f14"}]}]},"status":2,"index_status":1,"created_at":{"date":"2016-09-30 04:58:23.000000","timezone_type":1,"timezone":"+00:00"},"updated_at":{"date":"2016-09-30 04:58:23.000000","timezone_type":1,"timezone":"+00:00"}}],"currentpage":"1","perpage":20,"total":26}}
}

var upload = {
    api: '/authed/api/upload',
    type:'post',
    response:{
      "status": "0",
      "info": "操作成功",
      "data": {
        "uploaded": "20160927/test.jpg",
        "url": "https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png"
      }
    }
}
var adUpdate ={
    "api": '/authed/api/update',
    "type":'get',
    response:{
      "status": "0",
      "info": "操作成功",
      "data": {
    "ad_idea_detail": [{
        "img_url_1": [{
            "lastModified": 1470648517053,
            "lastModifiedDate": "2016-08-08T09:28:37.053Z",
            "name": "管理端-战吧榜-无赛事.jpg",
            "size": 66445,
            "type": "image/jpeg",
            "uid": "rc-upload-1476355958642-3",
            "response": {
                "status": "0",
                "info": "操作成功",
                "data": {
                    "uploaded": "20160927/test.jpg",
                    "url": "https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png"
                }
            },
            "percent": 100,
            "originFileObj": {
                "uid": "rc-upload-1476355958642-3"
            },
            "status": "done",
            "thumbUrl": "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAxNCA3OS4xNTE0ODEsIDIwMTMvMDMvMTMtMTI6MDk6MTUgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkJCQ0E1MDQ1RDQ1MTFFNkEyMDhDOUJDMDIzMzkyQjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkJCQ0E1MDU1RDQ1MTFFNkEyMDhDOUJDMDIzMzkyQjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2QkJDQTUwMjVENDUxMUU2QTIwOEM5QkMwMjMzOTJCNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2QkJDQTUwMzVENDUxMUU2QTIwOEM5QkMwMjMzOTJCNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYI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…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HtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oHtPm+tA9p831oP/2Q==",
            "url": "https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png"
        }]
    }, {
        "img_url_2": [{
            "lastModified": 1470648517053,
            "lastModifiedDate": "2016-08-08T09:28:37.053Z",
            "name": "管理端-战吧榜-无赛事.jpg",
            "size": 66445,
            "type": "image/jpeg",
            "uid": "rc-upload-1476355958642-5",
            "response": {
                "status": "0",
                "info": "操作成功",
                "data": {
                    "uploaded": "20160927/test.jpg",
                    "url": "https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png"
                }
            },
            "percent": 100,
            "originFileObj": {
                "uid": "rc-upload-1476355958642-5"
            },
            "status": "done",
            "thumbUrl": "https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png",
            "url": "https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png"
        }]
    }, {
        "title": "haloo"
    }, {
        "link_name": "haloo"
    }],
    "campaign_id": "101",
    "ended_at": "2016-11-17",
    "idea_type_code": "pic",
    "name": "百度广告第一章",
    "pay_mode": "CPT",
    "pay_weight": 1,
    "platform_id": "1",
    "space_id": "1 ",
    "started_at": "2016-10-12",
    "subject_code": "*****",
    "subject_detail": "www.baidu.com",
    "targeting": [{
        "game_type": ["网络游戏", "网页游戏", "单机游戏"]
    }, {
        "game_category": ["策略", "即时战略", "大型角色扮演"]
    }, {
        "region": ["湖北省"]
    }, {
        "sex": "男"
    }]
}
    }
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
    campaignList,
    adList,
    upload,
    adUpdate
]