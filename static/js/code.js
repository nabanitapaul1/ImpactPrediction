function myFunction(){
	
	id_status()
	id_caller();
	opened_by();
	created_by();  
	updated_by();
	//type_contact();
	locn();
	category_ID();
	user_symptom();
	support_group();
	support_incharge();
	//doc_knowledge();
	//confirmation_check();
	

	}


function id_status(){
	/*alert("Hello");
	const fs = require("fs"); 
	alert("1");
	fs.readFile("/D:/New folder/Final/Deployment/Templates/ID_statuss.txt", "utf-8", (err, data) => { 
		alert("2");
		
		alert("3");
		
		alert("4");
	});
    alert("HI");*/
	
	var category = ["Closed", "Resolved", "New", "Active", "Awaiting User Info", "Awaiting Vendor",  " Awaiting Problem", "Awaiting Evidence"];

	var x = document.getElementById("id_status"); 
	for (var i = 0; i < category.length; i++){ 
			
			var optn = category[i];
			var option = document.createElement("option"); 
			option.textContent = optn; 
            option.value = optn; 
            x.appendChild(option);
						
            } 	
	
}
     
	 
function id_caller(){
	var category = ['Caller 1904', 'Caller 290', 'Caller 4514', 'Caller 1441', 'Caller 3763', 
'Caller 90', 'Caller 1531', 'Caller 4414', 'Caller 298', 'Caller 93', 'Caller 2630', 
'Caller 4166', 'Caller 3038', 'Caller 2471', 'Caller 3870', 'Caller 1517', 'Caller 3160', 
'Caller 203', 'Caller 742', 'Caller 994', 'Caller 156', 'Caller 5093', 'Caller 3936', 'Caller 707', 
'Caller 369', 'Caller 3479', 'Caller 4180', 'Caller 116', 'Caller 2522', 'Caller 1353', 'Caller 1325','Caller 3765','Caller 4866',
'Caller 5281','Caller 1393','Caller 4271','Caller 4290' ];
	var x = document.getElementById("id_caller"); 
  for (var i = 0; i < category.length; i++){ 
			
			var optn = category[i];
			var option = document.createElement("option"); 
			option.textContent = optn; 
            option.value = optn; 
            x.appendChild(option);
						
            } 			
			
 
 }
function opened_by(){
	
	var category = ["Opened by  17", "Opened by  24", "Opened by  131", "Opened by  55", "Opened by  108", "Opened by  62", "Opened by  40", 
"Opened by  501", "Opened by  386", "Opened by  8", "Opened by  397", "Opened by  180", "Opened by  59", "Opened by  301", 
"Opened by  305", "Opened by  390", "Opened by  58", "Opened by  221", "Opened by  239", "Opened by  500", "Opened by  94",
 "Opened by  463", "Opened by  47", "Opened by  443", "Opened by  20", "Opened by  444", "Opened by  240", "Opened by  468",
 "Opened by  402", "Opened by  460", "Opened by  433", "Opened by  44", "Opened by  70", "Opened by  325", "Opened by  124",
 "Opened by  247", "Opened by  168", "Opened by  536", "Opened by  360", "Opened by  381", "Opened by  174", "Opened by  9",
 "Opened by  142", "Opened by  512", "Opened by  242", "Opened by  472", "Opened by  403", "Opened by  157", "Opened by  423",
 "Opened by  12", "Opened by  267", "Opened by  354", "Opened by  228", "Opened by  109", "Opened by  79", "Opened by  155", 
 "Opened by  191", "Opened by  162", "Opened by  253", "Opened by  467", "Opened by  317", "Opened by  30", "Opened by  10", 
 "Opened by  441", "Opened by  461", "Opened by  257", "Opened by  503", "Opened by  385", "Opened by  91", "Opened by  32",
 "Opened by  256", "Opened by  438", "Opened by  14", "Opened by  430", "Opened by  321", "Opened by  412", "Opened by  364", 
 "Opened by  369", "Opened by  319", "Opened by  193", "Opened by  464", "Opened by  517", "Opened by  223", "Opened by  520","Opened by  131","Opened by  128"];
	var x = document.getElementById("opened_by"); 
  for (var i = 0; i < category.length; i++){ 
			
			var optn = category[i];
			var option = document.createElement("option"); 
			option.textContent = optn; 
            option.value = optn; 
            x.appendChild(option);
						
            } 	
	
}
  
