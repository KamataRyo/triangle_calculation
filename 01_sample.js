
var n=1000;　　　　　　　　//辺の長さ１～１０００

//もとの回答（関数化だけしました）
var f0 =function(n){
var as=0;　　　　　　　　　//できた三角形の数初期値


for(var x=1; x<=n; x++){   //for文でx,y,zをそれぞれ１０００まで代入
for(var y=1; y<=n; y++){
	if(y<=x){　　　　　//このifでxを一番長い辺として固定し、重複を防ぐ役割。
for(var z=1; z<=n; z++){
	if(z+y>x){　　　　 //三角形ができる定義。
	if(z<=y){          //zとyの長さを入れ替えただけでできる三角形の除外
		as++;
}
}
}
}
}
}
//console.log(as);
document.write(as);
};

//****以下鎌田追加****

// (1)
// a,b,c全てを総当たりで解析するパターン
// 計算量:O(n3)
var f3 = function(n){
	var isTriangle = false;
	var result = 0;
	for (var a = 1; a < n + 1 ; a++) {
	for (var b = a; b < n + 1 ; b++) {
	for (var c = b; c < n + 1 ; c++) {
		// 三角形成立を判定
		isTriangle =(a + b > c) && (b + c > a) && (c + a > b);
		if (isTriangle) {result++};
	};
	};
	};
	document.write(result);
};

// (2)
// a,bのみを解析するパターン
// 計算量:O(n2)
var f2 = function(n){
	var result = 0;
	var diff = 0;
	var upper = 0;
	var lower = 0;
	for (var a = 1; a < n + 1 ; a++) {
	for (var b = a; b < n + 1 ; b++) {
		// 辺a,bは条件{a <= b}の下で自由に与えてよい。
		// 残りのcの長さだけで、三角形ができるかどうかが決まる。
		//
		// また、cの取りうる値の範囲は次の条件で決まる。
		// b - a < c < a + b (1)のコードのisTriangleを変形して導出
		// b <= c, c <= n     前提条件
		//
		// 整数cの個数は、(最大値 - 最小値 + 1)で求められる。
		// これを実装すればよい。
		upper = Math.min(n,(a + b - 1)); //最大値を算出
		lower = Math.max(b,(b - a + 1)); //最小値を算出。なお、b>=aだから、 実は、'lower = b'でよい;
		diff = upper - lower + 1;
		result += diff;
	};
	};	
	document.write(result);
};