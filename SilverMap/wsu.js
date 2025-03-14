var cityhall = new naver.maps.LatLng(37.566655050212496, 126.97834529404811);
var map = new naver.maps.Map('map', {
  center: new naver.maps.LatLng(37.566655050212496, 126.97834529404811),
  zoom: 17
}); // 서울 시청(시작할 때 중심)
var contentString = [
  '<div class="iw_inner">',
  '   <h3>서울특별시청</h3>',
  '   <p>서울특별시 중구 태평로1가 31 | 서울특별시 중구 세종대로 110 서울특별시청<br>',
  '       02-120 | 공공,사회기관 > 특별,광역시청<br>',
  '       <a href="#" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');


var marker = new naver.maps.Marker({
  map: map,
  position: cityhall
});
var infowindow = new naver.maps.InfoWindow({
  content: contentString
});
naver.maps.Event.addListener(marker, "click", function(e) {
  if (infowindow.getMap()) {
      infowindow.close();
  } else {
      infowindow.open(map, marker);
  }
});



var a1 = new naver.maps.LatLng(37.4509921318477, 126.6972608559643);
var marker_1 = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.4509921318477, 126.6972608559643),
  map: map
}); // 2021년도 노인일자리 및 사회활동지원사업 노인일자리 담당자

var contentString1 = [
  '<div class="iw_inner">',
  '   <h4>2022년도 노인일자리 및 사회활동지원사업 노인일자리 담당자</h4>',
  '   <p>인천광역시 남동구 문화서로 62번길 남동구노인복지관 내 2층<br>',
  '       <a href="#" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker1 = new naver.maps.Marker({
  map: map,
  position: a1
});
var infowindow1 = new naver.maps.InfoWindow({
  content: contentString1
});
naver.maps.Event.addListener(marker1, "click", function(e) {
  if (infowindow1.getMap()) {
      infowindow1.close();
  } else {
      infowindow1.open(map, marker1);
  }
});



var a2 = new naver.maps.LatLng(35.64895965651137, 127.52011042867561);
var marker_2 = new naver.maps.Marker({
  position: new naver.maps.LatLng(35.64895965651137, 127.52011042867561),
  map: map
}); // [전북 장수군] 2022년 장수시니어클럽 노인일자리 담당자 채용
var contentString2 = [
  '<div class="iw_inner">',
  '   <h4>[전북 장수군] 2022년 장수시니어클럽 노인일자리 담당자 채용</h4>',
  '   <p>서전라북도 장수군 장수읍 준비길 9 KR 장수시니어클럽 2층<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker2 = new naver.maps.Marker({
  map: map,
  position: a2
});
var infowindow2 = new naver.maps.InfoWindow({
  content: contentString2
});
naver.maps.Event.addListener(marker2, "click", function(e) {
  if (infowindow2.getMap()) {
      infowindow2.close();
  } else {
      infowindow2.open(map, marker2);
  }
});


var a3 = new naver.maps.LatLng(37.67597630892452, 127.05099198050642);
var marker_3 = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.67597630892452, 127.05099198050642),
  map: map
}); // 노원시니어클럽 노인일자리사업 담당자(구,전담인력)긴급
var contentString3 = [
  '<div class="iw_inner">',
  '   <h4>노원시니어클럽 노인일자리사업 담당자(구,전담인력)긴급</h4>',
  '   <p>노원시니어클럽 노인일자리사업 담당자(구,전담인력)긴급<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker3 = new naver.maps.Marker({
  map: map,
  position: a3
});
var infowindow3 = new naver.maps.InfoWindow({
  content: contentString3
});
naver.maps.Event.addListener(marker3, "click", function(e) {
  if (infowindow3.getMap()) {
      infowindow3.close();
  } else {
      infowindow3.open(map, marker3);
  }
});



var a4 = new naver.maps.LatLng(37.6033086634403, 126.91135918590108);
var marker_4 = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.6033086634403, 126.91135918590108),
  map: map
}); // (긴급)2022년 노인일자리 및 사회활동지원사업
var contentString4 = [
  '<div class="iw_inner">',
  '   <h4>(긴급)2022년 노인일자리 및 사회활동지원사업</h4>',
  '   <p>서울특별시 은평구 역촌동 67-9<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker4 = new naver.maps.Marker({
  map: map,
  position: a4
});
var infowindow4 = new naver.maps.InfoWindow({
  content: contentString4
});
naver.maps.Event.addListener(marker4, "click", function(e) {
  if (infowindow4.getMap()) {
      infowindow4.close();
  } else {
      infowindow4.open(map, marker4);
  }
});


var a5 = new naver.maps.LatLng(37.86794291150753, 127.7188886108026);
var marker_5 = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.86794291150753, 127.7188886108026),
  map: map
}); // [긴급채용] 춘천남부노인복지관 노인일자리 담당자 채용 - 벼룩시장구인구직
var contentString5 = [
  '<div class="iw_inner">',
  '   <h4>[긴급채용] 춘천남부노인복지관 노인일자리 담당자 채용 - 벼룩시장구인구직</h4>',
  '   <p>서울특별시 은평구 역촌동 67-9<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker5 = new naver.maps.Marker({
  map: map,
  position: a5
});
var infowindow5 = new naver.maps.InfoWindow({
  content: contentString5
});
naver.maps.Event.addListener(marker5, "click", function(e) {
  if (infowindow5.getMap()) {
      infowindow5.close();
  } else {
      infowindow5.open(map, marker5);
  }
});