function created_by(){
	
	var category = ['Created by 10', 'Created by 13', 'Created by 62', 'Created by 30', 'Created by 20', 'Created by 52', 'Created by 81', 
'Created by 216', 'Created by 33', 'Created by 89', 'Created by 34', 'Created by 6', 'Created by 171', 'Created by 167',
 'Created by 169', 'Created by 129', 'Created by 130', 'Created by 98', 'Created by 217', 'Created by 31', 'Created by 107',
 'Created by 188', 'Created by 108', 'Created by 199', 'Created by 25', 'Created by 193', 'Created by 12', 'Created by 192', 
 'Created by 45', 'Created by 23', 'Created by 47', 'Created by 140', 'Created by 172', 'Created by 58', 'Created by 120', 'Created by 76', 
 'Created by 202', 'Created by 18', 'Created by 79', 'Created by 158', 'Created by 190', 'Created by 233', 'Created by 221', 'Created by 71', 
 'Created by 180', 'Created by 113', 'Created by 70', 'Created by 174', 'Created by 51', 'Created by 7', 'Created by 151', 
 'Created by 109', 'Created by 5', 'Created by 87', 'Created by 137', 'Created by 119', 'Created by 182', 'Created by 205', 'Created by 164', 
 'Created by 24', 'Created by 42', 'Created by 166', 'Created by 101', 'Created by 184', 'Created by 114', 'Created by 17', 'Created by 207', 
 'Created by 14', 'Created by 44', 'Created by 88', 'Created by 186', 'Created by 138', 'Created by 117', 'Created by 226', 'Created by 132', 
 'Created by 147', 'Created by 225', 'Created by 100', 'Created by 59', 'Created by 176', 'Created by 61', 'Created by 200', 'Created by 196',
 'Created by 74', 'Created by 148', 'Created by 218', 'Created by 220', 'Created by 37', 'Created by 21', 'Created by 211', 'Created by 118', 
 'Created by 84', 'Created by 8', 'Created by 204', 'Created by 213', 'Created by 92', 'Created by 41', 'Created by 83', 'Created by 223', 
 'Created by 136', 'Created by 124', 'Created by 69', 'Created by 203', 'Created by 67', 'Created by 228', 'Created by 160', 
 'Created by 144', 'Created by 19', 'Created by 85', 'Created by 103', 'Created by 219', 'Created by 32', 'Created by 185', 
 'Created by 230', 'Created by 82', 'Created by 97', 'Created by 134', 'Created by 210', 'Created by 170', 'Created by 78',
 'Created by 162', 'Created by 229', 'Created by 64', 'Created by 142', 'Created by 133', 'Created by 43', 'Created by 179', 
 'Created by 145', 'Created by 54', 'Created by 91', 'Created by 48', 'Created by 96', 'Created by 115', 'Created by 35', 'Created by 55', 
 'Created by 122', 'Created by 86', 'Created by 66', 'Created by 50', 'Created by 227', 'Created by 2', 'Created by 201', 'Created by 197',
 'Created by 1', 'Created by 214', 'Created by 49', 'Created by 36', 'Created by 102', 'Created by 149', 'Created by 232', 'Created by 183',
 'Created by 143', 'Created by 3', 'Created by 56', 'Created by 65', 'Created by 57', 'Created by 125', 'Created by 168', 'Created by 163',
 'Created by 178', 'Created by 181', 'Created by 99', 'Created by 110', 'Created by 53', 'Created by 159', 'Created by 191',
 'Created by 194', 'Created by 209', 'Created by 60', 'Created by 121', 'Created by 135', 'Created by 139', 'Created by 212', 
 'Created by 155', 'Created by 222', 'Created by 46', 'Created by 165', 'Created by 38', 'Created by 15', 'Created by 195', 
 'Created by 73', 'Created by 68', 'Created by 39', 'Created by 175', 'Created by 208','Created by 62','Created by 67'];
	
	var x = document.getElementById("created_by"); 
	for (var i = 0; i < category.length; i++){ 
			
			var optn = category[i];
			var option = document.createElement("option"); 
			option.textContent = optn; 
            option.value = optn; 
            x.appendChild(option);
						
            } 	
	
	
}
  
