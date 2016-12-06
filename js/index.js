let last = document.getElementById('imgbtn_last');//上一首按钮
let play = document.getElementById('imgbtn_play');//播放暂停按钮
let next = document.getElementById('imgbtn_next');//下一首按钮
let music_audio = document.getElementById('myAudio');
//按钮添加点击事件
let music_list = new Array('Are You Ok.mp3','爱的传说.mp3','男孩别哭.mp3','傻女.mp3','童话镇.mp3');//文件夹中音乐列表
let music_number = 0;

window.onload = function  () {
	music_audio.src = './music/'+music_list[music_number];
}

play.onclick = play_click;//播放按钮的监听事件
function play_click(){
	let img_src_length = play.src.length;
	let img_name = play.src.substring(img_src_length-8);//获取当前图片名称
	if(img_name == "play.png"){
		music_audio.play();
		play.src = './images/stop.png';
	}else{
		music_audio.pause();
		play.src = './images/play.png';
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
}