var a6 = new naver.maps.LatLng(35.860823368143585, 128.56847458594106);
var marker_6 = new naver.maps.Marker({
  position: new naver.maps.LatLng(35.860823368143585, 128.56847458594106),
  map: map
}); // [대구 달서구] 대구달서시니어클럽 노인일자리 담당자(사회복지사) 채용 공고
var contentString6 = [
  '<div class="iw_inner">',
  '   <h4>[대구 달서구] 대구달서시니어클럽 노인일자리 담당자(사회복지사) 채용 공고</h3>',
  '   <p>대구광역시 달서구 두류동 77-6<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker6 = new naver.maps.Marker({
  map: map,
  position: a6
});
var infowindow6 = new naver.maps.InfoWindow({
  content: contentString6
});
naver.maps.Event.addListener(marker6, "click", function(e) {
  if (infowindow6.getMap()) {
      infowindow6.close();
  } else {
      infowindow6.open(map, marker6);
  }
});



var a7 = new naver.maps.LatLng(36.59405970740277, 127.20695512196897);
var marker_7 = new naver.maps.Marker({
  position: new naver.maps.LatLng(36.59405970740277, 127.20695512196897),
  map: map
}); // <사회복지사> 노인일자리 및 사회활동지원사업 전담인력
var contentString7 = [
  '<div class="iw_inner">',
  '   <h3><사회복지사> 노인일자리 및 사회활동지원사업 전담인력</h3>',
  '   <p>충청남도 연기군 서면 청라리<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker7 = new naver.maps.Marker({
  map: map,
  position: a7
});
var infowindow7 = new naver.maps.InfoWindow({
  content: contentString7
});
naver.maps.Event.addListener(marker7, "click", function(e) {
  if (infowindow7.getMap()) {
      infowindow7.close();
  } else {
      infowindow7.open(map, marker7);
  }
});



var a8 = new naver.maps.LatLng(37.63320364998273, 127.02058038672972);
var marker_8 = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.63320364998273, 127.02058038672972),
  map: map
}); // 노인일자리담당자
var contentString8 = [
  '<div class="iw_inner">',
  '   <h3>노인일자리담당자</h3>',
  '   <p>서울특별시 강북구 삼양로80나길<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker8 = new naver.maps.Marker({
  map: map,
  position: a8
});
var infowindow8 = new naver.maps.InfoWindow({
  content: contentString8
});
naver.maps.Event.addListener(marker8, "click", function(e) {
  if (infowindow8.getMap()) {
      infowindow8.close();
  } else {
      infowindow8.open(map, marker8);
  }
});


var a9 = new naver.maps.LatLng(36.65886940532464, 127.25776481666503);
var marker_9 = new naver.maps.Marker({
  position: new naver.maps.LatLng(36.65886940532464, 127.25776481666503),
  map: map
}); // 2021년 노인일자리 행복일터공동작업자운영사업 참여자 모집
var contentString9 = [
  '<div class="iw_inner">',
  '   <h4>2021년 노인일자리 행복일터공동작업자운영사업 참여자 모집</h4>',
  '   <p>충청남도 연기군 전동면 상석곡길 52<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker9 = new naver.maps.Marker({
  map: map,
  position: a9
});
var infowindow9 = new naver.maps.InfoWindow({
  content: contentString9
});
naver.maps.Event.addListener(marker9, "click", function(e) {
  if (infowindow9.getMap()) {
      infowindow9.close();
  } else {
      infowindow9.open(map, marker9);
  }
});


var a10 = new naver.maps.LatLng(36.59116253938226, 128.18766360131497);
var marker_10 = new naver.maps.Marker({
  position: new naver.maps.LatLng(36.59116253938226, 128.18766360131497),
  map: map
}); // [경북 문경시] 문경시니어클럽 직원 (노인일자리담당자) 채용 공고
var contentString10 = [
  '<div class="iw_inner">',
  '   <h3>[경북 문경시] 문경시니어클럽 직원 (노인일자리담당자) 채용 공고</h3>',
  '   <p>경상북도 문경시 점촌5동 384-1<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker10 = new naver.maps.Marker({
  map: map,
  position: a10
});
var infowindow10 = new naver.maps.InfoWindow({
  content: contentString10
});
naver.maps.Event.addListener(marker10, "click", function(e) {
  if (infowindow10.getMap()) {
      infowindow10.close();
  } else {
      infowindow10.open(map, marker10);
  }
});


var a11 = new naver.maps.LatLng(37.51178995901488, 126.73625010800671);
var marker_11 = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.51178995901488, 126.73625010800671),
  map: map
}); // 2022년 노인일자리담당자 채용 공개모집의 기업정보
var contentString11 = [
  '<div class="iw_inner">',
  '   <h4>2022년 노인일자리담당자 채용 공개모집의 기업정보</h4>',
  '   <p>인천광역시 부평구 삼산2동 451-3<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker11 = new naver.maps.Marker({
  map: map,
  position: a11
});
var infowindow11 = new naver.maps.InfoWindow({
  content: contentString11
});
naver.maps.Event.addListener(marker11, "click", function(e) {
  if (infowindow11.getMap()) {
      infowindow11.close();
  } else {
      infowindow11.open(map, marker11);
  }
});