function updated_by(){
	
	var category = ['Updated by 908', 'Updated by 44', 'Updated by 60', 'Updated by 429', 'Updated by 265', 'Updated by 213',
	'Updated by 241', 'Updated by 164','Updated by 489','Updated by 135','Updated by 109',
'Updated by 133', 'Updated by 340', 'Updated by 573', 'Updated by 135', 'Updated by 129', 'Updated by 748', 'Updated by 131',
 'Updated by 915', 'Updated by 833', 'Updated by 533', 'Updated by 578', 'Updated by 467', 'Updated by 109', 'Updated by 974',
 'Updated by 21', 'Updated by 332', 'Updated by 928', 'Updated by 214', 'Updated by 519', 'Updated by 723', 'Updated by 859', 
 'Updated by 307', 'Updated by 699', 'Updated by 465', 'Updated by 88', 'Updated by 713', 'Updated by 137', 'Updated by 777',
 'Updated by 994', 'Updated by 874', 'Updated by 653', 'Updated by 20', 'Updated by 695', 'Updated by 111', 'Updated by 881', 
 'Updated by 421', 'Updated by 614', 'Updated by 746', 'Updated by 789', 'Updated by 727', 'Updated by 609', 'Updated by 868', 
 'Updated by 608', 'Updated by 308', 'Updated by 846', 'Updated by 190', 'Updated by 164', 'Updated by 698', 'Updated by 862',
 'Updated by 310', 'Updated by 363', 'Updated by 958', 'Updated by 860', 'Updated by 177', 'Updated by 763', 'Updated by 804', 
 'Updated by 643', 'Updated by 926', 'Updated by 336', 'Updated by 277', 'Updated by 967', 'Updated by 259', 'Updated by 186', 
 'Updated by 447', 'Updated by 444', 'Updated by 929', 'Updated by 468', 'Updated by 501', 'Updated by 809', 'Updated by 526', 
 'Updated by 370', 'Updated by 271', 'Updated by 16', 'Updated by 53', 'Updated by 770', 'Updated by 335', 'Updated by 845',
 'Updated by 95', 'Updated by 495', 'Updated by 875', 'Updated by 171', 'Updated by 189', 'Updated by 494', 'Updated by 718', 
 'Updated by 735', 'Updated by 419', 'Updated by 917', 'Updated by 750', 'Updated by 823', 'Updated by 507', 'Updated by 3', 
 'Updated by 415', 'Updated by 552', 'Updated by 783', 'Updated by 498', 'Updated by 798', 'Updated by 664', 'Updated by 755',
 'Updated by 78', 'Updated by 534', 'Updated by 402', 'Updated by 348', 'Updated by 27', 'Updated by 703', 'Updated by 195', 
 'Updated by 811', 'Updated by 857', 'Updated by 825', 'Updated by 450', 'Updated by 510', 'Updated by 681', 'Updated by 939',
 'Updated by 741', 'Updated by 964', 'Updated by 602', 'Updated by 229', 'Updated by 957', 'Updated by 360', 'Updated by 344'];
	
	var x = document.getElementById("updated_by"); 
	for (var i = 0; i < category.length; i++){ 
			
			var optn = category[i];
			var option = document.createElement("option"); 
			option.textContent = optn; 
            option.value = optn; 
            x.appendChild(option);
						
            } 	
	
}
  
