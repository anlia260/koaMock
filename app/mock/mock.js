var adCreate = {
    api: '/authed/ad/api/create',
    response: {
        "status": 0,
        "info": "操作成功",
        "data": {
            "campaigns": [{
                "id": "101",
                "name": "百度推广",
                "daily_budget": "100.5"
            }],
            
            "started_at": "2016-09-25 00:00:00",
            "ended_at": "null",
            "subjects": [{
                "code": "*****",
                "name": "网址"
            }],
            "platforms": [{
                "id": "1",
                "name": "易乐游",
                "screenshot_image_path": "/images/1.jpg"
            }],
            "platform_selected": "",
            "pay_mode": ["CPC", "CPM"],
         
        }
    }
}
module.exports = [adCreate]