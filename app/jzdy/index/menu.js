function DataGenerator(mockjs){
	var arr = [1,2,3,4,5,6,6,7,8,9,10];

	var dataModal = {
		'data|1-5':[
			{'num|1': arr}
		]
	};

	var _data = mockjs.mock(dataModal);
	return _data;
};

module.exports = {
	data: DataGenerator
}