var a12 = new naver.maps.LatLng(35.22449634708583, 129.15216795230916);
var marker_12 = new naver.maps.Marker({
  position: new naver.maps.LatLng(35.22449634708583, 129.15216795230916),
  map: map
}); // 노인일자리 담당자(사무직) 모집 - 벼룩시장구인구직
var contentString12 = [
  '<div class="iw_inner">',
  '   <h34>노인일자리 담당자(사무직) 모집 - 벼룩시장구인구직</h4>',
  '   <p>부산광역시<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker12 = new naver.maps.Marker({
  map: map,
  position: a12
});
var infowindow12 = new naver.maps.InfoWindow({
  content: contentString12
});
naver.maps.Event.addListener(marker12, "click", function(e) {
  if (infowindow12.getMap()) {
      infowindow12.close();
  } else {
      infowindow12.open(map, marker12);
  }
});


var a13 = new naver.maps.LatLng(35.14106544970534, 126.896564239386);
var marker_13 = new naver.maps.Marker({
  position: new naver.maps.LatLng(35.14106544970534, 126.896564239386),
  map: map
}); // 년 노인일자리 지원사업 전담인력 모집 공고
var contentString13 = [
  '<div class="iw_inner">',
  '   <h4>2022년 노인일자리 지원사업 전담인력 모집 공고</h4>',
  '   <p>광주광역시 남구 대남대로308번길<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker13 = new naver.maps.Marker({
  map: map,
  position: a13
});
var infowindow13 = new naver.maps.InfoWindow({
  content: contentString13
});
naver.maps.Event.addListener(marker13, "click", function(e) {
  if (infowindow13.getMap()) {
      infowindow13.close();
  } else {
      infowindow13.open(map, marker13);
  }
});


var a14 = new naver.maps.LatLng(35.14353713536631, 126.9239567571377);
var marker_14 = new naver.maps.Marker({
  position: new naver.maps.LatLng(35.14353713536631, 126.9239567571377),
  map: map
}); // 상주시니어클럽 노인일자리사업 팀장
var contentString14 = [
  '<div class="iw_inner">',
  '   <h4>상주시니어클럽 노인일자리사업 팀장</h4>',
  '   <p>광주광역시 동구 백서로166번길<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker14 = new naver.maps.Marker({
  map: map,
  position: a14
});
var infowindow14 = new naver.maps.InfoWindow({
  content: contentString14
});
naver.maps.Event.addListener(marker14, "click", function(e) {
  if (infowindow14.getMap()) {
      infowindow14.close();
  } else {
      infowindow14.open(map, marker14);
  }
});


var a15 = new naver.maps.LatLng(35.21098838230044, 129.0130887016943);
var marker_15 = new naver.maps.Marker({
  position: new naver.maps.LatLng(35.21098838230044, 129.0130887016943),
  map: map
}); // [부산 북구] 부산북구시니어클럽 노인일자리 담당자 채용 공고
var contentString15 = [
  '<div class="iw_inner">',
  '   <h4>[부산 북구] 부산북구시니어클럽 노인일자리 담당자 채용 공고</h4>',
  '   <p>부산광역시 북구 덕천1동 411-7<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker15 = new naver.maps.Marker({
  map: map,
  position: a15
});
var infowindow15 = new naver.maps.InfoWindow({
  content: contentString15
});
naver.maps.Event.addListener(marker15, "click", function(e) {
  if (infowindow15.getMap()) {
      infowindow15.close();
  } else {
      infowindow15.open(map, marker15);
  }
});


var a16 = new naver.maps.LatLng(37.41291393093903, 126.67672521182291);
var marker_16 = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.41291393093903, 126.67672521182291),
  map: map
}); // 년 노인일자리 및 사회활동 지원사업 노인일자리 담당자 채용공고
var contentString16 = [
  '<div class="iw_inner">',
  '   <h4>2022년 노인일자리 및 사회활동 지원사업 노인일자리 담당자 채용공고</h4>',
  '   <p>인천광역시 연수구 연수동 599 5번지 탑피온빌딩 802 803호<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원/</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker16 = new naver.maps.Marker({
  map: map,
  position: a16
});
var infowindow16 = new naver.maps.InfoWindow({
  content: contentString16
});
naver.maps.Event.addListener(marker16, "click", function(e) {
  if (infowindow16.getMap()) {
      infowindow16.close();
  } else {
      infowindow16.open(map, marker16);
  }
});