function type_contact(){
	
	var category = ['BMW', 'Volvo', 'Mini'];
	var x = document.getElementById("type_contact"); 
 
 for (var i = 0; i < category.length; i++){ 
			
			var optn = category[i];
			var option = document.createElement("option"); 
			option.textContent = optn; 
            option.value = optn; 
            x.appendChild(option);
						
            } 	
	
}
  
function locn(){
	
	var category = ['Location 204', 'Location 161', 'Location 143', 'Location 108', 'Location 93', 'Location 51', 'Location 188', 'Location 179',
 'Location 43', 'Location 111', 'Location 55', 'Location 46', 'Location 96', 'Location 125', 'Location 135', 'Location 56', 'Location 54',
 'Location 229', 'Location 42', 'Location 128', 'Location 136', 'Location 97', 'Location 41', 'Location 39', 'Location 38', 'Location 15',
 'Location 44', 'Location 34', 'Location 199', 'Location 35', 'Location 165', 'Location 91', 'Location 33', 'Location 173', 'Location 245',
 'Location 37', 'Location 47', 'Location 82', 'Location 18', 'Location 59', 'Location 197', 'Location 45', 'Location 36', 'Location 40', 
 'Location 71', 'Location 224', 'Location 83', 'Location 222', 'Location 70', 'Location 113', 'Location 131', 'Location 209', 
 'Location 242', 'Location 210', 'Location 69', 'Location 232', 'Location 85', 'Location 231', 'Location 247', 'Location 249', 
 'Location 144', 'Location 107', 'Location 124', 'Location 8', 'Location 110', 'Location 99', 'Location 14', 'Location 160', 
 'Location 172', 'Location 223', 'Location 241', 'Location 133', 'Location 180', 'Location 196', 'Location 81', 'Location 21', 
 'Location 208', 'Location 187', 'Location 205', 'Location 162', 'Location 149', 'Location 66', 'Location 236', 'Location 117',
 'Location 86', 'Location 12', 'Location 171', 'Location 9', 'Location 129', 'Location 27', 'Location 92', 'Location 213', 'Location 25',
 'Location 23', 'Location 118', 'Location 64', 'Location 233', 'Location 174', 'Location 169', 'Location 75', 'Location 226', 'Location 201','Location 15','Location 91'];
	var x = document.getElementById("location"); 
  for (var i = 0; i < category.length; i++){ 
			
			var optn = category[i];
			var option = document.createElement("option"); 
			option.textContent = optn; 
            option.value = optn; 
            x.appendChild(option);
						
            } 	
	
}
  
function category_ID(){
	
	
	var category = ['Category 26', 'Category 42', 'Category 53', 'Category 46', 'Category 32', 'Category 9', 'Category 37', 'Category 23', 'Category 57',
 'Category 20', 'Category 61', 'Category 24', 'Category 45', 'Category 34', 'Category 51', 'Category 28', 'Category 35', 'Category 40',
 'Category 44', 'Category 19', 'Category 43', 'Category 13', 'Category 55', 'Category 17', 'Category 22', 'Category 8', 'Category 56',
 'Category 38', 'Category 7', 'Category 54', 'Category 33', 'Category 50', 'Category 31', 'Category 63', 'Category 41', 'Category 21',
 'Category 5', 'Category 59', 'Category 47', 'Category 2', 'Category 62', 'Category 25', 'Category 52', 'Category 4', 'Category 29', 
 'Category 10', 'Category 16', 'Category 6', 'Category 30', 'Category 14', 'Category 48', 'Category 12', 'Category 58', 'Category 36',
 'Category 15', 'Category 3'];
	var x = document.getElementById("category_ID"); 
  for (var i = 0; i < category.length; i++){ 
			
			var optn = category[i];
			var option = document.createElement("option"); 
			option.textContent = optn; 
            option.value = optn; 
            x.appendChild(option);
						
            } 	
	
}
  
