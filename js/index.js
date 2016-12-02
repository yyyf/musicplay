let last = document.getElementById('imgbtn_last');//上一首按钮
let play = document.getElementById('imgbtn_play');//播放暂停按钮
let next = document.getElementById('imgbtn_next');//下一首按钮
let music_audio = document.getElementById('myAudio');
//按钮添加点击事件
let music_list = new Array('Are You Ok.mp3','爱的传说.mp3','男孩别哭.mp3','傻女.mp3','童话镇.mp3');//文件夹中音乐列表

window.onload = function  () {
	music_audio.src = music_list[0];
}

play.onclick = play_click;//
function play_click(){
	let img_src_length = play.src.length;
	let img_name = play.src.substring(img_src_length-8);//获取当前图片名称
	if(img_name == "play.png"){
		console.log(music_audio.src);
		music_audio.src = './music/海龟先生 - 男孩别哭.mp3';
		music_audio.play();
		play.src = './images/stop.png';
	}else{
		music_audio.pause();
		play.src = './images/play.png';
	}
}