var a17 = new naver.maps.LatLng(37.46480739696514, 126.91984774007297);
var marker_17 = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.46480739696514, 126.91984774007297),
  map: map
}); // [재공고] 신림종합사회복지관 노인일자리사업 전담 사회복지사(계약직) 채용 공고 - 벼룩시장구인구직
var contentString17 = [
  '<div class="iw_inner">',
  '   <h5>[재공고] 신림종합사회복지관 노인일자리사업 전담 사회복지사(계약직) 채용 공고 - 벼룩시장구인구직</h5>',
  '   <p>서울특별시 관악구 난향동 난곡로 110<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker17 = new naver.maps.Marker({
  map: map,
  position: a17
});
var infowindow17 = new naver.maps.InfoWindow({
  content: contentString17
});
naver.maps.Event.addListener(marker17, "click", function(e) {
  if (infowindow17.getMap()) {
      infowindow17.close();
  } else {
      infowindow17.open(map, marker17);
  }
});



var a18 = new naver.maps.LatLng(35.210976200740625, 129.01308773473815);
var marker_18 = new naver.maps.Marker({
  position: new naver.maps.LatLng(35.210976200740625, 129.01308773473815),
  map: map
}); // [부산 북구] 부산북구시니어클럽 노인일자리 담당자 채용 공고
var contentString18 = [
  '<div class="iw_inner">',
  '   <h4>[부산 북구] 부산북구시니어클럽 노인일자리 담당자 채용 공고</h4>',
  '   <p>부산광역시 북구 덕천1동 411-7<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker18 = new naver.maps.Marker({
  map: map,
  position: a18
});
var infowindow18 = new naver.maps.InfoWindow({
  content: contentString18
});
naver.maps.Event.addListener(marker18, "click", function(e) {
  if (infowindow18.getMap()) {
      infowindow18.close();
  } else {
      infowindow18.open(map, marker18);
  }
});


var a19 = new naver.maps.LatLng(37.86830361377705, 127.17544731069282);
var marker_19 = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.86830361377705, 127.17544731069282),
  map: map
}); // 노인일자리 실버 카페 매니저
var contentString19 = [
  '<div class="iw_inner">',
  '   <h3>노인일자리 실버 카페 매니저</h3>',
  '   <p>경기도 포천시 자작동 226-11<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker19 = new naver.maps.Marker({
  map: map,
  position: a19
});
var infowindow19 = new naver.maps.InfoWindow({
  content: contentString19
});
naver.maps.Event.addListener(marker19, "click", function(e) {
  if (infowindow19.getMap()) {
      infowindow19.close();
  } else {
      infowindow19.open(map, marker19);
  }
});



var a20 = new naver.maps.LatLng(37.467416264346305, 126.87323005596475);
var marker_20 = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.467416264346305, 126.87323005596475),
  map: map
}); // [경기 광명시] 사)대한노인회 광명시지회-2022년 노인일자리 및 사회활동 지원사업 전담인력 모집 공고
var contentString20 = [
  '<div class="iw_inner">',
  '   <h5>[경기 광명시] 사)대한노인회 광명시지회-2022년 노인일자리 및 사회활동 지원사업 전담인력 모집 공고</h5>',
  '   <p>경기도 광명시 하안동 683<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker20 = new naver.maps.Marker({
  map: map,
  position: a20
});
var infowindow20 = new naver.maps.InfoWindow({
  content: contentString20
});
naver.maps.Event.addListener(marker20, "click", function(e) {
  if (infowindow20.getMap()) {
      infowindow20.close();
  } else {
      infowindow20.open(map, marker20);
  }
});



var a21 = new naver.maps.LatLng(37.47695223423118, 126.97983407016574);
var marker_21 = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.47695223423118, 126.97983407016574),
  map: map
}); // 사당어르신종합복지관 기간제근로자 : 노인일자리담당자 (21.10.19일까지)
var contentString21 = [
  '<div class="iw_inner">',
  '   <h4>사당어르신종합복지관 기간제근로자 : 노인일자리담당자 (21.10.19일까지)</h4>',
  '   <p>서울특별시 동작구 사당동 남부순환로 2081 노인종합복지관<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker21 = new naver.maps.Marker({
  map: map,
  position: a21
});
var infowindow21 = new naver.maps.InfoWindow({
  content: contentString21
});
naver.maps.Event.addListener(marker21, "click", function(e) {
  if (infowindow21.getMap()) {
      infowindow21.close();
  } else {
      infowindow21.open(map, marker21);
  }
});



var a22 = new naver.maps.LatLng(36.643689525512634, 127.49425271570709);
var marker_22 = new naver.maps.Marker({
  position: new naver.maps.LatLng(36.643689525512634, 127.49425271570709),
  map: map
}); // 긴급]년 청주상당시니어클럽 노인일자리 담당자 채용 공고
var contentString22 = [
  '<div class="iw_inner">',
  '   <h4>[긴급]2022년 청주상당시니어클럽 노인일자리 담당자 채용 공고</h4>',
  '   <p>충청북도 청주시 상당구 중앙동 112-107<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker22 = new naver.maps.Marker({
  map: map,
  position: a22
});
var infowindow = new naver.maps.InfoWindow({
  content: contentString22
});
naver.maps.Event.addListener(marker22, "click", function(e) {
  if (infowindow22.getMap()) {
      infowindow22.close();
  } else {
      infowindow22.open(map, marker22);
  }
});