function user_symptom(){
	
	var category = ['Symptom 491', 'Symptom 534', 'Symptom 116', 'Symptom 387', 'Symptom 4', 'Symptom 532', 'Symptom 506', 'Symptom 571', 'Symptom 296', 
'Symptom 118', 'Symptom 208', 'Symptom 105', 'Symptom 470', 'Symptom 10', 'Symptom 102', 'Symptom 494', 'Symptom 120', 'Symptom 458',
 'Symptom 295', 'Symptom 54', 'Symptom 87', 'Symptom 517', 'Symptom 127', 'Symptom 117', 'Symptom 70', 'Symptom 6', 'Symptom 119',
 'Symptom 592', 'Symptom 65', 'Symptom 471', 'Symptom 218', 'Symptom 454', 'Symptom 607', 'Symptom 9', 'Symptom 468', 'Symptom 455', 
 'Symptom 465', 'Symptom 587', 'Symptom 267', 'Symptom 462', 'Symptom 115', 'Symptom 8', 'Symptom 134', 'Symptom 495', 'Symptom 420',
 'Symptom 596', 'Symptom 381', 'Symptom 114', 'Symptom 263', 'Symptom 5', 'Symptom 311', 'Symptom 7', 'Symptom 463', 'Symptom 56',
 'Symptom 474', 'Symptom 280', 'Symptom 609', 'Symptom 211', 'Symptom 250', 'Symptom 274', 'Symptom 232', 'Symptom 580', 'Symptom 86', 
 'Symptom 473', 'Symptom 520', 'Symptom 252', 'Symptom 244', 'Symptom 371', 'Symptom 486', 'Symptom 438', 'Symptom 286', 'Symptom 258',
 'Symptom 315', 'Symptom 130', 'Symptom 257', 'Symptom 216', 'Symptom 301', 'Symptom 239', 'Symptom 435', 'Symptom 273', 'Symptom 375',
 'Symptom 595', 'Symptom 594', 'Symptom 221', 'Symptom 222', 'Symptom 217', 'Symptom 514', 'Symptom 513', 'Symptom 557', 'Symptom 259', 
 'Symptom 509', 'Symptom 531', 'Symptom 20', 'Symptom 113', 'Symptom 589', 'Symptom 372', 'Symptom 292', 'Symptom 256', 'Symptom 391', 
 'Symptom 519', 'Symptom 403', 'Symptom 106', 'Symptom 129', 'Symptom 66', 'Symptom 466', 'Symptom 583', 'Symptom 605', 'Symptom 94',
 'Symptom 533', 'Symptom 245', 'Symptom 529', 'Symptom 121', 'Symptom 526', 'Symptom 261', 'Symptom 370', 'Symptom 573', 'Symptom 411',
 'Symptom 44', 'Symptom 376', 'Symptom 236', 'Symptom 277', 'Symptom 293', 'Symptom 101', 'Symptom 241', 'Symptom 469', 'Symptom 608', 
 'Symptom 247', 'Symptom 50', 'Symptom 284', 'Symptom 33', 'Symptom 93', 'Symptom 23', 'Symptom 521', 'Symptom 264', 'Symptom 329',
 'Symptom 228', 'Symptom 577', 'Symptom 253', 'Symptom 287', 'Symptom 242', 'Symptom 69', 'Symptom 572', 'Symptom 472', 'Symptom 425', 
 'Symptom 499', 'Symptom 361', 'Symptom 74', 'Symptom 606', 'Symptom 22', 'Symptom 481', 'Symptom 237', 'Symptom 294', 'Symptom 249',
 'Symptom 389', 'Symptom 418', 'Symptom 48', 'Symptom 434', 'Symptom 266', 'Symptom 177', 'Symptom 214', 'Symptom 55', 'Symptom 397',
 'Symptom 281', 'Symptom 230', 'Symptom 598', 'Symptom 421', 'Symptom 278', 'Symptom 272', 'Symptom 457', 'Symptom 148', 'Symptom 271', 
 'Symptom 456', 'Symptom 285', 'Symptom 319', 'Symptom 423', 'Symptom 406', 'Symptom 282', 'Symptom 51', 'Symptom 255', 'Symptom 233',
 'Symptom 601', 'Symptom 424', 'Symptom 581', 'Symptom 429', 'Symptom 288', 'Symptom 328', 'Symptom 291', 'Symptom 392', 'Symptom 147', 
 'Symptom 260', 'Symptom 279', 'Symptom 518', 'Symptom 226', 'Symptom 227', 'Symptom 530', 'Symptom 190', 'Symptom 426', 'Symptom 62',
 'Symptom 232','Symptom 583','Symptom 126'];
	var x = document.getElementById("user_symptom"); 
  for (var i = 0; i < category.length; i++){ 
			
			var optn = category[i];
			var option = document.createElement("option"); 
			option.textContent = optn; 
            option.value = optn; 
            x.appendChild(option);
						
            } 	
	
}
  
