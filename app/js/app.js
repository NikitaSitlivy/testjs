$('#route').on('change',function() {
	const type = $(this).val();
	for(let i =0; i < $('.tickets__time1 option').length;i++){	
			$('.tickets__time1 option')[i].style.display='inherit';
		
	}
	
	if(type.includes('обратно')){
		$('#time2').css('display','inherit')
		for(let i =0; i < $('.tickets__time2 option').length;i++){	
			if(!$('.tickets__time2 option')[i].value.includes('из B')){
			
				$('.tickets__time2 option')[i].style.display='none';
				
			}
		
	}
	for(let i =0; i < $('.tickets__time1 option').length;i++){	
		if(!$('.tickets__time1 option')[i].value.includes('из A')){
		
			$('.tickets__time1 option')[i].style.display='none';
		}
	
}
	}
	else{
		$('.tickets__time2').css('display','none');
		for(let i =0; i < $('.tickets__time1 option').length;i++){
	
		if(!$('.tickets__time1 option')[i].value.includes(type)){
			
			$('.tickets__time1 option')[i].style.display='none';
		}
	}
	}
})

$('.tickets__calc').on('click',function() {

	if($('.tickets__time2').css('display') == 'none'){
		const price = 700
		const summ = $('#num').val()*price
		const start = $('#time1').val().replace(/[^0-9,:]/g,"")
		const date =  start.split(':') ;
		let timeMin =( parseInt(date[1])+50)%60

			let timeHour = Math.trunc((parseInt(date[1])+50)/60)

		if(parseInt(date[1])+50>59){
			
		
			if(parseInt(date[1])+timeMin>59){
				
			
				date[1]=timeMin
			}
			else{
				date[1]=timeMin
			}
		
			date[0]=parseInt(date[0])+timeHour
			
		}
		else{
			date[1]=parseInt(date[1])+50
			date[0]=parseInt(date[0])+timeHour
		}

	if(date[1]<9){
		date[1] ='0'+ date[1]
	}
		$('.grand-total').text('Вы выбрали '+ $('#num').val()+ ' билета по маршруту из A в B стоимостью '+ summ+'р.Это путешествие займет у вас 50 минут. Теплоход отправляется в '+start+' , а прибудет в '+date[0]+':'+date[1])
	}
	else{
		const price = 1200
		const summ = $('#num').val()*price
		const start1 = $('#time1').val().replace(/[^0-9,:]/g,"")
		const start2 = $('#time2').val().replace(/[^0-9,:]/g,"")
		const date1 =  start1.split(':') ;
		const date2 =  start2.split(':') ;
		let timeMin1 =( parseInt(date1[1])+50)%60

		let timeHour1 = Math.trunc((parseInt(date1[1])+50)/60)
		let timeMin2 =( parseInt(date2[1])+50)%60

		let timeHour2 = Math.trunc((parseInt(date2[1])+50)/60)
			if(parseInt(date1[1])+50>59){
			
		
				if(parseInt(date1[1])+timeMin1>59){
					
				
					date1[1]=timeMin1-30
				}
				else{
					date1[1]=parseInt(date1[1])+timeMin1-30
				}
			
				date1[0]=parseInt(date1[0])+timeHour1
				
			}
			else{
				date1[1]=parseInt(date1[1])+50
				date1[0]=parseInt(date1[0])+timeHour1
			}
			if(date1[1]<9){
				date1[1] ='0'+ date1[1]
			}


			if(parseInt(date2[1])+50>59){
			
				
				if(parseInt(date2[1])+timeMin2>59){
				
					
					date2[1]=timeMin2
				
				}
				else{
					console.log(date2[1])
					date2[1]=timeMin2
					console.log(timeMin2 + 'df')
				
				}
			
				date2[0]=parseInt(date2[0])+timeHour2
				
			}
			else{
				date2[1]=parseInt(date2[1])+50
				date2[0]=parseInt(date2[0])+timeHour2
			}
			if(date2[1]<9&&date2[1]>0){
				
				date2[1] ='0'+ date2[1]
			}

			$('.grand-total').text('Вы выбрали '+ $('#num').val()+ ' билета по маршруту из A в B стоимостью '+ summ+'р.Это путешествие займет у вас 1 час 40 минут. Теплоход отправляется в '+start1+' , а прибудет в '+date1[0]+':'+date1[1]+'.На обратном пути теплоход отправляется в'+start2+',а прибудет в'+date2[0]+':'+date2[1])
	}
})

$('#time1').on('change',function(){

	for(let i =0; i < $('.tickets__time2 option').length;i++){	

		if($('.tickets__time2 option')[i].value.includes('из B')){
			
			$('.tickets__time2 option')[i].style.display='inherit';
			
		}
	if($('#time1').val().replace(/[^0-9]/g,"")>=$('.tickets__time2 option')[i].value.replace(/[^0-9]/g,"")){
		$('.tickets__time2 option')[i].style.display='none';	
	}
}
})