var a23 = new naver.maps.LatLng(36.81768398426114, 127.1525320184899);
var marker_23 = new naver.maps.Marker({
  position: new naver.maps.LatLng(36.81768398426114, 127.1525320184899),
  map: map
}); // 대한노인회천안시지회- 노인일자리 및 노인사회활동지원사업 직원모집
var contentString23 = [
  '<div class="iw_inner">',
  '   <h4>대한노인회천안시지회- 노인일자리 및 노인사회활동지원사업 직원모집</h4>',
  '   <p>충청남도 천안시 동남구 신안동 370-6<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker23 = new naver.maps.Marker({
  map: map,
  position: a23
});
var infowindow = new naver.maps.InfoWindow({
  content: contentString23
});
naver.maps.Event.addListener(marker23, "click", function(e) {
  if (infowindow23.getMap()) {
      infowindow23.close();
  } else {
      infowindow23.open(map, marker23);
  }
});


var a24 = new naver.maps.LatLng(35.14353713536631, 126.9239567571377);
var marker_24 = new naver.maps.Marker({
  position: new naver.maps.LatLng(35.14353713536631, 126.9239567571377),
  map: map
}); // [동대문시니어클럽] 노인일자리 담당자 채용 공고
var contentString24 = [
  '<div class="iw_inner">',
  '   <h3>[동대문시니어클럽] 노인일자리 담당자 채용 공고</h3>',
  '   <p>광주광역시 동구 백서로166번길<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker24 = new naver.maps.Marker({
  map: map,
  position: a24
});
var infowindow24 = new naver.maps.InfoWindow({
  content: contentString24
});
naver.maps.Event.addListener(marker24, "click", function(e) {
  if (infowindow24.getMap()) {
      infowindow24.close();
  } else {
      infowindow24.open(map, marker24);
  }
});



var a25 = new naver.maps.LatLng(36.79714258792034, 127.14923562718928);
var marker_25 = new naver.maps.Marker({
  position: new naver.maps.LatLng(36.79714258792034, 127.14923562718928),
  map: map
}); // 노인일자리 담당자(사회복지사, 직업상담사 우대)
var contentString25 = [
  '<div class="iw_inner">',
  '   <h4>노인일자리 담당자(사회복지사, 직업상담사 우대)</h4>',
  '   <p>충청남도 천안시 동남구 사직동 343-78<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker25 = new naver.maps.Marker({
  map: map,
  position: a25
});
var infowindow25 = new naver.maps.InfoWindow({
  content: contentString25
});
naver.maps.Event.addListener(marker25, "click", function(e) {
  if (infowindow25.getMap()) {
      infowindow25.close();
  } else {
      infowindow25.open(map, marker25);
  }
});


var a26 = new naver.maps.LatLng(37.009157135662655, 127.26377211948247);
var marker_26 = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.009157135662655, 127.26377211948247),
  map: map
}); // 노인일자리사업(시니어인턴십) 직업상담사 채용(서울.
var contentString26 = [
  '<div class="iw_inner">',
  '   <h3>노인일자리사업(시니어인턴십) 직업상담사 채용</h3>',
  '   <p>경기도 안성시 안성2동 268-11<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker26 = new naver.maps.Marker({
  map: map,
  position: a26
});
var infowindow26 = new naver.maps.InfoWindow({
  content: contentString26
});
naver.maps.Event.addListener(marker26, "click", function(e) {
  if (infowindow26.getMap()) {
      infowindow26.close();
  } else {
      infowindow26.open(map, marker26);
  }
});


var a27 = new naver.maps.LatLng(36.02956311027975, 129.37055960180962);
var marker_27 = new naver.maps.Marker({
  position: new naver.maps.LatLng(36.02956311027975, 129.37055960180962),
  map: map
}); // (사)대한노년자원봉사회 중앙회 노인일자리 담당자
var contentString27 = [
  '<div class="iw_inner">',
  '   <h4>(사)대한노년자원봉사회 중앙회 노인일자리 담당자</h4>',
  '   <p>경상북도 포항시 남구 해도동 16-13<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker27 = new naver.maps.Marker({
  map: map,
  position: a27
});
var infowindow = new naver.maps.InfoWindow({
  content: contentString27
});
naver.maps.Event.addListener(marker27, "click", function(e) {
  if (infowindow27.getMap()) {
      infowindow27.close();
  } else {
      infowindow27.open(map, marker27);
  }
});


var a28 = new naver.maps.LatLng(37.55547832308747, 126.95921401847728);
var marker_28 = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.55547832308747, 126.95921401847728),
  map: map
}); // 사회복지사 모집(주간보호행정1명, 노인일자리1명)
var contentString28 = [
  '<div class="iw_inner">',
  '   <h3>사회복지사 모집(주간보호행정1명, 노인일자리1명)</h3>',
  '   <p>서울특별시 마포구 마포대로28길<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker28 = new naver.maps.Marker({
  map: map,
  position: a28
});
var infowindow28 = new naver.maps.InfoWindow({
  content: contentString28
});
naver.maps.Event.addListener(marker28, "click", function(e) {
  if (infowindow28.getMap()) {
      infowindow28.close();
  } else {
      infowindow28.open(map, marker28);
  }
});