function support_group(){
	
	var category = ['Group 70', 'Group 25', 'Group 24', 'Group 39', 'Group 23', 'Group 27', 'Group 73', 'Group 64', 'Group 28', 'Group 20', 'Group 65', 
'Group 66', 'Group 10', 'Group 57', 'Group 72', 'Group 55', 'Group 6', 'Group 29', 'Group 22', 'Group 30', 'Group 33', 'Group 31', 
'Group 54', 'Group 37', 'Group 76', 'Group 9', 'Group 46', 'Group 5', 'Group 56', 'Group 48', 'Group 58', 'Group 74', 'Group 12', 
'Group 49', 'Group 3', 'Group 53', 'Group 69', 'Group 75', 'Group 21', 'Group 50', 'Group 51', 'Group 15', 'Group 34', 'Group 47',
 'Group 62', 'Group 59', 'Group 68', 'Group 19', 'Group 61', 'Group 13', 'Group 26', 'Group 60', 'Group 35', 'Group 45', 'Group 14',
 'Group 44', 'Group 17', 'Group 67', 'Group 32', 'Group 43', 'Group 81', 'Group 2', 'Group 63', 'Group 82', 'Group 77', 'Group 71', 
 'Group 18', 'Group 36', 'Group 7', 'Group 8', 'Group 80', 'Group 78', 'Group 41', 'Group 16','Group 70','Group 24'];
	var x = document.getElementById("support_group"); 
  for (var i = 0; i < category.length; i++){ 
			
			var optn = category[i];
			var option = document.createElement("option"); 
			option.textContent = optn; 
            option.value = optn; 
            x.appendChild(option);
						
            } 	
	
}
  
