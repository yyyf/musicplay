let last = document.getElementById('imgbtn_last');//上一首按钮
let play = document.getElementById('imgbtn_play');//播放暂停按钮
let next = document.getElementById('imgbtn_next');//下一首按钮
let music_audio = document.getElementById('myAudio');
//按钮添加点击事件
let music_list = new Array('Are You Ok.mp3','爱的传说.mp3','男孩别哭.mp3','傻女.mp3','童话镇.mp3');//文件夹中音乐列表
let music_number = 0;
var span_interval,music_now_time_span;
window.onload = function  () {
	music_audio.src = './music/'+music_list[music_number];
	span_interval = setInterval(function(){span_musictime_load(span_interval);},50);
}

play.onclick = play_click;//播放按钮的监听事件
function play_click(){
	let img_src_length = play.src.length;
	let img_name = play.src.substring(img_src_length-8);//获取当前图片名称
	if(img_name == "play.png"){
		music_audio.play();
		play.src = './images/stop.png';
		music_now_time_span = setInterval(function(){span_musicnowtime_load();},500);
	}else{
		music_audio.pause();
		play.src = './images/play.png';
		clearInterval(music_now_time_span);
	}
}

next.onclick = next_click;//下一首按钮
function next_click(){
	if(music_number == 4){
		music_number = 0;
	}
	else {
		music_number++;
	}
	music_audio.src = './music/'+music_list[music_number];
	music_audio.play();
	play.src = './images/stop.png';
	span_interval = setInterval(function(){span_musictime_load(span_interval);},50);
}

last.onclick = last_click;//上一首按钮
function last_click(){
	if(music_number == 0){
		music_number = 4;
	}
	else {
		music_number--;
	}
	music_audio.src = './music/'+music_list[music_number];
	music_audio.play();
	play.src = './images/stop.png';
	span_interval = setInterval(function(){span_musictime_load(span_interval);},50);
}

function span_musictime_load(span_interval) {
	if(music_audio.readyState == 4){
		let music_times = Math.floor(music_audio.duration);
		let music_times_1 = Math.floor(music_times/60);
		let music_times_2 = Math.floor(music_times%60);
		if(music_times_1<10) {music_times_1 = '0'+music_times_1;}
		if(music_times_2<10) {music_times_2 = '0'+music_times_2;}
		document.getElementById('music_length').innerHTML = music_times_1+':'+music_times_2;
		clearInterval(span_interval);
	}
}

function span_musicnowtime_load(){
		let music_now_time = Math.floor(music_audio.currentTime);
		let music_now_time_1 = Math.floor(music_now_time/60);
		let music_now_time_2 = Math.floor(music_now_time%60);
		if(music_now_time_1<10){music_now_time_1 = '0'+music_now_time_1;}
		if(music_now_time_2<10){music_now_time_2 = '0'+music_now_time_2;}
		document.getElementById('music_surplus').innerHTML = music_now_time_1+':'+music_now_time_2;
}