var a29 = new naver.maps.LatLng(37.535919510051734, 126.73685390014322);
var marker_29 = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.535919510051734, 126.73685390014322),
  map: map
}); // 인천계양시니어클럽 노인일자리 전담 직원
var contentString29 = [
  '<div class="iw_inner">',
  '   <h4>인천계양시니어클럽 노인일자리 전담 직원</h4>',
  '   <p>인천광역시 계양구 계산동 1081-10<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker29 = new naver.maps.Marker({
  map: map,
  position: a29
});
var infowindow29 = new naver.maps.InfoWindow({
  content: contentString29
});
naver.maps.Event.addListener(marker29, "click", function(e) {
  if (infowindow29.getMap()) {
      infowindow29.close();
  } else {
      infowindow29.open(map, marker29);
  }
});


var a30 = new naver.maps.LatLng(35.79491581093772, 127.13127978623253);
var marker_30 = new naver.maps.Marker({
  position: new naver.maps.LatLng(35.79491581093772, 127.13127978623253),
  map: map
}); // 년 전주의료복지사회적협동조합 노인일자리 담당직원 채용 공고
var contentString30 = [
  '<div class="iw_inner">',
  '   <h4>2022년 전주의료복지사회적협동조합 노인일자리 담당직원 채용 공고</h4>',
  '   <p>전라북도 전주시 완산구 평화2동 632-40<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker30 = new naver.maps.Marker({
  map: map,
  position: a30
});
var infowindow30 = new naver.maps.InfoWindow({
  content: contentString30
});
naver.maps.Event.addListener(marker30, "click", function(e) {
  if (infowindow30.getMap()) {
      infowindow30.close();
  } else {
      infowindow30.open(map, marker31);
  }
});



var a31 = new naver.maps.LatLng(37.588399875369774, 127.01016635333112);
var marker_31 = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.588399875369774, 127.01016635333112),
  map: map
}); // 2022년 서울시 권리중심 중증장애인공공일자리사업...
var contentString31 = [
  '<div class="iw_inner">',
  '   <h3>2022년 서울시 권리중심 중증장애인공공일자리사업</h3>',
  '   <p>번지 24번지 KR 서울특별시 성북구 삼선동2가 22번지 23호<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker31 = new naver.maps.Marker({
  map: map,
  position: a31
});
var infowindow31 = new naver.maps.InfoWindow({
  content: contentString31
});
naver.maps.Event.addListener(marker31, "click", function(e) {
  if (infowindow31.getMap()) {
      infowindow31.close();
  } else {
      infowindow31.open(map, marker31);
  }
});



var a32 = new naver.maps.LatLng(35.135379352703104, 126.89898332101164);
var marker_32 = new naver.maps.Marker({
  position: new naver.maps.LatLng(35.135379352703104, 126.89898332101164),
  map: map
}); // 노인일자리 담당자 출산휴가 대체인력
var contentString32 = [
  '<div class="iw_inner">',
  '   <h3>노인일자리 담당자 출산휴가 대체인력</h3>',
  '   <p>광주광역시 남구 백운동 644-32<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker32 = new naver.maps.Marker({
  map: map,
  position: a32
});
var infowindow = new naver.maps.InfoWindow({
  content: contentString32
});
naver.maps.Event.addListener(marker32, "click", function(e) {
  if (infowindow32.getMap()) {
      infowindow32.close();
  } else {
      infowindow32.open(map, marker32);
  }
});


var a33 = new naver.maps.LatLng(37.50588434160274, 127.1097009208508);
var marker_33 = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.50588434160274, 127.1097009208508),
  map: map
}); // 송파시니어클럽 2022년도 노인일자리담당자 공개...
var contentString33 = [
  '<div class="iw_inner">',
  '   <h3>송파시니어클럽 2022년도 노인일자리담당자 공개</h3>',
  '   <p>서울특별시 송파구 송파1동 백제고분로42길 5<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker33 = new naver.maps.Marker({
  map: map,
  position: a33
});
var infowindow = new naver.maps.InfoWindow({
  content: contentString33
});
naver.maps.Event.addListener(marker33, "click", function(e) {
  if (infowindow33.getMap()) {
      infowindow33.close();
  } else {
      infowindow33.open(map, marker33);
  }
});



var a34 = new naver.maps.LatLng(35.80226667035914, 127.12338782144631);
var marker_34 = new naver.maps.Marker({
  position: new naver.maps.LatLng(35.80226667035914, 127.12338782144631),
  map: map
}); // 양지노인복지관 노인일자리 담당자 채용 공고
var contentString34 = [
  '<div class="iw_inner">',
  '   <h4>양지노인복지관 노인일자리 담당자 채용 공고</h4>',
  '   <p>전라북도 전주시 완산구 효자동1가 567-1<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker34 = new naver.maps.Marker({
  map: map,
  position: a34
});
var infowindow34 = new naver.maps.InfoWindow({
  content: contentString34
});
naver.maps.Event.addListener(marker34, "click", function(e) {
  if (infowindow34.getMap()) {
      infowindow34.close();
  } else {
      infowindow34.open(map, marker34);
  }
});