function support_incharge(){
	
	var category = ["Resolver 17", "Resolver 13", "Resolver 194", "Resolver 33", "Resolver 57", "Resolver 69", "Resolver 115", "Resolver 73", 
"Resolver 94", "Resolver 24", "Resolver 28", "Resolver 249", "Resolver 215", "Resolver 140", "Resolver 125", "Resolver 236",
 "Resolver 31", "Resolver 149", "Resolver 78", "Resolver 198", "Resolver 183", "Resolver 56", "Resolver 126", "Resolver 34",
 "Resolver 233", "Resolver 15", "Resolver 253", "Resolver 186", "Resolver 201", "Resolver 200", "Resolver 153", "Resolver 155",
 "Resolver 111", "Resolver 176", "Resolver 170", "Resolver 83", "Resolver 89", "Resolver 182", "Resolver 159", "Resolver 101",
 "Resolver 175", "Resolver 227", "Resolver 229", "Resolver 74", "Resolver 6", "Resolver 216", "Resolver 167", "Resolver 234",
 "Resolver 23", "Resolver 168", "Resolver 150", "Resolver 76", "Resolver 47", "Resolver 217", "Resolver 247", "Resolver 133", 
 "Resolver 127", "Resolver 237", "Resolver 218", "Resolver 30", "Resolver 37", "Resolver 2", "Resolver 120", "Resolver 139", 
 "Resolver 134", "Resolver 188", "Resolver 44", "Resolver 241", "Resolver 26", "Resolver 82", "Resolver 214", "Resolver 184", "Resolver 135",
 "Resolver 203", "Resolver 232", "Resolver 191", "Resolver 39", "Resolver 123", "Resolver 84", "Resolver 25", "Resolver 180", 
 "Resolver 22", "Resolver 136", "Resolver 7", "Resolver 109", "Resolver 207", "Resolver 187", "Resolver 58", "Resolver 219", 
 "Resolver 121", "Resolver 50", "Resolver 208", "Resolver 193", "Resolver 100", "Resolver 230", "Resolver 49", "Resolver 137", 
 "Resolver 52", "Resolver 117", "Resolver 196", "Resolver 132", "Resolver 145", "Resolver 225", "Resolver 99", "Resolver 92", 
 "Resolver 53", "Resolver 224", "Resolver 212", "Resolver 141", "Resolver 172", "Resolver 97", "Resolver 4", "Resolver 110", 
 "Resolver 71", "Resolver 45", "Resolver 151", "Resolver 41", "Resolver 93", "Resolver 242", "Resolver 246", "Resolver 164", 
 "Resolver 190", "Resolver 10", "Resolver 21", "Resolver 130", "Resolver 65", "Resolver 119", "Resolver 192", "Resolver 8", 
 "Resolver 163", "Resolver 40", "Resolver 165", "Resolver 156", "Resolver 197", "Resolver 48", "Resolver 64", "Resolver 244", 
 "Resolver 18", "Resolver 169", "Resolver 32", "Resolver 210", "Resolver 128", "Resolver 124", "Resolver 142", "Resolver 103",
 "Resolver 66", "Resolver 138", "Resolver 223", "Resolver 154", "Resolver 250", "Resolver 178", "Resolver 152", "Resolver 114", 
 "Resolver 35", "Resolver 107", "Resolver 43", "Resolver 171", "Resolver 108", "Resolver 116", "Resolver 228", "Resolver 205", 
 "Resolver 96", "Resolver 75", "Resolver 59", "Resolver 86", "Resolver 148", "Resolver 68", "Resolver 77", "Resolver 112", 
 "Resolver 9", "Resolver 106", "Resolver 252", "Resolver 11", "Resolver 239", "Resolver 160", "Resolver 147", "Resolver 46", 
 "Resolver 90", "Resolver 105", "Resolver 16", "Resolver 91", "Resolver 235", "Resolver 158", "Resolver 88", "Resolver 177",
 "Resolver 85", "Resolver 181", "Resolver 209", "Resolver 251", "Resolver 62", "Resolver 81", "Resolver 27", "Resolver 122",
 "Resolver 36", "Resolver 213", "Resolver 144", "Resolver 20", "Resolver 98", "Resolver 5", "Resolver 12", "Resolver 231",
 "Resolver 222", "Resolver 179", "Resolver 174", "Resolver 118", "Resolver 206", "Resolver 161", "Resolver 143", "Resolver 166",
 "Resolver 243", "Resolver 185", "Resolver 204", "Resolver 211", "Resolver 51", "Resolver 221", "Resolver 42", "Resolver 104", 
 "Resolver 19", "Resolver 240", "Resolver 245", "Resolver 63", "Resolver 202", "Resolver 131", "Resolver 55", "Resolver 238","Resolver 132"];
	var x = document.getElementById("support_incharge"); 
  for (var i = 0; i < category.length; i++){ 
			
			var optn = category[i];
			var option = document.createElement("option"); 
			option.textContent = optn; 
            option.value = optn; 
            x.appendChild(option);
						
            } 	
	
}
  
function doc_knowledge(){
	
	
	var category = ['True', 'False'];
	var x = document.getElementById("doc_knowledge"); 
  for (var i = 0; i < category.length; i++){ 
			
			var optn = category[i];
			var option = document.createElement("option"); 
			option.textContent = optn; 
            option.value = optn; 
            x.appendChild(option);
						
            } 	
	
}
  
function confirmation_check(){
	
	
	var category = ['True', 'False'];
	var x = document.getElementById("confirmation_check"); 
  for (var i = 0; i < category.length; i++){ 
			
			var optn = category[i];
			var option = document.createElement("option"); 
			option.textContent = optn; 
            option.value = optn; 
            x.appendChild(option);
						
            } 	
	
}
  

  