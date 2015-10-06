//var TimesToPlay = 10;
//var TimesPlayed = 0;
//var repeat_interval;
//var playtime = 1;

function doClick(e) {
	
	
    //alert($.label.text);
    
    var sound = Titanium.Media.createSound({
	url: this.mhz !== undefined ?  'sounds/'+this.mhz+'.mp3' : 'sounds/4000.mp3',
	preload: true,
	looping: false,
	volume: 1.0
	});
	
	//setTimeout(doPlaySound(sound),playtime * 10000);
	
	repeat_interval = setInterval(function(){
		
		sound.play();
		
		},100);
	setTimeout(function(){clearInterval(repeat_interval);},20000);
	sound.play();
	
	
	//clearInterval(repat_interval);
	//sound.play();
}

function doClickLong(e) {
	
	duration = 200;
	pause = 5000;
    //alert($.label.text);
    
    var sound = Titanium.Media.createSound({
	url: this.mhz !== undefined ?  'sounds/long/'+this.mhz+'.mp3' : 'sounds/long/4000.mp3',
	preload: true,
	looping: false,
	volume: 1.0
	});
	
	//setTimeout(doPlaySound(sound),playtime * 10000);
	
	repeat_interval = setInterval(function(){
		$.result.text = sound.time;
		sound.play();
		if(sound.time > duration){
			sound.stop();
		}
		},pause);
	setTimeout(function(){clearInterval(repeat_interval);},30000);
	//sound.play();
	
	
	//clearInterval(repat_interval);
	//sound.play();
}

function doPlaySound(sound, TimesToPlay, interval, volume ){
	var TimesPlayed = 0;
	sound.volume = volume;
	repeat_interval = setInterval(function(){sound.play();},1000);
	if(TimesPlayed < TimesToPlay){
	sound.play();
	TimesPlayed ++;
	}else{
		clearInterval(repeat_interval);
		TimesPlayed = 0;
	}
}


$.index.open();