var a35 = new naver.maps.LatLng(36.81768746743486, 127.15254029533422);
var marker_35 = new naver.maps.Marker({
  position: new naver.maps.LatLng(36.81768746743486, 127.15254029533422),
  map: map
}); // 대한노인회천안시지회- 노인일자리 및 노인사회활동지원사업 직원
var contentString35 = [
  '<div class="iw_inner">',
  '   <h4>대한노인회천안시지회- 노인일자리 및 노인사회활동지원사업 직원</h4>',
  '   <p>충청남도 천안시 동남구 신안동 370-6<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker35 = new naver.maps.Marker({
  map: map,
  position: a35
});
var infowindow35 = new naver.maps.InfoWindow({
  content: contentString35
});
naver.maps.Event.addListener(marker35, "click", function(e) {
  if (infowindow35.getMap()) {
      infowindow35.close();
  } else {
      infowindow35.open(map, marker35);
  }
});



var a36 = new naver.maps.LatLng(37.00437345700927, 127.27503631607368);
var marker_36 = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.00437345700927, 127.27503631607368),
  map: map
}); // 노인일자리 및 사회활동 지원사업 전담인력 구인
var contentString36 = [
  '<div class="iw_inner">',
  '   <h4>노인일자리 및 사회활동 지원사업 전담인력 구인</h4>',
  '   <p>경기도 안성시 장기로 109<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker36 = new naver.maps.Marker({
  map: map,
  position: a36
});
var infowindow36 = new naver.maps.InfoWindow({
  content: contentString36
});
naver.maps.Event.addListener(marker36, "click", function(e) {
  if (infowindow36.getMap()) {
      infowindow36.close();
  } else {
      infowindow36.open(map, marker36);
  }
});



var a37 = new naver.maps.LatLng(37.47438493192315, 126.62167485253671);
var marker_37 = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.47438493192315, 126.62167485253671),
  map: map
}); // 년 인천광역시 중구 노인일자리 및 사회활동지원사업 전담인력 채용
var contentString37 = [
  '<div class="iw_inner">',
  '   <h4>2022년 인천광역시 중구 노인일자리 및 사회활동지원사업 전담인력 채용</h4>',
  '   <p>인천광역시 중구 신포로27번길 80<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker37 = new naver.maps.Marker({
  map: map,
  position: a37
});
var infowindow37 = new naver.maps.InfoWindow({
  content: contentString37
});
naver.maps.Event.addListener(marker37, "click", function(e) {
  if (infowindow37.getMap()) {
      infowindow37.close();
  } else {
      infowindow37.open(map, marker37);
  }
});



var a38 = new naver.maps.LatLng(37.387679849532795, 126.74230648066055);
var marker_38 = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.387679849532795, 126.74230648066055),
  map: map
}); // 시흥실버인력뱅크 2022년 노인 일자리 및 사회활동 지원사업 담당자
var contentString38 = [
  '<div class="iw_inner">',
  '   <h4>시흥실버인력뱅크 2022년 노인 일자리 및 사회활동 지원사업 담당자</h4>',
  '   <p>경기도 시흥시 월곶중앙로30번길 4 KR 행복요양원 주영프라자빌딩 4층<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker38 = new naver.maps.Marker({
  map: map,
  position: a38
});
var infowindow38 = new naver.maps.InfoWindow({
  content: contentString38
});
naver.maps.Event.addListener(marker38, "click", function(e) {
  if (infowindow38.getMap()) {
      infowindow38.close();
  } else {
      infowindow38.open(map, marker38);
  }
});


var a39 = new naver.maps.LatLng(37.47438493192315, 126.62167485253671);
var marker_39 = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.47438493192315, 126.62167485253671),
  map: map
}); // 광주동구시니어클럽 노인일자리 담당자 공개채용 공고
var contentString39 = [
  '<div class="iw_inner">',
  '   <h4>광주동구시니어클럽 노인일자리 담당자 공개채용 공고</h4>',
  '   <p>인천광역시 중구 신포로27번길 80<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker39 = new naver.maps.Marker({
  map: map,
  position: a39
});
var infowindow39 = new naver.maps.InfoWindow({
  content: contentString39
});
naver.maps.Event.addListener(marker39, "click", function(e) {
  if (infowindow39.getMap()) {
      infowindow39.close();
  } else {
      infowindow39.open(map, marker39);
  }
});



var a40 = new naver.maps.LatLng(37.540816810374416, 126.94393684463088);
var marker_40 = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.540816810374416, 126.94393684463088),
  map: map
}); // [중부여성발전센터 ] 노인일자리 및 사회활동 지원사업 전담인력 (1명)
var contentString40 = [
  '<div class="iw_inner">',
  '   <h4>[중부여성발전센터 ] 노인일자리 및 사회활동 지원사업 전담인력 (1명)</h4>',
  '   <p>서울특별시 마포구 토정로35길 17<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker40 = new naver.maps.Marker({
  map: map,
  position: a40
});
var infowindow40 = new naver.maps.InfoWindow({
  content: contentString40
});
naver.maps.Event.addListener(marker40, "click", function(e) {
  if (infowindow40.getMap()) {
      infowindow40.close();
  } else {
      infowindow40.open(map, marker40);
  }
});



var a41 = new naver.maps.LatLng(36.599488074181245, 127.39778729399447);
var marker_41 = new naver.maps.Marker({
  position: new naver.maps.LatLng(36.599488074181245, 127.39778729399447),
  map: map
}); // 서청주노인요양원 간호사 모집
var contentString41 = [
  '<div class="iw_inner">',
  '   <h3>서청주노인요양원 간호사 모집</h3>',
  '   <p>충청북도 청주시 흥덕구 현암동 47-13<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker41 = new naver.maps.Marker({
  map: map,
  position: a41
});
var infowindow41 = new naver.maps.InfoWindow({
  content: contentString41
});
naver.maps.Event.addListener(marker41, "click", function(e) {
  if (infowindow41.getMap()) {
      infowindow41.close();
  } else {
      infowindow41.open(map, marker41);
  }
});


var a42 = new naver.maps.LatLng(35.15407822522917, 129.06364207252005);
var marker_42 = new naver.maps.Marker({
  position: new naver.maps.LatLng(35.15407822522917, 129.06364207252005),
  map: map
}); // 2022년 노인일자리사업 담당자
var contentString42 = [
  '<div class="iw_inner">',
  '   <h3>2022년 노인일자리사업 담당자</h3>',
  '   <p>부산광역시 부산진구 전포1동 691-4<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker42 = new naver.maps.Marker({
  map: map,
  position: a42
});
var infowindow42 = new naver.maps.InfoWindow({
  content: contentString42
});
naver.maps.Event.addListener(marker42, "click", function(e) {
  if (infowindow42.getMap()) {
      infowindow42.close();
  } else {
      infowindow42.open(map, marker42);
  }
});



var a43 = new naver.maps.LatLng(37.54883414394565, 126.93222173688349);
var marker_43 = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.54883414394565, 126.93222173688349),
  map: map
}); // 공고 제 -호 시립마포노인종합복지관 노인일자리 및 사회활동 담당자 채용공고
var contentString43 = [
  '<div class="iw_inner">',
  '   <h4>공고 제 -호 시립마포노인종합복지관 노인일자리 및 사회활동 담당자 채용공고</h4>',
  '   <p>서울특별시 마포구 창전동 140<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker43 = new naver.maps.Marker({
  map: map,
  position: a43
});
var infowindow43 = new naver.maps.InfoWindow({
  content: contentString43
});
naver.maps.Event.addListener(marker43, "click", function(e) {
  if (infowindow43.getMap()) {
      infowindow43.close();
  } else {
      infowindow43.open(map, marker43);
  }
});




var a44 = new naver.maps.LatLng(35.14559358300219, 126.87359268690707);
var marker_44 = new naver.maps.Marker({
  position: new naver.maps.LatLng(35.14559358300219, 126.87359268690707),
  map: map
}); // 빛고을노인건강타운 기간제근로자공개채용 공고
var contentString44 = [
  '<div class="iw_inner">',
  '   <h3>빛고을노인건강타운 기간제근로자공개채용 공고</h3>',
  '   <p>광주광역시 서구 화정로 149 1층<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker44 = new naver.maps.Marker({
  map: map,
  position: a44
});
var infowindow44 = new naver.maps.InfoWindow({
  content: contentString44
});
naver.maps.Event.addListener(marker44, "click", function(e) {
  if (infowindow44.getMap()) {
      infowindow44.close();
  } else {
      infowindow44.open(map, marker44);
  }
});



var a45 = new naver.maps.LatLng(37.47438493192315, 126.62167485253671);
var marker_45 = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.47438493192315, 126.62167485253671),
  map: map
}); // 재가요양보호사
var contentString45 = [
  '<div class="iw_inner">',
  '   <h3>재가요양보호사</h3>',
  '   <p>인천광역시 중구 신포로27번길 80<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker45 = new naver.maps.Marker({
  map: map,
  position: a45
});
var infowindow45 = new naver.maps.InfoWindow({
  content: contentString45
});
naver.maps.Event.addListener(marker45, "click", function(e) {
  if (infowindow45.getMap()) {
      infowindow45.close();
  } else {
      infowindow45.open(map, marker45);
  }
});



var a46 = new naver.maps.LatLng(35.21085247633723, 129.1218688222984);
var marker_46 = new naver.maps.Marker({
  position: new naver.maps.LatLng(35.21085247633723, 129.1218688222984),
  map: map
}); // 해운대구장애인복지관 년 노인사회활동 지원사업 전담인력 채용 공고
var contentString46 = [
  '<div class="iw_inner">',
  '   <h4>해운대구장애인복지관 년 노인사회활동 지원사업 전담인력 채용 공고</h4>',
  '   <p>부산광역시 해운대구 반여동 선수촌로207번길 81<br>',
  '       <a href="http://www.seoul.go.kr" target="_blank">지원</a>',
  '         <a href="#" target="_blank">신고</a>',
  '   </p>',
  '</div>'
].join('');
var marker46 = new naver.maps.Marker({
  map: map,
  position: a46
});
var infowindow46 = new naver.maps.InfoWindow({
  content: contentString46
});
naver.maps.Event.addListener(marker46, "click", function(e) {
  if (infowindow46.getMap()) {
      infowindow46.close();
  } else {
      infowindow46.open(map, marker46);
  }
});




